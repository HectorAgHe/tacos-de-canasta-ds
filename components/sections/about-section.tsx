import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">Nuestra Historia</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestros tacos son elaborados con recetas tradicionales transmitidas de generación en generación, usando los
            ingredientes más frescos y servidos en la tradicional canasta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👨‍🍳</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-card-foreground">Recetas Tradicionales</h3>
              <p className="text-muted-foreground">
                Cada taco es preparado siguiendo recetas familiares que han pasado de generación en generación.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-card-foreground">Ingredientes Frescos</h3>
              <p className="text-muted-foreground">
                Seleccionamos cuidadosamente los mejores ingredientes locales para garantizar la máxima frescura.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🧺</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-card-foreground">Canasta Tradicional</h3>
              <p className="text-muted-foreground">
                Servidos en la auténtica canasta mexicana que mantiene el sabor y la temperatura perfecta.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
