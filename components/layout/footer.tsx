export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🌮</span>
              </div>
              <h3 className="font-heading font-bold text-xl">Tacos de Canasta</h3>
            </div>
            <p className="text-primary-foreground/80">
              Auténtico sabor mexicano desde 2008. Tacos tradicionales hechos con amor y los mejores ingredientes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#inicio" className="hover:text-primary-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-primary-foreground transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-primary-foreground transition-colors">
                  Menú
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📍 Calle Principal #123, Centro</p>
              <p>📞 +52 55 1234 5678</p>
              <p>⏰ Lun - Dom: 8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Tacos de Canasta. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
