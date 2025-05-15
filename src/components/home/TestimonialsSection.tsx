
import React from 'react';
import { Card } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Working with StudServe has been amazing. I got my logo design done by a talented student at half the price I would've paid elsewhere, and the quality was exceptional!",
    name: "Jessica Kim",
    role: "Small Business Owner",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 2,
    content: "The math tutoring I received helped me ace my finals. My tutor was patient, knowledgeable, and the scheduling was super flexible around my busy schedule.",
    name: "David Chen",
    role: "College Freshman",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    content: "As a student provider, I've been able to earn extra income doing what I love - graphic design. The platform makes it easy to showcase my work and find clients.",
    name: "Amina Hassan",
    role: "Design Student Provider",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What our community says
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Don't just take our word for it - hear from our happy buyers and student providers
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 bg-white shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-indigo-200" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
