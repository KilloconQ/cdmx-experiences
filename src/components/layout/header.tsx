import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-green-500 rounded-full"></div>
          <span className="text-xl font-bold text-gray-900">CDMX Experiences</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#experiencias" className="text-sm font-medium hover:text-red-600 transition-colors">
            Experiencias
          </Link>
          <Link href="#categorias" className="text-sm font-medium hover:text-red-600 transition-colors">
            Categorías
          </Link>
          <Link href="#testimonios" className="text-sm font-medium hover:text-red-600 transition-colors">
            Testimonios
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-red-600 transition-colors">
            Contacto
          </Link>
        </nav>
        <Button className="bg-red-600 hover:bg-red-700">Reservar Ahora</Button>
      </div>
    </header>
  )
}
