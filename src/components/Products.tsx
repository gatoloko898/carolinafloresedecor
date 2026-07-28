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
import pelucia8 from "@/assets/pelucias-new/p8-doce-coracao.jpg";
import pelucia9 from "@/assets/pelucias-new/p9-vestidinho.jpg";
import pelucia10 from "@/assets/pelucias-new/p10-rosa-cetim.jpg";
import pelucia11 from "@/assets/pelucias-new/p11-azul-cetim.jpg";
import pelucia12 from "@/assets/pelucias-new/p12-coelho.jpg";
import pelucia13 from "@/assets/pelucias-new/p13-canguru.jpg";
import pelucia14 from "@/assets/pelucias-new/p14-menta.jpg";
import pelucia15 from "@/assets/pelucias-new/p15-listrada.jpg";
import { useState } from "react";
// Coroas
import coroa1 from "@/assets/coroas/c15.jpg";
import coroa2 from "@/assets/coroas/c16.jpg";
import coroa3 from "@/assets/coroas/c17.jpg";
import coroa4 from "@/assets/coroas/c18.jpg";
import coroa5 from "@/assets/coroas/c19.jpg";
import coroa6 from "@/assets/coroas/c20.jpg";
import coroa7 from "@/assets/coroas/c21.jpg";
import coroa8 from "@/assets/coroas/c22.jpg";
import coroaPremium from "@/assets/coroas/premium-luxo.jpg";
import { Sparkles } from "lucide-react";

type SizeKey = "P" | "M" | "G";
type SizeOption = { key: SizeKey; label: string; price: number };

type Product = {
  id: string;
  img: string;
  name: string;
  price: number;
  tag?: string;
  description?: string;
  sizes?: SizeOption[];
};

const rosasRaw: Product[] = [
  { id: "ros-p2", img: rosP2, name: "Buquê Rosa Unitária", price: 50 },
  { id: "ros-p3", img: rosP3, name: "Buquê Duas Rosas", price: 70 },
  { id: "ros-p4", img: rosP4, name: "Buquê Três Rosas", price: 100 },
  { id: "ros-p5", img: rosP5, name: "Buquê Rosas Rosê", price: 100 },
  { id: "ros-p6", img: rosP6, name: "Buquê Primeiro Amor", price: 140 },
  { id: "ros-p7", img: rosP7, name: "Buquê Compacto sem Rosas", price: 170 },
  { id: "ros-p8", img: rosP8, name: "Buquê Rosas Encanto Dourado", price: 180 },
  { id: "ros-p10", img: rosP10, name: "Buquê Rosas Clássico (12 Rosas Vermelhas)", price: 280 },
  { id: "ros-p13", img: rosP13, name: "Flower Box de Rosas Romance", price: 289, tag: "Especial" },
  { id: "ros-p11", img: rosP11, name: "Buquê Tradicional Dez Rosas Vermelhas", price: 299 },
  { id: "ros-p12", img: rosP12, name: "Buquê Grande / Dez Premium de Rosas Vermelhas", price: 330 },
];

const girassoisRaw: Product[] = [
  { id: "gir-p4", img: girP4, name: "Buquê Girassol Estilo Jornal", price: 120 },
  { id: "gir-p3", img: girP3, name: "Gran Buquê / 4 Rosas Girassol", price: 160 },
  { id: "gir-p8", img: girP8, name: "Buquê Girassóis e Paixão", price: 220 },
  { id: "gir-p10", img: girP10, name: "Buquê Girassol Rústico", price: 250 },
  { id: "gir-p9", img: girP9, name: "Buquê Girassol e Rosas Azuis", price: 250 },
  { id: "gir-p11", img: girP11, name: "Buquê Girassol Tradicional", price: 270 },
  { id: "gir-p13", img: girP13, name: "Buquê Girassóis e Ruskus", price: 379 },
  { id: "gir-p12", img: girP12, name: "Buquê Girassol Premium", price: 399 },
];

