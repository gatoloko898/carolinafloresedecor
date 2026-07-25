import { ShoppingBag, ChevronRight } from "lucide-react";
import { useCart, formatBRL } from "@/contexts/CartContext";

// Rosas
import rosP2 from "@/assets/catalog/ros-p2.jpg";
import rosP3 from "@/assets/catalog/ros-p3.jpg";
import rosP4 from "@/assets/catalog/ros-p4.jpg";
import rosP5 from "@/assets/catalog/ros-p5.jpg";
import rosP6 from "@/assets/catalog/ros-p6.jpg";
import rosP7 from "@/assets/catalog/ros-p7.jpg";
import rosP8 from "@/assets/catalog/ros-p8.jpg";
import rosP9 from "@/assets/catalog/ros-p9.jpg";
import rosP10 from "@/assets/catalog/ros-p10.jpg";
import rosP11 from "@/assets/catalog/ros-p11.jpg";
import rosP12 from "@/assets/catalog/ros-p12.jpg";
import rosP13 from "@/assets/catalog/ros-p13.jpg";

// Girassóis
import girP2 from "@/assets/catalog/gir-p2.jpg";
import girP3 from "@/assets/catalog/gir-p3.jpg";
import girP4 from "@/assets/catalog/gir-p4.jpg";
import girP6 from "@/assets/catalog/gir-p6.jpg";
import girP7 from "@/assets/catalog/gir-p7.jpg";
import girP8 from "@/assets/catalog/gir-p8.jpg";
import girP9 from "@/assets/catalog/gir-p9.jpg";
import girP10 from "@/assets/catalog/gir-p10.jpg";
import girP11 from "@/assets/catalog/gir-p11.jpg";
import girP12 from "@/assets/catalog/gir-p12.jpg";
import girP13 from "@/assets/catalog/gir-p13.jpg";
// Flores do Campo / Cestas / Kits
import fcP3 from "@/assets/catalog/fc-p3.jpg";
import fcP6 from "@/assets/catalog/fc-p6.jpg";
import fcP7 from "@/assets/catalog/fc-p7.jpg";
import fcP9 from "@/assets/catalog/fc-p9.jpg";
import fcP11 from "@/assets/catalog/fc-p11.jpg";
import fcP12 from "@/assets/catalog/fc-p12.jpg";

import fcP14 from "@/assets/catalog/fc-p14.jpg";
import fcP15 from "@/assets/catalog/fc-p15.jpg";
import fcP16 from "@/assets/catalog/fc-p16.jpg";
import fcP19 from "@/assets/catalog/fc-p19.jpg";
import fcP20 from "@/assets/catalog/fc-p20.jpg";
import fcP21 from "@/assets/catalog/fc-p21.jpg";
import fcP22 from "@/assets/catalog/fc-p22.jpg";
// Pelúcias
import pelucia1 from "@/assets/pelucias-new/p1.png";
import pelucia2 from "@/assets/pelucias-new/p2.png";
import pelucia3 from "@/assets/pelucias-new/p3.png";
import pelucia4 from "@/assets/pelucias-new/p4.png";
import pelucia5 from "@/assets/pelucias-new/p5.png";
import pelucia6 from "@/assets/pelucias-new/p6.png";
import pelucia7 from "@/assets/pelucias-new/p7.png";
// Coroas
import coroa1 from "@/assets/coroas/c15.jpg";
import coroa2 from "@/assets/coroas/c16.jpg";
import coroa3 from "@/assets/coroas/c17.jpg";
import coroa4 from "@/assets/coroas/c18.jpg";
import coroa5 from "@/assets/coroas/c19.jpg";
import coroa6 from "@/assets/coroas/c20.jpg";
import coroa7 from "@/assets/coroas/c21.jpg";
import coroa8 from "@/assets/coroas/c22.jpg";

type Product = {
  id: string;
  img: string;
  name: string;
  price: number;
  tag?: string;
  description?: string;
};

const rosasRaw: Product[] = [
  { id: "ros-p2", img: rosP2, name: "Buquê Rosa Solitária", price: 50 },
  { id: "ros-p3", img: rosP3, name: "Buquê Duas Rosas com Pelúcia", price: 70 },
  { id: "ros-p4", img: rosP4, name: "Buquê Três Rosas", price: 100 },
  { id: "ros-p6", img: rosP6, name: "Buquê Rosas Rústico", price: 140 },
  { id: "ros-p5", img: rosP5, name: "Buquê Rosas Rosé", price: 140 },
  { id: "ros-p7", img: rosP7, name: "Buquê Cinco Rosas", price: 170 },
  { id: "ros-p8", img: rosP8, name: "Buquê Rosas Encanto Dourado", price: 180 },
  { id: "ros-p10", img: rosP10, name: "Buquê Rosas Clássico", price: 280 },
  { id: "ros-p13", img: rosP13, name: "Box de Rosas Romance", price: 289, tag: "Especial" },
  { id: "ros-p11", img: rosP11, name: "Buquê Rosas Delicado", price: 299 },
  { id: "ros-p12", img: rosP12, name: "Buquê Rosas Cristal", price: 330 },
];

