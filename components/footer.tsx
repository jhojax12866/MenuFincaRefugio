export function Footer() {
  return (
    <footer className="bg-primary px-5 py-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-3">
        <p className="font-serif text-lg font-semibold text-primary-foreground">
          Finca Agroturística El Refugio
        </p>
        <p className="text-primary-foreground/70 text-xs leading-relaxed max-w-md">
          Vereda San Vicente del Palmar, Corregimiento de Puerto Umbría, Villagarzón, Putumayo, Colombia.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <a
            href="https://instagram.com/fincaagroturisticaelrefugio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-[#d4a017] transition-colors text-xs"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <span className="text-primary-foreground/30">{'|'}</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-[#d4a017] transition-colors text-xs"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <span className="text-primary-foreground/30">{'|'}</span>
          <a
            href="https://wa.me/573123488633"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-[#d4a017] transition-colors text-xs"
            aria-label="WhatsApp"
          >
            WhatsApp
          </a>
        </div>
        <p className="text-primary-foreground/50 text-xs mt-4">
          {'© 2026 El Refugio. Todos los derechos reservados.'}
        </p>
      </div>
    </footer>
  )
}
