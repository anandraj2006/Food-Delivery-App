import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await axios.post('/api/auth/register', formData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-24 bg-white p-14 border-2 border-gray-100 rounded-[2rem] shadow-2xl">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900 font-display">Create an Account</h2>
        <p className="text-gray-500 text-2xl mt-4">Join FoodieExpress today</p>
      </div>
      
      {error && <div className="bg-red-50 text-red-500 p-4 rounded-xl mb-6 text-xl font-medium border border-red-100">{error}</div>}
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-2xl font-bold text-gray-700 mb-3">Full Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-gray-300 text-2xl rounded-2xl p-5 border-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-2xl font-bold text-gray-700 mb-3">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 text-2xl rounded-2xl p-5 border-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-2xl font-bold text-gray-700 mb-3">Password</label>
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border-gray-300 text-2xl rounded-2xl p-5 border-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-2xl font-bold text-gray-700 mb-3">Address</label>
          <textarea 
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className="w-full border-gray-300 text-2xl rounded-2xl p-5 border-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-extrabold text-2xl py-5 rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 transition-all disabled:opacity-70 transform hover:-translate-y-1 mt-6"
        >
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>
      
      <div className="mt-10 text-center text-xl text-gray-600 font-medium">
        Already have an account? <Link to="/login" className="text-orange-500 font-bold hover:underline">Sign in</Link>
      </div>
    </div>
  );
};

export default Register;
