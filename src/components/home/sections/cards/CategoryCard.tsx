import { categories } from '@/data/categories';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CategoryCard = () => {
  return (
    <>
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
    </>
  );
};

export default CategoryCard;
