import { Button } from '../../ui/button';

const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden py-20 lg:py-32" id="hero">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-green-600/90"></div>
        {/* <img */}
        {/*   src="/placeholder.svg?height=600&width=1200" */}
        {/*   alt="Ciudad de México" */}
        {/*   width={1200} */}
        {/*   height={600} */}
        {/*   className="absolute inset-0 -z-10 h-full w-full object-cover" */}
        {/* /> */}
        <div className="relative z-10 container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-center text-4xl font-bold lg:text-start lg:text-6xl">
              Descubre la Magia de la
              <span className="block text-yellow-300">Ciudad de México</span>
            </h1>
            <p className="mb-8 text-xl text-white/90 lg:text-2xl">
              Vive experiencias únicas en una de las ciudades más vibrantes del
              mundo. Cultura, gastronomía, historia y aventura te esperan.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-yellow-500 font-semibold text-black hover:bg-yellow-600"
              >
                Ver Experiencias
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-black"
              >
                Planifica tu Viaje
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
