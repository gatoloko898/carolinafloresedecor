import rosesPink from "@/assets/real-roses-pink.webp";
import rosesRed from "@/assets/real-roses-red.webp";
import rosesClassic from "@/assets/real-roses-classic.webp";
import rosesRustic from "@/assets/real-roses-rustic.webp";
import arrChoc from "@/assets/real-arrangement-chocolate.webp";
import arrBucket from "@/assets/real-arrangement-bucket.webp";
import sunflowersBow from "@/assets/real-sunflowers-bow.webp";
import sunflowersBlue from "@/assets/real-sunflowers-blue.webp";
import chocoFerrero from "@/assets/choco-ferrero.webp";
import chocoKinder from "@/assets/choco-kinder-bueno.webp";
import chocoHersheysDark from "@/assets/choco-hersheys-dark.webp";
import chocoHersheysOvo from "@/assets/choco-hersheys-ovomaltine.webp";
import chocoMilka from "@/assets/choco-milka.webp";
import chocoAmandita from "@/assets/choco-amandita.webp";
import cesta1 from "@/assets/cesta-1.webp";
import cesta2 from "@/assets/cesta-2.webp";
import cesta3 from "@/assets/cesta-3.webp";
import cesta4 from "@/assets/cesta-4.webp";
import cesta5 from "@/assets/cesta-5.webp";
import cesta6 from "@/assets/cesta-6.webp";
import cesta7 from "@/assets/cesta-7.webp";
import pelucia1 from "@/assets/pelucia-1.webp";
import pelucia2 from "@/assets/pelucia-2.webp";
import pelucia3 from "@/assets/pelucia-3.webp";
import pelucia4 from "@/assets/pelucia-4.webp";
import pelucia5 from "@/assets/pelucia-5.webp";
import pelucia6 from "@/assets/pelucia-6.webp";
import pelucia7 from "@/assets/pelucia-7.webp";
import pelucia8 from "@/assets/pelucia-8.webp";
import pelucia9 from "@/assets/pelucia-9.webp";
import pelucia10 from "@/assets/pelucia-10.webp";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

type Product = { id: string; img: string; name: string; tag?: string };

const buques: Product[] = [
  { id: "buq-1", img: rosesPink, name: "Buquê Rosa Encanto", tag: "Mais pedido" },
  { id: "buq-2", img: rosesRed, name: "Buquê Paixão Vermelha" },
  { id: "buq-3", img: rosesClassic, name: "Clássico Romance" },
  { id: "buq-4", img: rosesRustic, name: "Rústico Apaixonado" },
  { id: "buq-5", img: arrBucket, name: "Balde Encanto Floral" },
  { id: "buq-6", img: sunflowersBow, name: "Girassóis com Amor" },
  { id: "buq-7", img: sunflowersBlue, name: "Sol & Céu Azul" },
  { id: "buq-8", img: arrChoc, name: "Arranjo com Chocolates", tag: "Combo" },
];

const chocolates: Product[] = [
  { id: "cho-1", img: chocoFerrero, name: "Ferrero Rocher", tag: "Premium" },
  { id: "cho-2", img: chocoKinder, name: "Kinder Bueno" },
  { id: "cho-3", img: chocoHersheysDark, name: "Hershey's Special Dark" },
  { id: "cho-4", img: chocoHersheysOvo, name: "Hershey's Ovomaltine" },
  { id: "cho-5", img: chocoMilka, name: "Milka Choco Moo" },
  { id: "cho-6", img: chocoAmandita, name: "Amandita Creme com Cacau" },
];

const cestas: Product[] = [
  { id: "ces-1", img: cesta1, name: "Cesta Eu Amo Você" },
  { id: "ces-2", img: cesta2, name: "Cesta Manhã Apaixonada", tag: "Bestseller" },
  { id: "ces-3", img: cesta3, name: "Cesta Felicidade Especial" },
  { id: "ces-4", img: cesta4, name: "Cesta Com Amor" },
  { id: "ces-5", img: cesta5, name: "Cesta Aprecie os Detalhes" },
  { id: "ces-6", img: cesta6, name: "Cesta Doce Encontro" },
  { id: "ces-7", img: cesta7, name: "Cesta Gratidão" },
];

const pelucias: Product[] = [
  { id: "pel-1", img: pelucia1, name: "Urso Rosé Laço" },
  { id: "pel-2", img: pelucia2, name: "Urso Gigante Bege", tag: "Gigante" },
  { id: "pel-3", img: pelucia3, name: "Capivara Fofa" },
  { id: "pel-4", img: pelucia4, name: "Urso Te Amo" },
  { id: "pel-5", img: pelucia5, name: "Urso Meu Amor Marfim" },
  { id: "pel-6", img: pelucia6, name: "Urso Ninho de Felicidade" },
  { id: "pel-7", img: pelucia7, name: "Urso Eu Te Amo Coração" },
  { id: "pel-8", img: pelucia8, name: "Urso Cestinha do Amor" },
  { id: "pel-9", img: pelucia9, name: "Urso Beijoqueiro" },
  { id: "pel-10", img: pelucia10, name: "Cachorrinho Lacinho" },
];

function Card({ p }: { p: Product }) {
  const { add } = useCart();
  return (
    <div className="group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-blush/40">
      <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-blush via-cream to-background">
        <img src={p.img} alt={p.name} loading="lazy" decoding="async" width={600} height={750} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
      {p.tag && (
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-gold/95 text-white px-3 py-1 rounded-full shadow-soft">
          {p.tag}
        </span>
      )}
      <div className="p-5 text-center">
        <h3 className="text-base font-medium text-foreground tracking-wide">{p.name}</h3>
        <button
          onClick={() => add({ id: p.id, name: p.name, img: p.img })}
          className="mt-4 inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest rounded-full bg-rose-deep text-white px-5 py-2.5 hover:bg-rose-deep/90 transition-colors"
        >
          <ShoppingBag className="h-4 w-4" />
          Adicionar
        </button>
      </div>
    </div>
  );
}

function Category({ id, kicker, title, accent, items }: { id: string; kicker: string; title: string; accent: string; items: Product[] }) {
  return (
    <section id={id} className="py-20" style={{ contentVisibility: "auto", containIntrinsicSize: "1200px" }}>
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
          {items.map((p) => <Card key={p.id} p={p} />)}
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
