
// Data for the home page components

export const bannerImages = [
  {
    url: "https://images.unsplash.com/photo-1513639304702-9116c839f94b?auto=format&fit=crop&w=1920",
    title: "Discover Your Perfect Food Mood",
    subtitle: "Let our algorithm match your current mood with delicious foods"
  },
  {
    url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1920",
    title: "Craft Your Custom Combo",
    subtitle: "Mix and match your favorite dishes for the ultimate meal experience"
  },
  {
    url: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=1920",
    title: "Food Delivered Your Way",
    subtitle: "Fast, fresh, and always satisfying"
  }
];

export const moods = [
  { id: 1, name: "Happy", emoji: "😊" },
  { id: 2, name: "Stressed", emoji: "😓" },
  { id: 3, name: "Tired", emoji: "😴" },
  { id: 4, name: "Adventurous", emoji: "🤩" },
  { id: 5, name: "Nostalgic", emoji: "🥹" },
  { id: 6, name: "Healthy", emoji: "💪" }
];

export const featuredRestaurants = [
  {
    id: 1,
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800",
    rating: 4.8,
    cuisine: "American",
    deliveryTime: "15-25 min",
    distance: "1.2 miles"
  },
  {
    id: 2,
    name: "Pizza Heaven",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800",
    rating: 4.5,
    cuisine: "Italian",
    deliveryTime: "20-30 min",
    distance: "2.1 miles"
  },
  {
    id: 3,
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=800",
    rating: 4.7,
    cuisine: "Mexican",
    deliveryTime: "20-35 min",
    distance: "1.8 miles"
  },
  {
    id: 4,
    name: "Sushi Express",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800",
    rating: 4.9,
    cuisine: "Japanese",
    deliveryTime: "25-40 min",
    distance: "3.0 miles"
  }
];

export const popularCombos = [
  {
    id: 101,
    name: "Comfort Classic",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800",
    description: "Cheeseburger + Fries + Chocolate Shake",
    price: 15.99,
    mood: "Happy"
  },
  {
    id: 102,
    name: "Brain Booster",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800",
    description: "Grilled Salmon + Quinoa + Green Tea",
    price: 18.99,
    mood: "Stressed"
  },
  {
    id: 103,
    name: "Energy Kick",
    image: "https://images.unsplash.com/photo-1588483977150-9c2127ab7bcc?auto=format&fit=crop&w=800",
    description: "Protein Bowl + Fruit Smoothie + Energy Bar",
    price: 14.99,
    mood: "Tired"
  },
  {
    id: 104,
    name: "Flavor Explorer",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800",
    description: "Spicy Ramen + Bubble Tea + Mochi",
    price: 16.99,
    mood: "Adventurous"
  }
];

export const testimonials = [
  {
    text: "The mood-matching feature is genius! I was feeling down and their comfort food combo really lifted my spirits.",
    name: "Sarah Johnson",
    location: "San Francisco, CA",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    text: "I love being able to customize my combos. The app remembers my preferences and makes ordering super quick.",
    name: "Michael Chen",
    location: "New York, NY",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    text: "The delivery is always on time and the food quality is consistently excellent. My go-to food app!",
    name: "Aisha Patel",
    location: "Chicago, IL",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];
