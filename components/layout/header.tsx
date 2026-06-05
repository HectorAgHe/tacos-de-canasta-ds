"use client"

import { useState } from "react"
import { Menu, X, ShoppingBasket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { BUSINESS } from "@/lib/constants"

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#menu", label: "Menú" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, openCart } = useCart()

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="flex items-center space-x-2" onClick={closeMobile}>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">🌮</span>
          </div>
          <span className="font-heading font-bold text-xl text-primary">{BUSINESS.name}</span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-2">
          {/* Botón carrito */}
          <button
            aria-label={`Ver pedido (${itemCount} items)`}
            onClick={openCart}
            className="relative p-2 text-foreground hover:text-primary transition-colors"
          >
            <ShoppingBasket size={22} />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            )}
          </button>

          {/* Ordenar ahora (desktop) */}
          <Button
            onClick={openCart}
            className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            Ordenar Ahora
          </Button>

          {/* Hamburguesa (móvil) */}
          <button
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t px-4 pb-4 pt-2 flex flex-col gap-1 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="py-3 px-2 text-foreground hover:text-primary border-b border-border last:border-0 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={() => { closeMobile(); openCart() }}
            className="mt-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full"
          >
            Ordenar Ahora
          </Button>
        </div>
      )}
    </header>
  )
}