const girassoisRaw: Product[] = [
  { id: "gir-p2", img: girP2, name: "Buquê Girassol Solitário", price: 40 },
  { id: "gir-p3", img: girP3, name: "Buquê Girassóis Céu Azul", price: 80 },
  { id: "gir-p4", img: girP4, name: "Buquê Girassol Estilo Jornal", price: 80 },
  { id: "gir-p8", img: girP8, name: "Buquê Girassol & Rosas Vermelhas", price: 180 },
  { id: "gir-p10", img: girP10, name: "Buquê Girassol Rústico", price: 220 },
  { id: "fc-p3", img: fcP3, name: "Buquê do Campo Encanto", price: 229 },
  { id: "gir-p11", img: girP11, name: "Buquê Girassol Tradicional", price: 250 },
  { id: "fc-p7", img: fcP7, name: "Buquê Girassóis do Campo", price: 289 },
  { id: "fc-p16", img: fcP16, name: "Buquê Multicolorido do Campo", price: 299 },
  { id: "gir-p13", img: girP13, name: "Buquê Girassol & Paixão", price: 300 },
  { id: "fc-p19", img: fcP19, name: "Buquê do Campo Laço Amarelo", price: 329 },
  { id: "gir-p9", img: girP9, name: "Buquê Girassol & Rosas Azuis", price: 329 },
  { id: "fc-p22", img: fcP22, name: "Buquê do Campo Rosa & Sol", price: 349 },
  { id: "gir-p12", img: girP12, name: "Buquê Girassol Cristal", price: 350 },
];


const cestasRaw: Product[] = [
  { id: "fc-p6", img: fcP6, name: "Cesta Box Floral", price: 229 },
  { id: "fc-p12", img: fcP12, name: "Cesta Balde Dourado", price: 279 },
  { id: "fc-p15", img: fcP15, name: "Cesta Cilindro Rosa", price: 289 },
  { id: "fc-p11", img: fcP11, name: "Cesta Chapéu Rosa", price: 299 },
];

const kitsRaw: Product[] = [
  { id: "ros-p9", img: rosP9, name: "Kit Rosas & Ferrero Rocher", price: 265, tag: "Apaixonados" },
  { id: "gir-p6", img: girP6, name: "Kit Girassóis & Ferrero", price: 279 },
  { id: "gir-p7", img: girP7, name: "Kit Vaso Girassol & Ferrero", price: 179 },
  { id: "fc-p20", img: fcP20, name: "Kit Alstroemeria & Ferrero", price: 249 },
  { id: "fc-p21", img: fcP21, name: "Kit Buquê Colorido & Ferrero", price: 359 },
  { id: "fc-p9", img: fcP9, name: "Kit Cesta Balde & Ferrero", price: 299 },
  { id: "fc-p14", img: fcP14, name: "Kit Cesta Colorida & Ferrero", price: 229 },
];

const peluciasRaw: Product[] = [
  { id: "pel-1", img: pelucia1, name: "Ursa Creme Coração Bordado", price: 150, description: "Aprox. 28 cm" },
  { id: "pel-7", img: pelucia7, name: "Panda Laço Vermelho na Caixa", price: 270, description: "Aprox. 60 cm", tag: "Exclusivo" },
  { id: "pel-2", img: pelucia2, name: "Urso Chocolate Cachecol", price: 330, description: "Aprox. 65 cm" },
  { id: "pel-5", img: pelucia5, name: "Urso Gigante Cachecol Vermelho", price: 330, description: "Aprox. 70 cm", tag: "Gigante" },
  { id: "pel-3", img: pelucia3, name: "Urso Caramelo Cachecol Chevron", price: 430, description: "Aprox. 70 cm" },
  { id: "pel-4", img: pelucia4, name: "Urso Coração de Corações", price: 480, description: "Aprox. 60 cm" },
  { id: "pel-6", img: pelucia6, name: "Urso Eu Te Amo", price: 480, description: "Aprox. 60 cm" },
];

const coroasImages = [coroa1, coroa2, coroa3, coroa4, coroa5, coroa6, coroa7, coroa8];
const coroasRaw: Product[] = coroasImages.map((img, i) => ({
  id: `cor-${i + 1}`,
  img,
  name: `Coroa de Flores ${i + 1}`,
  price: 400,
  description: "P R$ 400 · M R$ 500 · G R$ 600",
}));

