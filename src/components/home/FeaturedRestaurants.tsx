
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Star, MapPin, Clock } from "lucide-react";

interface Restaurant {
  id: number;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
  distance: string;
}

interface FeaturedRestaurantsProps {
  restaurants: Restaurant[];
}

const FeaturedRestaurants: React.FC<FeaturedRestaurantsProps> = ({ restaurants }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-orange-700">
          Featured Restaurants
        </h2>
        <Button asChild variant="ghost" className="text-orange-600">
          <Link to="/restaurants" className="flex items-center">
            View All <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant, index) => (
          <Card
            key={restaurant.id}
            className="overflow-hidden transition-all hover-scale animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">{restaurant.name}</h3>
                <div className="flex items-center bg-orange-100 px-2 py-1 rounded text-orange-700">
                  <Star className="h-4 w-4 mr-1 fill-orange-500 text-orange-500" />
                  <span className="text-sm font-medium">
                    {restaurant.rating}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
              <div className="flex flex-wrap text-sm text-gray-600">
                <div className="flex items-center mr-4">
                  <Clock className="h-4 w-4 mr-1 text-orange-500" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-orange-500" />
                  <span>{restaurant.distance}</span>
                </div>
              </div>
              <Button
                asChild
                className="w-full mt-4 bg-orange-600 hover:bg-orange-700"
              >
                <Link to={`/restaurant/${restaurant.id}`}>View Menu</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
