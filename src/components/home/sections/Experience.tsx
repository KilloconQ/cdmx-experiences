import ExperienceCard from '../shared/ExperienceCard';

const Experience = () => {
  return (
    <>
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r"></div>
        <div>
          <h1 className="mb-6 text-center text-4xl font-bold lg:text-6xl">
            Experiencias Populares
          </h1>
          <p className="text-center text-xl text-gray-500">
            Seleccionamos las mejores experiencias para que vivas la Ciudad de
            México como un local
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ExperienceCard />
        </div>
      </section>
      ;
    </>
  );
};

export default Experience;
