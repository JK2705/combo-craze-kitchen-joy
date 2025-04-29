
import React from "react";
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
import { ChevronRight } from "lucide-react";

interface ComboItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  mood: string;
}

interface PopularCombosProps {
  combos: ComboItem[];
}

const PopularCombos: React.FC<PopularCombosProps> = ({ combos }) => {
  return (
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
            {combos.map((combo, index) => (
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
  );
};

export default PopularCombos;
