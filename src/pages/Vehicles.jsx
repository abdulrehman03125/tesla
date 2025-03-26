import React from "react";
import { ShoppingCart, Info } from "lucide-react";

import image from "../assets/images/20.jpeg"; // Import instead of using a string path
import image2 from "../assets/images/16.png"; // Import instead of using a string path
import image3 from "../assets/images/17.jpeg";
import image4 from "../assets/images/15.jpeg";
import image5 from "../assets/images/19.jpeg";

const vehicles = [
    { name: "Model S", img: image },
    { name: "Model 3", img: image2 },
    { name: "Model Y", img: image3 },
    { name: "New Model Y", img: image4 },
    { name: "Model X", img: image5 }

];

const sidebarLinks = [
  "Help Me Choose",
  "Demo Drive",
  "Trade-in",
  "Compare",
  "Help Me Charge",
  "Fleet",
  "Semi",
  "Roadster",
  "Federal Tax Credit",
  "We, Robot",
];

const Vehicles = ()=> {
  return (
    
    <div className="flex p-1 space-x-4 w-[800px] mx-auto">
      {/* Main Grid */}
      <div className="grid grid-cols-4 gap-6 flex-grow">
        {vehicles.map((car, index) => (
          <div key={index} className="text-center">
            <img src={car.img} alt={car.name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{car.name}</h3>
            <div className="flex justify-center gap-4 mt-2">
              <button className="flex items-center gap-1 text-blue-500">
                <Info size={16} /> Learn
              </button>
              <button className="flex items-center gap-1 text-green-500">
                <ShoppingCart size={16} /> Order
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Sidebar */}
      <div className="w-48 space-y-2">
        {sidebarLinks.map((link, index) => (
          <a key={index} href="#" className="block text-gray-600 hover:text-black">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Vehicles;