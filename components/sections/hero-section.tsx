"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { BUSINESS, STATS } from "@/lib/constants"
import { ShoppingBasket, ChevronDown, Star } from "lucide-react"

export function HeroSection() {
  const { openCart } = useCart()

  return (
    <section
      id="inicio"
      className="relative pt-16 min-h-screen flex items-center overflow-hidden"
    >
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />

      {/* Blobs decorativos */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl -z-10" />

      <div className="container mx-auto px-4 pt-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Columna de texto */}
          <div className="space-y-7">

            {/* Badge */}
            <div className="animate-fadeInUp inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold w-fit">
              <Star size={14} className="fill-primary" />
              Auténtico desde {BUSINESS.foundedYear}
            </div>

            {/* Título */}
            <div className="animate-fadeInUp delay-100 space-y-2">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-7xl text-foreground leading-[1.1]">
                ¡Saborea el
                <span className="block text-gradient-primary">Auténtico</span>
                <span className="text-foreground">Sabor de </span>
                <span className="text-gradient-warm">México!</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-md pt-2">
                Tacos de canasta hechos con amor, tradición familiar y los
                mejores ingredientes de la CDMX.
              </p>
            </div>

            {/* Botones */}
            <div className="animate-fadeInUp delay-200 flex flex-col sm:flex-row gap-3">
              <Button
                onClick={openCart}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8 h-13 hover:scale-105 transition-all duration-200 gap-2 shadow-lg shadow-primary/30"
              >
                <ShoppingBasket size={20} />
                Ordenar Ahora
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-base px-8 h-13 bg-transparent transition-all duration-200"
              >
                <a href="#menu">Ver Menú 🌮</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-fadeInUp delay-300 flex items-center gap-0 pt-2">
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <div className="text-center px-4 sm:px-5 first:pl-0">
                    <div className="text-2xl sm:text-3xl font-bold text-primary leading-none">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="w-px h-10 bg-border flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Columna de imagen */}
          <div className="animate-fadeInUp delay-200 relative flex justify-center lg:justify-end">
            <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-3 scale-105 -z-10" />
            <div className="absolute inset-4 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-3xl -rotate-2 -z-10" />

            <div className="animate-float relative z-10 w-full max-w-md lg:max-w-full">
              <Image
                src="/don-sergio.png"
                alt={`${BUSINESS.name} — Tacos de Canasta`}
                width={600}
                height={500}
                priority
                className="w-full h-auto rounded-2xl shadow-2xl shadow-primary/20"
              />

              {/* Chip flotante inferior */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-background border border-border rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  🌮
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Desde solo</p>
                  <p className="font-bold text-primary text-lg leading-none">$10 MXN</p>
                </div>
              </div>

              {/* Chip flotante superior */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-primary text-primary-foreground rounded-2xl shadow-xl px-4 py-3 text-center">
                <p className="text-xl leading-none">⚡</p>
                <p className="text-xs font-semibold mt-1 whitespace-nowrap">Pedido rápido</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#nosotros"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/50 hover:text-primary transition-colors duration-200"
      >
        <span className="text-xs font-medium tracking-wide uppercase">Descubrir más</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  )
}
