import { createFileRoute } from "@tanstack/react-router";

const formatBRL = (cents: number) =>
  (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

async function notifyWhatsApp(message: string) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const to = process.env.WHATSAPP_NOTIFY_TO;

  if (!token || !phoneId || !to) {
    console.log("[infinitepay-webhook] WhatsApp não configurado. Mensagem do pedido pago:\n" + message);
    return;
  }

  const res = await fetch(`https://graph.facebook.com/v20.0/${phoneId}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { preview_url: false, body: message },
    }),
  });
  if (!res.ok) {
    console.error("[infinitepay-webhook] falha ao enviar WhatsApp:", res.status, await res.text());
  }
}

export const Route = createFileRoute("/api/public/infinitepay-webhook")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        try {
          const expected = process.env.INFINITEPAY_WEBHOOK_TOKEN;
          if (expected) {
            const url = new URL(request.url);
            const provided = url.searchParams.get("token") ?? request.headers.get("x-webhook-token");
            if (provided !== expected) {
              return new Response("Unauthorized", { status: 401 });
            }
          }

          const payload = (await request.json().catch(() => ({}))) as any;
          const orderNsu = String(payload?.order_nsu ?? payload?.orderNsu ?? "");
          const paid =
            payload?.paid === true ||
            ["paid", "approved", "succeeded", "captured"].includes(String(payload?.status ?? "").toLowerCase()) ||
            typeof payload?.paid_amount === "number";

          if (!orderNsu) return new Response("order_nsu ausente", { status: 400 });
          if (!paid) return new Response("ok (não pago)", { status: 200 });

          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          const { data: pedido } = await supabaseAdmin
            .from("pedidos")
            .select("*")
            .eq("order_nsu", orderNsu)
            .maybeSingle();

          await supabaseAdmin
            .from("pedidos")
            .update({ status: "pago", paid_at: new Date().toISOString() })
            .eq("order_nsu", orderNsu);

          const itens = Array.isArray(pedido?.itens) ? (pedido!.itens as any[]) : [];
          const lista = itens
            .map((i) => `• ${i.name} — ${i.quantity}x — ${formatBRL(i.price * i.quantity)}`)
            .join("\n");

          const msg =
            `✅ PAGAMENTO CONFIRMADO — Carolina Flores & Decor\n\n` +
            `Pedido: ${orderNsu}\n` +
            `Cliente: ${pedido?.cliente ?? "-"}\n` +
            `Cidade/Estado: ${pedido?.cidade ?? "-"} / ${pedido?.estado ?? "-"}\n` +
            `Entrega: ${pedido?.data_entrega ?? "-"} (${pedido?.periodo ?? "-"})\n\n` +
            `Itens:\n${lista || "-"}\n\n` +
            `Total pago: ${formatBRL(pedido?.total_centavos ?? 0)}`;

          await notifyWhatsApp(msg);

          return new Response("ok", { status: 200 });
        } catch (err: any) {
          console.error("[infinitepay-webhook]", err);
          return new Response("erro", { status: 500 });
        }
      },
    },
  },
});
