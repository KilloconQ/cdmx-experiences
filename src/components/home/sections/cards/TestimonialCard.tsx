import { Star } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/data/testimonial';

interface Testimonial {
  name: string;
  country: string;
  text: string;
  rating: number;
}

const TestimonialCard = () => {
  return (
    <>
      {testimonials.map((testimonial: Testimonial, index) => (
        <Card key={index} className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="mb-4 text-gray-600 italic">"{testimonial.text}"</p>
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-green-500 font-semibold text-white">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">
                  {testimonial.country}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TestimonialCard;
