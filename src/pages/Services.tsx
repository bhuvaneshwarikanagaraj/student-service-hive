
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Search, SlidersHorizontal } from "lucide-react";

// Mock service data
const services = [
  {
    id: "1",
    title: "Professional Website Development",
    description: "I will build a responsive, modern website for your business or personal use.",
    price: 120,
    deliveryTime: "3 days",
    category: "Programming",
    subcategory: "Web Development",
    image: "/placeholder.svg",
    provider: {
      name: "Alex Johnson",
      university: "State University",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviews: 42
    }
  },
  {
    id: "2",
    title: "UI/UX Design for Mobile Apps",
    description: "Get a clean, intuitive user interface design for your mobile application.",
    price: 80,
    deliveryTime: "2 days",
    category: "Design",
    subcategory: "UI/UX Design",
    image: "/placeholder.svg",
    provider: {
      name: "Sarah Chen",
      university: "Tech Institute",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviews: 38
    }
  },
  {
    id: "3",
    title: "Mathematics Tutoring",
    description: "I offer personalized tutoring for calculus, statistics, and algebra.",
    price: 20,
    deliveryTime: "1 day",
    category: "Tutoring",
    subcategory: "Mathematics",
    image: "/placeholder.svg",
    provider: {
      name: "Michael Torres",
      university: "State University",
      avatar: "/placeholder.svg",
      rating: 5.0,
      reviews: 56
    }
  },
  {
    id: "4",
    title: "Essay Editing & Proofreading",
    description: "I will professionally edit and proofread your essays and academic papers.",
    price: 15,
    deliveryTime: "1 day",
    category: "Writing",
    subcategory: "Editing",
    image: "/placeholder.svg",
    provider: {
      name: "Emma Wilson",
      university: "Liberal Arts College",
      avatar: "/placeholder.svg",
      rating: 4.7,
      reviews: 143
    }
  },
  {
    id: "5",
    title: "Video Editing for YouTube",
    description: "Professional video editing services for YouTube content creators.",
    price: 45,
    deliveryTime: "2 days",
    category: "Video",
    subcategory: "Video Editing",
    image: "/placeholder.svg",
    provider: {
      name: "James Park",
      university: "Film Institute",
      avatar: "/placeholder.svg",
      rating: 4.6,
      reviews: 29
    }
  },
  {
    id: "6",
    title: "Logo Design",
    description: "I will create a professional logo design for your brand or project.",
    price: 35,
    deliveryTime: "2 days",
    category: "Design",
    subcategory: "Logo Design",
    image: "/placeholder.svg",
    provider: {
      name: "Olivia Martinez",
      university: "Design School",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviews: 91
    }
  }
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "programming", label: "Programming & Tech" },
  { value: "design", label: "Design & Creative" },
  { value: "writing", label: "Writing & Translation" },
  { value: "video", label: "Video & Animation" },
  { value: "tutoring", label: "Tutoring & Academics" }
];

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price_low", label: "Price: Low to High" },
  { value: "price_high", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" }
];

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");
  
  // Filter services based on search and category
  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || service.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case "price_low":
        return a.price - b.price;
      case "price_high":
        return b.price - a.price;
      case "rating":
        return b.provider.rating - a.provider.rating;
      default:
        return 0; // Recommended/default sorting
    }
  });
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-indigo-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-6">Browse Student Services</h1>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="What service are you looking for today?"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit">Search</Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow p-5 sticky top-24">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
              </h3>
              
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium block mb-2">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium block mb-2">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Listings */}
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {sortedServices.length} services found
              </p>
            </div>
            
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {sortedServices.map((service) => (
                <Link to={`/services/${service.id}`} key={service.id}>
                  <Card className="h-full transition-all hover:shadow-md">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-100">
                          {service.subcategory}
                        </Badge>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm ml-1 text-gray-700">{service.provider.rating}</span>
                          <span className="text-xs ml-1 text-gray-500">({service.provider.reviews})</span>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-lg line-clamp-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm my-2 line-clamp-2">
                        {service.description}
                      </p>
                      
                      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                        <div className="flex items-center">
                          <img
                            src={service.provider.avatar}
                            alt={service.provider.name}
                            className="h-6 w-6 rounded-full mr-2"
                          />
                          <p className="text-xs text-gray-600">{service.provider.name}</p>
                        </div>
                        <p className="font-semibold">
                          From ${service.price}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            
            {sortedServices.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No services found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
