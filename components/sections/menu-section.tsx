"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Plus, Minus, ShoppingBasket, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { MENU_ITEMS, type MenuItem } from "@/lib/constants"

const ALL_TAB = "Todos"
const categories = [
  ALL_TAB,
  ...Array.from(
    new Set(
      MENU_ITEMS.filter((i) => i.available !== false).map((i) => i.category)
    )
  ),
]

function MenuCard({ item }: { item: MenuItem }) {
  const { addItem, updateQuantity, items } = useCart()
  const cartItem = items.find((i) => i.menuItem.id === item.id)
  const qty = cartItem?.quantity ?? 0

  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">

      {/* Imagen */}
      <div className="relative overflow-hidden h-48">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {item.popular && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
            <Flame size={11} />
            Popular
          </div>
        )}

        <div className="absolute top-3 right-3 bg-primary text-primary-foreground font-bold text-sm px-3 py-1 rounded-full shadow-md">
          ${item.price} MXN
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start gap-2 mb-2">
          <span className="text-xl mt-0.5 flex-shrink-0">{item.emoji}</span>
          <h3 className="font-heading font-semibold text-base text-card-foreground leading-tight">
            {item.name}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
          {item.description}
        </p>

        {qty === 0 ? (
          <Button
            onClick={() => addItem(item)}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 group/btn"
          >
            <Plus size={16} className="group-hover/btn:rotate-90 transition-transform duration-200" />
            Agregar al Pedido
          </Button>
        ) : (
          <div className="flex items-center justify-between bg-muted rounded-xl p-1">
            <button
              aria-label="Quitar uno"
              onClick={() => updateQuantity(item.id, qty - 1)}
              className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-red-50 hover:border-red-300 hover:text-red-500 transition-colors"
            >
              <Minus size={14} />
            </button>
            <span className="font-bold text-foreground px-2 text-sm">{qty} en pedido</span>
            <button
              aria-label="Agregar uno más"
              onClick={() => addItem(item)}
              className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(ALL_TAB)
  const { itemCount, openCart } = useCart()

  const filteredItems = useMemo(
    () =>
      MENU_ITEMS.filter(
        (item) =>
          item.available !== false &&
          (activeCategory === ALL_TAB || item.category === activeCategory)
      ),
    [activeCategory]
  )

  return (
    <section id="menu" className="py-16 bg-background relative overflow-hidden">

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-accent/20">
            🌮 Lo que tenemos para ti
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
            Nuestro <span className="text-gradient-primary">Menú</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todos nuestros tacos se preparan el mismo día con ingredientes frescos.
            Sin conservadores, sin rollos.
          </p>
        </div>

        {/* Tabs de categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                  : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, i) => (
            <div
              key={item.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <MenuCard item={item} />
            </div>
          ))}
        </div>

        {/* CTA flotante cuando hay items en el carrito */}
        {itemCount > 0 && (
          <div className="mt-12 flex justify-center animate-fadeIn">
            <button
              onClick={openCart}
              className="animate-pulse-ring inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-2xl shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-105 transition-all duration-200"
            >
              <ShoppingBasket size={22} />
              Ver mi pedido ({itemCount} {itemCount === 1 ? "taco" : "tacos"})
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
