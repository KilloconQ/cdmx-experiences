import { categories } from '@/data/categories';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { LucideIcon } from 'lucide-react';

interface Category {
  name: string;
  icon: LucideIcon;
  count: number;
  color: string;
}

const Category = () => {
  return (
    <section id="categorias" className="bg-gray-50 py-16 lg:py-24">
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
          {categories.map((category) => (
            <Card
              key={category.name}
              className="flex h-full cursor-pointer flex-col overflow-hidden border-gray-200 transition-shadow hover:shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <category.icon className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{category.name}</h3>
                <Badge className={category.color}>
                  {category.count} experiencias
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
