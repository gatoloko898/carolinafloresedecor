export function shareProduct(opts: { name: string; price?: number; hidePrice?: boolean; anchor?: string }) {
  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}${opts.anchor ? `#${opts.anchor}` : ""}`
      : "https://carolinafloresedecor.com.br";

  const preco =
    !opts.hidePrice && opts.price
      ? ` por ${opts.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
      : "";

  const text = `Olha que lindo isso aqui da Carolina Flores & Decor 🌸\n\n${opts.name || "Produto"}${preco}\n\n${url}`;

  const nav = typeof navigator !== "undefined" ? navigator : undefined;
  if (nav && typeof nav.share === "function") {
    nav.share({ title: opts.name || "Carolina Flores & Decor", text, url }).catch(() => {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    });
    return;
  }
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
}
