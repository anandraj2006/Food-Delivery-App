import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-24 mt-24 border-t border-slate-800">
      <div className="w-full px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-7xl font-extrabold text-white mb-10 font-display bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">FoodieExpress</h3>
            <p className="text-slate-400 text-3xl leading-relaxed">
              Delivering happiness to your door. The best restaurants in town, just a click away.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-4xl mb-10">Company</h4>
            <ul className="space-y-8 text-3xl">
              <li><Link to="#" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-orange-400 transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-orange-400 transition-colors">Blog</Link></li>
              <li><Link to="#" className="hover:text-orange-400 transition-colors">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-4xl mb-10">Help & Support</h4>
            <ul className="space-y-8 text-3xl">
              <li><Link to="#" className="hover:text-orange-400 transition-colors">Partner with us</Link></li>
              <li><Link to="#" className="hover:text-orange-400 transition-colors">Ride with us</Link></li>
              <li><Link to="#" className="hover:text-orange-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-4xl mb-10">Contact</h4>
            <ul className="space-y-8 text-3xl">
              <li><span className="text-slate-400 font-bold">Email:</span> hello@foodieexpress.in</li>
              <li><span className="text-slate-400 font-bold">Phone:</span> +91 98765 43210</li>
              <li><span className="text-slate-400 font-bold">Address:</span> Vesu, Surat 395007</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-20 pt-12 text-center text-slate-500 text-2xl font-medium">
          <p>&copy; {new Date().getFullYear()} FoodieExpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
