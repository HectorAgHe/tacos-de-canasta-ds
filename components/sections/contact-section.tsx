import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">¡Contáctanos!</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Únete a nuestra comunidad de amantes de los tacos. Síguenos en redes sociales para ofertas especiales y
            actualizaciones deliciosas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Ubicación</h3>
                    <p className="text-muted-foreground">Calle Principal #123, Centro, Ciudad</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Teléfono</h3>
                    <p className="text-muted-foreground">+52 55 1234 5678</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Horarios</h3>
                    <p className="text-muted-foreground">Lun - Dom: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">
                ¿Listo para probar nuestros tacos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Haz tu pedido ahora y disfruta del auténtico sabor mexicano en minutos
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-12 py-4 transform hover:scale-105 transition-all duration-200"
              >
                Hacer Pedido
              </Button>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-foreground mb-4">Síguenos en redes sociales</h4>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
