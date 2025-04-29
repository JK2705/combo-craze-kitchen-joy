
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, MapPin, Plus, Minus, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

// Mock data - in a real app, you would fetch this from an API based on restaurant ID
const restaurantData = {
  id: 1,
  name: "Burger Palace",
  image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800",
  coverImage: "https://images.unsplash.com/photo-1513639304702-9116c839f94b?auto=format&fit=crop&w=1920",
  rating: 4.8,
  reviews: 243,
  cuisine: "American",
  deliveryTime: "15-25 min",
  location: "123 Main St, Downtown",
  description: "Burger Palace offers the juiciest burgers in town with quality ingredients and unique flavor combinations.",
  categories: ["Burgers", "Sides", "Drinks", "Desserts"],
  menu: {
    "Burgers": [
      {
        id: 101,
        name: "Classic Cheeseburger",
        description: "Angus beef patty, cheddar cheese, lettuce, tomato, pickles, onions, and special sauce",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400",
        popular: true
      },
      {
        id: 102,
        name: "Bacon BBQ Burger",
        description: "Angus beef patty, bacon, cheddar cheese, BBQ sauce, onion rings, and lettuce",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=400",
        popular: true
      },
      {
        id: 103,
        name: "Veggie Burger",
        description: "Plant-based patty, avocado, lettuce, tomato, red onion, and vegan mayo",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=400"
      },
      {
        id: 104,
        name: "Mushroom Swiss Burger",
        description: "Angus beef patty, sautéed mushrooms, Swiss cheese, truffle aioli, and arugula",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400"
      }
    ],
    "Sides": [
      {
        id: 201,
        name: "French Fries",
        description: "Crispy golden fries with sea salt",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400",
        popular: true
      },
      {
        id: 202,
        name: "Onion Rings",
        description: "Battered and fried onion rings with dipping sauce",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=400"
      },
      {
        id: 203,
        name: "Sweet Potato Fries",
        description: "Crispy sweet potato fries with chipotle aioli",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1603088549155-6ae9578d248c?auto=format&fit=crop&w=400"
      }
    ],
    "Drinks": [
      {
        id: 301,
        name: "Milkshake",
        description: "Classic vanilla, chocolate, or strawberry milkshake",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1624781332402-2f83cf1731b8?auto=format&fit=crop&w=400"
      },
      {
        id: 302,
        name: "Soft Drink",
        description: "Coke, Diet Coke, Sprite, or Dr Pepper",
        price: 2.49,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400"
      },
      {
        id: 303,
        name: "Iced Tea",
        description: "Fresh brewed iced tea, sweetened or unsweetened",
        price: 2.49,
        image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=400"
      }
    ],
    "Desserts": [
      {
        id: 401,
        name: "Chocolate Brownie",
        description: "Warm chocolate brownie with vanilla ice cream",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1564355808539-22fda35beds7?auto=format&fit=crop&w=400"
      },
      {
        id: 402,
        name: "Apple Pie",
        description: "Homemade apple pie with caramel drizzle",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?auto=format&fit=crop&w=400"
      }
    ]
  }
};

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const RestaurantMenu = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant] = useState(restaurantData); // In real app, fetch based on id
  const [activeTab, setActiveTab] = useState(restaurant.categories[0]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const addToCart = (item: any) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    
    toast(`Added ${item.name} to cart`, {
      description: "Item added to your cart",
      action: {
        label: "View Cart",
        onClick: () => console.log("View Cart clicked"),
      },
    });
  };

  const handleQuantityChange = (id: number, change: number) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(0, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-orange-50 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="h-64 bg-gray-200 rounded-lg animate-pulse mb-6"></div>
          <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-24 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 pb-24">
      {/* Cover Image */}
      <div className="h-64 md:h-80 relative overflow-hidden">
        <img 
          src={restaurant.coverImage} 
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
          <div className="flex items-center text-sm mb-2">
            <div className="flex items-center mr-4">
              <Star className="h-4 w-4 mr-1 fill-orange-500 text-orange-500" />
              <span>{restaurant.rating} ({restaurant.reviews} reviews)</span>
            </div>
            <div className="flex items-center mr-4">
              <Clock className="h-4 w-4 mr-1" />
              <span>{restaurant.deliveryTime}</span>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{restaurant.location}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700">{restaurant.description}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            {/* Menu Categories */}
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-6 bg-orange-100 p-1 overflow-x-auto flex whitespace-nowrap w-full">
                {restaurant.categories.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Menu Items */}
              {restaurant.categories.map(category => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 gap-4">
                    {restaurant.menu[category].map((item, index) => (
                      <Card 
                        key={item.id} 
                        className="overflow-hidden flex flex-col md:flex-row animate-fade-in" 
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="md:w-1/4 h-32 md:h-auto">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="flex-1 flex flex-col md:flex-row justify-between p-4">
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                                {item.popular && (
                                  <span className="inline-block bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full mb-1">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <div className="font-bold text-lg">${item.price.toFixed(2)}</div>
                            </div>
                            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                          </div>
                          <div className="mt-4 md:mt-0 md:ml-4 flex md:items-end">
                            <Button 
                              className="bg-orange-600 hover:bg-orange-700 w-full md:w-auto"
                              onClick={() => addToCart(item)}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Cart */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Your Order
              </h3>
              
              {cart.length === 0 ? (
                <div className="text-gray-500 text-center py-8">
                  <div className="flex justify-center mb-2">
                    <ShoppingCart className="h-12 w-12 text-gray-300" />
                  </div>
                  <p>Your cart is empty</p>
                  <p className="text-sm mt-1">Add items to get started</p>
                </div>
              ) : (
                <>
                  <div className="divide-y">
                    {cart.map(item => (
                      <div key={item.id} className="py-3 flex justify-between">
                        <div>
                          <div className="flex items-center">
                            <div className="font-medium">{item.name}</div>
                            <div className="ml-2 text-orange-600 font-medium">${item.price.toFixed(2)}</div>
                          </div>
                          <div className="flex items-center mt-1">
                            <button 
                              className="p-1 rounded-full hover:bg-orange-100"
                              onClick={() => handleQuantityChange(item.id, -1)}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button 
                              className="p-1 rounded-full hover:bg-orange-100"
                              onClick={() => handleQuantityChange(item.id, 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t mt-4 pt-4">
                    <div className="flex justify-between mb-2">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2 text-sm text-gray-600">
                      <span>Delivery Fee</span>
                      <span>$2.99</span>
                    </div>
                    <div className="flex justify-between mb-2 text-sm text-gray-600">
                      <span>Tax</span>
                      <span>${(cartTotal * 0.0875).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-4">
                      <span>Total</span>
                      <span>${(cartTotal + 2.99 + cartTotal * 0.0875).toFixed(2)}</span>
                    </div>
                    
                    <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                      Checkout
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
