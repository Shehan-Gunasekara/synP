import React from 'react';
import { Menu, Home, Image, DollarSign, LogIn } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-semibold">Visual AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink icon={<Home className="h-4 w-4" />} text="Home" />
            <NavLink icon={<Image className="h-4 w-4" />} text="Gallery" />
            <NavLink icon={<DollarSign className="h-4 w-4" />} text="Pricing" />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-colors">
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-purple-600 transition-colors">
      {icon}
      <span>{text}</span>
    </a>
  );
}