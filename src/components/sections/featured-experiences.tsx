import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users } from "lucide-react"
import Image from "next/image"

interface Experience {
  id: number
  title: string
  description: string
  image: string
  price: string
  duration: string
  rating: number
  reviews: number
  category: string
}

interface FeaturedExperiencesProps {
  experiences: Experience[]
}

export function FeaturedExperiences({ experiences }: FeaturedExperiencesProps) {
  return (
    <section id="experiencias" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Experiencias Destacadas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Seleccionamos las mejores experiencias para que vivas la Ciudad de México como un local
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-white text-gray-900">{experience.category}</Badge>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg line-clamp-2">{experience.title}</CardTitle>
                <CardDescription className="line-clamp-2">{experience.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{experience.rating}</span>
                    <span className="text-sm text-gray-500">({experience.reviews})</span>
                  </div>
                  <div className="text-lg font-bold text-red-600">{experience.price}</div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Grupo pequeño</span>
                  </div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">Reservar</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
