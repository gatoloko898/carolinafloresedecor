import rosesPink from "@/assets/real-roses-pink.png";
import rosesRed from "@/assets/real-roses-red.webp";
import rosesClassic from "@/assets/real-roses-classic.png";
import rosesRustic from "@/assets/real-roses-rustic.png";
import arrChoc from "@/assets/real-arrangement-chocolate.png";
import arrBucket from "@/assets/real-arrangement-bucket.png";
import sunflowersBow from "@/assets/real-sunflowers-bow.png";
import sunflowersBlue from "@/assets/real-sunflowers-blue.png";
import chocoFerrero from "@/assets/choco-ferrero.png";
import chocoKinder from "@/assets/choco-kinder-bueno.png";
import chocoHersheysDark from "@/assets/choco-hersheys-dark.png";
import chocoHersheysOvo from "@/assets/choco-hersheys-ovomaltine.png";
import chocoMilka from "@/assets/choco-milka.png";
import chocoAmandita from "@/assets/choco-amandita.png";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const products = [
  { img: rosesPink, emoji: "🌹", name: "Buquê Rosa Encanto", category: "Buquês de Rosas" },
  { img: rosesRed, emoji: "❤️", name: "Buquê Paixão Vermelha", category: "Rosas Vermelhas" },
  { img: rosesClassic, emoji: "🌹", name: "Clássico Romance", category: "Buquê Clássico" },
  { img: rosesRustic, emoji: "💝", name: "Rústico Apaixonado", category: "Edição Especial" },
  { img: arrChoc, emoji: "🎁", name: "Kit Doce Surpresa", category: "Arranjo + Chocolates" },
  { img: arrBucket, emoji: "🌻", name: "Balde Encanto Floral", category: "Arranjos Especiais" },
  { img: sunflowersBow, emoji: "🌻", name: "Girassóis com Amor", category: "Buquê Girassóis" },
  { img: sunflowersBlue, emoji: "💙", name: "Sol & Céu Azul", category: "Edição Exclusiva" },
  { img: chocoFerrero, emoji: "🍫", name: "Ferrero Rocher", category: "Chocolate Premium" },
  { img: chocoKinder, emoji: "🍫", name: "Kinder Bueno", category: "Chocolate" },
  { img: chocoHersheysDark, emoji: "🍫", name: "Hershey's Special Dark", category: "Chocolate Amargo" },
  { img: chocoHersheysOvo, emoji: "🍫", name: "Hershey's Ovomaltine", category: "Chocolate" },
  { img: chocoMilka, emoji: "🍫", name: "Milka Choco Moo", category: "Chocolate" },
  { img: chocoAmandita, emoji: "🍫", name: "Amandita Creme com Cacau", category: "Bombons" },
];

export function Products() {
  return (
    <section id="produtos" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="font-script text-2xl text-gold">nossa coleção</p>
          <h2 className="text-4xl md:text-5xl font-light mt-2">
            Buquês e mimos para <span className="font-script text-rose-deep">emocionar</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.name} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all hover:-translate-y-2">
              <div className="aspect-square overflow-hidden bg-blush">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-gold">{p.emoji} {p.category}</p>
                <h3 className="mt-2 text-lg font-medium text-foreground">{p.name}</h3>
                <div className="mt-4">
                  <a
                    href={`${WHATSAPP_URL}%20-%20${encodeURIComponent(p.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-sm rounded-full bg-rose-deep text-white px-4 py-2.5 hover:bg-foreground transition-colors"
                  >
                    Pedir pelo WhatsApp
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
