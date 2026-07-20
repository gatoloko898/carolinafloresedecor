import { MapPin, MessageCircle, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-rose to-blush">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-script text-2xl text-rose-deep">vamos conversar</p>
        <h2 className="text-4xl md:text-6xl font-light mt-2 text-foreground">
          Faça seu <span className="font-script text-rose-deep">pedido</span> agora
        </h2>
        <p className="mt-4 text-foreground/80">Atendimento todos os dias — entregamos o mesmo amor que você quer enviar.</p>

        <div className="mt-10 inline-flex flex-col items-center gap-2 rounded-2xl bg-background/70 backdrop-blur px-8 py-6">
          <div className="flex items-center gap-2 text-rose-deep font-medium">
            <Clock className="h-5 w-5" />
            <span>Horário de entrega</span>
          </div>
          <p className="text-sm text-foreground/80">Das 9h às 17h30</p>
          <p className="text-xs text-foreground/70">
            Período da manhã: 9h às 12h · Pedidos com 2h de antecedência (manhã ou tarde)
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          <a href="https://wa.me/5519993639296" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-background/70 backdrop-blur hover:bg-background transition-colors">
            <MessageCircle className="h-5 w-5 text-rose-deep" />
            <span className="text-sm">(19) 99363-9296</span>
          </a>
          <div className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-background/70 backdrop-blur">
            <MapPin className="h-5 w-5 text-rose-deep" />
            <span className="text-sm">Rua das Flores, 123</span>
          </div>
        </div>
      </div>
    </section>
  );
}
