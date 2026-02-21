import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"
import Image from "next/image"

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfonos",
    value: "312 348 8633 / 310 266 0455",
    href: "tel:3123488633",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "fincaagroturisticaelrefugio@gmail.com",
    href: "mailto:fincaagroturisticaelrefugio@gmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Vereda San Vicente del Palmar, Corregimiento de Puerto Umbría, Villagarzón, Putumayo",
    href: "https://maps.google.com/?q=Villagarzon+Putumayo+Colombia",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@fincaagroturisticaelrefugio",
    href: "https://instagram.com/fincaagroturisticaelrefugio",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "El Refugio – Finca Agroturística",
    href: "https://facebook.com",
  },
]

export function ContactSection() {
  return (
    <section id="contacto" className="px-5 py-16 md:py-24 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">Contacto</p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
          {'¿Listo para tu aventura?'}
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          {'Contáctanos para reservar tu estadía o resolver cualquier duda. ¡Te esperamos!'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-start gap-4 rounded-xl bg-card border border-border p-4 hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 flex-shrink-0">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                <p className="text-sm text-foreground mt-0.5 break-words">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-primary p-8 md:p-10 text-center">
          <Image
            src="/images/logo.jpeg"
            alt="Logo El Refugio"
            width={80}
            height={80}
            className="rounded-full border-2 border-[#d4a017] mb-6"
          />
          <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground mb-3">
            Reserva por WhatsApp
          </h3>
          <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed max-w-xs">
            {'Escríbenos directamente para hacer tu reservación o preguntar por disponibilidad.'}
          </p>
          <a
            href="https://wa.me/573123488633"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[#faf8f4] px-6 py-3 text-sm font-bold text-primary hover:bg-[#faf8f4]/90 transition-colors"
          >
            <svg
              className="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
