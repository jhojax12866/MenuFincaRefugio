import Image from "next/image"
import {
  Home,
  Tent,
  UtensilsCrossed,
  Armchair,
  Gamepad2,
  Flame,
  Bird,
  Footprints,
  Waves,
  Fish,
  TreePine,
  Sprout,
} from "lucide-react"

const services = [
  { icon: Home, label: "Alojamiento Rural", description: "Cabañas familiares y personales" },
  { icon: Tent, label: "Zona de Camping", description: "Acampa en la naturaleza" },
  { icon: UtensilsCrossed, label: "Restaurante Campestre", description: "Gastronomía típica" },
  { icon: Armchair, label: "Zona de Hamacas", description: "Relájate al aire libre" },
  { icon: Gamepad2, label: "Juegos de Mesa", description: "Diversión en familia" },
  { icon: Flame, label: "Fogata", description: "Noches bajo las estrellas" },
  { icon: Bird, label: "Avistamiento de Aves", description: "Fauna regional única" },
  { icon: Footprints, label: "Senderismo", description: "Ruta del Agua y más" },
  { icon: Waves, label: "Baño en Río", description: "Río San Vicente" },
  { icon: Fish, label: "Pesca Recreativa", description: "Diversión garantizada" },
  { icon: TreePine, label: "Reforestación", description: "Apadrina un árbol" },
  { icon: Sprout, label: "Agroturismo", description: "Conoce nuestros cultivos" },
]

const highlights = [
  {
    image: "/images/actividades.jpg",
    title: "Senderismo & Aventura",
    description: "Caminata en la ribera del Río San Vicente (Ruta del Agua), avistamiento de aves y herpetos en caminata nocturna.",
  },
  {
    image: "/images/camping.jpg",
    title: "Camping & Fogata",
    description: "Zona de camping rodeada de naturaleza con fogata nocturna para compartir bajo las estrellas.",
  },
  {
    image: "/images/agroturismo.jpg",
    title: "Agroturismo",
    description: "Conoce cultivos de Plátano, Chontaduro, Cacao, Açaí, Sacha Inchi, Yota y árboles frutales de la zona.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="px-5 py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">Nuestros Servicios</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Todo lo que te ofrecemos
          </h2>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 mb-16">
          {services.map((service) => (
            <div
              key={service.label}
              className="flex flex-col items-center text-center rounded-xl bg-card border border-border p-3 md:p-4 hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 mb-2 md:mb-3">
                <service.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-foreground leading-tight">{service.label}</h3>
              <p className="hidden md:block text-xs text-muted-foreground mt-1">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
