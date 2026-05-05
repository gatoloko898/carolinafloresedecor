import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppFloat";

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-rose to-blush">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-script text-2xl text-rose-deep">vamos conversar</p>
        <h2 className="text-4xl md:text-6xl font-light mt-2 text-foreground">
          Faça seu <span className="font-script text-rose-deep">pedido</span> agora
        </h2>
        <p className="mt-4 text-foreground/80">Atendimento todos os dias — entregamos o mesmo amor que você quer enviar.</p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-10 py-5 text-lg font-medium shadow-elegant hover:scale-105 transition-transform"
        >
          <MessageCircle className="h-6 w-6" />
          Pedir no WhatsApp
        </a>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-background/70 backdrop-blur hover:bg-background transition-colors">
            <Instagram className="h-5 w-5 text-rose-deep" />
            <span className="text-sm">@carolinaflores</span>
          </a>
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
