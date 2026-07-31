import { createFileRoute } from "@tanstack/react-router";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...CORS },
  });

export const Route = createFileRoute("/api/public/pedido-status")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS }),
      GET: async ({ request }: { request: Request }) => {
        try {
          const nsu = new URL(request.url).searchParams.get("nsu");
          if (!nsu) return json({ error: "nsu obrigatório" }, 400);

          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          const { data } = await supabaseAdmin
            .from("pedidos")
            .select("order_nsu, cliente, cidade, estado, data_entrega, periodo, itens, total_centavos, status, paid_at")
            .eq("order_nsu", nsu)
            .maybeSingle();

          if (!data) return json({ found: false }, 404);

          return json({
            found: true,
            order_nsu: data.order_nsu,
            cliente: data.cliente,
            cidade: data.cidade,
            estado: data.estado,
            data_entrega: data.data_entrega,
            periodo: data.periodo,
            itens: data.itens,
            total_centavos: data.total_centavos,
            status: data.status,
            paid: data.status === "pago",
            paid_at: data.paid_at,
          });
        } catch (err: any) {
          return json({ error: err?.message || "Erro interno" }, 500);
        }
      },
    },
  },
});
