
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BannerImage {
  url: string;
  title: string;
  subtitle: string;
}

interface HeroBannerProps {
  bannerImages: BannerImage[];
}

const HeroBanner: React.FC<HeroBannerProps> = ({ bannerImages }) => {
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
  }, [bannerImages.length]);

  return (
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
  );
};

export default HeroBanner;
