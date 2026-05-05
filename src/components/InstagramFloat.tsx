import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/carolinafloresedecor";

export function InstagramFloat() {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visite nosso Instagram"
      className="fixed bottom-24 right-6 z-50 group"
    >
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white shadow-elegant ring-4 ring-white/40 transition-transform group-hover:scale-110 animate-float">
        <Instagram className="h-7 w-7" strokeWidth={2.2} />
      </span>
    </a>
  );
}

export { INSTAGRAM_URL };
