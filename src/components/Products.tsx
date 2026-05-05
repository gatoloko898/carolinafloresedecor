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
import cesta1 from "@/assets/cesta-1.png";
import cesta2 from "@/assets/cesta-2.png";
import cesta3 from "@/assets/cesta-3.png";
import cesta4 from "@/assets/cesta-4.png";
import cesta5 from "@/assets/cesta-5.png";
import cesta6 from "@/assets/cesta-6.png";
import cesta7 from "@/assets/cesta-7.png";
import pelucia1 from "@/assets/pelucia-1.png";
import pelucia2 from "@/assets/pelucia-2.png";
import pelucia3 from "@/assets/pelucia-3.png";
import pelucia4 from "@/assets/pelucia-4.png";
import pelucia5 from "@/assets/pelucia-5.png";
import pelucia6 from "@/assets/pelucia-6.png";
import pelucia7 from "@/assets/pelucia-7.png";
import pelucia8 from "@/assets/pelucia-8.png";
import pelucia9 from "@/assets/pelucia-9.png";
import pelucia10 from "@/assets/pelucia-10.png";
import { WHATSAPP_URL } from "./WhatsAppFloat";

type Product = { img: string; name: string; tag?: string };

const buques: Product[] = [
  { img: rosesPink, name: "Buquê Rosa Encanto", tag: "Mais pedido" },
  { img: rosesRed, name: "Buquê Paixão Vermelha" },
  { img: rosesClassic, name: "Clássico Romance" },
  { img: rosesRustic, name: "Rústico Apaixonado" },
  { img: arrBucket, name: "Balde Encanto Floral" },
  { img: sunflowersBow, name: "Girassóis com Amor" },
  { img: sunflowersBlue, name: "Sol & Céu Azul" },
  { img: arrChoc, name: "Arranjo com Chocolates", tag: "Combo" },
];

const chocolates: Product[] = [
  { img: chocoFerrero, name: "Ferrero Rocher", tag: "Premium" },
  { img: chocoKinder, name: "Kinder Bueno" },
  { img: chocoHersheysDark, name: "Hershey's Special Dark" },
  { img: chocoHersheysOvo, name: "Hershey's Ovomaltine" },
  { img: chocoMilka, name: "Milka Choco Moo" },
  { img: chocoAmandita, name: "Amandita Creme com Cacau" },
];

const cestas: Product[] = [
  { img: cesta1, name: "Cesta Eu Amo Você" },
  { img: cesta2, name: "Cesta Manhã Apaixonada", tag: "Bestseller" },
  { img: cesta3, name: "Cesta Felicidade Especial" },
  { img: cesta4, name: "Cesta Com Amor" },
  { img: cesta5, name: "Cesta Aprecie os Detalhes" },
  { img: cesta6, name: "Cesta Doce Encontro" },
  { img: cesta7, name: "Cesta Gratidão" },
];

const pelucias: Product[] = [
  { img: pelucia1, name: "Urso Rosé Laço" },
  { img: pelucia2, name: "Urso Gigante Bege", tag: "Gigante" },
  { img: pelucia3, name: "Capivara Fofa" },
  { img: pelucia4, name: "Urso Te Amo" },
  { img: pelucia5, name: "Urso Meu Amor Marfim" },
  { img: pelucia6, name: "Urso Ninho de Felicidade" },
  { img: pelucia7, name: "Urso Eu Te Amo Coração" },
  { img: pelucia8, name: "Urso Cestinha do Amor" },
  { img: pelucia9, name: "Urso Beijoqueiro" },
  { img: pelucia10, name: "Cachorrinho Lacinho" },
];

function Card({ p }: { p: Product }) {
  return (
    <div className="group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-blush/40">
      <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-blush via-cream to-background">
        <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
      {p.tag && (
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-gold/95 text-white px-3 py-1 rounded-full shadow-soft">
          {p.tag}
        </span>
      )}
      <div className="p-5 text-center">
        <h3 className="text-base font-medium text-foreground tracking-wide">{p.name}</h3>
        <a
          href={`${WHATSAPP_URL}%20-%20${encodeURIComponent(p.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest rounded-full border border-rose-deep/30 text-rose-deep px-5 py-2.5 hover:bg-rose-deep hover:text-white transition-colors"
        >
          Pedir no WhatsApp
        </a>
      </div>
    </div>
  );
}

function Category({ id, kicker, title, accent, items }: { id: string; kicker: string; title: string; accent: string; items: Product[] }) {
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <p className="font-script text-2xl text-gold">{kicker}</p>
            <h2 className="text-3xl md:text-5xl font-light mt-1">
              {title} <span className="font-script text-rose-deep">{accent}</span>
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent ml-8" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((p) => <Card key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <div id="produtos">
      <Category id="buques" kicker="buquês & arranjos" title="Flores que" accent="emocionam" items={buques} />
      <div className="bg-blush/30">
        <Category id="cestas" kicker="cestas exclusivas" title="Café da manhã" accent="apaixonado" items={cestas} />
      </div>
      <Category id="chocolates" kicker="doçura na medida certa" title="Chocolates" accent="finos" items={chocolates} />
      <div className="bg-blush/30">
        <Category id="pelucias" kicker="abraços de pelúcia" title="Ursinhos & " accent="fofuras" items={pelucias} />
      </div>
    </div>
  );
}
