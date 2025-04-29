
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface Mood {
  id: number;
  name: string;
  emoji: string;
  description: string;
  foods: string[];
}

const moods: Mood[] = [
  { 
    id: 1, 
    name: "Happy", 
    emoji: "😊", 
    description: "Vibrant and joyful comfort foods to boost your mood!",
    foods: ["Ice Cream", "Pizza", "Chocolate", "Mac & Cheese"]
  },
  { 
    id: 2, 
    name: "Stressed", 
    emoji: "😓", 
    description: "Calming, nutritious foods to help you relax and unwind.",
    foods: ["Green Tea", "Dark Chocolate", "Salmon", "Avocado Toast"]
  },
  { 
    id: 3, 
    name: "Tired", 
    emoji: "😴", 
    description: "Energy-boosting foods to help you power through the day.",
    foods: ["Coffee", "Oatmeal", "Banana", "Protein Smoothie"]
  },
  { 
    id: 4, 
    name: "Adventurous", 
    emoji: "🤩", 
    description: "Exciting and exotic flavors for the curious food explorer.",
    foods: ["Sushi", "Curry", "Tacos", "Korean BBQ"]
  },
  { 
    id: 5, 
    name: "Nostalgic", 
    emoji: "🥹", 
    description: "Classic comfort foods that remind you of home.",
    foods: ["Grilled Cheese", "Chicken Soup", "Apple Pie", "Mashed Potatoes"]
  },
  { 
    id: 6, 
    name: "Healthy", 
    emoji: "💪", 
    description: "Nutritious options to nourish your body and mind.",
    foods: ["Buddha Bowl", "Quinoa Salad", "Vegetable Stir Fry", "Fruit Smoothie"]
  },
  { 
    id: 7, 
    name: "Indulgent", 
    emoji: "🤤", 
    description: "Decadent treats for when you want to spoil yourself.",
    foods: ["Burger & Fries", "Cheesecake", "Pasta", "Nachos"]
  },
  { 
    id: 8, 
    name: "Romantic", 
    emoji: "❤️", 
    description: "Elegant dining options perfect for date night.",
    foods: ["Steak", "Chocolate Fondue", "Wine & Cheese", "Seafood"]
  }
];

const MoodPicker = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  
  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood === selectedMood ? null : mood);
  };

  const handleContinue = () => {
    if (selectedMood) {
      // In a real app, you would pass the mood to the next page or API
      navigate("/combo-builder", { state: { selectedMood } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-800">How are you feeling today?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let us recommend the perfect food combinations based on your current mood.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {moods.map((mood, index) => (
            <Card 
              key={mood.id}
              className={`transition-all duration-300 cursor-pointer hover:shadow-lg transform hover:-translate-y-1 ${
                selectedMood?.id === mood.id ? 'ring-2 ring-purple-600 shadow-lg' : ''
              } animate-fade-in`}
              onClick={() => handleMoodSelect(mood)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center relative">
                {selectedMood?.id === mood.id && (
                  <div className="absolute top-2 right-2 bg-purple-600 rounded-full p-1 text-white">
                    <Check className="h-4 w-4" />
                  </div>
                )}
                <div className="text-5xl mb-4">{mood.emoji}</div>
                <h3 className="font-bold text-xl mb-2">{mood.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{mood.description}</p>
                <div className="text-xs text-gray-500">
                  <span className="font-medium">Perfect for:</span>
                  <div className="flex flex-wrap gap-1 mt-1 justify-center">
                    {mood.foods.map((food, i) => (
                      <span 
                        key={i} 
                        className="inline-block bg-purple-100 px-2 py-1 rounded-full"
                      >
                        {food}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button
            onClick={handleContinue}
            disabled={!selectedMood}
            className={`text-white px-8 py-6 text-lg ${
              selectedMood
                ? 'bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {selectedMood 
              ? `Continue with ${selectedMood.name} Mood` 
              : "Select a Mood to Continue"}
          </Button>
          
          {!selectedMood && (
            <p className="text-gray-500 mt-2">
              Please select a mood from the options above
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoodPicker;
