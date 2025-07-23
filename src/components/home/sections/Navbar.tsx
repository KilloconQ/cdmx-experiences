import { Button } from '@/components/ui/button';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    console.log(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <nav className="flex w-full flex-row items-center justify-between px-6 py-4">
          <div className="flex flex-row items-center gap-4">
            <img />
            <p className="cursor-pointer text-xl font-bold text-gray-900">
              Explora CDMX
            </p>
          </div>
          <div className="flex cursor-pointer flex-row items-center space-x-16 text-sm font-bold">
            <a onClick={() => scrollToSection('experiences')}>Experiencias</a>
            <a onClick={() => scrollToSection('category')}>Categorías</a>
            <a onClick={() => scrollToSection('testimonials')}>Testimonios</a>
            <a onClick={() => scrollToSection('contact')}>Contacto</a>
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
