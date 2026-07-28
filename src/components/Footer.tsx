import { Flower2, MessageCircle, MapPin } from "lucide-react";

const maisProcurados: { label: string; href: string }[] = [
  { label: "Buquê de Rosas Vermelhas", href: "#rosas" },
  { label: "Buquê de Girassóis", href: "#girassois" },
  { label: "Cesta de Café da Manhã", href: "#cestas" },
  { label: "Arranjo de Flores do Campo", href: "#flores-campo" },
  { label: "Kit Apaixonados com Ferrero Rocher", href: "#kits" },
  { label: "Pelúcias Personalizadas", href: "#pelucias" },
  { label: "Coroa de Flores", href: "#coroas" },
  { label: "Orquídeas Exclusivas", href: "#orquideas" },
  { label: "Vasos & Caixas", href: "#vasos-caixas" },
  { label: "Canecas Personalizadas", href: "#canecas" },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-foreground text-background/90">
      {/* Mais Procurados */}
      <div className="border-b border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h3 className="text-xs font-bold tracking-[0.2em] text-background/70 mb-5">
            MAIS PROCURADOS
          </h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {maisProcurados.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-xs uppercase tracking-wider text-background/70 hover:text-rose-deep transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Informações */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center text-center">
          <a href="#" className="flex items-center gap-2">
            <Flower2 className="h-6 w-6 text-rose-deep" />
            <span className="font-script text-2xl text-rose-deep">Carolina Flores</span>
          </a>
          <p className="mt-4 text-sm text-background/70 leading-relaxed max-w-md">
            Buquês exclusivos, cestas e presentes inesquecíveis, feitos com carinho para transformar sentimentos em Flores.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Avenida+da+Saudade+121+Vila+Santana+Vargem+Grande+do+Sul+SP"
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex items-start gap-2 text-sm text-background/70 hover:text-rose-deep transition-colors"
          >
            <MapPin className="h-4 w-4 mt-0.5 text-rose-deep shrink-0" />
            <span>
              Av. da Saudade, 121 — Vila Santana<br />
              Vargem Grande do Sul — SP, 13884-266
            </span>
          </a>
          <a
            href="https://wa.me/5519993639296"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-rose-deep/20 text-rose-deep hover:bg-rose-deep hover:text-white transition-colors px-4 py-2 text-sm font-semibold"
          >
            <MessageCircle className="h-4 w-4" />
            (19) 99363-9296
          </a>
        </div>
      </div>
    </footer>
  );
}
