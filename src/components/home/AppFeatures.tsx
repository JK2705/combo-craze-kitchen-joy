
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UtensilsCrossed, Pizza, Coffee } from "lucide-react";

const AppFeatures: React.FC = () => {
  return (
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
            icon: <UtensilsCrossed className="h-10 w-10 text-orange-600" />,
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
  );
};

export default AppFeatures;