// Dedupe by id, preserve original order
const dedupe = (list: Product[]) => {
  const seen = new Set<string>();
  return list.filter((p) => (seen.has(p.id) ? false : (seen.add(p.id), true)));
};

const rosas = dedupe(rosasRaw);
const girassois = dedupe(girassoisRaw);
const cestas = dedupe(cestasRaw);
const kits = dedupe(kitsRaw);
const pelucias = dedupe(peluciasRaw);
const coroas = dedupe(coroasRaw);

function Card({ p }: { p: Product }) {
  const { add } = useCart();
  return (
    <div className="group flex h-full flex-col bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1.5 border border-blush/50">
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-blush via-cream to-background">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {p.tag && (
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-gold/95 text-white px-3 py-1 rounded-full shadow-soft">
            {p.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-5 text-center">
        {p.description && (
          <p className="text-xs text-muted-foreground">{p.description}</p>
        )}
        <p className="mt-2 font-serif text-xl md:text-2xl text-rose-deep font-semibold tracking-tight">
          {formatBRL(p.price)}
        </p>
        <button
          onClick={() => add({ id: p.id, name: p.name, img: p.img, price: p.price })}
          className="mt-auto pt-4"
        >
          <span className="inline-flex w-full items-center justify-center gap-2 text-xs uppercase tracking-widest rounded-full bg-rose-deep text-white px-5 py-2.5 hover:bg-rose-deep/90 hover:shadow-elegant transition-all duration-300 font-medium">
            <ShoppingBag className="h-4 w-4" />
            Adicionar
          </span>
        </button>
      </div>
    </div>
  );
}

type CategoryDef = {
  id: string;
  slug: string;
  emoji: string;
  kicker: string;
  title: string;
  accent: string;
  items: Product[];
  tinted?: boolean;
};

const CATEGORIES: CategoryDef[] = [
  { id: "rosas", slug: "rosas", emoji: "🌹", kicker: "buquês de rosas", title: "Rosas que", accent: "encantam", items: rosas },
  { id: "girassois", slug: "girassois", emoji: "🌻", kicker: "girassóis & flores do campo", title: "Girassóis que", accent: "iluminam", items: girassois, tinted: true },
  { id: "cestas", slug: "cestas", emoji: "🧺", kicker: "cestas exclusivas", title: "Cestas para", accent: "presentear", items: cestas },
  { id: "kits", slug: "kits", emoji: "❤️", kicker: "kits apaixonados", title: "Kits", accent: "apaixonados", items: kits, tinted: true },
  { id: "pelucias", slug: "pelucias", emoji: "🧸", kicker: "abraços de pelúcia", title: "Ursinhos &", accent: "fofuras", items: pelucias },
  { id: "coroas", slug: "coroas", emoji: "🕊️", kicker: "coroas de flores", title: "Coroas de", accent: "homenagem", items: coroas, tinted: true },
];

function CategoryNav() {
  return (
    <div className="fixed left-0 right-0 top-[104px] md:top-[164px] z-30 bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-2.5 overflow-x-auto">
        <ul className="flex items-center gap-1 md:gap-2 justify-start md:justify-center min-w-max">
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] md:text-xs font-semibold uppercase tracking-wider text-foreground/70 hover:text-rose-deep hover:bg-rose-deep/10 transition-colors whitespace-nowrap"
              >
                <span aria-hidden>{c.emoji}</span>
                <span>{c.kicker.split(" ")[0]}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Category({ c }: { c: CategoryDef }) {
  return (
    <section id={c.slug} className="py-10 md:py-14 scroll-mt-[220px]" style={{ contentVisibility: "auto", containIntrinsicSize: "1200px" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-4 mb-6 md:mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-foreground flex items-center gap-2">
              <span aria-hidden>{c.emoji}</span>
              {c.kicker}
            </h2>
            <span className="h-1.5 w-1.5 rounded-full bg-rose-deep" />
            <span className="hidden md:block h-px w-24 bg-rose-deep/40" />
          </div>
          <a
            href={`#${c.slug}`}
            aria-label={`Ver mais em ${c.kicker}`}
            className="grid h-9 w-9 place-items-center rounded-full border border-rose-deep/30 text-rose-deep hover:bg-rose-deep hover:text-white transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {c.items.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <div id="produtos">
      <CategoryNav />
      {CATEGORIES.map((c) =>
        c.tinted ? (
          <div key={c.id} className="bg-blush/30">
            <Category c={c} />
          </div>
        ) : (
          <Category key={c.id} c={c} />
        )
      )}
    </div>
  );
}
