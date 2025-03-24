import { Globe, User, HelpCircle, Menu } from "lucide-react";
import { useState } from "react";


const Navbar =()=> {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <>
    <nav className=" fixed top-1 left-0 bg-gradient-to-b from-blue-500 to-blue-300 py-3 px-6 flex justify-between items-center relative">
      <div className="flex items-center gap-4">
        <span className="text-white text-xl font-bold tracking-widest">T R U C K</span>
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-6 h-6" />
      </button>
      
      {/* Navigation Links */}
      <div className={`absolute md:static top-full left-0 w-full md:w-auto bg-blue-500 md:bg-transparent flex flex-col md:flex-row gap-4 text-white font-medium items-center md:items-start px-6 md:px-0 py-4 md:py-0 transition-all ${isOpen ? "block" : "hidden"} md:flex`}>
        <a href="#" className="hover:bg-gray-600">Vehicles</a>
        <a href="#" className="hover:bg-gray-600">Energy</a>
        <a href="#" className="hover:bg-gray-600">Charging</a>
        <a href="#" className="hover:bg-gray-600">Discover</a>
        <a href="#" className="hover:bg-gray-600">Shop</a>
      </div>
      
      <div className="hidden md:flex items-center gap-4 text-white">
        <HelpCircle className="w-5 h-5 cursor-pointer" />
        <Globe className="w-5 h-5 cursor-pointer" />
        <User className="w-5 h-5 cursor-pointer" />
      </div>
    </nav>
    </>
  );
}


export default Navbar;