import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Cta = () => {
  return (
    <section
      className="bg-gradient-to-r from-red-600 to-green-600 py-16 lg:py-24"
      id="cta"
    >
      <div className="container mx-auto px-4 text-center lg:px-6">
        <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
          ¿Listo para tu Aventura en CDMX?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
          Reserva ahora y obtén un 15% de descuento en tu primera experiencia.
          La Ciudad de México te está esperando.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-yellow-500 font-semibold text-black hover:bg-yellow-600"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Reservar Experiencia
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white hover:text-black"
          >
            Contactar Asesor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