const floresCampoRaw: Product[] = [
  { id: "fc-p22", img: fcP22, name: "Buquê Flores do Campo Rosa e Sol", price: 349 },
  { id: "fc-p3", img: fcP3, name: "Buquê Flores do Campo Encanto", price: 229 },
  { id: "fc-p7", img: fcP7, name: "Buquê Girassóis de Campo", price: 289 },
  { id: "fc-p16", img: fcP16, name: "Buquê Flores do Campo com Flores Nobres", price: 299 },
  { id: "fc-p19", img: fcP19, name: "Buquê Grande de Flores do Campo", price: 329 },
];

const cestasRaw: Product[] = [
  { id: "fc-p6", img: fcP6, name: "Flower Box Pequeno Encanto", price: 229 },
  { id: "fc-p12", img: fcP12, name: "Flower Box Rústico Fino", price: 279 },
  { id: "fc-p15", img: fcP15, name: "Flower Box Rainbow", price: 289 },
  { id: "fc-p11", img: fcP11, name: "Flower Box Clássico", price: 299 },
];

const kitsRaw: Product[] = [
  { id: "gir-p6", img: girP6, name: "Kit Girassol e Ferrero Rocher", price: 185 },
  { id: "fc-p21", img: fcP21, name: "Kit Buquê Colorido e Ferrero Rocher", price: 249 },
  { id: "ros-p9", img: rosP9, name: "Buquê de rosas com Ferrero Rocher", price: 265, tag: "Apaixonados" },
  { id: "fc-p20", img: fcP20, name: "Kit Alstroemérias e Ferrero Rocher", price: 299 },
  { id: "fc-p9", img: fcP9, name: "Kit Flower Box Rústico Fino e Ferrero Rocher", price: 344 },
];

const peluciasRaw: Product[] = [
  { id: "pel-15", img: pelucia15, name: "Ursinho Camisa Listrada", price: 65, description: "Aprox. 18 cm", tag: "Infantil" },
  { id: "pel-10", img: pelucia10, name: "Urso Rosa Laço de Cetim", price: 69, description: "Aprox. 18 cm", tag: "Delicado" },
  { id: "pel-11", img: pelucia11, name: "Urso Azul Laço de Cetim", price: 69, description: "Aprox. 18 cm", tag: "Infantil" },
  { id: "pel-14", img: pelucia14, name: "Urso Menta Laço de Cetim Verde", price: 89, description: "Aprox. 25 cm" },
  { id: "pel-9", img: pelucia9, name: "Ursinha Vestidinho Xadrez", price: 169, description: "Aprox. 27 cm", tag: "Fofo" },
  { id: "pel-13", img: pelucia13, name: "Canguru com Filhote", price: 179, description: "Aprox. 30 cm", tag: "Exclusivo" },
  { id: "pel-12", img: pelucia12, name: "Coelho de Páscoa de Pelúcia", price: 179, description: "Aprox. 37 cm", tag: "Especial" },
  { id: "pel-7", img: pelucia7, name: "Panda Laço Vermelho", price: 299, description: "Aprox. 60 cm", tag: "Exclusivo" },
  { id: "pel-2", img: pelucia2, name: "Urso Chocolate Cachecol", price: 379, description: "Aprox. 60 cm" },
  { id: "pel-5", img: pelucia5, name: "Urso Gigante Cachecol Luxo", price: 479, description: "Aprox. 70 cm", tag: "Gigante" },
  { id: "pel-8", img: pelucia8, name: "Urso Doce Coração Bordado", price: 549, description: "Aprox. 60 cm", tag: "Destaque" },
  { id: "pel-6", img: pelucia6, name: "Urso Eu Te Amo", price: 549, description: "Aprox. 60 cm" },
];

