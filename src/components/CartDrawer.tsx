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


const UPSellSUGGESTIONS = [
  { id: "cho-1", name: "Ferrero Rocher", img: chocoFerrero, price: 65, phrase: "Um toque de doçura premium" },
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
  const [form, setForm] = useState({ nome: "", cidade: "", estado: "", data: "", periodo: "manha" });
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const handleClose = (open: boolean) => {
    setOpen(open);
    if (!open) setStep("cart");
  };

  const canFinish = form.nome && form.cidade && form.estado && form.data && items.length > 0;

  const finalize = async () => {
    setErro(null);
    setLoading(true);
    try {
      const orderNsu = `CF-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const payloadItems = items.map((i) => ({
        name: i.name,
        description: i.name,
        price: Math.round(i.price * 100),
        quantity: i.qty,
      }));
      if (delivery) {
        payloadItems.push({
          name: "Entrega (perímetro urbano)",
          description: "Taxa de entrega no perímetro urbano",
          price: Math.round(deliveryFee * 100),
          quantity: 1,
        });
      }

      const res = await fetch("/api/public/infinitepay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          handle: "paulomello88",
          order_nsu: orderNsu,
          items: payloadItems,
          customer: form,
          redirect_url: `${window.location.origin}/pedido?nsu=${encodeURIComponent(orderNsu)}`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.url) {
        throw new Error(data?.error || "Não foi possível gerar o link de pagamento.");
      }
      try {
        localStorage.setItem("carolina-last-order", orderNsu);
      } catch {}
      clear();
      handleClose(false);
      window.location.href = data.url;
    } catch (e: any) {
      setErro(e?.message || "Erro ao iniciar o pagamento. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };


  const upsellAdded = (id: string) => items.some((i) => i.id === id);

  const addUpsell = (product: (typeof UPSellSUGGESTIONS)[number]) => {
    add({ id: product.id, name: product.name, img: product.img, price: product.price });
  };

  const goToCheckout = () => {
    setDelivery(false);
    setStep("checkout");
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

              <div>
                <Label>Período de entrega</Label>
                <div className="mt-1.5 grid grid-cols-2 gap-2">
                  {[
                    { v: "manha", label: "Manhã", sub: "9h às 12h" },
                    { v: "tarde", label: "Tarde", sub: "12h às 17h30" },
                  ].map((opt) => (
                    <button
                      key={opt.v}
                      type="button"
                      onClick={() => setForm({ ...form, periodo: opt.v })}
                      className={`rounded-xl border px-3 py-2 text-sm transition-colors ${
                        form.periodo === opt.v
                          ? "border-rose-deep bg-rose-deep text-white"
                          : "border-border/60 bg-background hover:bg-blush/30"
                      }`}
                    >
                      <span className="block font-medium">{opt.label}</span>
                      <span className="block text-[11px] opacity-80">{opt.sub}</span>
                    </button>
                  ))}
                </div>
                <p className="mt-1.5 text-[11px] text-muted-foreground">
                  Pedidos com 2h de antecedência (manhã ou tarde).
                </p>
              </div>

              <label className="flex items-start gap-3 rounded-2xl border border-border/60 bg-blush/20 p-4 cursor-pointer hover:bg-blush/30 transition-colors">
                <input
                  type="checkbox"
                  checked={delivery}
                  onChange={(e) => setDelivery(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-rose-deep"
                />
                <span className="flex-1 text-sm">
                  <span className="block font-medium text-foreground">Adicionar entrega no perímetro urbano</span>
                  <span className="block text-xs text-muted-foreground mt-0.5">
                    Taxa opcional de {formatBRL(20)}. Se preferir, retire no local sem custo.
                  </span>
                </span>
              </label>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t border-border/50 pt-4">
            <div className="w-full space-y-3">
              <div className="rounded-2xl bg-blush/25 p-4 text-sm space-y-1.5">
                <div className="flex justify-between text-foreground/80">
                  <span>Subtotal</span>
                  <span>{formatBRL(subtotal)}</span>
                </div>
                {delivery && (
                  <div className="flex justify-between text-foreground/80">
                    <span>Entrega (perímetro urbano)</span>
                    <span>{formatBRL(deliveryFee)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-base pt-1.5 border-t border-border/40">
                  <span className="font-semibold">Total</span>
                  <span className="font-serif text-xl font-semibold text-rose-deep">{formatBRL(total)}</span>
                </div>
              </div>

              {step === "cart" ? (
                <Button onClick={() => setStep("upsell")} className="w-full bg-rose-deep hover:bg-rose-deep/90 text-white rounded-full h-11">
                  Continuar
                </Button>
              ) : step === "upsell" ? (
                <Button onClick={goToCheckout} className="w-full bg-rose-deep hover:bg-rose-deep/90 text-white rounded-full h-11">
                  Continuar para finalizar
                </Button>
              ) : (
                <>
                  {erro && <p className="text-xs text-destructive text-center">{erro}</p>}
                  <Button onClick={finalize} disabled={!canFinish || loading} className="w-full bg-rose-deep hover:bg-rose-deep/90 text-white rounded-full h-11">
                    {loading ? "Gerando pagamento..." : "Finalizar e Pagar"}
                  </Button>
                </>
              )}
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
