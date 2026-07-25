import { MapPin, Clock, CalendarDays, Sparkles, Navigation } from "lucide-react";

const MAPS_QUERY = "Avenida da Saudade, 121 - Vila Santana, Vargem Grande do Sul - SP";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-rose/40 via-blush/50 to-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="font-script text-2xl text-rose-deep">Atendimento &amp; Localização</p>
          <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
            Faça seu <span className="font-script text-rose-deep">pedido</span> com amor
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground/70">
            Atendimento todos os dias — entregamos com carinho e cuidado em toda a região.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {/* Horários */}
          <div className="rounded-2xl bg-background/80 backdrop-blur p-6 md:p-7 shadow-soft border border-blush/60">
            <div className="flex items-center gap-2 text-rose-deep">
              <Clock className="h-5 w-5" />
              <h3 className="font-serif text-xl">Horários de Entrega</h3>
            </div>
            <p className="mt-4 text-sm text-foreground/80">
              Atendimento presencial e entregas das{" "}
              <span className="font-semibold text-rose-deep">9h às 17h30</span>.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
              <li>• Período da Manhã: 9h às 12h</li>
              <li>• Período da Tarde: 12h às 17h30</li>
            </ul>
            <div className="mt-5 pt-4 border-t border-blush/60 flex items-center gap-2 text-xs text-rose-deep">
              <Sparkles className="h-4 w-4" />
              <span>Peça com 2h de antecedência</span>
            </div>
          </div>

          {/* Localização */}
          <div className="rounded-2xl bg-background/80 backdrop-blur p-6 md:p-7 shadow-soft border border-blush/60">
            <div className="flex items-center gap-2 text-rose-deep">
              <MapPin className="h-5 w-5" />
              <h3 className="font-serif text-xl">Localização</h3>
            </div>
            <p className="mt-4 text-sm text-foreground/80">
              Floricultura física &amp; loja para visitação e retiradas:
            </p>
            <p className="mt-3 font-semibold text-foreground">Av. da Saudade, 121 — Vila Santana</p>
            <p className="text-sm text-rose-deep">Vargem Grande do Sul — SP · CEP 13884-266</p>
            <div className="mt-4 pt-4 border-t border-blush/60 flex items-center gap-2 text-xs text-foreground/70">
              <CalendarDays className="h-4 w-4 text-rose-deep" />
              <span>Atendimento e entregas de Segunda a Domingo</span>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-8 rounded-2xl overflow-hidden shadow-elegant border border-blush/60 bg-background">
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir no Google Maps ou Waze"
            className="block relative group"
          >
            <iframe
              title="Mapa Carolina Flores"
              src={MAPS_EMBED}
              className="w-full h-64 md:h-80 pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
            <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-rose-deep text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 shadow-elegant">
              <Navigation className="h-4 w-4" />
              Como chegar
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
