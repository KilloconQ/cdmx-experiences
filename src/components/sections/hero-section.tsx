import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-green-600/90"></div>
      <Image
        src="/placeholder.svg?height=600&width=1200"
        alt="Ciudad de México"
        width={1200}
        height={600}
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Descubre la Magia de la
            <span className="block text-yellow-300">Ciudad de México</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-white/90">
            Vive experiencias únicas en una de las ciudades más vibrantes del mundo. Cultura, gastronomía, historia y
            aventura te esperan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Ver Experiencias
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Planifica tu Viaje
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
