
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, Star, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
}

interface Mood {
  id: number;
  name: string;
  emoji: string;
  description: string;
  foods: string[];
}

// Mock food data
const foodItems: FoodItem[] = [
  {
    id: 101,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400",
    category: "Main",
    tags: ["Burger", "Beef", "Cheese", "Happy", "Indulgent"]
  },
  {
    id: 102,
    name: "Grilled Chicken Salad",
    description: "Fresh mixed greens with grilled chicken, avocado, and balsamic dressing",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400",
    category: "Main",
    tags: ["Salad", "Chicken", "Healthy", "Stressed"]
  },
  {
    id: 103,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400",
    category: "Main",
    tags: ["Pizza", "Vegetarian", "Happy", "Nostalgic"]
  },
  {
    id: 104,
    name: "Spicy Ramen",
    description: "Japanese noodle soup with rich broth, soft-boiled egg, pork, and vegetables",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400",
    category: "Main",
    tags: ["Ramen", "Spicy", "Adventurous", "Tired"]
  },
  {
    id: 201,
    name: "French Fries",
    description: "Crispy golden fries with sea salt",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400",
    category: "Side",
    tags: ["Fried", "Potato", "Happy", "Indulgent"]
  },
  {
    id: 202,
    name: "Garden Salad",
    description: "Fresh mixed greens with cucumber, tomato, and vinaigrette",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400",
    category: "Side",
    tags: ["Salad", "Vegetarian", "Healthy"]
  },
  {
    id: 203,
    name: "Mozzarella Sticks",
    description: "Breaded and fried mozzarella sticks with marinara sauce",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=400",
    category: "Side",
    tags: ["Cheese", "Fried", "Indulgent"]
  },
  {
    id: 301,
    name: "Chocolate Milkshake",
    description: "Rich and creamy chocolate milkshake topped with whipped cream",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400",
    category: "Drink",
    tags: ["Sweet", "Chocolate", "Happy", "Nostalgic"]
  },
  {
    id: 302,
    name: "Strawberry Smoothie",
    description: "Fresh strawberry smoothie blended with yogurt and honey",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1553530666-ba11a90bb0b1?auto=format&fit=crop&w=400",
    category: "Drink",
    tags: ["Fruit", "Sweet", "Healthy"]
  },
  {
    id: 303,
    name: "Iced Coffee",
    description: "Cold-brewed coffee served over ice with your choice of milk",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400",
    category: "Drink",
    tags: ["Coffee", "Caffeine", "Tired"]
  },
  {
    id: 401,
    name: "Chocolate Brownie",
    description: "Warm chocolate brownie with vanilla ice cream and chocolate sauce",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1564355808539-22fda35beds7?auto=format&fit=crop&w=400",
    category: "Dessert",
    tags: ["Chocolate", "Sweet", "Happy", "Indulgent"]
  },
  {
    id: 402,
    name: "Fresh Fruit Parfait",
    description: "Layers of fresh seasonal fruit, yogurt, and granola",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400",
    category: "Dessert",
    tags: ["Fruit", "Healthy", "Sweet"]
  }
];

