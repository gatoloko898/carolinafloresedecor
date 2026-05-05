const WHATSAPP_URL = "https://wa.me/5519993639296?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-elegant ring-4 ring-white/40 transition-transform group-hover:scale-110 animate-float">
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.745.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.464-1.318.13-.33.158-.673.158-1.018 0-.213-.06-.358-.221-.482-.155-.123-1.42-.74-1.728-.74m-3.122 6.39h-.018a9.953 9.953 0 01-5.06-1.388l-.36-.215-3.764.985 1.005-3.67-.236-.376A9.94 9.94 0 016 13.526C6.005 8.034 10.475 3.564 15.984 3.564a9.91 9.91 0 017.066 2.93 9.92 9.92 0 012.93 7.066c-.005 5.494-4.475 9.965-9.974 9.965M24.83 4.65A12.07 12.07 0 0015.984 1c-6.652 0-12.066 5.413-12.07 12.066 0 2.127.555 4.21 1.612 6.04L3.81 25.71l6.748-1.77a12.075 12.075 0 005.42 1.38h.005c6.654 0 12.067-5.415 12.07-12.07a11.985 11.985 0 00-3.523-8.6"/>
        </svg>
      </span>
    </a>
  );
}

export { WHATSAPP_URL };
