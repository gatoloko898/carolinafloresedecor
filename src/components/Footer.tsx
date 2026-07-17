import { Flower2, Heart, MessageCircle, Instagram, Shield, Cookie, RefreshCw, HeadphonesIcon, Users, Briefcase } from "lucide-react";

const columns = [
  {
    title: "Atendimento",
    links: [
      { label: "SAC", href: "#contato", icon: HeadphonesIcon },
      { label: "Devoluções e Reembolsos", href: "#", icon: RefreshCw },
    ],
  },
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
    <footer className="mt-20 bg-gradient-to-b from-background to-blush/40 border-t border-rose-deep/10">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <Flower2 className="h-6 w-6 text-rose-deep" />
              <span className="font-script text-2xl text-rose-deep">Carolina Flores</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Buquês exclusivos, cestas e presentes inesquecíveis, feitos com carinho para transformar sentimentos em flores.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://wa.me/5519993639296"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="h-10 w-10 grid place-items-center rounded-full bg-rose-deep/10 hover:bg-rose-deep hover:text-white text-rose-deep transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 grid place-items-center rounded-full bg-rose-deep/10 hover:bg-rose-deep hover:text-white text-rose-deep transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-serif text-lg text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-rose-deep transition-colors"
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

        <div className="mt-12 pt-6 border-t border-rose-deep/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Carolina Flores & Decor — Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Feito com <Heart className="h-3.5 w-3.5 text-rose-deep fill-rose-deep" /> em Vargem Grande do Sul
          </p>
        </div>
      </div>
    </footer>
  );
}
