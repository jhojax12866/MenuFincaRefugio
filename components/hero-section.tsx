import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[85vh] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-farm.jpg"
          alt="Vista panorámica de la Finca Agroturística El Refugio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1a]/90 via-[#1a2e1a]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 pb-12 pt-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <Image
            src="/images/logo.jpeg"
            alt="Logo El Refugio"
            width={100}
            height={100}
            className="rounded-full border-2 border-[#d4a017] mb-6 shadow-lg"
          />
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#faf8f4] leading-tight text-balance">
            Finca Agroturística
            <br />
            <span className="text-[#d4a017]">El Refugio</span>
          </h1>
          <p className="mt-4 text-[#faf8f4]/85 text-base sm:text-lg max-w-xl leading-relaxed text-pretty">
            Un lugar para desconectarse de la tecnología y disfrutar de la naturaleza.
            Descanso, relajación y actividades al aire libre en Villagarzón, Putumayo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Descubre nuestros servicios
            </a>
            <a
              href="https://wa.me/573123488633"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#faf8f4]/15 backdrop-blur-sm border border-[#faf8f4]/30 px-6 py-3 text-sm font-semibold text-[#faf8f4] hover:bg-[#faf8f4]/25 transition-colors"
            >
              Reservar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
