import { Flower2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#rosas", label: "Rosas" },
  { href: "#girassois", label: "Girassóis" },
  { href: "#cestas", label: "Cestas" },
  { href: "#kits", label: "Kits" },
  { href: "#pelucias", label: "Pelúcias" },
  { href: "#coroas", label: "Coroas" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const { count, setOpen } = useCart();
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
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
      </div>
    </header>
  );
}
