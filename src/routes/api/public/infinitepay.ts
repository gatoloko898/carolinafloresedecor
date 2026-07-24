import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const Route = createFileRoute("/api/public/infinitepay")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS }),
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { handle, order_nsu, items } = body ?? {};

          if (!handle || !order_nsu || !Array.isArray(items) || items.length === 0) {
            return new Response(
              JSON.stringify({ error: "Parâmetros inválidos: handle, order_nsu e items são obrigatórios." }),
              { status: 400, headers: { "Content-Type": "application/json", ...CORS } },
            );
          }

          for (const it of items) {
            if (!it?.name || !it?.description || typeof it?.price !== "number" || typeof it?.quantity !== "number") {
              return new Response(
                JSON.stringify({ error: "Cada item precisa de name, description, price (centavos) e quantity." }),
                { status: 400, headers: { "Content-Type": "application/json", ...CORS } },
              );
            }
          }

          const res = await fetch("https://api.checkout.infinitepay.io/links", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ handle, order_nsu, items }),
          });

          const text = await res.text();
          let data: any;
          try {
            data = JSON.parse(text);
          } catch {
            data = { raw: text };
          }

          if (!res.ok) {
            return new Response(
              JSON.stringify({ error: data?.message || "Falha ao gerar link de pagamento", details: data }),
              { status: res.status, headers: { "Content-Type": "application/json", ...CORS } },
            );
          }

          return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json", ...CORS },
          });
        } catch (err: any) {
          return new Response(
            JSON.stringify({ error: err?.message || "Erro interno" }),
            { status: 500, headers: { "Content-Type": "application/json", ...CORS } },
          );
        }
      },
    },
  },
});
