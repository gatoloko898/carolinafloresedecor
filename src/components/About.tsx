import aboutImg from "@/assets/about-shop.jpg";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={aboutImg} alt="Interior da floricultura" loading="lazy" width={1200} height={900} className="rounded-2xl shadow-elegant w-full h-auto" />
          <div className="absolute -bottom-6 -right-6 bg-gold text-white rounded-2xl px-6 py-4 shadow-soft hidden md:block">
            <p className="font-script text-2xl">+10 anos</p>
            <p className="text-xs uppercase tracking-wider">de carinho</p>
          </div>
        </div>
        <div>
          <p className="font-script text-2xl text-rose-deep mb-3">nossa história</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
            Cada flor conta uma <span className="font-script text-rose-deep">história</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A Carolina Flores nasceu para transformar momentos simples em memórias inesquecíveis. 
            Cada buquê é montado à mão, com flores selecionadas no mesmo dia e um toque de carinho 
            que só quem ama o que faz consegue entregar.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Mais que uma floricultura — somos uma boutique de emoções, onde cada arranjo é 
            pensado para arrancar sorrisos, lágrimas de alegria e palavras que ficam.
          </p>
        </div>
      </div>
    </section>
  );
}
