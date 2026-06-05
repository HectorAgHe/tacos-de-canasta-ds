"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { ShoppingBasket, X, Plus, Minus, Trash2, MessageCircle } from "lucide-react"

export function CartDrawer() {
  const {
    items,
    total,
    itemCount,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    sendWhatsAppOrder,
  } = useCart()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}

      {/* Panel lateral */}
      <div
        role="dialog"
        aria-label="Tu pedido"
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-background shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header del carrito */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBasket className="text-primary" size={22} />
            <h2 className="font-heading font-bold text-lg text-foreground">
              Tu Pedido
            </h2>
            {itemCount > 0 && (
              <span className="bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-muted"
          >
            <X size={20} />
          </button>
        </div>

        {/* Lista de items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 text-muted-foreground">
              <ShoppingBasket size={48} className="opacity-30" />
              <div>
                <p className="font-medium text-foreground">Tu carrito está vacío</p>
                <p className="text-sm mt-1">Agrega tacos desde el menú 🌮</p>
              </div>
            </div>
          ) : (
            items.map(({ menuItem, quantity }) => (
              <div
                key={menuItem.id}
                className="flex items-center gap-3 bg-muted/50 rounded-xl p-3"
              >
                {/* Emoji / imagen */}
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  {menuItem.emoji}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground leading-tight truncate">
                    {menuItem.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ${menuItem.price} c/u
                  </p>
                </div>

                {/* Controles de cantidad */}
                <div className="flex items-center gap-1">
                  <button
                    aria-label="Quitar uno"
                    onClick={() => updateQuantity(menuItem.id, quantity - 1)}
                    className="w-6 h-6 rounded-full bg-background border flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-6 text-center text-sm font-bold">{quantity}</span>
                  <button
                    aria-label="Agregar uno"
                    onClick={() => updateQuantity(menuItem.id, quantity + 1)}
                    className="w-6 h-6 rounded-full bg-background border flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Plus size={12} />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-right min-w-[40px]">
                  <p className="text-sm font-bold text-primary">
                    ${menuItem.price * quantity}
                  </p>
                </div>

                {/* Eliminar */}
                <button
                  aria-label={`Eliminar ${menuItem.name}`}
                  onClick={() => removeItem(menuItem.id)}
                  className="text-muted-foreground hover:text-destructive transition-colors ml-1"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer: resumen y botón de WhatsApp */}
        {items.length > 0 && (
          <div className="border-t px-5 py-4 space-y-4 bg-background">
            {/* Total */}
            <div className="flex justify-between items-center text-base">
              <span className="text-muted-foreground">
                {itemCount} {itemCount === 1 ? "taco" : "tacos"}
              </span>
              <div className="text-right">
                <span className="text-xs text-muted-foreground block">Total estimado</span>
                <span className="text-2xl font-bold text-primary">${total} MXN</span>
              </div>
            </div>

            {/* Botón principal */}
            <Button
              onClick={sendWhatsAppOrder}
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#1ebe5e] text-white font-bold text-base gap-2"
            >
              <MessageCircle size={20} />
              Enviar Pedido por WhatsApp
            </Button>

            {/* Vaciar carrito */}
            <button
              onClick={clearCart}
              className="w-full text-xs text-muted-foreground hover:text-destructive transition-colors text-center"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  )
}
