import heroImg from "@/assets/real-storefront.webp";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Buquê de rosas cor-de-rosa" width={1536} height={1024} fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <p className="font-script text-3xl text-gold mb-4">Carolina Flores & Decor</p>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] text-foreground">
            Transformando<br />
            <span className="font-script text-rose-deep text-6xl md:text-8xl">sentimentos</span><br />
            em Flores 🌷
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Buquês exclusivos, presentes inesquecíveis e decoração feita com amor.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center rounded-full bg-rose-deep px-8 py-4 text-sm font-medium text-white shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
            >
              Ver Buquês
            </a>
          </div>
          <p className="mt-8 text-sm text-gold font-semibold uppercase tracking-wider">✨ PEÇA HOJE E RECEBA NO MESMO DIA</p>
        </div>
      </div>
    </section>
  );
}
