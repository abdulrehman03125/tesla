import React from "react";
import { ShoppingCart, Info } from "lucide-react";

const vehicles = [
  { name: "Model S", img: "url-to-model-s.jpg" },
  { name: "Model 3", img: "url-to-model-3.jpg" },
  { name: "Model Y", img: "url-to-model-y.jpg" },
  { name: "New Model Y", img: "url-to-new-model-y.jpg" },
  { name: "Model X", img: "url-to-model-x.jpg" },
  { name: "Cybertruck", img: "url-to-cybertruck.jpg" },
  { name: "Inventory", img: "url-to-inventory.jpg" },
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

export default function TeslaModels() {
  return (
    <div className="flex p-6 space-x-8 w-full mx-auto justify-between">
      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-6 flex-grow max-w-[900px]">
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
      <div className="w-48 space-y-2 flex-shrink-0">
        {sidebarLinks.map((link, index) => (
          <a key={index} href="#" className="block text-gray-600 hover:text-black">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
