import { Sparkles } from "lucide-react";

export function PromoBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-rose-deep text-white text-xs md:text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2 text-center">
        <Sparkles className="h-3.5 w-3.5 shrink-0" />
        <span>
          Entregas no mesmo dia em Vargem Grande do Sul e região · Peça online com facilidade
        </span>
      </div>
    </div>
  );
}
