import { useState } from "react";
import { Button } from "@heroui/button";
import { HiMenu, HiX } from "react-icons/hi";
import { BsGlobe2 } from "react-icons/bs";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");

  const suggestions = [
    { id: 1, text: "Kakune restau, paris..." },
    { id: 2, text: "Kakunexy delux, rome..." },
    { id: 3, text: "Kakune, new york..." },
    { id: 4, text: "Kikune, Dakar plateau..." },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleLocationChange = (e) => {
    setLocationTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setLocationTerm("");
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestionText) => {
    const parts = suggestionText.split(", ");
    setSearchTerm(parts[0] || "");
    setLocationTerm(parts[1] ? parts[1].replace("...", "") : "");
    setShowSuggestions(false);
  };

  return (
    <nav className="bg-white z-50 top-0 left-0 right-0 py-2 shadow-md fixed w-full transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center mt-4.5">
            <img src="/logo.png" alt="" />
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 mx-4 items-center relative">
            <div className="flex flex-1 items-center bg-gray-100 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="restaurant, hotel, service..."
                className="px-4 py-2 flex-grow focus:outline-none"
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => setShowSuggestions(searchTerm.length > 0)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
              />
              {searchTerm && (
                <button
                  className="p-2 text-gray-400 hover:text-gray-600"
                  onClick={handleClearSearch}>
                  <Icon icon="lucide:x" className="w-4 h-4" />
                </button>
              )}
              <span className="text-gray-400">|</span>
              <input
                type="text"
                placeholder="Singapore..."
                className="px-4 py-2 flex-grow focus:outline-none"
                value={locationTerm}
                onChange={handleLocationChange}
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

            {showSuggestions && (
              <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg mt-2 py-2 z-10">
                {suggestions.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onMouseDown={() => handleSuggestionClick(suggestion.text)}>
                    <Icon
                      icon="lucide:utensils"
                      className="w-5 h-5 text-gray-500 mr-3"
                    />
                    <span className="text-sm">{suggestion.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Controls */}
          <div className="flex items-center">
            <Button className="hidden lg:block bg-black text-white px-4 py-2 rounded-full">
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
        <div className="md:hidden bg-white shadow-inner my-2">
          <div className="px-4 py-3 space-y-3">
            <div className="flex items-center bg-gray-100 rounded-lg">
              <input
                type="text"
                placeholder="restaurant, hotel, service..."
                className="px-3 py-2 flex-grow focus:outline-none w-[45%]"
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => setShowSuggestions(searchTerm.length > 0)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
              />
              {searchTerm && (
                <button
                  className="p-2 text-gray-400 hover:text-gray-600"
                  onClick={handleClearSearch}>
                  <Icon icon="lucide:x" className="w-4 h-4" />
                </button>
              )}
              <span className="text-gray-400">|</span>
              <input
                type="text"
                placeholder="Singapore..."
                className="px-3 py-2 flex-grow focus:outline-none"
                value={locationTerm}
                onChange={handleLocationChange}
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

            {showSuggestions && (
              <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg mt-2 py-2 z-10">
                {suggestions.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onMouseDown={() => handleSuggestionClick(suggestion.text)}>
                    <Icon
                      icon="lucide:utensils"
                      className="w-5 h-5 text-gray-500 mr-3"
                    />
                    <span className="text-sm">{suggestion.text}</span>
                  </div>
                ))}
              </div>
            )}

            <button className="w-full bg-black text-white px-4 py-2 rounded-lg">
              MyFeedback for business
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
