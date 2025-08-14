import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">🌮</span>
          </div>
          <h1 className="font-heading font-bold text-xl text-primary">Tacos de Canasta</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
            Nosotros
          </a>
          <a href="#menu" className="text-foreground hover:text-primary transition-colors">
            Menú
          </a>
          <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>

        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">Ordenar Ahora</Button>
      </div>
    </header>
  )
}
