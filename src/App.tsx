import React, { useState } from 'react';
import { AuthForms } from './components/AuthForms';
import { RestaurantCard } from './components/RestaurantCard';
import { AddRestaurantForm } from './components/AddRestaurantForm';
import { AddDishForm } from './components/AddDishForm';
import { Filters } from './components/Filters';
import type { Restaurant, User, Dish, Cuisine, DietaryRestriction } from './types';
import { PlusCircle, LogOut } from 'lucide-react';

const mockRestaurants: Restaurant[] = [
  {
    id: '2',
    name: 'Pizza Bakers',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D',
    description: 'Delicious pizzas with fresh ingredients',
    contact: {
      phone: '+91 73000 42775',
      email: 'contact@pizzabakers.com',
      address: 'Near B1'
    },
    dishes: [
      { id: '2', name: 'MARGHERITA CHEESE', price: 239, description: 'Classic cheese pizza', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '2' },
      { id: '3', name: 'CHEESE & TOMATO', price: 239, description: 'Cheese and fresh tomato topping', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '2' },
      { id: '4', name: 'DOUBLE CHEESE MARGHERITA', price: 409, description: 'Extra cheese for extra flavor', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '2' },
      { id: '5', name: 'VEGGIE FRESH', price: 409, description: 'Loaded with fresh vegetables', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '2' },
      { id: '6', name: 'COUNTRY SPECIAL', price: 409, description: 'Special country-style pizza', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '2' },
      { id: '7', name: 'PANEER DO PYAZA', price: 409, description: 'Paneer and onion delight', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '2' },
      { id: '8', name: 'GARDEN FARM', price: 489, description: 'Fresh garden veggies', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '2' },
      { id: '9', name: 'GOURMET VEG', price: 489, description: 'Premium veg toppings', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '2' },
      { id: '10', name: 'PEPPY PANEER', price: 489, description: 'Paneer with spices', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '2' },
      { id: '11', name: 'EXOTICA PARADISE', price: 489, description: 'Exotic veggie mix', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '2' },
      { id: '12', name: 'VEG. MEXICAN GREEN WAVE', price: 489, description: 'Mexican-style veg pizza', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '2' },
      { id: '13', name: 'PANEER TIKKA', price: 609, description: 'Tandoori paneer pizza', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '2' },
      { id: '14', name: 'TANDOORI KADHAI PANEER', price: 609, description: 'Spicy tandoori paneer', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '2' },
      { id: '15', name: 'VEG EXTRAVAGANZA', price: 609, description: 'Loaded with veg toppings', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '2' },
      { id: '16', name: 'PEPPER BARBEQUE CHICKEN CHEESE AND SPICY CHICKEN', price: 429, description: 'Spicy BBQ chicken with cheese', cuisine: 'italian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '2' },
      { id: '17', name: 'BARBEQUE CHICKEN & ONION', price: 429, description: 'BBQ chicken with onion topping', cuisine: 'italian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '2' },
      { id: '18', name: 'SPICY CHICKEN PEPRIKA', price: 619, description: 'Spicy chicken with paprika', cuisine: 'italian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '2' },
      { id: '19', name: 'TEXAS BARBEQUE CHICKEN', price: 619, description: 'BBQ chicken Texas style', cuisine: 'italian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '2' },
      { id: '20', name: 'CHICKEN TIKKA', price: 619, description: 'Tandoori chicken on a pizza', cuisine: 'italian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '2' },
      { id: '21', name: 'CHICKEN MEXICAN RED WAVE', price: 779, description: 'Mexican-style spicy chicken pizza', cuisine: 'italian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '2' },
      { id: '22', name: 'GOLDEN DELIGHT CHICKEN', price: 779, description: 'Golden-crusted chicken pizza', cuisine: 'italian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '2' },
      { id: '23', name: 'KEEMA DO PYAZA', price: 779, description: 'Spicy keema with onion', cuisine: 'italian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '2' },
      { id: '24', name: 'TANDOORI KADHAI CHICKEN', price: 779, description: 'Tandoori chicken with special spices', cuisine: 'italian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '2' },
      { id: '25', name: 'CHICKEN PEPPERONI', price: 799, description: 'Classic pepperoni with chicken', cuisine: 'italian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '2' },
      { id: '26', name: 'OVERLOADED SUPREME CHICKEN', price: 799, description: 'Fully loaded supreme chicken pizza', cuisine: 'italian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '2' }
    ],
    timeSlots: [
      { id: '1', time: '12:00 PM', isBooked: false },
      { id: '2', time: '1:00 PM', isBooked: false },
      { id: '3', time: '2:00 PM', isBooked: false }
    ]
  },
  {
    id: '3',
    name: 'Chatkara',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bm9vZGxlfGVufDB8fDB8fHww',
    description: 'Authentic North Indian cuisine with a modern twist',
    contact: {
      phone: '+91 89059 62406',
      email: 'contact@chatkara.com',
      address: 'Near B1'
    },
    dishes: [
      { id: '27', name: 'Masala Chaap', price: 220, description: 'Spicy soya chaap', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '3' },
      { id: '28', name: 'Punjabi Chaap', price: 220, description: 'Punjabi style soya chaap', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '3' },
      { id: '29', name: 'Achari Chaap', price: 220, description: 'Pickle flavored chaap', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '3' },
      { id: '30', name: 'Tandoori Chaap', price: 230, description: 'Tandoor cooked chaap', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '3' },
      { id: '31', name: 'Malai Chaap', price: 230, description: 'Creamy chaap', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '3' },
      { id: '32', name: 'Afghani Chaap', price: 230, description: 'Afghani style chaap', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '3' },
      { id: '33', name: 'Veg Chicken Tikka', price: 240, description: 'Vegetarian version of chicken tikka', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '3' },
      { id: '34', name: 'Veg Fish Tikka', price: 240, description: 'Vegetarian version of fish tikka', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '3' },
      { id: '35', name: 'Veg Masala Kaleji', price: 250, description: 'Vegetarian version of masala kaleji', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '3' },
      { id: '36', name: 'Veg Afghani Kaleji', price: 250, description: 'Vegetarian version of afghani kaleji', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '3' }
    ],
    timeSlots: [
      { id: '1', time: '12:00 PM', isBooked: false },
      { id: '2', time: '1:00 PM', isBooked: false },
      { id: '3', time: '2:00 PM', isBooked: false }
    ]
  },
  {
    id: '4',
    name: 'Divine Signature',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D',
    description: 'Multi-cuisine restaurant offering street food to fine dining',
    contact: {
      phone: '+91 73405 88261',
      email: 'contact@divinesignature.com',
      address: 'Near G1'
    },
    dishes: [
      { id: '37', name: 'Chatori Samosa Chaat', price: 40, description: 'Crispy samosa with tangy chutneys', cuisine: 'street-food', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '4' },
      { id: '38', name: 'Chatpati Kachori Chaat', price: 50, description: 'Spicy kachori with chutneys', cuisine: 'street-food', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '4' },
      { id: '39', name: 'Classic Indori Poha', price: 50, description: 'Authentic Indori style poha', cuisine: 'street-food', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '4' },
      { id: '40', name: 'Mumbaiya Bhel Puri', price: 60, description: 'Mumbai style bhel puri', cuisine: 'street-food', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '4' },
      { id: '41', name: 'Veg Chowmein', price: 70, description: 'Vegetable noodles', cuisine: 'chinese', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '4' },
      { id: '42', name: 'Paneer Chowmein', price: 90, description: 'Noodles with paneer', cuisine: 'chinese', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '4' },
      { id: '43', name: 'Egg Chowmein', price: 90, description: 'Noodles with egg', cuisine: 'chinese', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '4' },
      { id: '44', name: 'Red Sauce Pasta', price: 90, description: 'Pasta in tomato sauce', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '4' },
      { id: '45', name: 'White Sauce Pasta', price: 110, description: 'Pasta in creamy sauce', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '4' },
      { id: '46', name: 'Mix Sauce Pasta', price: 130, description: 'Pasta in mixed sauce', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '4' }
    ],
    timeSlots: [
      { id: '1', time: '12:00 PM', isBooked: false },
      { id: '2', time: '1:00 PM', isBooked: false },
      { id: '3', time: '2:00 PM', isBooked: false }
    ]
  }
  id: '5',
  name: 'GOBBLERS',
  image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  description: 'A diverse menu featuring both vegetarian and non-vegetarian bowls, wraps, and kebabs',
  contact: {
    phone: '+91 98765 43210',
    email: 'contact@gobblers.com',
    address: 'Near C Block'
  },
  dishes: [
    // Veg Items
    { id: '47', name: 'Khichdi Bowl', price: 149, description: 'Comfort food made with rice and lentils', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '5' },
    { id: '48', name: 'Rajma Rice Bowl', price: 169, description: 'Kidney beans curry served with steamed rice', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '5' },
    { id: '49', name: 'Dilli Chola Rice Bowl', price: 169, description: 'Delhi-style chickpea curry with rice', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '5' },
    { id: '50', name: 'Dal Makhni Rice Bowl', price: 179, description: 'Creamy black lentils served with rice', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '5' },
    { id: '51', name: 'Paneer Makhni Rice Bowl', price: 189, description: 'Cottage cheese in rich tomato gravy', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '5' },
    { id: '52', name: 'Paneer Lahori Rice Bowl', price: 189, description: 'Lahori-style spiced paneer curry', cuisine: 'indian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '5' },
    { id: '53', name: 'Chinese Paneer Rice Bowl', price: 189, description: 'Indo-Chinese style paneer preparation', cuisine: 'chinese', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '5' },
    { id: '54', name: 'Red Sauce Pasta Bowl', price: 159, description: 'Pasta in tangy tomato sauce', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '5' },
    { id: '55', name: 'White Sauce Pasta Bowl', price: 159, description: 'Creamy white sauce pasta', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '5' },
    { id: '56', name: 'Mix Sauce Pasta Bowl', price: 159, description: 'Best of both sauces combined', cuisine: 'italian', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '5' },
    // Non-Veg Items
    { id: '57', name: 'Chicken Makhni Rice Bowl', price: 189, description: 'Butter chicken with steamed rice', cuisine: 'indian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '5' },
    { id: '58', name: 'Prawn Makhni Rice Bowl', price: 189, description: 'Prawns in rich butter gravy', cuisine: 'indian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '5' },
    { id: '59', name: 'Chicken Biryani Bowl', price: 199, description: 'Aromatic chicken biryani', cuisine: 'indian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '5' },
    { id: '60', name: 'Prawn Biryani Bowl', price: 199, description: 'Flavorful prawn biryani', cuisine: 'indian', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '5' }
  ],
  timeSlots: [
    { id: '1', time: '12:00 PM', isBooked: false },
    { id: '2', time: '1:00 PM', isBooked: false },
    { id: '3', time: '2:00 PM', isBooked: false }
  ]
},
{
  id: '6',
  name: 'ZERO DEGREE CAFE',
  image: 'https://images.unsplash.com/photo-1570091376680-9ed2168000ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  description: 'Refreshing beverages and light bites in a cozy atmosphere',
  contact: {
    phone: '+91 98765 12345',
    email: 'contact@zerodegree.com',
    address: 'Near D Block'
  },
  dishes: [
    // Beverages
    { id: '61', name: 'Classic Lemonade', price: 50, description: 'Refreshing classic lemonade', cuisine: 'american', category: 'veg', dietaryRestrictions: ['vegetarian', 'vegan'], restaurantId: '6' },
    { id: '62', name: 'Virgin Mint Mojito', price: 80, description: 'Refreshing mint-flavored mojito', cuisine: 'american', category: 'veg', dietaryRestrictions: ['vegetarian', 'vegan'], restaurantId: '6' },
    { id: '63', name: 'Green Apple Mojito', price: 80, description: 'Green apple flavored refreshing drink', cuisine: 'american', category: 'veg', dietaryRestrictions: ['vegetarian', 'vegan'], restaurantId: '6' },
    { id: '64', name: 'Watermelon Mojito', price: 80, description: 'Fresh watermelon mojito', cuisine: 'american', category: 'veg', dietaryRestrictions: ['vegetarian', 'vegan'], restaurantId: '6' },
    // Shakes
    { id: '65', name: 'Chocolate Shake', price: 70, description: 'Rich chocolate milkshake', cuisine: 'american', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '6' },
    { id: '66', name: 'Oreo Shake', price: 80, description: 'Creamy Oreo milkshake', cuisine: 'american', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '6' },
    { id: '67', name: 'Nutella Shake', price: 80, description: 'Indulgent Nutella shake', cuisine: 'american', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '6' },
    // Snacks
    { id: '68', name: 'Hot Chocolate Brownie', price: 60, description: 'Warm chocolate brownie', cuisine: 'american', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '6' },
    { id: '69', name: 'Vada Pav', price: 30, description: 'Mumbai\'s favorite street food', cuisine: 'street-food', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '6' },
    { id: '70', name: 'Chicken Caesar Salad', price: 120, description: 'Classic Caesar salad with chicken', cuisine: 'american', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '6' }
  ],
  timeSlots: [
    { id: '1', time: '12:00 PM', isBooked: false },
    { id: '2', time: '1:00 PM', isBooked: false },
    { id: '3', time: '2:00 PM', isBooked: false }
  ]
},
{
  id: '7',
  name: 'THE CHINA TOWN',
  image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  description: 'Authentic Chinese cuisine with a wide variety of vegetarian and non-vegetarian options',
  contact: {
    phone: '+91 98765 98765',
    email: 'contact@chinatown.com',
    address: 'Near E Block'
  },
  dishes: [
    // Veg Starters
    { id: '71', name: 'French Fries', price: 110, description: 'Crispy golden fries', cuisine: 'chinese', category: 'veg', dietaryRestrictions: ['vegetarian', 'vegan'], restaurantId: '7' },
    { id: '72', name: 'Peri Peri Fries', price: 120, description: 'Spicy peri peri seasoned fries', cuisine: 'chinese', category: 'veg', dietaryRestrictions: ['vegetarian', 'vegan'], restaurantId: '7' },
    { id: '73', name: 'Veg Spring Roll', price: 135, description: 'Crispy rolls with vegetable filling', cuisine: 'chinese', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '7' },
    { id: '74', name: 'Crispy Chilly Potato', price: 150, description: 'Spicy crispy potato strips', cuisine: 'chinese', category: 'veg', dietaryRestrictions: ['vegetarian', 'vegan'], restaurantId: '7' },
    { id: '75', name: 'Chilly Paneer Dry', price: 190, description: 'Spicy Indo-Chinese style paneer', cuisine: 'chinese', category: 'veg', dietaryRestrictions: ['vegetarian'], restaurantId: '7' },
    // Non-Veg Starters
    { id: '76', name: 'Chicken Spring Roll', price: 180, description: 'Crispy rolls with chicken filling', cuisine: 'chinese', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '7' },
    { id: '77', name: 'Chicken Lollypop', price: 250, description: 'Spicy chicken lollypops', cuisine: 'chinese', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '7' },
    { id: '78', name: 'Drums of Heaven', price: 250, description: 'Spicy chicken wings', cuisine: 'chinese', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '7' },
    { id: '79', name: 'Dragon Chicken', price: 260, description: 'Spicy Indo-Chinese chicken', cuisine: 'chinese', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '7' },
    { id: '80', name: 'Chicken 65', price: 250, description: 'South Indian style spicy chicken', cuisine: 'chinese', category: 'non-veg', dietaryRestrictions: ['non-vegetarian'], restaurantId: '7' }
  ],
  timeSlots: [
    { id: '1', time: '12:00 PM', isBooked: false },
    { id: '2', time: '1:00 PM', isBooked: false },
    { id: '3', time: '2:00 PM', isBooked: false }
  ]
}
];
];

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [restaurants, setRestaurants] = useState<Restaurant[]>(mockRestaurants);
  const [showAddRestaurant, setShowAddRestaurant] = useState(false);
  const [showAddDish, setShowAddDish] = useState(false);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(null);
  const [editingRestaurant, setEditingRestaurant] = useState<Restaurant | undefined>();
  const [editingDish, setEditingDish] = useState<Dish | undefined>();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500]);
  const [selectedCuisines, setSelectedCuisines] = useState<Cuisine[]>([]);
  const [dietaryRestrictions, setDietaryRestrictions] = useState<DietaryRestriction[]>([]);

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin') {
      setUser({
        _id: '1',
        username,
        password,
        role: 'admin'
      });
    } else {
      setUser({
        _id: Date.now().toString(),
        username,
        password,
        role: 'user'
      });
    }
  };

  const handleSignup = (username: string, password: string) => {
    setUser({
      _id: Date.now().toString(),
      username,
      password,
      role: 'user'
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleAddRestaurant = (restaurantData: Omit<Restaurant, 'id' | 'dishes' | 'timeSlots'>) => {
    const newRestaurant: Restaurant = {
      id: Date.now().toString(),
      ...restaurantData,
      dishes: [],
      timeSlots: [
        { id: '1', time: '12:00 PM', isBooked: false },
        { id: '2', time: '1:00 PM', isBooked: false },
        { id: '3', time: '2:00 PM', isBooked: false },
        { id: '4', time: '6:00 PM', isBooked: false },
        { id: '5', time: '7:00 PM', isBooked: false },
        { id: '6', time: '8:00 PM', isBooked: false }
      ]
    };
    
    setRestaurants(prevRestaurants => [...prevRestaurants, newRestaurant]);
    setShowAddRestaurant(false);
  };

  const handleAddDish = (dishData: Omit<Dish, 'id'>) => {
    const newDish: Dish = {
      id: Date.now().toString(),
      ...dishData
    };
    setRestaurants(prevRestaurants =>
      prevRestaurants.map((restaurant) =>
        restaurant.id === selectedRestaurantId
          ? { ...restaurant, dishes: [...restaurant.dishes, newDish] }
          : restaurant
      )
    );
    setShowAddDish(false);
  };

  const filteredRestaurants = restaurants.map(restaurant => {
    // Filter dishes based on all criteria
    const filteredDishes = restaurant.dishes.filter(dish => {
      // Check price range
      const matchesPrice = dish.price <= priceRange[1];

      // Check cuisine
      const matchesCuisine = selectedCuisines.length === 0 || selectedCuisines.includes(dish.cuisine);

      // Check dietary restrictions
      let matchesDietary = true;
      if (dietaryRestrictions.length > 0) {
        matchesDietary = dietaryRestrictions.every(restriction => {
          switch (restriction) {
            case 'vegetarian':
              return dish.category === 'veg';
            case 'non-vegetarian':
              return dish.category === 'non-veg';
            case 'vegan':
              return dish.dietaryRestrictions.includes('vegan');
            case 'gluten-free':
              return dish.dietaryRestrictions.includes('gluten-free');
            case 'dairy-free':
              return dish.dietaryRestrictions.includes('dairy-free');
            case 'none':
              return true;
            default:
              return false;
          }
        });
      }

      return matchesPrice && matchesCuisine && matchesDietary;
    });

    // Only include restaurants that have matching dishes
    return {
      ...restaurant,
      dishes: filteredDishes
    };
  }).filter(restaurant => restaurant.dishes.length > 0);

  if (!user) {
    return <AuthForms onLogin={handleLogin} onSignup={handleSignup} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">Vibe and Dine</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Welcome, {user.username}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900">Restaurants</h2>
          {user.role === 'admin' && (
            <button
              onClick={() => setShowAddRestaurant(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <PlusCircle size={20} />
              Add Restaurant
            </button>
          )}
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <Filters
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCuisines={selectedCuisines}
              setSelectedCuisines={setSelectedCuisines}
              dietaryRestrictions={dietaryRestrictions}
              setDietaryRestrictions={setDietaryRestrictions}
            />
          </div>

          <div className="col-span-9 space-y-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                currentUser={user}
                onAddDish={(id) => {
                  setSelectedRestaurantId(id);
                  setShowAddDish(true);
                }}
                onEditRestaurant={(restaurant) => {
                  setEditingRestaurant(restaurant);
                  setShowAddRestaurant(true);
                }}
                onDeleteRestaurant={(id) => {
                  setRestaurants(prevRestaurants => prevRestaurants.filter((r) => r.id !== id));
                }}
                onEditDish={(restaurantId, dish) => {
                  setSelectedRestaurantId(restaurantId);
                  setEditingDish(dish);
                  setShowAddDish(true);
                }}
                onDeleteDish={(restaurantId, dishId) => {
                  setRestaurants(prevRestaurants =>
                    prevRestaurants.map((restaurant) =>
                      restaurant.id === restaurantId
                        ? {
                            ...restaurant,
                            dishes: restaurant.dishes.filter((d) => d.id !== dishId)
                          }
                        : restaurant
                    )
                  );
                }}
                onBookTimeSlot={(restaurantId, slotId) => {
                  setRestaurants(prevRestaurants =>
                    prevRestaurants.map((restaurant) =>
                      restaurant.id === restaurantId
                        ? {
                            ...restaurant,
                            timeSlots: restaurant.timeSlots.map((slot) =>
                              slot.id === slotId
                                ? { ...slot, isBooked: true, bookedBy: user._id }
                                : slot
                            )
                          }
                        : restaurant
                    )
                  );
                }}
                onCancelBooking={(restaurantId, slotId) => {
                  setRestaurants(prevRestaurants =>
                    prevRestaurants.map((restaurant) =>
                      restaurant.id === restaurantId
                        ? {
                            ...restaurant,
                            timeSlots: restaurant.timeSlots.map((slot) =>
                              slot.id === slotId
                                ? { ...slot, isBooked: false, bookedBy: undefined }
                                : slot
                            )
                          }
                        : restaurant
                    )
                  );
                }}
              />
            ))}
          </div>
        </div>

        {showAddRestaurant && (
          <AddRestaurantForm
            onAdd={handleAddRestaurant}
            onEdit={(restaurant) => {
              setRestaurants(prevRestaurants =>
                prevRestaurants.map((r) => (r.id === restaurant.id ? restaurant : r))
              );
              setShowAddRestaurant(false);
              setEditingRestaurant(undefined);
            }}
            onClose={() => {
              setShowAddRestaurant(false);
              setEditingRestaurant(undefined);
            }}
            editingRestaurant={editingRestaurant}
          />
        )}

        {showAddDish && selectedRestaurantId && (
          <AddDishForm
            restaurantId={selectedRestaurantId}
            onAdd={handleAddDish}
            onEdit={(dish) => {
              setRestaurants(prevRestaurants =>
                prevRestaurants.map((restaurant) =>
                  restaurant.id === selectedRestaurantId
                    ? {
                        ...restaurant,
                        dishes: restaurant.dishes.map((d) =>
                          d.id === dish.id ? dish : d
                        )
                      }
                    : restaurant
                )
              );
              setShowAddDish(false);
              setEditingDish(undefined);
            }}
            onClose={() => {
              setShowAddDish(false);
              setEditingDish(undefined);
            }}
            editingDish={editingDish}
          />
        )}
      </div>
    </div>
  );
}

export default App;