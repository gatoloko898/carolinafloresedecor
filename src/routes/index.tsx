import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Highlights } from "@/components/Highlights";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { PromoBar } from "@/components/PromoBar";

import { CartProvider } from "@/contexts/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carolina Flores & Decor — Buquês e Presentes Inesquecíveis" },
      { name: "description", content: "Floricultura premium com buquês exclusivos, arranjos especiais e entrega no mesmo dia. Transformamos sentimentos em Flores." },
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
        <PromoBar />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <Highlights />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
