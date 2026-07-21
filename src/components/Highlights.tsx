import { MapPin, Truck, Clock } from "lucide-react";

const items = [
  {
    icon: MapPin,
    title: "ENTREGA RÁPIDA",
    desc: "Receba suas flores no mesmo dia — pedidos com 2h de antecedência, manhã ou tarde.",
  },
  {
    icon: Truck,
    title: "ENTREGA URBANA",
    desc: "Taxa opcional de R$ 20 no perímetro urbano. Se preferir, retire no local sem custo.",
  },
  {
    icon: Clock,
    title: "HORÁRIOS FLEXÍVEIS",
    desc: "Atendemos das 9h às 17h30 — período da manhã (9h–12h) ou tarde (12h–17h30).",
  },
];

export function Highlights() {
  return (
    <section id="destaques" className="py-10 md:py-14 bg-muted/40 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8 md:gap-4">
        {items.map((it) => (
          <div key={it.title} className="flex flex-col items-center text-center px-4">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-rose-deep/20 text-rose-deep">
              <it.icon className="h-6 w-6" strokeWidth={1.6} />
            </div>
            <h3 className="text-sm font-bold tracking-widest text-foreground">{it.title}</h3>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xs leading-relaxed">
              {it.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
