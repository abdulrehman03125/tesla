import { Button } from "antd";
import Navbar from "./Navbar";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Layout } from "antd";

const { Footer } = Layout;

// import Footer from "../pages/Footer";
import image from "../assets/images/home.jpg";
import image2 from "../assets/images/home2.jpg"; // Import instead of using a string path
import image3 from "../assets/images/home3.jpg";
import image4 from "../assets/images/home4.jpg";
import image5 from "../assets/images/home5.jpg";
const TeslaModel = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Model 3 Section */}
            <div
                className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white px-4 md:px-0 overflow-hidden"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0  "></div>
                <div className="relative text-center max-w-lg mb-45 md:mt-20">
                    <h1 className="text-2xl md:text-7xl font-bold">Model 3</h1>
                    <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
                        <Button type="primary" size="large" className="w-full md:w-64 text-lg md:text-2xl px-6 py-4">
                            Order Now
                        </Button>
                        <Button size="large" className="w-full md:w-64 text-lg md:text-2xl px-6 py-4">
                            Learn More
                        </Button>
                    </div>
                </div>

            </div>

            {/* Model Y Section */}
            <div
                className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white px-4 md:px-0"
                style={{ backgroundImage: `url(${image2})` }}
            >
                <div className="absolute inset-0  "></div>
                <div className="relative text-center max-w-lg mb-45 md:mt-20">
                    <h1 className="text-4xl mt-10 md:text-5xl font-bold">Model Y</h1>
                    <p className="text-base md:text-lg mt-4">$7,500 Federal Tax Credit at Purchase</p>
                    <div className="mt-70 flex flex-col md:flex-row justify-center gap-4">
                        <Button type="primary" size="large" className="w-full  md:w-64 text-2xl px-12 py-6">
                            Order New Model Y
                        </Button>
                        <Button size="large" className="w-full md:w-64 text-2xl px-12 py-6">
                            View Inventory
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white px-4 md:px-0"
                style={{ backgroundImage: `url(${image3})` }}
            >
                <div className="absolute inset-0  "></div>
                <div className="relative text-center  max-w-lg">
                    <h1 className="text-4xl mt-2 md:text-5xl font-bold">Model Y</h1>
                    <p className="text-base md:text-lg mt-4">$7,500 Federal Tax Credit at Purchase</p>
                    <div className="flex items-center justify-center mr-5 mt-48">
                        <div className="flex space-x-1 text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>
                        <p className="ml-2 text-black text-blod">Overall NHTSA Safety Rating</p>
                    </div>
                    <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
                        <Button type="primary" size="large" className="w-full md:w-64 text-2xl px-12 py-6">
                            Order New Model Y
                        </Button>
                        <Button size="large" className="w-full md:w-64 text-2xl px-12 py-6">
                            View Inventory
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white px-4 md:px-0"
                style={{ backgroundImage: `url(${image4})` }}
            >
                <div className="absolute inset-0  "></div>
                <div className="relative text-center  max-w-lg">
                    <h1 className="text-4xl mt-5 md:text-5xl font-bold">Model X</h1>
                    <p className="text-base md:text-lg mt-3">Free Supercharging Included</p>
                    <div className="mt-48 flex flex-col md:flex-row justify-center gap-4">
                        <Button type="primary" size="large" className="w-full md:w-64 text-2xl px-12 py-6">
                            Order Now
                        </Button>
                        <Button size="large" className="w-full md:w-64 text-2xl px-12 py-6">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white px-4 md:px-0"
                style={{ backgroundImage: `url(${image5})` }}
            >
                <div className="absolute inset-0  "></div>
                <div className="relative text-center  max-w-lg">
                    <h1 className="text-4xl mt-5 md:text-5xl font-bold">Model S</h1>
                    <p className="text-base md:text-lg mt-3">Free Supercharging Included</p>
                    <div className="mt-70 flex flex-col md:flex-row justify-center gap-4">
                        <Button type="primary" size="large" className="w-full md:w-64 text-2xl px-12 py-6">
                            Order New
                        </Button>
                        <Button size="large" className="w-full md:w-64 text-2xl px-12 py-6">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}

            <Footer className="text-center bg-gray-100 text-gray-600 p-4 border-t border-gray-300">
                <div className="flex justify-center space-x-6 mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        <Facebook size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        <Instagram size={20} />
                    </a>
                </div>
                <p className="text-sm">Truks &copy; 2025 | <a href="#" className="hover:underline">Privacy & Legal</a> | <a href="#" className="hover:underline">Vehicle Recalls</a> | <a href="#" className="hover:underline">Contact</a> | <a href="#" className="hover:underline">News</a> | <a href="#" className="hover:underline">Get Updates</a> | <a href="#" className="hover:underline">Locations</a></p>
            </Footer>
        </div>
    );
};

export default TeslaModel;
