import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('name');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl shadow-sm border-b border-slate-200/60">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-32 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent font-display tracking-tight">
              FoodieExpress
            </Link>
          </div>
          
          <div className="flex items-center space-x-12">
            <Link to="/cart" className="text-slate-600 hover:text-orange-500 relative transition-colors">
              <ShoppingCart size={56} />
              <span className="absolute -top-4 -right-4 bg-rose-500 text-white text-xl font-bold rounded-full h-10 w-10 flex items-center justify-center shadow-md border-4 border-white">
                {getCartCount()}
              </span>
            </Link>
            
            {token ? (
              <div className="flex items-center space-x-12">
                <span className="text-slate-700 font-bold text-4xl">Hi, {userName}</span>
                <button 
                  onClick={handleLogout}
                  className="flex items-center text-slate-600 hover:text-red-500 transition-colors text-4xl font-bold"
                >
                  <LogOut size={44} className="mr-4"/> Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-12">
                <Link to="/login" className="text-slate-600 hover:text-orange-500 font-bold text-4xl transition-colors">Login</Link>
                <Link to="/register" className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-12 py-6 rounded-3xl hover:shadow-2xl hover:shadow-orange-500/40 transition-all font-extrabold text-4xl transform hover:-translate-y-2">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
