import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Star, MapPin, Clock } from 'lucide-react';

const RestaurantDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [restaurant, setRestaurant] = useState(null);
  const [menuCategories, setMenuCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Recommended");

  // Mock database of all restaurants
  const allRestaurants = [
    { id: 1, name: "Burger King", address: "Vesu, Surat", rating: 4.5, imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&q=80" },
    { id: 2, name: "Pizza Hut", address: "Adajan, Surat", rating: 4.2, imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80" },
    { id: 3, name: "Sushi Train", address: "Piplod, Surat", rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&q=80" },
    { id: 4, name: "Taco Bell", address: "Varachha, Surat", rating: 4.0, imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200&q=80" },
    { id: 5, name: "KFC", address: "Dumas Rd, Surat", rating: 4.3, imageUrl: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=1200&q=80" },
    { id: 6, name: "Dominos", address: "City Light, Surat", rating: 4.1, imageUrl: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=1200&q=80" },
    { id: 7, name: "Subway", address: "Udhna, Surat", rating: 3.9, imageUrl: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=1200&q=80" },
    { id: 8, name: "Starbucks", address: "Katargam, Surat", rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80" },
    { id: 9, name: "Dunkin", address: "Athwalines, Surat", rating: 4.4, imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=80" },
    { id: 10, name: "Chipotle", address: "Palanpur, Surat", rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=1200&q=80" },
    { id: 11, name: "McDonald's", address: "Bhatar, Surat", rating: 4.2, imageUrl: "https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?w=1200&q=80" },
    { id: 12, name: "Wendys", address: "Althan, Surat", rating: 4.1, imageUrl: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=1200&q=80" },
    { id: 13, name: "Five Guys", address: "Ring Road, Surat", rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=80" },
    { id: 14, name: "In-N-Out", address: "Ghod Dod Rd, Surat", rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=1200&q=80" },
    { id: 15, name: "Chick-fil-A", address: "Magdalla, Surat", rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?w=1200&q=80" },
    { id: 16, name: "Panda Express", address: "Nanpura, Surat", rating: 4.0, imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=1200&q=80" },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const foundRestaurant = allRestaurants.find(r => r.id === parseInt(id));
      setRestaurant(foundRestaurant);

      if (foundRestaurant) {
        const name = foundRestaurant.name.toLowerCase();
        let categories = [];

        // Generate extensive categorized menus
        if (name.includes('burger') || name.includes('mcdonald') || name.includes('guys') || name.includes('wendy') || name.includes('out') || name.includes('kfc')) {
          categories = [
            {
              title: "Recommended",
              items: [
                { id: `r1-${id}`, name: "Signature Double Burger", price: 250, description: "Two flame-grilled patties, fresh veggies, and our secret sauce.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80" },
                { id: `r2-${id}`, name: "Spicy Crispy Chicken", price: 220, description: "Hand-breaded crispy chicken fillet with spicy mayo.", imageUrl: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80" },
                { id: `r3-${id}`, name: "Loaded Cheese Fries", price: 150, description: "Golden fries smothered in liquid cheese and jalapenos.", imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=500&q=80" },
              ]
            },
            {
              title: "Burgers & Wraps",
              items: [
                { id: `m1-${id}`, name: "Classic Cheeseburger", price: 150, description: "A simple, perfect classic with American cheese.", imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80" },
                { id: `m2-${id}`, name: "Double Trouble Bacon", price: 280, description: "Double patties, double cheese, triple smoked bacon.", imageUrl: "https://images.unsplash.com/photo-1594212202875-54d92ce866a4?w=500&q=80" },
                { id: `m3-${id}`, name: "Mushroom Swiss Burger", price: 260, description: "Sautéed mushrooms and melted Swiss cheese.", imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80" },
                { id: `m4-${id}`, name: "Crispy Veggie Wrap", price: 180, description: "Fresh garden veggies and crispy patty wrapped tight.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80" },
              ]
            },
            {
              title: "Sides & Starters",
              items: [
                { id: `s1-${id}`, name: "Medium French Fries", price: 90, description: "Salty, crispy, golden perfection.", imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=500&q=80" },
                { id: `s2-${id}`, name: "Onion Rings", price: 120, description: "Beer-battered and fried until crispy.", imageUrl: "https://images.unsplash.com/photo-1639024471210-618bf5d3989c?w=500&q=80" },
                { id: `s3-${id}`, name: "Chicken Nuggets (6pc)", price: 140, description: "Tender, juicy, and perfect for dipping.", imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80" },
              ]
            },
            {
              title: "Beverages",
              items: [
                { id: `b1-${id}`, name: "Large Cola", price: 60, description: "Ice cold and refreshing.", imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80" },
                { id: `b2-${id}`, name: "Thick Chocolate Shake", price: 150, description: "Made with real ice cream.", imageUrl: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=500&q=80" },
              ]
            }
          ];
        } else if (name.includes('pizza') || name.includes('domino')) {
          categories = [
            {
              title: "Recommended",
              items: [
                { id: `r1-${id}`, name: "Pepperoni Feast Pizza", price: 450, description: "Loaded with double pepperoni and extra cheese.", imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80" },
                { id: `r2-${id}`, name: "Stuffed Garlic Bread", price: 180, description: "Freshly baked bread stuffed with mozzarella.", imageUrl: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=500&q=80" },
              ]
            },
            {
              title: "Pizzas",
              items: [
                { id: `m1-${id}`, name: "Margherita Pizza", price: 299, description: "Classic delight with 100% real mozzarella cheese.", imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80" },
                { id: `m2-${id}`, name: "Farmhouse Pizza", price: 399, description: "Overloaded with crunchy, crisp onions, capsicum, mushroom.", imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80" },
                { id: `m3-${id}`, name: "Cheese Burst Pizza", price: 499, description: "Our signature crust filled with liquid cheese.", imageUrl: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500&q=80" },
                { id: `m4-${id}`, name: "Spicy Chicken Fiesta", price: 550, description: "Spicy chicken, peri peri sauce, jalapenos.", imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80" },
              ]
            },
            {
              title: "Sides",
              items: [
                { id: `s1-${id}`, name: "Garlic Breadsticks", price: 120, description: "Baked to perfection.", imageUrl: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=500&q=80" },
                { id: `s2-${id}`, name: "Spicy Chicken Wings", price: 220, description: "Tossed in fiery hot sauce.", imageUrl: "https://images.unsplash.com/photo-1569691899455-88464f6d3cb1?w=500&q=80" },
              ]
            },
            {
              title: "Desserts",
              items: [
                { id: `b1-${id}`, name: "Choco Lava Cake", price: 110, description: "Filled with gooey chocolate center.", imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80" },
              ]
            }
          ];
        } else {
           // Generic expansive menu for all other types (Subway, Sushi, Starbucks, Taco Bell, etc.)
           categories = [
            {
              title: "Recommended",
              items: [
                { id: `r1-${id}`, name: "Signature Dish", price: 350, description: "Our absolute best seller, crafted to perfection.", imageUrl: "https://images.unsplash.com/photo-1544025162-811114a8bd91?w=500&q=80" },
                { id: `r2-${id}`, name: "Chef's Special", price: 450, description: "Curated by our head chef with premium ingredients.", imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80" },
              ]
            },
            {
              title: "Main Course",
              items: [
                { id: `m1-${id}`, name: "Premium Combo Meal", price: 550, description: "A complete meal deal for one.", imageUrl: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=500&q=80" },
                { id: `m2-${id}`, name: "Spicy Variant", price: 380, description: "For those who like it hot.", imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80" },
                { id: `m3-${id}`, name: "Healthy Bowl", price: 420, description: "Packed with nutrition and fresh veggies.", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80" },
                { id: `m4-${id}`, name: "Classic Bowl", price: 390, description: "The original recipe that started it all.", imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80" },
              ]
            },
            {
              title: "Appetizers",
              items: [
                { id: `s1-${id}`, name: "Starter Platter", price: 250, description: "A mix of our best starters.", imageUrl: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=500&q=80" },
                { id: `s2-${id}`, name: "Crispy Bites", price: 180, description: "Perfectly fried snacks.", imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80" },
              ]
            },
            {
              title: "Desserts & Drinks",
              items: [
                { id: `b1-${id}`, name: "House Dessert", price: 180, description: "Sweet finish to your meal.", imageUrl: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80" },
                { id: `b2-${id}`, name: "Refreshing Drink", price: 120, description: "Chilled and sweet.", imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80" },
              ]
            }
          ];
        }
        
        // Attach the restaurant name to the items for the cart context
        const populatedCategories = categories.map(category => ({
            ...category,
            items: category.items.map(item => ({...item, restaurant: foundRestaurant.name}))
        }));

        setMenuCategories(populatedCategories);
      }
      setLoading(false);
    }, 600);
  }, [id]);

  // Handle smooth scroll to category
  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const yOffset = -40; // Offset for sticky headers
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-4xl font-bold text-gray-500">Loading Menu...</div>;
  }

  if (!restaurant) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-gray-900 mb-8">Restaurant Not Found</h1>
        <Link to="/" className="text-3xl text-orange-500 hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="pb-32 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden mb-12 shadow-md">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-10"></div>
        <img src={restaurant.imageUrl} alt={restaurant.name} className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="absolute top-8 left-8 z-20">
          <Link to="/" className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg text-gray-800 hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center">
            <ArrowLeft size={36} />
          </Link>
        </div>

        <div className="absolute bottom-12 left-12 lg:left-24 z-20 text-white max-w-4xl">
          <h1 className="text-8xl lg:text-[10rem] font-extrabold mb-8 font-display tracking-tight drop-shadow-lg leading-none">{restaurant.name}</h1>
          <div className="flex flex-wrap items-center gap-6 lg:gap-10 text-3xl lg:text-4xl font-medium">
            <span className="flex items-center gap-2 bg-green-600 px-6 py-3 rounded-2xl shadow-md font-bold">
              <Star size={36} className="fill-white" /> {restaurant.rating}
            </span>
            <span className="flex items-center gap-3 drop-shadow-md text-slate-200">
              <MapPin size={40} /> {restaurant.address}
            </span>
            <span className="flex items-center gap-3 drop-shadow-md text-slate-200">
              <Clock size={40} /> 30-40 mins
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Layout: Sidebar + Menu Grid */}
      <div className="w-full px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Sticky Left Sidebar Navigation */}
        <div className="hidden lg:block w-96 sticky top-10 flex-shrink-0">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-10 uppercase tracking-widest text-slate-400">Categories</h2>
          <nav className="flex flex-col gap-4">
            {menuCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => scrollToCategory(category.title)}
                className={`text-left text-4xl font-bold py-6 px-8 rounded-3xl transition-all duration-200 ${
                  activeCategory === category.title 
                    ? 'bg-orange-500 text-white shadow-xl shadow-orange-500/30' 
                    : 'text-slate-600 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                {category.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Horizontal Navigation */}
        <div className="lg:hidden w-full overflow-x-auto pb-4 -mx-6 px-6 flex gap-4 snap-x">
          {menuCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => scrollToCategory(category.title)}
              className={`flex-shrink-0 text-xl font-bold py-3 px-6 rounded-full snap-start whitespace-nowrap transition-all ${
                activeCategory === category.title 
                  ? 'bg-orange-500 text-white shadow-md' 
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Items Area */}
        <div className="flex-grow w-full space-y-32">
          {menuCategories.map((category) => (
            <div key={category.title} id={category.title} className="scroll-mt-10">
              <h2 className="text-7xl font-extrabold text-gray-900 mb-12 font-display flex items-center gap-8">
                {category.title}
                <div className="h-2 flex-grow bg-slate-200 rounded-full"></div>
              </h2>
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16">
                {category.items.map((item) => (
                  <div key={item.id} className="bg-white rounded-[3rem] border-2 border-gray-100 p-10 flex gap-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group h-full">
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">{item.name}</h3>
                        <div className="text-4xl font-extrabold text-gray-800 mb-6">₹{item.price}</div>
                        <p className="text-3xl text-slate-500 leading-relaxed mb-8 line-clamp-3">{item.description}</p>
                      </div>
                      
                      <button 
                        onClick={() => addToCart(item)}
                        className="w-full sm:w-auto self-start bg-slate-100 hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 hover:text-white text-gray-800 font-extrabold text-3xl py-5 px-12 rounded-2xl transition-all active:scale-95 shadow-sm"
                      >
                        ADD
                      </button>
                    </div>
                    
                    <div className="flex-shrink-0 relative">
                      <img src={item.imageUrl} alt={item.name} className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl object-cover group-hover:scale-105 transition-transform duration-500 shadow-xl" />
                      <button 
                        onClick={() => addToCart(item)}
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-green-600 font-extrabold text-2xl py-3 px-12 rounded-xl shadow-2xl border-2 border-slate-100 hover:bg-green-50 uppercase tracking-wide"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
