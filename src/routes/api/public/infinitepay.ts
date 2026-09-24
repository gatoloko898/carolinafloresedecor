import { createFileRoute } from "@tanstack/react-router";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...CORS },
  });

export const Route = createFileRoute("/api/public/infinitepay")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS }),
      POST: async ({ request }: { request: Request }) => {
        try {
          const body = (await request.json()) as any;
          const { handle, order_nsu, items, customer, redirect_url } = body ?? {};
          const webhookToken = process.env.INFINITEPAY_WEBHOOK_TOKEN;
          const webhookUrl = new URL("/api/public/infinitepay-webhook", request.url);
          if (webhookToken) webhookUrl.searchParams.set("token", webhookToken);

          if (!handle || !order_nsu || !Array.isArray(items) || items.length === 0) {
            return json({ error: "Parâmetros inválidos: handle, order_nsu e items são obrigatórios." }, 400);
          }

          for (const it of items) {
            if (!it?.name || !it?.description || typeof it?.price !== "number" || typeof it?.quantity !== "number") {
              return json({ error: "Cada item precisa de name, description, price (centavos) e quantity." }, 400);
            }
          }

          const res = await fetch("https://api.checkout.infinitepay.io/links", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              handle,
              order_nsu,
              items,
              webhook_url: webhookUrl.toString(),
              ...(typeof redirect_url === "string" && redirect_url.startsWith("http")
                ? { redirect_url }
                : {}),
            }),
          });

          const text = await res.text();
          let data: any;
          try {
            data = JSON.parse(text);
          } catch {
            data = { raw: text };
          }

          if (!res.ok) {
            return json({ error: data?.message || "Falha ao gerar link de pagamento", details: data }, res.status);
          }

          // Registra o pedido para que o webhook possa avisar a loja quando for pago
          try {
            const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
            const total = items.reduce((s: number, i: any) => s + i.price * i.quantity, 0);
            await supabaseAdmin.from("pedidos").upsert(
              {
                order_nsu: String(order_nsu),
                cliente: String(customer?.nome ?? "Cliente"),
                cidade: customer?.cidade ?? null,
                estado: customer?.estado ?? null,
                data_entrega: customer?.data ?? null,
                periodo: customer?.periodo ?? null,
                itens: items,
                total_centavos: total,
                status: "pendente",
                payment_url: data?.url ?? null,
              },
              { onConflict: "order_nsu" },
            );
          } catch (e) {
            console.error("[infinitepay] falha ao registrar pedido", e);
          }

          return json(data, 200);
        } catch (err: any) {
          return json({ error: err?.message || "Erro interno" }, 500);
        }
      },
    },
  },
});
