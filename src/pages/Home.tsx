import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, MapPin, Clock, ChevronRight, Pizza, UtensilsCrossed, Coffee } from "lucide-react";

const moods = [
  { id: 1, name: "Happy", emoji: "😊" },
  { id: 2, name: "Stressed", emoji: "😓" },
  { id: 3, name: "Tired", emoji: "😴" },
  { id: 4, name: "Adventurous", emoji: "🤩" },
  { id: 5, name: "Nostalgic", emoji: "🥹" },
  { id: 6, name: "Healthy", emoji: "💪" }
];

const featuredRestaurants = [
  {
    id: 1,
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800",
    rating: 4.8,
    cuisine: "American",
    deliveryTime: "15-25 min",
    distance: "1.2 miles"
  },
  {
    id: 2,
    name: "Pizza Heaven",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800",
    rating: 4.5,
    cuisine: "Italian",
    deliveryTime: "20-30 min",
    distance: "2.1 miles"
  },
  {
    id: 3,
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=800",
    rating: 4.7,
    cuisine: "Mexican",
    deliveryTime: "20-35 min",
    distance: "1.8 miles"
  },
  {
    id: 4,
    name: "Sushi Express",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800",
    rating: 4.9,
    cuisine: "Japanese",
    deliveryTime: "25-40 min",
    distance: "3.0 miles"
  }
];

const popularCombos = [
  {
    id: 101,
    name: "Comfort Classic",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800",
    description: "Cheeseburger + Fries + Chocolate Shake",
    price: 15.99,
    mood: "Happy"
  },
  {
    id: 102,
    name: "Brain Booster",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800",
    description: "Grilled Salmon + Quinoa + Green Tea",
    price: 18.99,
    mood: "Stressed"
  },
  {
    id: 103,
    name: "Energy Kick",
    image: "https://images.unsplash.com/photo-1588483977150-9c2127ab7bcc?auto=format&fit=crop&w=800",
    description: "Protein Bowl + Fruit Smoothie + Energy Bar",
    price: 14.99,
    mood: "Tired"
  },
  {
    id: 104,
    name: "Flavor Explorer",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800",
    description: "Spicy Ramen + Bubble Tea + Mochi",
    price: 16.99,
    mood: "Adventurous"
  }
];

