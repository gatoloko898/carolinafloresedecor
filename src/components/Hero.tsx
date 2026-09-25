import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/real-storefront.webp";

export function Hero() {
  return (
    <section className="relative pt-[100px] md:pt-[172px]">
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-blush via-rose to-background">
        <div className="relative mx-auto max-w-[1440px]">
          <div className="relative aspect-[16/7] min-h-[320px] md:min-h-[460px]">
            <img
              src={heroImg}
              alt="Buquês e presentes Carolina Flores"
              width={1536}
              height={1024}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-transparent" />

            <div className="relative z-10 h-full flex items-start pt-16 px-6 md:items-center md:pt-0 md:px-16">
              <div className="max-w-xl animate-fade-up">
                <p className="font-script text-2xl md:text-3xl text-rose-deep">Carolina Flores</p>
                <h1 className="text-3xl md:text-6xl font-light leading-[1.05] text-foreground mt-1 md:mt-2">
                  Transformando<br />
                  <span className="font-script text-rose-deep text-4xl md:text-7xl">sentimentos</span><br />
                  em Flores
                </h1>
                <p className="mt-3 md:mt-5 text-sm md:text-lg text-muted-foreground max-w-md">
                  Buquês exclusivos, presentes inesquecíveis e decoração feita com amor.
                </p>
                <div className="mt-5 md:mt-8 flex flex-wrap gap-4">
                  <a
                    href="#produtos"
                    className="inline-flex items-center justify-center rounded-full bg-rose-deep px-8 py-3.5 text-sm font-medium text-white shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
                  >
                    Ver Buquês
                  </a>
                </div>
                <p className="mt-3 md:mt-6 text-xs md:text-sm text-gold font-semibold uppercase tracking-wider">
                  ✨ PEÇA HOJE E RECEBA NO MESMO DIA
                </p>
              </div>
            </div>

            {/* Chevron arrows */}
            <button
              aria-label="Anterior"
              className="hidden md:grid absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-rose-deep text-white shadow-soft hover:bg-rose-deep/90 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Próximo"
              className="hidden md:grid absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-rose-deep text-white shadow-soft hover:bg-rose-deep/90 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dot pagination */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === 0 ? "w-6 bg-rose-deep" : "w-2 bg-rose-deep/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
