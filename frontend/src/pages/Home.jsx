import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  const foodItems = [
    { id: 101, name: "Double Cheeseburger", restaurant: "Burger King", price: 250, imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80" },
    { id: 102, name: "Pepperoni Pizza", restaurant: "Pizza Hut", price: 450, imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80" },
    { id: 103, name: "Spicy Tuna Roll", restaurant: "Sushi Train", price: 350, imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80" },
    { id: 104, name: "Crunchy Taco", restaurant: "Taco Bell", price: 150, imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&q=80" },
    { id: 105, name: "Zinger Burger", restaurant: "KFC", price: 280, imageUrl: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80" },
    { id: 106, name: "Cheese Burst Pizza", restaurant: "Dominos", price: 499, imageUrl: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500&q=80" },
    { id: 107, name: "Paneer Tikka Sub", restaurant: "Subway", price: 210, imageUrl: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&q=80" },
    { id: 108, name: "Caramel Frappuccino", restaurant: "Starbucks", price: 320, imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80" },
  ];

  useEffect(() => {
    // In a real app, this would be an actual API call
    // For now, let's mock it since we haven't started the backend yet
    setTimeout(() => {
      setRestaurants([
        { id: 1, name: "Burger King", address: "Vesu, Surat", rating: 4.5, imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80" },
        { id: 2, name: "Pizza Hut", address: "Adajan, Surat", rating: 4.2, imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80" },
        { id: 3, name: "Sushi Train", address: "Piplod, Surat", rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80" },
        { id: 4, name: "Taco Bell", address: "Varachha, Surat", rating: 4.0, imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80" },
        { id: 5, name: "KFC", address: "Dumas Rd, Surat", rating: 4.3, imageUrl: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80" },
        { id: 6, name: "Dominos", address: "City Light, Surat", rating: 4.1, imageUrl: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500&q=80" },
        { id: 7, name: "Subway", address: "Udhna, Surat", rating: 3.9, imageUrl: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&q=80" },
        { id: 8, name: "Starbucks", address: "Katargam, Surat", rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80" },
        { id: 9, name: "Dunkin", address: "Athwalines, Surat", rating: 4.4, imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80" },
        { id: 10, name: "Chipotle", address: "Palanpur, Surat", rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=500&q=80" },
        { id: 11, name: "McDonald's", address: "Bhatar, Surat", rating: 4.2, imageUrl: "https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?w=500&q=80" },
        { id: 12, name: "Wendys", address: "Althan, Surat", rating: 4.1, imageUrl: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=500&q=80" },
        { id: 13, name: "Five Guys", address: "Ring Road, Surat", rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80" },
        { id: 14, name: "In-N-Out", address: "Ghod Dod Rd, Surat", rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80" },
        { id: 15, name: "Chick-fil-A", address: "Magdalla, Surat", rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80" },
        { id: 16, name: "Panda Express", address: "Nanpura, Surat", rating: 4.0, imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-64 text-4xl">Loading restaurants...</div>;
  }

  return (
    <div>
      <div className="mb-20 relative rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl shadow-slate-900/20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80')] opacity-20 mix-blend-overlay bg-cover bg-center z-10"></div>
        <div className="relative z-20 py-40 px-12 text-center sm:px-16 lg:px-20 backdrop-blur-[2px]">
          <h1 className="text-7xl md:text-9xl font-extrabold mb-10 font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400 leading-tight">
            Hungry? We got you.
          </h1>
          <p className="text-3xl md:text-5xl text-slate-300 max-w-5xl mx-auto font-light leading-snug">
            Order incredible food from your favorite restaurants near you. Fast, fresh, and delivered right to your door.
          </p>
        </div>
      </div>
      
      {/* Popular Food Items Section */}
      <h2 className="text-6xl font-extrabold text-slate-800 mb-14 font-display tracking-tight mt-32">Popular Food Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-16 mb-32">
        {foodItems.map((item) => (
          <div key={item.id} className="bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="aspect-square overflow-hidden relative">
              <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition duration-500"/>
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full shadow-md">
                 <span className="text-orange-600 font-extrabold text-3xl">
                  ₹{item.price}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-4xl font-extrabold text-gray-900 mb-4">{item.name}</h3>
              <p className="text-gray-500 text-2xl mb-8">{item.restaurant}</p>
              <button 
                onClick={() => addToCart(item)}
                className="mt-auto w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-extrabold text-3xl py-6 rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 transition-all active:scale-95"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-6xl font-extrabold text-slate-800 mb-14 font-display tracking-tight">Popular Restaurants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-16">
        {restaurants.map((restaurant) => (
          <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id} className="bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 block">
            <div className="aspect-square overflow-hidden relative">
              <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-full object-cover hover:scale-110 transition duration-500"/>
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full shadow-md">
                 <span className="text-green-700 font-extrabold text-2xl flex items-center gap-2">
                  ★ {restaurant.rating}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-4xl font-extrabold text-gray-900 mb-4">{restaurant.name}</h3>
              <p className="text-gray-500 text-2xl">{restaurant.address}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
