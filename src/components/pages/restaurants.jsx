import React, { useState } from "react";

// Sample restaurant data
const restaurants = [
  {
    id: 1,
    name: "The Snug",
    rating: 4.5,
    reviews: 654,
    imageUrl: "/card1.png",
    description:
      "A cozy spot known for its warm ambience and creative small plates.",
  },
  {
    id: 2,
    name: "Bottega",
    rating: 5.0,
    reviews: 14,
    imageUrl: "/card1.png",
    description:
      "An elegant Italian eatery with house-made pastas and an extensive wine list.",
  },
  {
    id: 3,
    name: "Bega",
    rating: 5.0,
    reviews: 164,
    imageUrl: "/card1.png",
    description:
      "An elegant Italian eatery with house-made pastas and an extensive wine list.",
  },
  {
    id: 4,
    name: "Bottega",
    rating: 5.0,
    reviews: 654,
    imageUrl: "/card1.png",
    description:
      "An elegant Italian eatery with house-made pastas and an extensive wine list.",
  },
  {
    id: 5,
    name: "Botte",
    rating: 5.0,
    reviews: 1654,
    imageUrl: "/card1.png",
    description:
      "An elegant Italian eatery with house-made pastas and an extensive wine list.",
  },
  {
    id: 6,
    name: "Botega",
    rating: 5.0,
    reviews: 1654,
    imageUrl: "/card1.png",
    description:
      "An elegant Italian eatery with house-made pastas and an extensive wine list.",
  },
  {
    id: 7,
    name: "Bottega",
    rating: 5.0,
    reviews: 165,
    imageUrl: "/card1.png",
    description:
      "An elegant Italian eatery with house-made pastas and an extensive wine list.",
  },
  {
    id: 8,
    name: "Bottega",
    rating: 5.0,
    reviews: 154,
    imageUrl: "/card1.png",
    description:
      "An elegant Italian eatery with house-made pastas and an extensive wine list.",
  },
  // Add more items as needed...
];

function RestaurantCard({ name, rating, reviews, imageUrl, description }) {
  return (
    <div className="flex space-x-4 p-4 border-b hover:bg-gray-50">
      <img
        src={imageUrl}
        alt={name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="text-yellow-500 text-sm">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{i < Math.floor(rating) ? "★" : "☆"}</span>
          ))}{" "}
          <span className="text-gray-600">({reviews})</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

import mapImage from "/public/map.png";

function Map() {
  return (
    <img
      src={mapImage}
      alt="Singapore Map"
      className="w-full h-full rounded object-cover"
    />
  );
}

export default function RestaurantMap() {
  const [query, setQuery] = useState("");
  const [asc, setAsc] = useState(true);

  const filtered = restaurants
    .filter((r) => r.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => (asc ? a.rating - b.rating : b.rating - a.rating));

  return (
    <div className="h-screen flex flex-col sm:flex-row">
      {/* Left Panel */}
      <div className="w-full sm:w-1/2 border-r flex flex-col">
        <div className="p-4 flex space-x-2">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-3 py-2 border rounded"
          />
          <button
            onClick={() => setAsc(!asc)}
            className="px-4 py-2 bg-blue-600 text-white rounded">
            Sort {asc ? "↓" : "↑"}
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filtered.map((r) => (
            <RestaurantCard key={r.id} {...r} />
          ))}
        </div>
        <div className="p-4 text-center">
          <button className="px-6 py-2 border rounded hover:bg-gray-100">
            Show more
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full sm:w-1/2">
        <Map />
      </div>
    </div>
  );
}
