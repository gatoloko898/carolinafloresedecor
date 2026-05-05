import roses from "@/assets/product-roses.jpg";
import arrangement from "@/assets/product-arrangement.jpg";
import chocolate from "@/assets/product-chocolate.jpg";
import occasions from "@/assets/product-occasions.jpg";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const products = [
  { img: roses, emoji: "🌹", name: "Buquê de Rosas Encanto", category: "Buquês de Rosas", price: "R$ 149,90" },
  { img: arrangement, emoji: "🌻", name: "Arranjo Sol & Campo", category: "Arranjos Especiais", price: "R$ 189,90" },
  { img: chocolate, emoji: "🎁", name: "Kit Doce Surpresa", category: "Kits com Chocolate", price: "R$ 219,90" },
  { img: occasions, emoji: "💐", name: "Buquê Eterno Romance", category: "Flores para Ocasiões", price: "R$ 179,90" },
];

export function Products() {
  return (
    <section id="produtos" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="font-script text-2xl text-gold">nossa coleção</p>
          <h2 className="text-4xl md:text-5xl font-light mt-2">
            Buquês feitos para <span className="font-script text-rose-deep">emocionar</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.name} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all hover:-translate-y-2">
              <div className="aspect-square overflow-hidden bg-blush">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-gold">{p.emoji} {p.category}</p>
                <h3 className="mt-2 text-lg font-medium text-foreground">{p.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-rose-deep font-semibold text-lg">{p.price}</span>
                  <a
                    href={`${WHATSAPP_URL}%20-%20${encodeURIComponent(p.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs rounded-full bg-rose-deep text-white px-4 py-2 hover:bg-foreground transition-colors"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
