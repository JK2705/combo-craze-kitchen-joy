
import React from "react";
import HeroBanner from "@/components/home/HeroBanner";
import HowItWorks from "@/components/home/HowItWorks";
import MoodSelector from "@/components/home/MoodSelector";
import FeaturedRestaurants from "@/components/home/FeaturedRestaurants";
import PopularCombos from "@/components/home/PopularCombos";
import AppFeatures from "@/components/home/AppFeatures";
import DownloadApp from "@/components/home/DownloadApp";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";
import { 
  bannerImages, 
  moods, 
  featuredRestaurants,
  popularCombos,
  testimonials 
} from "@/components/home/data/homeData";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      <HeroBanner bannerImages={bannerImages} />
      <HowItWorks />
      <MoodSelector moods={moods} />
      <FeaturedRestaurants restaurants={featuredRestaurants} />
      <PopularCombos combos={popularCombos} />
      <AppFeatures />
      <DownloadApp />
      <Testimonials testimonials={testimonials} />
      <CtaSection />
    </div>
  );
};

export default Home;
