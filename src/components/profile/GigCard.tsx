
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GigProps {
  gig: {
    id: string;
    title: string;
    description: string;
    price: number;
    deliveryTime: string;
    category: string;
    image: string;
  }
}

const GigCard = ({ gig }: GigProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video overflow-hidden">
        <img 
          src={gig.image} 
          alt={gig.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardContent className="p-4">
        <div className="text-xs font-medium text-indigo-600 mb-1">
          {gig.category}
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{gig.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {gig.description}
        </p>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Delivery: {gig.deliveryTime}</span>
          <span className="font-semibold">${gig.price}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link to={`/gig/${gig.id}/edit`} className="flex-1">
          <Button variant="outline" className="w-full">
            Edit
          </Button>
        </Link>
        <Link to={`/gig/${gig.id}`} className="flex-1">
          <Button className="w-full">
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default GigCard;
