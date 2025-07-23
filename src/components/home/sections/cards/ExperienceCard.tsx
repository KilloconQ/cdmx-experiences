import { Clock, Star, Users } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { featuredExperiencesData } from '@/data/experiences';

const ExperienceCard = () => {
  return (
    <>
      {featuredExperiencesData.map((experience) => {
        console.log(experience.image);

        return (
          <Card
            key={experience.id}
            className="flex h-full flex-col overflow-hidden border-gray-200 transition-shadow hover:shadow-lg"
          >
            <div className="relative">
              <img
                src={experience.image || '/placeholder.svg'}
                alt={experience.title}
                width={400}
                height={300}
                className="h-48 w-full object-cover"
              />
              <Badge className="absolute top-3 left-3 bg-white text-gray-900">
                {experience.category}
              </Badge>
              {/* <Badge>Badge</Badge> */}
            </div>

            {/* Zona de contenido con altura fija para header */}
            <div className="flex flex-1 flex-col">
              {/* Header con min-h para reservar espacio */}
              <CardHeader className="min-h-[64px] pb-3">
                <CardTitle className="line-clamp-2 min-h-[48px] text-lg">
                  {experience.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 min-h-[36px]">
                  {experience.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col pt-0">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {experience.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({experience.reviews})
                    </span>
                  </div>
                  <div className="text-lg font-bold text-red-600">
                    {experience.price}
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>Grupo pequeño</span>
                  </div>
                </div>
                {/* Espaciador para empujar el botón */}
                <div className="flex-1" />
              </CardContent>
            </div>
            {/* Botón SIEMPRE abajo */}
            <div className="mx-6 flex items-center justify-center">
              <Button className="w-full bg-red-600 font-semibold text-white hover:bg-red-700">
                Reservar
              </Button>
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default ExperienceCard;
