import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight">
                ¡Saborea el Auténtico
                <span className="text-primary block">Sabor de México!</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Deliciosos Tacos de Canasta, hechos con amor y tradición familiar
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
              >
                Ordenar Ahora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-4 bg-transparent"
              >
                Ver Menú
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Clientes Felices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Ingredientes Frescos</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/tacos-de-canasta.png"
                alt="Tacos de Canasta en canasta tradicional"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-accent/20 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary/20 rounded-2xl -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
