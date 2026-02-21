"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Gastronomía", href: "#gastronomia" },
  { label: "Alojamiento", href: "#alojamiento" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="Logo Finca Agroturística El Refugio"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="hidden sm:block">
            <p className="font-serif text-sm font-semibold text-foreground leading-tight">El Refugio</p>
            <p className="text-xs text-muted-foreground">Finca Agroturística</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-background z-40">
          <nav className="flex flex-col px-6 pt-6 pb-8 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center py-4 text-lg font-medium text-foreground hover:text-primary border-b border-border transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-6 flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="tel:3123488633" className="flex items-center gap-3 py-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>312 348 8633</span>
            </a>
            <a href="mailto:fincaagroturisticaelrefugio@gmail.com" className="flex items-center gap-3 py-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>fincaagroturisticaelrefugio@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 py-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{'Villagarzón, Putumayo'}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
