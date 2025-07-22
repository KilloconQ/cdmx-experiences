import type { LucideIcon } from 'lucide-react';

import CategoryCard from './cards/CategoryCard';

interface Category {
  name: string;
  icon: LucideIcon;
  count: number;
  color: string;
}

const Category = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24" id="category">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Explora por Categorías
          </h2>
          <p className="text-lg text-gray-600">
            Encuentra la experiencia perfecta según tus intereses
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CategoryCard />
        </div>
      </div>
    </section>
  );
};

export default Category;