const ComboBuilder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedMood = location.state?.selectedMood as Mood;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Main");
  const [comboItems, setComboItems] = useState<FoodItem[]>([]);
  const [recommendedItems, setRecommendedItems] = useState<FoodItem[]>([]);
  
  const categories = ["Main", "Side", "Drink", "Dessert"];
  
  useEffect(() => {
    if (!selectedMood) {
      navigate("/mood-picker");
      return;
    }
    
    // Filter items that match the selected mood
    if (selectedMood) {
      const filtered = foodItems.filter(item => 
        item.tags.some(tag => selectedMood.name === tag || selectedMood.foods.includes(tag))
      );
      setRecommendedItems(filtered);
    }
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [selectedMood, navigate]);
  
  const addToCombo = (item: FoodItem) => {
    // Check if we already have an item from this category
    const existingItemIndex = comboItems.findIndex(i => i.category === item.category);
    
    if (existingItemIndex !== -1) {
      // Replace the existing item in this category
      const newComboItems = [...comboItems];
      newComboItems[existingItemIndex] = item;
      setComboItems(newComboItems);
      toast(`Replaced ${comboItems[existingItemIndex].name} with ${item.name}`);
    } else {
      // Add the new item
      setComboItems([...comboItems, item]);
      toast(`Added ${item.name} to your combo`);
    }
  };
  
  const removeFromCombo = (category: string) => {
    setComboItems(comboItems.filter(item => item.category !== category));
    toast(`Removed ${category} from your combo`);
  };
  
  const getCategoryItems = (category: string) => {
    return foodItems.filter(item => item.category === category);
  };

  const getSelectedItemForCategory = (category: string) => {
    return comboItems.find(item => item.category === category);
  };
  
  const comboTotal = comboItems.reduce((total, item) => total + item.price, 0);
  const comboDiscount = comboItems.length >= 3 ? 0.15 : 0; // 15% discount if 3 or more items
  const finalTotal = comboTotal * (1 - comboDiscount);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Building your personalized combo...</h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block bg-white rounded-full p-4 shadow-md mb-4">
            <span className="text-5xl">{selectedMood?.emoji}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-orange-500">
            Build Your {selectedMood?.name} Combo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've curated perfect items to match your {selectedMood?.name.toLowerCase()} mood. Mix and match to create your ideal meal!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Food Selection Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <Tabs defaultValue="Main" value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="flex w-full rounded-none border-b bg-purple-50">
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="flex-1 data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:text-purple-700 rounded-none"
                    >
                      {category}
                      {getSelectedItemForCategory(category) && (
                        <Check className="ml-2 h-4 w-4 text-green-500" />
                      )}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {categories.map(category => (
                  <TabsContent key={category} value={category} className="p-0">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">Select your {category.toLowerCase()}</h3>
                      
                      {/* Recommended Section */}
                      {recommendedItems.filter(item => item.category === category).length > 0 && (
                        <div className="mb-8">
                          <h4 className="font-medium text-purple-700 mb-3 flex items-center">
                            <span className="mr-2">✨</span> 
                            Recommended for your {selectedMood?.name} mood
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {recommendedItems
                              .filter(item => item.category === category)
                              .map((item, index) => (
                                <Card 
                                  key={item.id} 
                                  className={`overflow-hidden flex animate-fade-in cursor-pointer hover:shadow-md transition-shadow ${
                                    getSelectedItemForCategory(category)?.id === item.id ? 'ring-2 ring-purple-500' : ''
                                  }`}
                                  onClick={() => addToCombo(item)}
                                  style={{ animationDelay: `${index * 100}ms` }}
                                >
                                  <div className="w-1/3 h-32">
                                    <img 
                                      src={item.image} 
                                      alt={item.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <CardContent className="w-2/3 p-4 flex flex-col justify-between">
                                    <div>
                                      <h4 className="font-semibold">{item.name}</h4>
                                      <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                      <span className="font-bold text-purple-700">${item.price.toFixed(2)}</span>
                                      <Button 
                                        size="sm" 
                                        variant={getSelectedItemForCategory(category)?.id === item.id ? "secondary" : "outline"}
                                        className="text-xs"
                                      >
                                        {getSelectedItemForCategory(category)?.id === item.id ? (
                                          <span className="flex items-center">
                                            <Check className="mr-1 h-3 w-3" /> Selected
                                          </span>
                                        ) : (
                                          <span className="flex items-center">
                                            <Plus className="mr-1 h-3 w-3" /> Add
                                          </span>
                                        )}
                                      </Button>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                          </div>
                        </div>
                      )}
                      
                      {/* All Options */}
                      <div>
                        <h4 className="font-medium mb-3">All options</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {getCategoryItems(category)
                            .filter(item => !recommendedItems.some(rec => rec.id === item.id))
                            .map((item, index) => (
                              <Card 
                                key={item.id} 
                                className={`overflow-hidden flex animate-fade-in cursor-pointer hover:shadow-md transition-shadow ${
                                  getSelectedItemForCategory(category)?.id === item.id ? 'ring-2 ring-purple-500' : ''
                                }`}
                                onClick={() => addToCombo(item)}
                                style={{ animationDelay: `${index * 100}ms` }}
                              >
                                <div className="w-1/3 h-32">
                                  <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <CardContent className="w-2/3 p-4 flex flex-col justify-between">
                                  <div>
                                    <h4 className="font-semibold">{item.name}</h4>
                                    <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                                  </div>
                                  <div className="flex justify-between items-center mt-2">
                                    <span className="font-bold text-gray-700">${item.price.toFixed(2)}</span>
                                    <Button 
                                      size="sm" 
                                      variant={getSelectedItemForCategory(category)?.id === item.id ? "secondary" : "outline"}
                                      className="text-xs"
                                    >
                                      {getSelectedItemForCategory(category)?.id === item.id ? (
                                        <span className="flex items-center">
                                          <Check className="mr-1 h-3 w-3" /> Selected
                                        </span>
                                      ) : (
                                        <span className="flex items-center">
                                          <Plus className="mr-1 h-3 w-3" /> Add
                                        </span>
                                      )}
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </Card>
          </div>
          
          {/* Combo Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Your {selectedMood?.name} Combo</h3>
                
                {comboItems.length === 0 ? (
                  <div className="py-8 text-center text-gray-500">
                    <p>Your combo is empty</p>
                    <p className="text-sm mt-2">Add items from each category to build your perfect meal</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {categories.map(category => {
                        const item = getSelectedItemForCategory(category);
                        return item ? (
                          <div key={category} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-16 h-16 mr-3 rounded overflow-hidden">
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="text-sm text-gray-600">{category}</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <span className="font-bold mr-3">${item.price.toFixed(2)}</span>
                              <button 
                                className="text-gray-500 hover:text-red-500 p-1"
                                onClick={() => removeFromCombo(category)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div key={category} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                            <div className="text-gray-500">
                              <h4>Add a {category.toLowerCase()}</h4>
                            </div>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => setSelectedCategory(category)}
                            >
                              Select
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${comboTotal.toFixed(2)}</span>
                      </div>
                      
                      {comboDiscount > 0 && (
                        <div className="flex justify-between mb-2 text-green-600">
                          <span>Combo Discount (15%)</span>
                          <span>-${(comboTotal * comboDiscount).toFixed(2)}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between font-bold text-lg mt-2">
                        <span>Total</span>
                        <span>${finalTotal.toFixed(2)}</span>
                      </div>
                      
                      <Button 
                        className="w-full mt-4 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white"
                        disabled={comboItems.length === 0}
                        onClick={() => {
                          toast.success("Your combo has been added to cart!", {
                            description: "Continue to checkout or keep browsing",
                            action: {
                              label: "View Cart",
                              onClick: () => navigate("/cart")
                            }
                          });
                        }}
                      >
                        Add to Cart
                      </Button>
                      
                      <p className="text-center text-sm text-gray-500 mt-3">
                        {comboItems.length < 3 ? (
                          `Add ${3 - comboItems.length} more item${comboItems.length === 2 ? '' : 's'} for a 15% discount!`
                        ) : (
                          "You've unlocked the 15% combo discount!"
                        )}
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboBuilder;
