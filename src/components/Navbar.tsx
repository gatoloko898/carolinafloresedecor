import { Flower2, ShoppingBag, Search, MapPin, HelpCircle, ChevronDown, Menu } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const categories = [
  { href: "#rosas", label: "Rosas" },
  { href: "#girassois", label: "Girassóis" },
  { href: "#cestas", label: "Cestas" },
  { href: "#kits", label: "Kits Apaixonados" },
  { href: "#pelucias", label: "Pelúcias" },
  { href: "#coroas", label: "Coroas" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const { count, setOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md shadow-sm">
      {/* Top row: logo + search + delivery + help + cart */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 md:py-4 flex items-center gap-3 md:gap-6">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Flower2 className="h-7 w-7 text-rose-deep" />
          <span className="font-script text-2xl md:text-3xl text-rose-deep leading-none">Carolina Flores</span>
        </a>

        <div className="hidden md:flex flex-1 items-center gap-3 max-w-2xl mx-auto">
          <label className="flex items-center gap-2 flex-1 h-11 rounded-full border border-border/70 bg-background px-4 focus-within:border-rose-deep transition-colors">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="O que está procurando?"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
          <label className="flex items-center gap-2 flex-1 h-11 rounded-full border border-border/70 bg-background px-4 focus-within:border-rose-deep transition-colors">
            <MapPin className="h-4 w-4 text-rose-deep" />
            <input
              type="text"
              placeholder="Para onde enviar?"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
        </div>

        <div className="flex items-center gap-2 md:gap-4 ml-auto shrink-0">
          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-rose-deep transition-colors"
          >
            <HelpCircle className="h-4 w-4" />
            Ajuda
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir carrinho"
            className="relative h-10 w-10 grid place-items-center rounded-full bg-rose-deep/10 hover:bg-rose-deep/20 text-rose-deep transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 grid place-items-center text-[10px] font-bold rounded-full bg-rose-deep text-white">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden h-10 w-10 grid place-items-center rounded-full text-foreground/80 hover:text-rose-deep"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Tagline */}
      <p className="hidden md:block text-center text-xs text-muted-foreground pb-2">
        Uma floricultura feita com amor. Simples, rápida e sempre pra hoje.
      </p>

      {/* Black menu bar */}
      <nav className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ul className="hidden md:flex items-center justify-center gap-1 lg:gap-2">
            {categories.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  className="inline-flex items-center gap-1 px-3 lg:px-4 py-3 text-[11px] lg:text-xs font-semibold uppercase tracking-wider text-background/90 hover:text-rose-deep transition-colors"
                >
                  {c.label}
                  <ChevronDown className="h-3 w-3 opacity-60" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu */}
          {mobileOpen && (
            <ul className="md:hidden py-2 space-y-1">
              {categories.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-background/90 hover:text-rose-deep"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
