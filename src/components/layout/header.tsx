import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Menu } from 'lucide-react'; // Icono para el botón del menú

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gray-800"></div>
          <span className="text-xl font-bold text-gray-900">Explora CDMX</span>
        </div>
        <nav className="hidden items-center space-x-6 md:flex">
          {' '}
          {/* Navegación de escritorio */}
          <a
            href="#experiencias"
            className="text-sm font-medium transition-colors hover:text-red-600"
          >
            Experiencias
          </a>
          <a
            href="#categorias"
            className="text-sm font-medium transition-colors hover:text-red-600"
          >
            Categorías
          </a>
          <a
            href="#testimonios"
            className="text-sm font-medium transition-colors hover:text-red-600"
          >
            Testimonios
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium transition-colors hover:text-red-600"
          >
            Contacto
          </a>
        </nav>
        <Button className="bg-red-600 hover:bg-red-700">Reservar Ahora</Button>
      </div>
    </header>
  );
}

export default Header;
