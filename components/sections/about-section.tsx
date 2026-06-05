import Image from "next/image"
import { ChefHat, Leaf, ShoppingBasket, Clock, Award, Heart } from "lucide-react"
import { BUSINESS, MASCOT_IMAGE, MASCOT_ALT } from "@/lib/constants"

const features = [
  {
    icon: ChefHat,
    title: "Recetas Tradicionales",
    description: "Cada taco sigue recetas familiares transmitidas de generación en generación desde 2008.",
    color: "bg-primary/10 text-primary",
    borderColor: "border-t-primary",
  },
  {
    icon: Leaf,
    title: "Ingredientes Frescos",
    description: "Seleccionamos diariamente los mejores ingredientes del mercado local para garantizar la máxima frescura.",
    color: "bg-accent/10 text-accent",
    borderColor: "border-t-accent",
  },
  {
    icon: ShoppingBasket,
    title: "Canasta Tradicional",
    description: "Servidos en la auténtica canasta mexicana que conserva el vapor, el sabor y la temperatura perfecta.",
    color: "bg-primary/10 text-primary",
    borderColor: "border-t-primary",
  },
  {
    icon: Clock,
    title: "Siempre a Tiempo",
    description: "Listos desde temprano para que arranques tu día con energía. No hay mejor desayuno que unos tacos.",
    color: "bg-orange-100 text-orange-600",
    borderColor: "border-t-orange-500",
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Más de 15 años siendo el favorito del barrio. La fidelidad de nuestros clientes habla por nosotros.",
    color: "bg-accent/10 text-accent",
    borderColor: "border-t-accent",
  },
  {
    icon: Heart,
    title: "Hecho con Amor",
    description: "Detrás de cada canasta hay una familia que pone el corazón en su trabajo para darte lo mejor.",
    color: "bg-orange-100 text-orange-600",
    borderColor: "border-t-orange-500",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 bg-muted/30 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">

        {/* Encabezado con mascot */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-14">

          {/* Mascot — visible si MASCOT_IMAGE está configurado */}
          {MASCOT_IMAGE && (
            <div className="flex-shrink-0 flex justify-center md:justify-start order-2 md:order-1">
              <div className="relative">
                {/* Fondo circular decorativo */}
                <div className="w-48 h-48 md:w-72 md:h-72 rounded-full flex items-center justify-center relative">
                  {/* Anillo de gradiente exterior */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 p-1">
                    <div className="w-full h-full rounded-full bg-white" />
                  </div>
                  <Image
                    src={MASCOT_IMAGE}
                    alt={MASCOT_ALT}
                    width={280}
                    height={280}
                    className="relative z-10 w-40 h-40 md:w-64 md:h-64 object-contain drop-shadow-lg animate-float"
                  />
                </div>
                {/* Badge decorativo */}
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
                  ⭐ Desde {BUSINESS.foundedYear}
                </div>
              </div>
            </div>
          )}

          {/* Texto de encabezado */}
          <div className={`text-center md:text-left order-1 md:order-2 ${MASCOT_IMAGE ? "" : "mx-auto max-w-2xl"}`}>
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-3 border border-primary/20">
              🫶 Nuestra Historia
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-3">
              ¿Por qué elegir a{" "}
              <span className="text-gradient-primary">{BUSINESS.name}</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Más que tacos, te ofrecemos una experiencia gastronómica auténtica,
              la misma que las familias de la CDMX disfrutan desde hace décadas.
            </p>
          </div>
        </div>

        {/* Grid de features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                style={{ animationDelay: `${i * 80}ms` }}
                className={`animate-fadeInUp bg-card border border-border border-t-4 ${feature.borderColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className={`w-11 h-11 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Banner CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-5 text-primary-foreground shadow-xl shadow-primary/20">
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-xl md:text-3xl mb-1">
              ¿Listo para probar el mejor taco de canasta?
            </h3>
            <p className="text-primary-foreground/80 text-sm md:text-base">
              Miles de clientes en la CDMX ya lo descubrieron. ¡Es tu turno!
            </p>
          </div>
          <a
            href="#menu"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-all duration-200 hover:scale-105 shadow-lg whitespace-nowrap"
          >
            Ver el Menú 🌮
          </a>
        </div>

      </div>
    </section>
  )
}
