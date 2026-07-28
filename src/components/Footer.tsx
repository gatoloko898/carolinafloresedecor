import { Flower2, Heart, MessageCircle, MapPin, Shield, Cookie, Users, Briefcase } from "lucide-react";

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

const columns = [
  {
    title: "A Carolina",
    links: [
      { label: "Quem Somos", href: "#sobre", icon: Users },
      { label: "Corporativo", href: "#", icon: Briefcase },
    ],
  },
  {
    title: "Privacidade",
    links: [
      { label: "Política de Privacidade", href: "#", icon: Shield },
      { label: "Política de Cookies", href: "#", icon: Cookie },
    ],
  },
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
            {maisProcurados.map((label) => (
              <li key={label}>
                <a
                  href="#produtos"
                  className="text-xs uppercase tracking-wider text-background/70 hover:text-rose-deep transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <Flower2 className="h-6 w-6 text-rose-deep" />
              <span className="font-script text-2xl text-rose-deep">Carolina Flores</span>
            </a>
            <p className="mt-4 text-sm text-background/70 leading-relaxed max-w-xs">
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

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-serif text-lg text-background mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-sm text-background/70 hover:text-rose-deep transition-colors"
                    >
                      <l.icon className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                      <span>{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/60">
          <p>© {new Date().getFullYear()} Carolina Flores & Decor — Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Feito com <Heart className="h-3.5 w-3.5 text-rose-deep fill-rose-deep" /> em Vargem Grande do Sul
          </p>
        </div>
      </div>
    </footer>
  );
}
