const reviews = [
  { name: "Jonatas", text: "Comprei pra minha namorada e ela chorou de emoção 😍 Buquê lindo, perfumado e entregue rapidinho!" },
  { name: "Rafael T.", text: "Atendimento impecável. As flores chegaram fresquíssimas e a embalagem é de outro mundo." },
  { name: "Juliana P.", text: "Mandei pra minha mãe no dia das mães e ela amou. Já virou minha floricultura oficial 💗" },
];

export function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="font-script text-2xl text-gold">amor recebido</p>
          <h2 className="text-4xl md:text-5xl font-light mt-2">O que dizem <span className="font-script text-rose-deep">sobre nós</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="p-8 rounded-2xl bg-cream border border-border/50 shadow-soft">
              <div className="text-gold text-lg">★★★★★</div>
              <blockquote className="mt-4 text-foreground/90 italic leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-5 font-script text-xl text-rose-deep">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
