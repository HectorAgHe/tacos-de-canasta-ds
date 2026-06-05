import { MessageCircle } from "lucide-react"
import { BUSINESS, CONTACT, HOURS, buildWhatsAppUrl } from "@/lib/constants"

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#menu", label: "Menú" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(
    `¡Hola! Me gustaría hacer un pedido en *${BUSINESS.name}* 🌮`
  )

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">

      <div className="container mx-auto px-4 pt-14 pb-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Columna marca */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center text-lg">
                🌮
              </div>
              <span className="font-heading font-bold text-xl">{BUSINESS.name}</span>
            </div>
            <p className="text-primary-foreground/75 text-sm leading-relaxed mb-5">
              Auténtico sabor mexicano desde {BUSINESS.foundedYear}. Tacos
              tradicionales hechos con amor y los mejores ingredientes de la CDMX.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200"
            >
              <MessageCircle size={16} />
              Pedir por WhatsApp
            </a>
          </div>

          {/* Columna navegación */}
          <div>
            <h4 className="font-semibold text-base mb-4">Navegación</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-all duration-150 hover:pl-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna contacto */}
          <div>
            <h4 className="font-semibold text-base mb-4">Dónde encontrarnos</h4>
            <div className="space-y-2.5 text-primary-foreground/70 text-sm">
              <p className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">📍</span>
                {CONTACT.address}
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                {CONTACT.phone}
              </p>
              {HOURS.map((h) => (
                <p key={h.days} className="flex items-start gap-2">
                  <span className="flex-shrink-0">⏰</span>
                  <span>
                    <span className="font-medium text-primary-foreground/90">{h.days}:</span>{" "}
                    {h.time}
                  </span>
                </p>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-primary-foreground/50 text-xs">
          <p>
            &copy; {BUSINESS.copyrightYear}{" "}
            <span className="font-semibold text-primary-foreground/70">{BUSINESS.name}</span>.
            Todos los derechos reservados.
          </p>
          <p>Hecho con ❤️ en Ciudad de México</p>
        </div>
      </div>
    </footer>
  )
}
