import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Heart, Gift } from "lucide-react";
import { useCart, formatBRL } from "@/contexts/CartContext";
import chocoFerrero from "@/assets/choco-ferrero.webp";
import pelucia1 from "@/assets/pelucias-new/p6.png";
import pelucia4 from "@/assets/pelucias-new/p1.png";

const WHATSAPP_NUMBER = "5519993639296";

const UPSellSUGGESTIONS = [
  { id: "cho-1", name: "Ferrero Rocher", img: chocoFerrero, price: 45, phrase: "Um toque de doçura premium" },
  { id: "pel-1", name: "Ursa Creme Coração Bordado", img: pelucia4, price: 150, phrase: "Um abraço de pelúcia para acompanhar" },
  { id: "pel-6-mini", name: "Urso Eu Te Amo", img: pelucia1, price: 480, phrase: "Diga \"te amo\" sem usar palavras" },
];

export function CartDrawer() {
  const {
    items,
    isOpen,
    setOpen,
    add,
    inc,
    dec,
    remove,
    clear,
    subtotal,
    delivery,
    setDelivery,
    deliveryFee,
    total,
  } = useCart();
  const [step, setStep] = useState<"cart" | "upsell" | "checkout">("cart");
  const [form, setForm] = useState({ nome: "", cidade: "", estado: "", data: "" });

  const handleClose = (open: boolean) => {
    setOpen(open);
    if (!open) setStep("cart");
  };

  const canFinish = form.nome && form.cidade && form.estado && form.data && items.length > 0;

  const finalize = () => {
    const lista = items
      .map((i) => `• ${i.name} — ${i.qty}x — ${formatBRL(i.price * i.qty)}`)
      .join("\n");
    const entregaLinha = delivery
      ? `Entrega (perímetro urbano): ${formatBRL(deliveryFee)}\n`
      : `Entrega: retirar no local\n`;
    const msg =
      `Olá! Vim pelo site Carolina Flores 🌸\n\n` +
      `Pedido:\n${lista}\n\n` +
      `Subtotal: ${formatBRL(subtotal)}\n` +
      entregaLinha +
      `Total: ${formatBRL(total)}\n\n` +
      `Nome: ${form.nome}\n` +
      `Cidade: ${form.cidade}\n` +
      `Estado: ${form.estado}\n` +
      `Data de entrega: ${form.data}\n\n` +
      `Pode me atender? 😊`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    clear();
    handleClose(false);
  };

  const upsellAdded = (id: string) => items.some((i) => i.id === id);

  const addUpsell = (product: (typeof UPSellSUGGESTIONS)[number]) => {
    add({ id: product.id, name: product.name, img: product.img, price: product.price });
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-script text-2xl text-rose-deep">
            {(step === "upsell" || step === "checkout") && (
              <button onClick={() => setStep(step === "checkout" ? "upsell" : "cart")} className="text-foreground/60 hover:text-rose-deep">
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            {step === "cart" ? "Seu Carrinho" : step === "upsell" ? "Um carinho a mais?" : "Finalizar Pedido"}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-16 text-muted-foreground">
              <ShoppingBag className="h-12 w-12 mb-3 opacity-40" />
              <p>Seu carrinho está vazio</p>
            </div>
          ) : step === "cart" ? (
            <ul className="space-y-4">
              {items.map((i) => (
                <li key={i.id} className="flex gap-3 border-b border-border/50 pb-4">
                  <img src={i.img} alt={i.name} className="h-20 w-20 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{i.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{formatBRL(i.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => dec(i.id)} className="h-7 w-7 grid place-items-center rounded-full border border-border hover:bg-blush/40">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{i.qty}</span>
                      <button onClick={() => inc(i.id)} className="h-7 w-7 grid place-items-center rounded-full border border-border hover:bg-blush/40">
                        <Plus className="h-3 w-3" />
                      </button>
                      <span className="ml-2 text-sm font-medium text-rose-deep">{formatBRL(i.price * i.qty)}</span>
                      <button onClick={() => remove(i.id)} className="ml-auto text-rose-deep/70 hover:text-rose-deep">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : step === "upsell" ? (
            <div className="space-y-5">
              <div className="bg-blush/30 rounded-2xl p-5 text-center space-y-2">
                <Heart className="h-6 w-6 mx-auto text-rose-deep" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  Que tal tornar esse presente ainda mais inesquecível? Seu amor merece um carinho a mais! 💕
                </p>
              </div>
              <div className="space-y-3">
                {UPSellSUGGESTIONS.map((p) => {
                  const added = upsellAdded(p.id);
                  return (
                    <div key={p.id} className="flex gap-3 items-center border border-border/50 rounded-2xl p-3 bg-card/50">
                      <img src={p.img} alt={p.name} className="h-16 w-16 rounded-xl object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{p.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{p.phrase}</p>
                        <p className="text-sm font-medium text-rose-deep mt-1">{formatBRL(p.price)}</p>
                      </div>
                      <button
                        onClick={() => addUpsell(p)}
                        disabled={added}
                        className={`shrink-0 h-9 w-9 grid place-items-center rounded-full transition-colors ${
                          added
                            ? "bg-gold/20 text-gold cursor-default"
                            : "bg-rose-deep text-white hover:bg-rose-deep/90"
                        }`}
                        aria-label={added ? "Adicionado" : `Adicionar ${p.name}`}
                      >
                        {added ? <Gift className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} maxLength={100} />
              </div>
              <div>
                <Label htmlFor="cidade">Cidade</Label>
                <Input id="cidade" value={form.cidade} onChange={(e) => setForm({ ...form, cidade: e.target.value })} maxLength={80} />
              </div>
              <div>
                <Label htmlFor="estado">Estado</Label>
                <Input id="estado" value={form.estado} onChange={(e) => setForm({ ...form, estado: e.target.value })} maxLength={40} />
              </div>
              <div>
                <Label htmlFor="data">Data de entrega</Label>
                <Input id="data" type="date" value={form.data} onChange={(e) => setForm({ ...form, data: e.target.value })} />
              </div>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t border-border/50 pt-4">
            <div className="w-full space-y-3">
              <div className="rounded-2xl bg-blush/25 p-4 text-sm">
                <div className="flex justify-between items-center text-base">
                  <span className="font-semibold">Total</span>
                  <span className="font-serif text-xl font-semibold text-rose-deep">{formatBRL(subtotal)}</span>
                </div>
              </div>

              {step === "cart" ? (
                <Button onClick={() => setStep("upsell")} className="w-full bg-rose-deep hover:bg-rose-deep/90 text-white rounded-full h-11">
                  Continuar
                </Button>
              ) : step === "upsell" ? (
                <Button onClick={() => setStep("checkout")} className="w-full bg-rose-deep hover:bg-rose-deep/90 text-white rounded-full h-11">
                  Continuar para finalizar
                </Button>
              ) : (
                <Button onClick={finalize} disabled={!canFinish} className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full h-11">
                  Finalizar Pedido no WhatsApp
                </Button>
              )}
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
