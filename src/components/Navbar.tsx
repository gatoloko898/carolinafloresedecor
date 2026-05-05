import { Flower2 } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Buquês" },
  { href: "#destaques", label: "Diferenciais" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Flower2 className="h-6 w-6 text-rose-deep" />
          <span className="font-script text-2xl text-rose-deep">Carolina Flores</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/80 hover:text-rose-deep transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
