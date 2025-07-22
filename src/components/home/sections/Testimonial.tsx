import TestimonalCard from './cards/TestimonialCard';

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24" id="testimonials">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Lo que Dicen Nuestros Viajeros
          </h2>
          <p className="text-lg text-gray-600">
            Experiencias reales de personas que han vivido la magia de CDMX
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <TestimonalCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
