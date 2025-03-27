import { Globe, User, HelpCircle, Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Vehicles from "../pages/Vehicles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-blue-600 to-blue-400 py-4 px-6 flex justify-between items-center z-50 shadow-md">
      {/* LOGO */}
      <NavLink to="/">
        <img src="/path-to-your-logo.png" alt="PRIMERIGS" className="text-white text-2xl font-bold tracking-widest" />
      </NavLink>
      {/* <NavLink to="/" className="text-white text-2xl font-bold tracking-widest">
        PRIMERIGS
      </NavLink> */}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <div
          className="relative"
          onMouseOver={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <NavLink to="/" className="hover:bg-gray-300 px-3 py-2 rounded">
            Vehicles
          </NavLink>
          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute left-0 top-full bg-white text-black shadow-lg rounded-md flex flex-row p-2">
              <Vehicles />
            </div>
          )}
        </div>
        <NavLink to="/Energy" className="hover:bg-gray-300 px-3 py-2 rounded">
          Energy
        </NavLink>
        <a href="#" className="hover:bg-gray-300 px-3 py-2 rounded">
          Charging
        </a>
        <a href="#" className="hover:bg-gray-300 px-3 py-2 rounded">
          Discover
        </a>
        <a href="#" className="hover:bg-gray-300 px-3 py-2 rounded">
          Shop
        </a>
      </div>

      {/* Icons */}
      <div className="hidden md:flex items-center gap-4 text-white">
        <HelpCircle className="w-6 h-6 cursor-pointer" />
        <Globe className="w-6 h-6 cursor-pointer" />
        <User className="w-6 h-6 cursor-pointer" />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-8 h-8" />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-500 flex flex-col gap-4 text-white font-medium items-center px-6 py-4 md:hidden">
          <NavLink to="/Vehicles" className="hover:bg-gray-600 px-4 py-2 rounded">Vehicles</NavLink>
          <NavLink to="/" className="hover:bg-gray-600 px-4 py-2 rounded">Energy</NavLink>
          <a href="#" className="hover:bg-gray-600 px-4 py-2 rounded">Charging</a>
          <a href="#" className="hover:bg-gray-600 px-4 py-2 rounded">Discover</a>
          <a href="#" className="hover:bg-gray-600 px-4 py-2 rounded">Shop</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
