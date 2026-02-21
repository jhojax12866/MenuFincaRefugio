import { TreePine, Sun, Droplets, Bird } from "lucide-react"

const features = [
  {
    icon: TreePine,
    title: "Naturaleza Viva",
    description: "Rodeada de verdes prados, jardines, senderos y diversidad de cultivos.",
  },
  {
    icon: Bird,
    title: "Fauna y Flora",
    description: "Diversidad de animales, aves y vida silvestre propia de la región amazónica.",
  },
  {
    icon: Droplets,
    title: "Fuentes Hídricas",
    description: "Ríos, quebradas y humedales para disfrutar del agua cristalina.",
  },
  {
    icon: Sun,
    title: "Paisajes Únicos",
    description: "Maravillosos amaneceres y atardeceres en el corazón del Putumayo.",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="px-5 py-16 md:py-24 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">Sobre nosotros</p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
          Tu refugio en la naturaleza
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          Nuestra finca es un lugar para desconectarse de la tecnología, de la civilización y del diario vivir.
          La arquitectura, diseño y naturalidad de sus edificaciones está rodeada de un paisaje
          que permite brindar a sus visitantes una placentera estadía y un mágico lugar para el descanso.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center rounded-xl bg-card border border-border p-5 md:p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-sm md:text-base font-semibold text-foreground mb-1">{feature.title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
