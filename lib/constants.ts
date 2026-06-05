// ============================================================
//  CONSTANTES DEL NEGOCIO — Tacos Don Sergio
//  Modifica este archivo para actualizar datos en toda la app
// ============================================================

export const BUSINESS = {
  name: "Tacos Don Sergio",
  tagline: "Sabor Auténtico Mexicano",
  description:
    "Deliciosos tacos de canasta hechos con amor y recetas tradicionales desde 2008. ¡Prueba el auténtico sabor de México!",
  foundedYear: 2008,
  copyrightYear: new Date().getFullYear(),
} as const

export const CONTACT = {
  whatsappNumber: "525639752147",
  phone: "56 3975 2147",
  email: "",
  address: "Colonia Guerrero, Alcaldía Cuauhtémoc, CDMX",
  addressShort: "Col. Guerrero, CDMX",
  googleMapsUrl: "https://maps.google.com/?q=Colonia+Guerrero+CDMX",
} as const

export const HOURS = [
  { days: "Lunes – Viernes", time: "7:00 AM – 2:00 PM" },
  { days: "Sábado – Domingo", time: "7:00 AM – 3:00 PM" },
] as const

export const SOCIAL = {
  facebook: "#",
  instagram: "#",
  tiktok: "#",
} as const

export const STATS = [
  { value: "500+", label: "Clientes Felices" },
  { value: "15+", label: "Años de Experiencia" },
  { value: "100%", label: "Ingredientes Frescos" },
] as const

// ============================================================
//  MENÚ
//  Campos:
//    id          Identificador único (sin espacios)
//    name        Nombre que se muestra en la card
//    description Descripción breve
//    price       Precio en pesos MXN
//    image       Ruta en /public  (ej: "/mi-foto.jpg")
//    emoji       Emoji representativo
//    category    Categoría para el filtro
//    popular     true → badge "Popular" en la card
//    available   false → oculta el ítem del menú
// ============================================================

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  emoji: string
  category: string
  popular?: boolean
  available?: boolean
}

export const MENU_CATEGORIES = ["Clásicos", "Especiales", "Vegetarianos"] as const

export const MENU_ITEMS: MenuItem[] = [
  // ── CLÁSICOS ──────────────────────────────────────────────
  {
    id: "guisado",
    name: "Tacos de Guisado",
    description: "Chicharrón prensado, frijoles refritos y más guisados caseros en tortilla de maíz suave",
    price: 15,
    image: "/canasta-tacos.png",
    emoji: "🌮",
    category: "Clásicos",
    popular: true,
  },
  {
    id: "papa-chorizo",
    name: "Tacos de Papa con Chorizo",
    description: "Papa suave con chorizo picante, perfectamente sazonados y envueltos en tortilla caliente",
    price: 18,
    image: "/potato-chorizo-tacos.png",
    emoji: "🥔",
    category: "Clásicos",
    popular: true,
  },
  {
    id: "chicharron",
    name: "Tacos de Chicharrón",
    description: "Crujiente chicharrón bañado en salsa verde con cilantro y cebolla finamente picados",
    price: 15,
    image: "/canasta-tacos.png",
    emoji: "🥓",
    category: "Clásicos",
  },
  {
    id: "cochinita",
    name: "Tacos de Cochinita Pibil",
    description: "Cerdo marinado en achiote y naranja agria, cocinado lentamente. Con cebolla morada",
    price: 20,
    image: "/canasta-tacos.png",
    emoji: "🍖",
    category: "Clásicos",
    popular: true,
  },
  // ── ESPECIALES ────────────────────────────────────────────
  {
    id: "canasta-surtida",
    name: "Canasta Surtida (12 pzas)",
    description: "Selección de 12 tacos variados: guisado, papa chorizo, chicharrón y frijoles. ¡Ideal para compartir!",
    price: 150,
    image: "/canasta-tacos.png",
    emoji: "🧺",
    category: "Especiales",
    popular: true,
  },
  {
    id: "canasta-familiar",
    name: "Canasta Familiar (25 pzas)",
    description: "25 tacos surtidos a tu elección. Perfecta para reuniones familiares o de oficina",
    price: 300,
    image: "/canasta-tacos.png",
    emoji: "🎉",
    category: "Especiales",
  },
  // ── VEGETARIANOS ──────────────────────────────────────────
  {
    id: "frijoles",
    name: "Tacos de Frijoles",
    description: "Frijoles refritos caseros con especias tradicionales en tortilla de maíz caliente",
    price: 12,
    image: "/placeholder-6dv81.png",
    emoji: "🫘",
    category: "Vegetarianos",
  },
  {
    id: "rajas",
    name: "Tacos de Rajas con Crema",
    description: "Suaves rajas de chile poblano salteadas con crema y queso Oaxaca derretido",
    price: 14,
    image: "/placeholder-6dv81.png",
    emoji: "🌶️",
    category: "Vegetarianos",
    popular: true,
  },
]

// ============================================================
//  UTILIDADES
// ============================================================

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`
}

export function buildOrderMessage(
  items: Array<{ name: string; quantity: number; price: number }>,
  total: number
): string {
  const lines = items
    .map((item) => `  • ${item.name} x${item.quantity} — $${item.price * item.quantity} MXN`)
    .join("\n")

  return (
    `¡Hola! Me gustaría hacer un pedido en *${BUSINESS.name}* 🌮\n\n` +
    `*Mi pedido:*\n${lines}\n\n` +
    `*Total estimado: $${total} MXN*\n\n` +
    `¿Tienen disponibilidad? ¡Gracias! 😊`
  )
}

// ============================================================
//  MASCOT — Imagen del personaje / logo del negocio
//  Coloca el archivo en /public y actualiza la ruta aquí.
//  Deja en "" para ocultar la imagen.
// ============================================================
export const MASCOT_IMAGE = "/don-sergio2.png" // <- reemplaza con tu imagen, ej: "/don-sergio.png"
export const MASCOT_ALT   = "Don Sergio — Taquero en bicicleta"

// ============================================================
//  VIDEOS — Carrusel de YouTube en la landing
//  youtubeUrl: acepta cualquier formato de URL de YouTube:
//    https://www.youtube.com/watch?v=VIDEO_ID
//    https://youtu.be/VIDEO_ID
//    VIDEO_ID  (solo el id)
// ============================================================
export interface VideoItem {
  id: string
  title: string
  description?: string
  youtubeUrl: string
}

export const VIDEOS: VideoItem[] = [
  {
    id: "vid1",
    title: "Así preparamos nuestros tacos",
    description: "Mira de cerca cómo elaboramos cada canasta con ingredientes frescos.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // <- reemplaza con tu video real
  },
  {
    id: "vid2",
    title: "El sabor que enamora",
    description: "Testimonios de nuestros clientes más fieles de la Colonia Guerrero.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // <- reemplaza con tu video real
  },
  {
    id: "vid3",
    title: "Una tradición que no para",
    description: "Don Sergio recorre la CDMX llevando tacos a cada rincón.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // <- reemplaza con tu video real
  },
]

/** Extrae la URL de embed de YouTube a partir de cualquier formato */
export function getYouTubeEmbedUrl(url: string): string {
  const shortMatch = url.match(/youtu\.be\/([^?&\s]+)/)
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`

  const longMatch = url.match(/[?&]v=([^&\s]+)/)
  if (longMatch) return `https://www.youtube.com/embed/${longMatch[1]}`

  if (url.includes("youtube.com/embed/")) return url

  // Tratar como ID directo
  return `https://www.youtube.com/embed/${url}`
}
