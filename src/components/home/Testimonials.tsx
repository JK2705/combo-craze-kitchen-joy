
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  text: string;
  name: string;
  location: string;
  avatar: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
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
        {testimonials.map((testimonial, index) => (
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
  );
};

export default Testimonials;
