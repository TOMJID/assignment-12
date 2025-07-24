import { useState } from "react";
import { Button } from "@heroui/button";
import { HiMenu, HiX } from "react-icons/hi";
import { BsGlobe2 } from "react-icons/bs";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="" />
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 mx-4 items-center bg-gray-100 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="restaurant, hotel, service..."
              className="px-4 py-2 flex-grow focus:outline-none"
            />
            <span className="text-gray-400">|</span>
            <input
              type="text"
              placeholder="Singapore..."
              className="px-4 py-2 flex-grow focus:outline-none"
            />
            <button className="px-4">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m1.4-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center">
            <Button className="hidden md:block bg-black text-white px-4 py-2 rounded-full">
              MyFeedback for business
            </Button>

            {/* Globe Icon */}
            <button className="ml-4 text-gray-600 hover:text-gray-800 md:ml-6">
              <BsGlobe2 />
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden ml-4 text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu">
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <div className="px-4 py-3 space-y-3">
            <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="restaurant, hotel, service..."
                className="px-3 py-2 flex-grow focus:outline-none"
              />
              <span className="text-gray-400">|</span>
              <input
                type="text"
                placeholder="Singapore..."
                className="px-3 py-2 flex-grow focus:outline-none"
              />
              <button className="px-3">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m1.4-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <button className="w-full bg-black text-white px-4 py-2 rounded-lg">
              MyFeedback for business
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
