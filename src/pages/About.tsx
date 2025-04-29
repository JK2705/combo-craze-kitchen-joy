
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">About Combo Craze Kitchen</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Crafting the perfect culinary combinations to match your every mood.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-orange-700">Our Story</h2>
            <p className="text-lg mb-4 text-gray-700">
              Combo Craze Kitchen was born in 2022 from a simple yet powerful idea: food should match your mood.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Our founder, Chef Maria Rodriguez, noticed that people ordered different foods based on how they felt. Happy? Comfort food. Stressed? Something healthy but satisfying. Adventurous? Bold and exotic flavors.
            </p>
            <p className="text-lg text-gray-700">
              This insight led to the creation of a mood-based food ordering platform that brings together the best restaurants and customizes meal combinations tailored to your current state of mind.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl animate-fade-in h-96">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000" 
              alt="Restaurant interior" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="font-medium">Our first location in San Francisco, 2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-orange-800 animate-fade-in">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            To create perfect food combinations that elevate your mood, satisfy your cravings, and bring joy to your everyday dining experience.
          </p>
        </div>
      </div>

      {/* Meet The Team */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-orange-700 text-center">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Maria Rodriguez",
              title: "Founder & Executive Chef",
              image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400",
              bio: "With 15 years of culinary experience across three continents, Maria brings global flavors to every combo."
            },
            {
              name: "James Chen",
              title: "Head of Technology",
              image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400",
              bio: "James leads our tech team, ensuring our mood-matching algorithm always finds the perfect food for you."
            },
            {
              name: "Sophia Williams",
              title: "Customer Experience Director",
              image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=400",
              bio: "Sophia ensures every customer interaction exceeds expectations, from ordering to delivery."
            }
          ].map((member, index) => (
            <Card key={member.name} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="h-64 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-orange-600 mb-4">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Ingredients",
                description: "We partner only with restaurants that prioritize fresh, high-quality ingredients in every dish."
              },
              {
                title: "Perfect Combinations",
                description: "Our curated combos are designed by culinary experts to complement flavors and satisfy cravings."
              },
              {
                title: "Mood-Based Innovation",
                description: "We constantly research the connection between food and mood to enhance our recommendations."
              },
              {
                title: "Customer Happiness",
                description: "Your satisfaction is our priority, from the first click to the last bite."
              },
              {
                title: "Community Support",
                description: "We champion local restaurants and food producers in every community we serve."
              },
              {
                title: "Sustainability",
                description: "We're committed to reducing food waste and using eco-friendly packaging across our platform."
              }
            ].map((value, index) => (
              <div 
                key={value.title} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us CTA */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-700 animate-fade-in">Ready to Experience Mood-Based Dining?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-700 animate-fade-in">
          Join thousands of food lovers who have discovered their perfect culinary combinations with Combo Craze Kitchen.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg py-6 px-8">
            <Link to="/mood-picker">Find Your Mood Combo</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50 text-lg py-6 px-8">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
