
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Have questions, suggestions, or feedback? We'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6 text-orange-700">Get In Touch</h2>
            
            <div className="space-y-8">
              <Card className="overflow-hidden animate-fade-in">
                <CardContent className="p-6 flex">
                  <div className="mr-4 bg-orange-100 rounded-full p-3 text-orange-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      123 Foodie Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden animate-fade-in" style={{ animationDelay: "100ms" }}>
                <CardContent className="p-6 flex">
                  <div className="mr-4 bg-orange-100 rounded-full p-3 text-orange-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Phone Number</h3>
                    <p className="text-gray-600">
                      Customer Service: (555) 123-4567<br />
                      Restaurant Partners: (555) 765-4321
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden animate-fade-in" style={{ animationDelay: "200ms" }}>
                <CardContent className="p-6 flex">
                  <div className="mr-4 bg-orange-100 rounded-full p-3 text-orange-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email Address</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@combocraze.com<br />
                      Customer Support: support@combocraze.com<br />
                      Partnerships: partners@combocraze.com
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden animate-fade-in" style={{ animationDelay: "300ms" }}>
                <CardContent className="p-6 flex">
                  <div className="mr-4 bg-orange-100 rounded-full p-3 text-orange-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Hours of Operation</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 8:00 PM<br />
                      Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: 11:00 AM - 5:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-orange-700">Send Us a Message</h2>
            
            <Card className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="border-orange-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="border-orange-200"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is your message about?"
                      required
                      className="border-orange-200"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind..."
                      rows={6}
                      required
                      className="border-orange-200 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="animate-spin mr-2">⟳</span> Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-orange-700 text-center">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96 animate-fade-in">
            {/* This would normally be a Google Maps embed */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Interactive map would be embedded here</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-orange-700 text-center">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: "How does the mood-based ordering system work?",
              answer: "Our innovative system analyzes your current mood and suggests food combinations that have been shown to complement or enhance that mood. We use a combination of culinary science, psychology, and user feedback to create these recommendations."
            },
            {
              question: "Do you deliver to my area?",
              answer: "Combo Craze Kitchen currently delivers in major metropolitan areas across the United States. Enter your address on our homepage to check if we deliver to your specific location."
            },
            {
              question: "How do I become a restaurant partner?",
              answer: "We're always looking for great restaurants to join our platform! Contact our partnership team at partners@combocraze.com or fill out the restaurant partner form on our website."
            },
            {
              question: "Can I customize my combo?",
              answer: "Absolutely! While we provide mood-based recommendations, you can always customize any combo to match your specific preferences or dietary requirements."
            }
          ].map((faq, index) => (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-orange-700">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
