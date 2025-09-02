import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <div className="w-11/12 md:w-4/5 flex items-center justify-between px-6 py-3 mt-4 rounded-full 
        bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg border border-white/20 backdrop-blur-md">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-blue-900 font-bold text-lg">
            🚆
          </div>
          <span className="text-white font-bold text-lg">RailTracker</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li className="hover:text-yellow-400 cursor-pointer transition">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer transition">Services</li>
          <li className="hover:text-yellow-400 cursor-pointer transition">About</li>
          <li className="hover:text-yellow-400 cursor-pointer transition">Contact</li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-yellow-400 transition">Login</button>
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 font-semibold hover:opacity-90 transition">
            Sign Up →
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
