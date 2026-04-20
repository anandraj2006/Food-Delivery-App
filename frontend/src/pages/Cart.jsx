import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32">
        <ShoppingBag size={120} className="text-gray-200 mb-8" />
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6 font-display">Your cart is empty</h2>
        <p className="text-3xl text-gray-500 mb-10">Looks like you haven't added any delicious food yet.</p>
        <Link to="/" className="bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-3xl px-12 py-5 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-1">
          Browse Food
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full px-6 lg:px-12 py-16">
      <h1 className="text-8xl font-extrabold text-gray-900 mb-16 font-display tracking-tight">Your Cart</h1>
      
      <div className="flex flex-col xl:flex-row gap-20">
        {/* Cart Items List */}
        <div className="flex-grow space-y-12">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-[3rem] shadow-md border-2 border-gray-100 p-10 flex items-center gap-12">
              <img src={item.imageUrl} alt={item.name} className="w-64 h-64 rounded-3xl object-cover shadow-sm" />
              
              <div className="flex-grow">
                <h3 className="text-5xl font-bold text-gray-900 mb-4">{item.name}</h3>
                <p className="text-3xl text-gray-500 mb-8">{item.restaurant}</p>
                <div className="text-4xl font-extrabold text-orange-600">₹{item.price}</div>
              </div>
              
              <div className="flex flex-col items-end gap-10">
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-600 transition p-4 bg-red-50 hover:bg-red-100 rounded-2xl"
                >
                  <Trash2 size={48} />
                </button>
                
                <div className="flex items-center gap-8 bg-slate-100 rounded-[2rem] px-8 py-5 shadow-inner">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-slate-600 hover:text-orange-500 disabled:opacity-50 transition-colors"
                    disabled={item.quantity <= 1}
                  >
                    <Minus size={40} />
                  </button>
                  <span className="text-4xl font-bold w-12 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-slate-600 hover:text-orange-500 transition-colors"
                  >
                    <Plus size={40} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="xl:w-[600px] flex-shrink-0">
          <div className="bg-white rounded-[3rem] shadow-2xl border-2 border-gray-100 p-12 sticky top-40">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-12 font-display">Order Summary</h2>
            
            <div className="space-y-8 text-3xl text-gray-600 mb-10 border-b-2 border-gray-100 pb-10">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-gray-900">₹{getCartTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-bold text-gray-900">₹50</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span className="font-bold text-gray-900">₹{(getCartTotal() * 0.05).toFixed(0)}</span>
              </div>
            </div>
            
            <div className="flex justify-between text-5xl font-extrabold text-gray-900 mb-14">
              <span>Total</span>
              <span className="text-rose-600">₹{getCartTotal() + 50 + parseInt(getCartTotal() * 0.05)}</span>
            </div>
            
            <button 
              onClick={() => {
                alert("Order placed successfully! (Mock checkout)");
                clearCart();
              }}
              className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-extrabold text-4xl py-8 rounded-[2rem] hover:shadow-2xl hover:shadow-orange-500/40 transition-all transform hover:-translate-y-2 uppercase tracking-wide"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
