
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Mood {
  id: number;
  name: string;
  emoji: string;
}

interface MoodSelectorProps {
  moods: Mood[];
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ moods }) => {
  return (
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
  );
};

export default MoodSelector;
