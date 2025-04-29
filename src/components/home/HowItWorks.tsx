
import React from "react";

const HowItWorks: React.FC = () => {
  return (
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
  );
};

export default HowItWorks;
