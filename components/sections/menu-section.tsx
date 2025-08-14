import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MenuSection() {
  const menuItems = [
    {
      name: "Tacos de Guisado",
      description:
        "Deliciosos tacos rellenos de guisados tradicionales como chicharrón prensado, frijoles refritos y más",
      price: "$15",
      image: "/canasta-tacos.png",
    },
    {
      name: "Tacos de Papa con Chorizo",
      description: "Clásica combinación de papa suave con chorizo picante, perfectamente sazonados",
      price: "$18",
      image: "/potato-chorizo-tacos.png",
    },
    {
      name: "Tacos de Frijoles",
      description: "Tacos vegetarianos con frijoles refritos caseros y especias tradicionales",
      price: "$12",
      image: "/placeholder-6dv81.png",
    },
  ]

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">Nuestro Menú</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestros deliciosos tacos de canasta, cada uno preparado con ingredientes frescos y mucho amor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold">
                  {item.price}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-xl text-card-foreground">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{item.description}</p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Agregar al Pedido
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
