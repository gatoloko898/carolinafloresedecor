import { createFileRoute } from "@tanstack/react-router";
import { checkoutSchema } from "@/lib/order-schema";

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
          const body = await request.json();
          const parsed = checkoutSchema.safeParse(body);
          if (!parsed.success) {
            return json({ error: parsed.error.issues[0]?.message ?? "Dados do pedido inválidos." }, 400);
          }
          const { order_nsu, items, customer, redirect_url } = parsed.data;
          const handle = "paulomello88";
          const webhookToken = process.env.INFINITEPAY_WEBHOOK_TOKEN;
          const webhookUrl = new URL("/api/public/infinitepay-webhook", request.url);
          if (webhookToken) webhookUrl.searchParams.set("token", webhookToken);

          const redirect = new URL(redirect_url);
          const requestOrigin = new URL(request.url).origin;
          if (redirect.origin !== requestOrigin) return json({ error: "Endereço de retorno inválido." }, 400);

          const res = await fetch("https://api.checkout.infinitepay.io/links", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              handle,
              order_nsu,
              items,
              webhook_url: webhookUrl.toString(),
              redirect_url,
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
                destinatario: customer.destinatario,
                endereco_entrega: customer.endereco,
                mensagem_cartao: customer.mensagemCartao || null,
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
