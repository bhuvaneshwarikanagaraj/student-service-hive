
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, CheckCircle } from "lucide-react";

// Mock gig data - in a real app this would come from an API
const mockGigData = {
  "1": {
    id: "1",
    title: "Professional Website Development",
    description: "I will build a responsive, modern website for your business or personal use. My services include:\n\n- Custom design based on your brand\n- Fully responsive layout for all devices\n- Basic SEO optimization\n- Contact form setup\n- Social media integration\n\nI use modern technologies like React, Next.js, and Tailwind CSS to create fast and beautiful websites that stand out.",
    price: 120,
    deliveryTime: "3 days",
    category: "Web Development",
    image: "/placeholder.svg",
    provider: {
      name: "Alex Johnson",
      university: "State University",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviews: 42
    }
  },
  "2": {
    id: "2",
    title: "UI/UX Design for Mobile Apps",
    description: "Get a clean, intuitive user interface design for your mobile application. I'll create beautiful and functional designs that your users will love.",
    price: 80,
    deliveryTime: "2 days",
    category: "UI/UX Design",
    image: "/placeholder.svg",
    provider: {
      name: "Alex Johnson",
      university: "State University",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviews: 42
    }
  }
};

const GigDetail = () => {
  const { id } = useParams<{ id: string }>();
  const gig = id && mockGigData[id] ? mockGigData[id] : null;
  
  if (!gig) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Gig Not Found</h1>
          <p className="mb-6">The requested service could not be found.</p>
          <Link to="/services">
            <Button>Browse Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Gig Details */}
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-3xl font-bold">{gig.title}</h1>
            
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={gig.provider.avatar} alt={gig.provider.name} />
                <AvatarFallback>{gig.provider.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              
              <div>
                <p className="font-medium">{gig.provider.name}</p>
                <p className="text-sm text-gray-500">{gig.provider.university}</p>
              </div>
              
              <div className="flex items-center ml-4">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium">{gig.provider.rating}</span>
                <span className="ml-1 text-xs text-gray-500">({gig.provider.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="aspect-video overflow-hidden rounded-lg border">
              <img 
                src={gig.image} 
                alt={gig.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3">About This Service</h2>
              <Badge variant="outline" className="mb-4 bg-indigo-50 text-indigo-700 border-indigo-100">
                {gig.category}
              </Badge>
              <div className="prose max-w-none">
                {gig.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Card */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Service Package</h3>
                <p className="text-3xl font-bold mb-4">${gig.price}</p>
                
                <div className="flex items-center mb-4 text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Delivery in {gig.deliveryTime}</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Original design</span>
                  </div>
                  <div className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Source files included</span>
                  </div>
                  <div className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Revisions: 2</span>
                  </div>
                </div>
                
                <Button className="w-full mb-3">Order Now</Button>
                <Button variant="outline" className="w-full">
                  Contact Seller
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GigDetail;
