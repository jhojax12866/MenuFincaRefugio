import Image from "next/image"
import { Bed, Users, Tent, Check } from "lucide-react"

const accommodations = [
  {
    name: "Cabaña de Mary",
    icon: Bed,
    features: ["Baño privado"],
    prices: [
      { label: "1 persona", price: "$100.000" },
      { label: "2 personas", price: "$200.000" },
      { label: "Persona adicional", price: "$80.000" },
    ],
    highlighted: false,
  },
  {
    name: "Cabaña del Lago",
    icon: Users,
    features: ["Baño compartido", "Vista al lago"],
    prices: [
      { label: "1 persona", price: "$70.000" },
      { label: "2 personas", price: "$140.000" },
      { label: "Persona adicional", price: "$50.000" },
    ],
    highlighted: true,
  },
  {
    name: "Zona de Camping",
    icon: Tent,
    features: ["Incluye desayuno", "Acceso a baños"],
    prices: [
      { label: "Con carpa propia", price: "$30.000" },
      { label: "Sin carpa", price: "$50.000" },
    ],
    highlighted: false,
  },
]

export function AccommodationSection() {
  return (
    <section id="alojamiento" className="px-5 py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">Alojamiento</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Descansa en la naturaleza
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Todas las opciones de alojamiento incluyen desayuno. Elige la que mejor se adapte a tu estilo.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative rounded-xl overflow-hidden h-48 sm:h-64 mb-8">
          <Image
            src="/images/cabana.jpg"
            alt="Cabañas de alojamiento en El Refugio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e1a]/60 to-transparent" />
          <div className="absolute bottom-5 left-5">
            <p className="text-xs uppercase tracking-widest text-[#d4a017] font-semibold">Incluye desayuno</p>
            <p className="font-serif text-xl md:text-2xl font-bold text-[#faf8f4]">Cabañas Rústicas</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {accommodations.map((acc) => (
            <div
              key={acc.name}
              className={`rounded-xl border p-5 md:p-6 flex flex-col ${
                acc.highlighted
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-foreground"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex items-center justify-center h-10 w-10 rounded-full ${
                    acc.highlighted ? "bg-[#faf8f4]/15" : "bg-primary/10"
                  }`}
                >
                  <acc.icon
                    className={`h-5 w-5 ${
                      acc.highlighted ? "text-[#d4a017]" : "text-primary"
                    }`}
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold">{acc.name}</h3>
              </div>

              <ul className="flex flex-col gap-2 mb-5">
                {acc.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check
                      className={`h-4 w-4 flex-shrink-0 ${
                        acc.highlighted ? "text-[#d4a017]" : "text-primary"
                      }`}
                    />
                    <span className={acc.highlighted ? "text-[#faf8f4]/85" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-current/10">
                {acc.prices.map((price) => (
                  <div key={price.label} className="flex items-center justify-between text-sm">
                    <span className={acc.highlighted ? "text-[#faf8f4]/80" : "text-muted-foreground"}>
                      {price.label}
                    </span>
                    <span className={`font-bold ${acc.highlighted ? "text-[#d4a017]" : "text-foreground"}`}>
                      {price.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
