import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

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
import rosP14 from "@/assets/catalog/ros-p14.jpg";
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
import fcP13 from "@/assets/catalog/fc-p13.jpg";
import fcP14 from "@/assets/catalog/fc-p14.jpg";
import fcP15 from "@/assets/catalog/fc-p15.jpg";
import fcP16 from "@/assets/catalog/fc-p16.jpg";
import fcP19 from "@/assets/catalog/fc-p19.jpg";
import fcP20 from "@/assets/catalog/fc-p20.jpg";
import fcP21 from "@/assets/catalog/fc-p21.jpg";
import fcP22 from "@/assets/catalog/fc-p22.jpg";
// Pelúcias (mantidas do acervo existente)
import pelucia1 from "@/assets/pelucias-new/p1.png";
import pelucia2 from "@/assets/pelucias-new/p2.png";
import pelucia3 from "@/assets/pelucias-new/p3.png";
import pelucia4 from "@/assets/pelucias-new/p4.png";
import pelucia5 from "@/assets/pelucias-new/p5.png";
import pelucia6 from "@/assets/pelucias-new/p6.png";
import pelucia7 from "@/assets/pelucias-new/p7.png";

// Estrutura preparada para checkout futuro: price fica opcional e ainda não é exibido.
type Product = { id: string; img: string; name: string; tag?: string; price?: number };

const rosas: Product[] = [
  { id: "ros-p2", img: rosP2, name: "Buquê Rosa Solitária" },
  { id: "ros-p3", img: rosP3, name: "Buquê Duas Rosas com Pelúcia" },
  { id: "ros-p4", img: rosP4, name: "Buquê Três Rosas" },
  { id: "ros-p5", img: rosP5, name: "Buquê Rosas Rosé" },
  { id: "ros-p6", img: rosP6, name: "Buquê Rosas Rústico" },
  { id: "ros-p7", img: rosP7, name: "Buquê Cinco Rosas" },
  { id: "ros-p8", img: rosP8, name: "Buquê Rosas Encanto Dourado" },
  { id: "ros-p10", img: rosP10, name: "Buquê Rosas Clássico" },
  { id: "ros-p11", img: rosP11, name: "Buquê Rosas Delicado" },
  { id: "ros-p12", img: rosP12, name: "Buquê Rosas Cristal" },
  { id: "ros-p13", img: rosP13, name: "Box de Rosas Romance" },
];

const girassois: Product[] = [
  { id: "gir-p2", img: girP2, name: "Buquê Girassol Solitário" },
  { id: "gir-p3", img: girP3, name: "Buquê Girassóis Céu Azul" },
  { id: "gir-p4", img: girP4, name: "Buquê Girassol Estilo Jornal" },
  { id: "gir-p8", img: girP8, name: "Buquê Girassol & Rosas Vermelhas" },
  { id: "gir-p9", img: girP9, name: "Buquê Girassol & Rosas Azuis" },
  { id: "gir-p10", img: girP10, name: "Buquê Girassol Rústico" },
  { id: "gir-p11", img: girP11, name: "Buquê Girassol Tradicional" },
  { id: "gir-p12", img: girP12, name: "Buquê Girassol Cristal" },
  { id: "gir-p13", img: girP13, name: "Buquê Girassol & Paixão" },
  { id: "fc-p7", img: fcP7, name: "Buquê Girassóis do Campo" },
  { id: "fc-p16", img: fcP16, name: "Buquê Multicolorido do Campo" },
  { id: "fc-p19", img: fcP19, name: "Buquê do Campo Laço Amarelo" },
  { id: "fc-p22", img: fcP22, name: "Buquê do Campo Rosa & Sol" },
  { id: "fc-p3", img: fcP3, name: "Buquê do Campo Encanto" },
];

const cestas: Product[] = [
  { id: "fc-p6", img: fcP6, name: "Cesta Box Floral" },
  { id: "fc-p11", img: fcP11, name: "Cesta Chapéu Rosa" },
  { id: "fc-p12", img: fcP12, name: "Cesta Balde Dourado" },
  { id: "fc-p13", img: fcP13, name: "Cesta Chapéu Romance" },
  { id: "fc-p15", img: fcP15, name: "Cesta Cilindro Rosa" },
];

const kits: Product[] = [
  { id: "ros-p9", img: rosP9, name: "Kit Rosas & Ferrero Rocher", tag: "Apaixonados" },
  { id: "ros-p14", img: rosP14, name: "Kit Urso, Rosas & Ferrero", tag: "Completo" },
  { id: "gir-p6", img: girP6, name: "Kit Girassóis & Ferrero" },
  { id: "gir-p7", img: girP7, name: "Kit Vaso Girassol & Ferrero" },
  { id: "fc-p9", img: fcP9, name: "Kit Cesta Balde & Ferrero" },
  { id: "fc-p14", img: fcP14, name: "Kit Cesta Colorida & Ferrero" },
  { id: "fc-p20", img: fcP20, name: "Kit Alstroemeria & Ferrero" },
  { id: "fc-p21", img: fcP21, name: "Kit Buquê Colorido & Ferrero" },
];

const pelucias: Product[] = [
  { id: "pel-1", img: pelucia1, name: "Ursa Creme Coração Bordado" },
  { id: "pel-2", img: pelucia2, name: "Urso Chocolate Cachecol" },
  { id: "pel-3", img: pelucia3, name: "Urso Caramelo Cachecol Chevron" },
  { id: "pel-4", img: pelucia4, name: "Urso Coração de Corações" },
  { id: "pel-5", img: pelucia5, name: "Urso Gigante Cachecol Vermelho", tag: "Gigante" },
  { id: "pel-6", img: pelucia6, name: "Urso Eu Te Amo" },
  { id: "pel-7", img: pelucia7, name: "Panda Laço Vermelho na Caixa", tag: "Exclusivo" },
];

function Card({ p }: { p: Product }) {
  const { add } = useCart();
  return (
    <div className="group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-blush/40">
      <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-blush via-cream to-background">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      {p.tag && (
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-gold/95 text-white px-3 py-1 rounded-full shadow-soft">
          {p.tag}
        </span>
      )}
      <div className="p-5 text-center">
        <h3 className="text-base font-medium text-foreground tracking-wide">{p.name}</h3>
        {/* Preço será exibido futuramente */}
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
];

function CategoryNav() {
  return (
    <div className="sticky top-[68px] z-30 bg-background/85 backdrop-blur-md border-y border-border/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 overflow-x-auto">
        <ul className="flex items-center gap-2 md:gap-3 justify-start md:justify-center min-w-max">
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-rose-deep/20 bg-white/80 hover:bg-rose-deep hover:text-white hover:border-rose-deep px-4 py-2 text-xs md:text-sm font-medium text-foreground/80 transition-colors whitespace-nowrap shadow-soft"
              >
                <span aria-hidden>{c.emoji}</span>
                <span className="capitalize">{c.kicker.split(" ")[0]}</span>
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
    <section id={c.slug} className="py-16 md:py-20 scroll-mt-32" style={{ contentVisibility: "auto", containIntrinsicSize: "1200px" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-12 flex-wrap">
          <div>
            <p className="font-script text-2xl text-gold flex items-center gap-2">
              <span aria-hidden>{c.emoji}</span> {c.kicker}
            </p>
            <h2 className="text-3xl md:text-5xl font-light mt-1">
              {c.title} <span className="font-script text-rose-deep">{c.accent}</span>
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent ml-8" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
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
