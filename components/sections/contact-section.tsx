import { MapPin, Phone, Clock, MessageCircle, Facebook, Instagram } from "lucide-react"
import { CONTACT, HOURS, SOCIAL, BUSINESS, buildWhatsAppUrl } from "@/lib/constants"

export function ContactSection() {
  const whatsappUrl = buildWhatsAppUrl(
    `¡Hola! Me gustaría hacer un pedido en *${BUSINESS.name}* 🌮`
  )

  return (
    <section id="contacto" className="py-16 bg-muted/30 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-primary/20">
            📍 Encuentranos
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
            ¡<span className="text-gradient-primary">Contáctanos</span>!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos en el corazón de la Ciudad de México. Escríbenos por WhatsApp
            y te respondemos al momento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Tarjetas de información */}
          <div className="space-y-4">

            {/* Ubicación */}
            <div className="animate-fadeInUp bg-card border border-border rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary/10 text-primary">
                <MapPin size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-card-foreground mb-1">Ubicación</h3>
                <p className="text-muted-foreground text-sm">{CONTACT.address}</p>
                {CONTACT.googleMapsUrl && (
                  <a
                    href={CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-xs font-medium hover:underline mt-1 inline-block"
                  >
                    Ver en Google Maps →
                  </a>
                )}
              </div>
            </div>

            {/* Teléfono / WhatsApp */}
            <div className="animate-fadeInUp delay-100 bg-card border border-border rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#25D366]/10 text-[#25D366]">
                <Phone size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-card-foreground mb-1">WhatsApp / Teléfono</h3>
                <p className="text-muted-foreground text-sm">{CONTACT.phone}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-xs font-medium hover:underline mt-1 inline-block"
                >
                  Enviar mensaje →
                </a>
              </div>
            </div>

            {/* Horarios */}
            <div className="animate-fadeInUp delay-200 bg-card border border-border rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-orange-100 text-orange-600">
                <Clock size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-card-foreground mb-2">Horarios de Servicio</h3>
                <div className="space-y-1">
                  {HOURS.map((h) => (
                    <p key={h.days} className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{h.days}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA principal */}
          <div className="flex flex-col gap-5">

            {/* Card WhatsApp */}
            <div className="bg-card border border-border rounded-3xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <MessageCircle size={32} className="text-[#25D366]" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                ¿Listo para ordenar?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Escríbenos directo por WhatsApp. Nuestro equipo te atiende al
                instante y confirma tu pedido en minutos.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5e] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#25D366]/30"
              >
                <MessageCircle size={20} />
                Pedir por WhatsApp
              </a>
            </div>

            {/* Redes sociales */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-4 text-center">
                Síguenos en redes sociales
              </h4>
              <div className="flex justify-center gap-3 flex-wrap">
                {SOCIAL.facebook && (
                  <a
                    href={SOCIAL.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-border rounded-xl px-4 py-2.5 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    <Facebook size={16} />
                    Facebook
                  </a>
                )}
                {SOCIAL.instagram && (
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-border rounded-xl px-4 py-2.5 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    <Instagram size={16} />
                    Instagram
                  </a>
                )}
                {SOCIAL.tiktok && (
                  <a
                    href={SOCIAL.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-border rounded-xl px-4 py-2.5 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                    </svg>
                    TikTok
                  </a>
                )}
                {!SOCIAL.facebook && !SOCIAL.instagram && !SOCIAL.tiktok && (
                  <p className="text-sm text-muted-foreground italic text-center w-full py-2">
                    ¡Próximamente en redes sociales! 🚀
                  </p>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
