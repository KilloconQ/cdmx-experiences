import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="top-0 flex w-full flex-row items-center justify-between px-6 py-4">
          <div className="flex flex-row items-center gap-4">
            <img />
            <p className="cursor-pointer text-xl font-bold text-gray-900">
              CDMX Experiences
            </p>
          </div>
          <div className="flex cursor-pointer flex-row items-center space-x-16 text-sm font-bold">
            <a>Experiencias</a>
            <a>Categorías</a>
            <a>Testimonios</a>
            <a>Contacto</a>
          </div>
          <div>
            <Button className="cursor-pointer bg-red-600 font-bold text-white hover:bg-red-700">
              Reservar ahora
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
