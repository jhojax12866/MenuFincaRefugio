import Image from "next/image"

const almuerzo = [
  "Sancocho de Gallina de Campo",
  "Pescado (Tilapia)",
  "Carne de res, cerdo o Pechuga a la Plancha",
]

const desayuno = [
  "Empanadas o Cancharinas",
  "Caldo de Pescado o Caldo de Hígado",
  "Huevos al gusto",
  "Fruta",
]

export function GastronomySection() {
  return (
    <section id="gastronomia" className="px-5 py-16 md:py-24 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">Gastronomía</p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
          Sabores del campo
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          Disfruta de la gastronomía típica de la región preparada con ingredientes frescos directamente de nuestra finca.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Almuerzo */}
        <div className="rounded-xl overflow-hidden bg-card border border-border">
          <div className="relative h-48 sm:h-56">
            <Image
              src="/images/gastronomia.jpg"
              alt="Almuerzo campestre en El Refugio"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1a]/70 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#d4a017]">Almuerzo</p>
                  <h3 className="font-serif text-xl font-bold text-[#faf8f4]">Del Campo a tu Mesa</h3>
                </div>
                <span className="text-2xl font-bold text-[#d4a017]">$30.000</span>
              </div>
            </div>
          </div>
          <div className="p-5">
            <ul className="flex flex-col gap-3">
              {almuerzo.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="flex-shrink-0 h-2 w-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desayuno */}
        <div className="rounded-xl overflow-hidden bg-card border border-border">
          <div className="bg-primary p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#d4a017]">Desayuno</p>
            <h3 className="font-serif text-xl font-bold text-primary-foreground mt-1">Para Empezar el Día</h3>
            <span className="text-2xl font-bold text-[#d4a017] mt-2 block">$15.000</span>
          </div>
          <div className="p-5">
            <ul className="flex flex-col gap-3">
              {desayuno.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="flex-shrink-0 h-2 w-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground italic">
              {'* Incluido con el alojamiento'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
