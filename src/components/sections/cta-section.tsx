import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-red-600 to-green-600">
      <div className="container mx-auto px-4 lg:px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">¿Listo para tu Aventura en CDMX?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Reserva ahora y obtén un 15% de descuento en tu primera experiencia. La Ciudad de México te está esperando.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            <MapPin className="w-5 h-5 mr-2" />
            Reservar Experiencia
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black bg-transparent"
          >
            Contactar Asesor
          </Button>
        </div>
      </div>
    </section>
  )
}
