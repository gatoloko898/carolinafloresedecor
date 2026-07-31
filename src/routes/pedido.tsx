import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Clock, MessageCircle, Loader2 } from "lucide-react";

const WHATSAPP_NUMBER = "5519993639296";

type Pedido = {
  found: boolean;
  order_nsu?: string;
  cliente?: string;
  cidade?: string | null;
  estado?: string | null;
  data_entrega?: string | null;
  periodo?: string | null;
  itens?: { name: string; quantity: number; price: number }[];
  total_centavos?: number;
  status?: string;
  paid?: boolean;
};

const formatBRL = (cents: number) =>
  (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const Route = createFileRoute("/pedido")({
  head: () => ({
    meta: [
      { title: "Status do Pedido | Carolina Flores & Decor" },
      {
        name: "description",
        content:
          "Acompanhe a confirmação do pagamento do seu pedido na Carolina Flores & Decor e envie os detalhes pelo WhatsApp.",
      },
      { property: "og:title", content: "Status do Pedido | Carolina Flores & Decor" },
      {
        property: "og:description",
        content: "Confirmação de pagamento e envio do pedido pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PedidoPage,
});

function PedidoPage() {
  const [nsu, setNsu] = useState<string | null>(null);
  const [pedido, setPedido] = useState<Pedido | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("nsu");
    const stored = localStorage.getItem("carolina-last-order");
    setNsu(fromUrl || stored);
  }, []);

  useEffect(() => {
    if (!nsu) {
      setChecking(false);
      return;
    }
    let stop = false;
    const load = async () => {
      try {
        const res = await fetch(`/api/public/pedido-status?nsu=${encodeURIComponent(nsu)}`);
        const data = (await res.json()) as Pedido;
        if (!stop) setPedido(data);
      } catch {
        /* silencioso — nova tentativa no próximo ciclo */
      } finally {
        if (!stop) setChecking(false);
      }
    };
    load();
    const t = setInterval(load, 5000);
    return () => {
      stop = true;
      clearInterval(t);
    };
  }, [nsu]);

  const paid = pedido?.paid === true;

  const mensagem = () => {
    const itens = (pedido?.itens ?? [])
      .map((i) => `• ${i.name} — ${i.quantity}x — ${formatBRL(i.price * i.quantity)}`)
      .join("\n");
    return (
      `Olá! Meu pagamento foi confirmado ✅\n\n` +
      `Pedido: ${pedido?.order_nsu ?? "-"}\n` +
      `Nome: ${pedido?.cliente ?? "-"}\n` +
      `Cidade/Estado: ${pedido?.cidade ?? "-"} / ${pedido?.estado ?? "-"}\n` +
      `Data de entrega: ${pedido?.data_entrega ?? "-"} (${pedido?.periodo ?? "-"})\n\n` +
      `Itens:\n${itens || "-"}\n\n` +
      `Total pago: ${formatBRL(pedido?.total_centavos ?? 0)}`
    );
  };

  return (
    <main className="min-h-screen bg-background px-6 py-20">
      <div className="mx-auto max-w-lg rounded-3xl border border-blush/60 bg-card p-8 shadow-soft text-center">
        <h1 className="font-script text-3xl text-rose-deep">Seu pedido</h1>

        {checking && !pedido && (
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Verificando o pagamento...
          </p>
        )}

        {!nsu && !checking && (
          <p className="mt-6 text-sm text-muted-foreground">
            Não encontramos um pedido recente neste dispositivo.
          </p>
        )}

        {pedido?.found && (
          <>
            <div
              className={`mt-6 rounded-2xl p-5 ${paid ? "bg-emerald-50 text-emerald-800" : "bg-blush/40 text-foreground/80"}`}
            >
              <div className="flex items-center justify-center gap-2 font-medium">
                {paid ? <CheckCircle2 className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                {paid ? "Pagamento confirmado!" : "Aguardando confirmação do pagamento"}
              </div>
              <p className="mt-2 text-xs">
                {paid
                  ? "Agora é só enviar os detalhes para a loja pelo WhatsApp."
                  : "Assim que o pagamento for aprovado, o botão do WhatsApp será liberado automaticamente."}
              </p>
            </div>

            <div className="mt-6 space-y-1.5 text-left text-sm">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Pedido {pedido.order_nsu}
              </p>
              {(pedido.itens ?? []).map((i, idx) => (
                <div key={idx} className="flex justify-between gap-3 text-foreground/80">
                  <span className="truncate">
                    {i.quantity}x {i.name}
                  </span>
                  <span className="shrink-0">{formatBRL(i.price * i.quantity)}</span>
                </div>
              ))}
              <div className="flex justify-between border-t border-border/50 pt-2 font-semibold">
                <span>Total</span>
                <span className="text-rose-deep">{formatBRL(pedido.total_centavos ?? 0)}</span>
              </div>
            </div>

            <a
              href={paid ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem())}` : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!paid}
              className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                paid
                  ? "bg-rose-deep text-white hover:bg-rose-deep/90"
                  : "cursor-not-allowed bg-muted text-muted-foreground pointer-events-none"
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              {paid ? "Enviar pedido no WhatsApp" : "Disponível após a confirmação"}
            </a>
          </>
        )}

        {pedido && pedido.found === false && (
          <p className="mt-6 text-sm text-muted-foreground">Pedido não encontrado.</p>
        )}

        <a href="/" className="mt-6 inline-block text-xs text-rose-deep underline">
          Voltar à loja
        </a>
      </div>
    </main>
  );
}
