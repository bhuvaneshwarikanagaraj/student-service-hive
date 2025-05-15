import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight } from 'lucide-react';

// Mock data for featured services
const featuredServices = [
  {
    id: 1,
    title: 'Professional Logo Design',
    description: 'I will create a modern and eye-catching logo for your brand or project',
    category: 'Design',
    price: 25,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    provider: {
      name: 'Alex Johnson',
      university: 'Design University',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    }
  },
  {
    id: 2,
    title: 'Web Development with React',
    description: 'I will build responsive web applications using React and modern technologies',
    category: 'Programming',
    price: 45,
    rating: 4.9,
    reviews: 87,
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    provider: {
      name: 'Sarah Chen',
      university: 'Tech Institute',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    }
  },
  {
    id: 3,
    title: 'Mathematics Tutoring',
    description: 'I offer personalized tutoring for calculus, statistics, and algebra',
    category: 'Tutoring',
    price: 20,
    rating: 5.0,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    provider: {
      name: 'Michael Torres',
      university: 'State University',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  },
  {
    id: 4,
    title: 'Essay Editing & Proofreading',
    description: 'I will professionally edit and proofread your essays and academic papers',
    category: 'Writing',
    price: 15,
    rating: 4.7,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80',
    provider: {
      name: 'Emma Wilson',
      university: 'Liberal Arts College',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
    }
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured services</h2>
          <Link to="/services" className="text-indigo-600 hover:text-indigo-500 text-lg flex items-center">
            View all <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <Link to={`/services/${service.id}`} key={service.id}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="object-cover w-full h-48" 
                  />
                </div>
                
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-100">
                      {service.category}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1 text-gray-700">{service.rating}</span>
                      <span className="text-xs ml-1 text-gray-500">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="mt-2 text-lg font-medium text-gray-900 line-clamp-2">{service.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{service.description}</p>
                </CardContent>
                
                <CardFooter className="px-4 py-3 flex justify-between items-center bg-gray-50">
                  <div className="flex items-center">
                    <img
                      src={service.provider.avatar}
                      alt={service.provider.name}
                      className="h-6 w-6 rounded-full mr-2"
                    />
                    <div>
                      <p className="text-xs text-gray-600">{service.provider.name}</p>
                      <p className="text-xs text-gray-500">{service.provider.university}</p>
                    </div>
                  </div>
                  <p className="text-base font-medium text-gray-900">
                    Starting at ${service.price}
                  </p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
