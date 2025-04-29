
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { 
  Trash2, 
  ShoppingCart, 
  Plus, 
  Minus, 
  CreditCard, 
  ArrowLeft,
  Clock,
  MapPin,
  ChevronRight
} from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  customizations?: string[];
}

const mockCartItems: CartItem[] = [
  {
    id: 101,
    name: "Classic Cheeseburger",
    price: 8.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400",
  },
  {
    id: 201,
    name: "French Fries",
    price: 3.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400",
  },
  {
    id: 301,
    name: "Chocolate Milkshake",
    price: 4.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400",
  },
];

const Cart = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);
  const [deliveryAddress, setDeliveryAddress] = useState("123 Main St");
  const [deliveryTime, setDeliveryTime] = useState("ASAP");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = 2.99;
  const tax = subtotal * 0.0875; // 8.75% tax
  const total = subtotal + deliveryFee + tax - promoDiscount;
  
  const handleQuantityChange = (id: number, change: number) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };
  
  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    toast.success("Item removed from cart");
  };

  const handleApplyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome15") {
      setPromoDiscount(subtotal * 0.15);
      toast.success("Promo code applied successfully!");
    } else {
      toast.error("Invalid promo code");
    }
  };
  
  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast("Please sign in to complete your order", {
        action: {
          label: "Sign In",
          onClick: () => navigate("/login", { state: { redirect: "/cart" } })
        }
      });
      return;
    }
    
    // In a real app, you would process the order here
    toast.success("Order placed successfully!", {
      description: "Your order is being prepared."
    });
    
    // Clear the cart and redirect
    setCartItems([]);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center">
            <ShoppingCart className="mr-2 h-8 w-8 text-orange-600" />
            Your Cart
          </h1>
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <div className="mb-6 flex justify-center">
              <ShoppingCart className="h-24 w-24 text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link to="/">Browse Restaurants</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-bold text-xl mb-6">Cart Items ({cartItems.length})</h2>
                  
                  <div className="space-y-6">
                    {cartItems.map((item, index) => (
                      <div 
                        key={item.id} 
                        className={`flex items-center animate-fade-in ${
                          index !== cartItems.length - 1 ? 'border-b pb-6' : ''
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-20 h-20 rounded overflow-hidden mr-4">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          {item.customizations && item.customizations.length > 0 && (
                            <p className="text-sm text-gray-600 mb-1">
                              {item.customizations.join(', ')}
                            </p>
                          )}
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center border rounded-md">
                              <button 
                                className="p-1 px-2 text-gray-600 hover:text-orange-600"
                                onClick={() => handleQuantityChange(item.id, -1)}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-3 text-center min-w-[40px]">{item.quantity}</span>
                              <button 
                                className="p-1 px-2 text-gray-600 hover:text-orange-600"
                                onClick={() => handleQuantityChange(item.id, 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="ml-auto flex items-center">
                              <span className="font-bold text-lg mr-4">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                              <button 
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                onClick={() => handleRemoveItem(item.id)}
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t p-6">
                  <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex flex-col md:flex-row gap-2 md:items-center">
                      <input
                        type="text"
                        placeholder="Promo Code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="border rounded p-2 text-sm"
                      />
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-orange-300 text-orange-700"
                        onClick={handleApplyPromoCode}
                      >
                        Apply Code
                      </Button>
                    </div>
                    <div className="text-sm text-gray-600">
                      Try "WELCOME15" for 15% off your first order!
                    </div>
                  </div>
                </CardFooter>
              </Card>
              
              {/* Delivery Options */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h2 className="font-bold text-xl mb-4">Delivery Options</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-2">
                        Delivery Address
                      </h3>
                      <div className="flex justify-between items-center border p-3 rounded-lg bg-gray-50">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-orange-600" />
                          <span>{deliveryAddress}</span>
                        </div>
                        <button className="text-orange-600 hover:text-orange-800">
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-2">
                        Delivery Time
                      </h3>
                      <div className="flex justify-between items-center border p-3 rounded-lg bg-gray-50">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-2 text-orange-600" />
                          <span>{deliveryTime}</span>
                        </div>
                        <button className="text-orange-600 hover:text-orange-800">
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-2">
                        Payment Method
                      </h3>
                      <div className="flex justify-between items-center border p-3 rounded-lg bg-gray-50">
                        <div className="flex items-center">
                          <CreditCard className="h-5 w-5 mr-2 text-orange-600" />
                          <span>{paymentMethod}</span>
                        </div>
                        <button className="text-orange-600 hover:text-orange-800">
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h2 className="font-bold text-xl mb-4">Order Summary</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    
                    {promoDiscount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Promo Discount</span>
                        <span>-${promoDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={handleCheckout}
                  >
                    {isAuthenticated ? "Place Order" : "Sign In to Checkout"}
                  </Button>
                  
                  <div className="mt-4 text-center text-sm text-gray-500">
                    By placing your order, you agree to our{" "}
                    <Link to="/terms" className="text-orange-600 hover:underline">Terms of Service</Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-orange-600 hover:underline">Privacy Policy</Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
