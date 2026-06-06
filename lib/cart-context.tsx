"use client"

import React, { createContext, useContext, useState, useCallback } from "react"
import type { MenuItem } from "@/lib/constants"
import { buildOrderMessage, buildWhatsAppUrl } from "@/lib/constants"

// ---- Tipos ----

export interface CartItem {
  menuItem: MenuItem
  quantity: number
}

interface CartContextValue {
  items: CartItem[]
  total: number
  itemCount: number
  isOpen: boolean
  addItem: (item: MenuItem) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  sendWhatsAppOrder: () => void
}

// ---- Contexto ----

const CartContext = createContext<CartContextValue | null>(null)

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>")
  return ctx
}

// ---- Provider ----

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const total = items.reduce(
    (sum, { menuItem, quantity }) => sum + menuItem.price * quantity,
    0
  )

  const itemCount = items.reduce((sum, { quantity }) => sum + quantity, 0)

  const addItem = useCallback((menuItem: MenuItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.menuItem.id === menuItem.id)
      if (existing) {
        return prev.map((i) =>
          i.menuItem.id === menuItem.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { menuItem, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((itemId: string) => {
    setItems((prev) => prev.filter((i) => i.menuItem.id !== itemId))
  }, [])

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.menuItem.id !== itemId))
      return
    }
    setItems((prev) =>
      prev.map((i) =>
        i.menuItem.id === itemId ? { ...i, quantity } : i
      )
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), [])

  const sendWhatsAppOrder = useCallback(() => {
    if (items.length === 0) return
    const orderLines = items.map(({ menuItem, quantity }) => ({
      name: menuItem.name,
      quantity,
      price: menuItem.price,
    }))
    const message = buildOrderMessage(orderLines, total)
    const url = buildWhatsAppUrl(message)
    window.open(url, "_blank", "noopener,noreferrer")
  }, [items, total])

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        itemCount,
        isOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
        sendWhatsAppOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
