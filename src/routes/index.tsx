import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Highlights } from "@/components/Highlights";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { InstagramFloat } from "@/components/InstagramFloat";
import { CartProvider } from "@/contexts/CartContext";
import { CartDrawer } from "@/components/CartDrawer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carolina Flores & Decor — Buquês e Presentes Inesquecíveis" },
      { name: "description", content: "Floricultura premium com buquês exclusivos, arranjos especiais e entrega no mesmo dia. Transformamos sentimentos em flores." },
      { property: "og:title", content: "Carolina Flores & Decor" },
      { property: "og:description", content: "Buquês exclusivos, presentes inesquecíveis e decoração com amor." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <Highlights />
          <Testimonials />
          <Contact />
        </main>
        <footer className="py-8 text-center text-sm text-muted-foreground bg-foreground/5">
          <p className="font-script text-xl text-rose-deep">Carolina Flores & Decor</p>
          <p className="mt-1">© 2026 — Feito com 💗</p>
        </footer>
        <WhatsAppFloat />
        <InstagramFloat />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