const bannerImages = [
  {
    url: "https://images.unsplash.com/photo-1513639304702-9116c839f94b?auto=format&fit=crop&w=1920",
    title: "Discover Your Perfect Food Mood",
    subtitle: "Let our algorithm match your current mood with delicious foods"
  },
  {
    url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1920",
    title: "Craft Your Custom Combo",
    subtitle: "Mix and match your favorite dishes for the ultimate meal experience"
  },
  {
    url: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=1920",
    title: "Food Delivered Your Way",
    subtitle: "Fast, fresh, and always satisfying"
  }
];

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Banner with Slideshow */}
      <div className="relative h-[60vh] overflow-hidden">
        {bannerImages.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentBanner === index
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
              src={banner.url}
              alt={banner.title}
              className={`w-full h-full object-cover transition-transform duration-8000 ${
                currentBanner === index && !isAnimating
                  ? "scale-105"
                  : "scale-100"
              }`}
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in max-w-2xl">
                {banner.title}
              </h1>
              <p className="text-xl md:text-2xl max-w-xl animate-fade-in">
                {banner.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-lg py-6 px-8"
                >
                  <Link to="/mood-picker">Find Your Food Mood</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white border-2 text-lg py-6 px-8"
                >
                  <Link to="/restaurants">Browse Restaurants</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-orange-700">How It Works</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Combo Craze Kitchen matches your mood with the perfect food combinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🧠",
              title: "Choose Your Mood",
              description:
                "Tell us how you're feeling today, and our algorithm will analyze your mood.",
            },
            {
              icon: "🍔",
              title: "Discover Combos",
              description:
                "We'll suggest food combinations scientifically proven to complement your mood.",
            },
            {
              icon: "🚚",
              title: "Order & Enjoy",
              description:
                "Place your order from local restaurants and get it delivered fresh to your door.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-orange-700">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mood Selection */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 text-white">
            <h2 className="text-3xl font-bold mb-4">What's Your Mood Today?</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Select your current mood and we'll recommend the perfect food combinations
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {moods.map((mood, index) => (
              <Link
                to={`/mood-picker`}
                key={mood.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-2">{mood.emoji}</div>
                <div className="font-medium text-white">{mood.name}</div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              className="bg-white text-orange-600 hover:bg-orange-50"
            >
              <Link to="/mood-picker" className="flex items-center">
                Explore All Moods <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Restaurants */}
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
          {featuredRestaurants.map((restaurant, index) => (
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

      {/* Popular Combos */}
      <div className="bg-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-orange-700">
              Popular Food Combos
            </h2>
            <Button asChild variant="ghost" className="text-orange-600">
              <Link to="/combo-builder" className="flex items-center">
                Create Your Own <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {popularCombos.map((combo, index) => (
                <CarouselItem
                  key={combo.id}
                  className="md:basis-1/2 lg:basis-1/3 pl-4 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full">
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={combo.image}
                        alt={combo.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        ${combo.price}
                      </div>
                      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full py-2 px-4">
                        <p className="text-white font-medium">
                          Perfect for: {combo.mood} Mood
                        </p>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2">{combo.name}</h3>
                      <p className="text-gray-600 mb-4">{combo.description}</p>
                      <Button
                        asChild
                        className="w-full bg-orange-600 hover:bg-orange-700"
                      >
                        <Link to="/combo-builder">Customize & Order</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>

      {/* App Features */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-orange-700">
            Why Choose Combo Craze Kitchen?
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            We're not just another food delivery app. We're a mood-enhancing culinary experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Burger className="h-10 w-10 text-orange-600" />,
              title: "Mood-Matched Food",
              description:
                "Our algorithm analyzes your current mood and suggests scientifically-backed food combinations.",
            },
            {
              icon: <Pizza className="h-10 w-10 text-orange-600" />,
              title: "Customizable Combos",
              description:
                "Create your perfect meal by mixing and matching items from multiple restaurants.",
            },
            {
              icon: <Coffee className="h-10 w-10 text-orange-600" />,
              title: "Lightning Fast Delivery",
              description:
                "Our optimized delivery network ensures your food arrives hot and fresh every time.",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-orange-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Download App Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">
                Get The Combo Craze App
              </h2>
              <p className="text-lg max-w-md mb-8">
                Download our mobile app for exclusive deals, faster ordering, and real-time delivery tracking.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white"
                >
                  App Store
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white"
                >
                  Google Play
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-3 shadow-xl">
                <div className="bg-black rounded-2xl overflow-hidden w-64 h-[500px]">
                  {/* This would be a mobile app screenshot */}
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <p className="text-gray-400 text-center p-4">
                      Mobile app interface would be displayed here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-orange-700">
            What Our Customers Say
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Don't just take our word for it — hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "The mood-matching feature is genius! I was feeling down and their comfort food combo really lifted my spirits.",
              name: "Sarah Johnson",
              location: "San Francisco, CA",
              avatar: "https://i.pravatar.cc/150?img=1",
            },
            {
              text: "I love being able to customize my combos. The app remembers my preferences and makes ordering super quick.",
              name: "Michael Chen",
              location: "New York, NY",
              avatar: "https://i.pravatar.cc/150?img=2",
            },
            {
              text: "The delivery is always on time and the food quality is consistently excellent. My go-to food app!",
              name: "Aisha Patel",
              location: "Chicago, IL",
              avatar: "https://i.pravatar.cc/150?img=3",
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <div className="text-orange-400 text-3xl mb-4">"</div>
                  <p className="text-gray-600 mb-6">{testimonial.text}</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">
            Ready to Try Combo Craze Kitchen?
          </h2>
          <p className="text-xl mb-8 animate-fade-in">
            Find your perfect food mood and get it delivered to your door
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50 text-lg py-6 px-8 animate-fade-in"
          >
            <Link to="/mood-picker">Get Started Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
