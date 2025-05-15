
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { UserCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-indigo-600">StudServe</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
              <Link to="/services" className="px-3 py-2 text-gray-600 hover:text-indigo-600 font-medium">Browse Services</Link>
              <Link to="/how-it-works" className="px-3 py-2 text-gray-600 hover:text-indigo-600 font-medium">How It Works</Link>
              <Link to="/about" className="px-3 py-2 text-gray-600 hover:text-indigo-600 font-medium">About Us</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/services" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 font-medium">Browse Services</Link>
          <Link to="/how-it-works" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 font-medium">How It Works</Link>
          <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 font-medium">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