const CORONA_SIZES: SizeOption[] = [
  { key: "P", label: "P · 80 cm", price: 400 },
  { key: "M", label: "M · 1 m", price: 500 },
  { key: "G", label: "G · 1,20 m", price: 600 },
];
const coroasImages = [coroa1, coroa2, coroa3, coroa4, coroa5, coroa6, coroa7, coroa8];
const coroasRaw: Product[] = coroasImages.map((img, i) => ({
  id: `cor-${i + 1}`,
  img,
  name: `Coroa de Flores ${i + 1}`,
  price: 400,
  sizes: CORONA_SIZES,
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
  const [size, setSize] = useState<SizeOption | null>(p.sizes ? p.sizes[0] : null);
  const currentPrice = size ? size.price : p.price;
  const handleAdd = () => {
    if (size) {
      add({
        id: `${p.id}-${size.key}`,
        name: `${p.name} — Tamanho ${size.key}`,
        img: p.img,
        price: size.price,
      });
    } else {
      add({ id: p.id, name: p.name, img: p.img, price: p.price });
    }
  };
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
        <h3 className="font-serif text-base md:text-lg text-foreground leading-snug">
          {p.name}
        </h3>
        {p.description && (
          <p className="mt-1 text-xs text-muted-foreground">{p.description}</p>
        )}
        {p.sizes && size && (
          <div className="mt-3 flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-xs text-muted-foreground">Tamanho:</span>
              {p.sizes.map((s) => {
                const active = s.key === size.key;
                return (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setSize(s)}
                    aria-pressed={active}
                    className={`h-8 w-8 grid place-items-center rounded-full text-xs font-semibold transition-all ${
                      active
                        ? "bg-rose-deep text-white shadow-soft"
                        : "bg-blush/40 text-rose-deep hover:bg-blush"
                    }`}
                  >
                    {s.key}
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] text-muted-foreground">Tamanho {size.label}</p>
          </div>
        )}
        <p className="mt-2 font-serif text-xl md:text-2xl text-rose-deep font-semibold tracking-tight">
          {formatBRL(currentPrice)}
        </p>
        <button onClick={handleAdd} className="mt-auto pt-4">
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

function PremiumCoroa() {
  const { add } = useCart();
  const premium = {
    id: "cor-premium-luxo",
    name: "Coroa de Flores Luxo White Premium",
    img: coroaPremium,
    price: 990,
  };
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-cream via-background to-blush/40 shadow-elegant">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-square md:aspect-auto md:min-h-[520px] bg-gradient-to-br from-blush/40 to-cream">
              <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 text-[10px] md:text-xs uppercase tracking-widest bg-gold text-white px-3 py-1.5 rounded-full shadow-soft">
                <Sparkles className="h-3 w-3" /> Edição Luxo
              </span>
              <img
                src={premium.img}
                alt={premium.name}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="p-6 md:p-10 flex flex-col justify-center text-center md:text-left">
              <span className="inline-flex items-center self-center md:self-start gap-1.5 text-[10px] uppercase tracking-widest bg-rose-deep/10 text-rose-deep px-3 py-1 rounded-full">
                <Sparkles className="h-3 w-3" /> Coroa Especial de Homenagem
              </span>
              <h3 className="mt-4 font-serif text-2xl md:text-3xl text-foreground leading-tight">
                {premium.name}
              </h3>
              <p className="mt-3 text-sm md:text-base text-muted-foreground">
                Orquídeas Phalaenopsis, gérberas e rosas brancas de alto padrão
                com faixa de homenagem personalizada inclusa.
              </p>
              <div className="mt-5 inline-flex self-center md:self-start items-center gap-2 rounded-full bg-rose-deep/10 text-rose-deep text-xs md:text-sm font-semibold px-4 py-2">
                Tamanho Único Exclusivo: 1,30 m (130 cm)
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                • Faixa de Homenagem Personalizada Inclusa
              </p>
              <div className="mt-6 flex items-center justify-center md:justify-start gap-5 flex-wrap">
                <span className="font-serif text-3xl md:text-4xl text-rose-deep font-semibold">
                  {formatBRL(premium.price)}
                </span>
                <button
                  onClick={() => add(premium)}
                  className="inline-flex items-center gap-2 rounded-full bg-rose-deep text-white px-6 py-3 text-xs md:text-sm uppercase tracking-widest font-medium shadow-soft hover:shadow-elegant hover:bg-rose-deep/90 transition-all"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Adicionar Coroa Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <div id="produtos">
      <CategoryNav />
      {CATEGORIES.map((c) => {
        const node = c.tinted ? (
          <div key={c.id} className="bg-blush/30">
            <Category c={c} />
          </div>
        ) : (
          <Category key={c.id} c={c} />
        );
        if (c.id === "coroas") {
          return (
            <div key={c.id}>
              <PremiumCoroa />
              {node}
            </div>
          );
        }
        return node;
      })}
    </div>
  );
}
