import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { MenuSection } from "@/components/sections/menu-section"
import { VideosSection } from "@/components/sections/videos-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartProvider } from "@/lib/cart-context"
import { CartDrawer } from "@/components/ui/cart-drawer"

export default function HomePage() {
  return (
    <CartProvider>
      <CartDrawer />
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <VideosSection />
        <ContactSection />
        <Footer />
      </main>
    </CartProvider>
  )
}
