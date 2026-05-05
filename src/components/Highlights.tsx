import { Truck, Sparkles, Heart } from "lucide-react";

const items = [
  { icon: Truck, title: "Entrega Rápida", desc: "Receba no mesmo dia em toda a cidade" },
  { icon: Sparkles, title: "Flores Frescas", desc: "Selecionadas a cada manhã, direto do produtor" },
  { icon: Heart, title: "Atendimento Personalizado", desc: "Cada pedido é tratado como único e especial" },
];

export function Highlights() {
  return (
    <section id="destaques" className="py-24 bg-gradient-to-b from-background to-blush/40">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
        {items.map((it) => (
          <div key={it.title} className="text-center p-8 rounded-2xl bg-card/60 backdrop-blur border border-border/50">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-rose">
              <it.icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-medium">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
