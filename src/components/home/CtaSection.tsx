
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection: React.FC = () => {
  return (
    <div className="bg-orange-600 text-white py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in">
          Ready to Try CraveCraze?
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
  );
};

export default CtaSection;
