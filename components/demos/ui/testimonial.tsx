"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  date: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Homeowner",
    content:
      "Excellent service! They replaced our roof quickly and professionally. The crew was courteous and cleaned up thoroughly after the job was done.",
    rating: 5,
    date: "3 months ago",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Property Manager",
    content:
      "We've used this roofing company for multiple properties and they've always delivered quality work. Their attention to detail is impressive.",
    rating: 5,
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Robert Davis",
    role: "Homeowner",
    content:
      "Very responsive and professional. They fixed our leaking roof during an emergency situation and followed up to ensure everything was working properly.",
    rating: 4,
    date: "2 months ago",
  },
  {
    id: 4,
    name: "Jennifer Smith",
    role: "Business Owner",
    content:
      "They installed a new commercial roof for our building. The price was competitive and the quality exceeded our expectations. Highly recommend!",
    rating: 5,
    date: "4 months ago",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Homeowner",
    content:
      "Great experience from start to finish. The estimator was knowledgeable, and the installation team was efficient and skilled. Our new roof looks fantastic!",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    id: 6,
    name: "Amanda Brown",
    role: "Homeowner",
    content:
      "They did an excellent job replacing our damaged shingles after a storm. Fair pricing and they worked with our insurance company to make the process smooth.",
    rating: 4,
    date: "1 month ago",
  },
  {
    id: 7,
    name: "Thomas Miller",
    role: "Contractor",
    content:
      "As a contractor, I've worked with many roofing companies, and this one stands out for their reliability and quality workmanship.",
    rating: 5,
    date: "3 months ago",
  },
  {
    id: 8,
    name: "Lisa Garcia",
    role: "Homeowner",
    content:
      "They installed our new roof with solar panel integration. The team was knowledgeable about the technical aspects and did a flawless installation.",
    rating: 5,
    date: "2 months ago",
  },
]

export function TestimonialCarousel() {
  return (
    <div className="relative w-full py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4">What Our Customers Say</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Hear directly from our satisfied customers about their experience working with us.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1">
                <Card className="border border-gray-200 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-5 w-5",
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-4">{testimonial.content}</p>
                    <div className="mt-auto">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>{testimonial.role}</span>
                        <span className="text-xs">{testimonial.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center mt-8 gap-4">
          <CarouselPrevious className="static transform-none" />
          <CarouselNext className="static transform-none" />
        </div>
      </Carousel>
    </div>
  )
}
