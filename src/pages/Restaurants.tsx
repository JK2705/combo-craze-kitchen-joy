
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800",
    rating: 4.8,
    cuisine: "American",
    deliveryTime: "15-25 min",
    location: "Downtown",
    distance: "1.2 miles"
  },
  {
    id: 2,
    name: "Pizza Heaven",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800",
    rating: 4.5,
    cuisine: "Italian",
    deliveryTime: "20-30 min",
    location: "Eastside",
    distance: "2.1 miles"
  },
  {
    id: 3,
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=800",
    rating: 4.7,
    cuisine: "Mexican",
    deliveryTime: "20-35 min",
    location: "Southside",
    distance: "1.8 miles"
  },
  {
    id: 4,
    name: "Sushi Express",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800",
    rating: 4.9,
    cuisine: "Japanese",
    deliveryTime: "25-40 min",
    location: "Midtown",
    distance: "3.0 miles"
  },
  {
    id: 5,
    name: "Curry House",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800",
    rating: 4.6,
    cuisine: "Indian",
    deliveryTime: "30-45 min",
    location: "Westside",
    distance: "2.5 miles"
  },
  {
    id: 6,
    name: "Noodle Bar",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800",
    rating: 4.4,
    cuisine: "Asian Fusion",
    deliveryTime: "20-30 min",
    location: "Northside",
    distance: "1.5 miles"
  }
];

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const results = restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRestaurants(results);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-orange-50 pb-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Discover Restaurants
          </h1>
          <p className="text-xl max-w-2xl mb-8 animate-fade-in">
            Find the perfect restaurant for your mood and taste preferences
          </p>
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search restaurants or cuisines..."
              className="w-full p-4 pr-12 rounded-lg border-none focus:ring-2 focus:ring-orange-300 text-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Popular Restaurants Near You</h2>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden h-96 animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <CardContent className="pt-4">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.map((restaurant, index) => (
              <Card 
                key={restaurant.id} 
                className="overflow-hidden hover-scale transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-xl">{restaurant.name}</h3>
                    <div className="flex items-center bg-orange-100 px-2 py-1 rounded text-orange-700">
                      <Star className="h-4 w-4 mr-1 fill-orange-500 text-orange-500" />
                      <span className="text-sm font-medium">{restaurant.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{restaurant.cuisine}</p>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    <div className="flex items-center mr-4">
                      <Clock className="h-4 w-4 mr-1 text-orange-500" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-orange-500" />
                      <span>{restaurant.distance}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button 
                    asChild
                    className="w-full bg-orange-600 hover:bg-orange-700"
                  >
                    <Link to={`/restaurant/${restaurant.id}`}>View Menu</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {filteredRestaurants.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No restaurants found</h3>
            <p className="text-gray-600">Try adjusting your search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
