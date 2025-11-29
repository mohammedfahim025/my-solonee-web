import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// main images
import mesaJacket from "../../assets/mesa-jacket.jpg";
import heavyJacket from "../../assets/the-heavyweight-fleeece.jpg";
import machajacket from "../../assets/the-macha-chore.jpg";
import oatmeal from "../../assets/the-oatmeal-knit.jpg";
import classic from "../../assets/white-bomber.jpg";
import blackjack from "../../assets/black-jack.png";

// child images
import heavyChild from "../../assets/CH-HODDIE.jpg";
import machaChild from "../../assets/black-jack.png";

import CarouselCard from "../carusel/CarouselCard";

const AllProducts = () => {
  const products = [
    { id: 1, title: "The Mesa Jacket", category: "Coats & Jackets", oldPrice: 40, price: 4500, stock: "In Stock", discount: "-15%", img: mesaJacket, child: [] },
    { id: 2, title: "CH-Hoodie", category: "Hoodie", oldPrice: 40, price: 3000, stock: "In Stock", discount: "-15%", img: heavyJacket, child: [heavyChild] },
    { id: 3, title: "The Mocha Chore", category: "Coats & Jackets", oldPrice: 40, price: 4500, stock: "In Stock", discount: "-15%", img: machajacket, child: [machaChild] },
    { id: 4, title: "Knit Jumper", category: "Sweaters", oldPrice: 40, price: 3000, stock: "In Stock", discount: "-15%", img: oatmeal, child: [] },
    { id: 5, title: "The Classic Bomber", category: "Coats & Jackets", oldPrice: 40, price: 4500, stock: "In Stock", discount: "-15%", img: classic, child: [] },
    { id: 6, title: "The Black Jacket", category: "Coats & Jackets", oldPrice: 40, price: 4500, stock: "Out of Stock", discount: "-15%", img: blackjack, child: [] },
  ];

  const categories = ["All", "Coats & Jackets", "Hoodie", "Sweaters"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const chunkArray = (arr, chunkSize = 4) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) chunks.push(arr.slice(i, i + chunkSize));
    return chunks;
  };

  const ProductCard = ({ item }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="relative flex justify-center items-center">
        <img src={item.img} alt={item.title} className="w-full h-auto object-cover" />
      </div>
      <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{item.title}</h2>
          <div className="flex items-center gap-2">
            {/* <span className="text-[#0000004D] line-through text-xs sm:text-sm md:text-base">${item.oldPrice}</span> */}
            <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">৳{item.price}</span>
          </div>
        </div>
        <p className="text-[#B3B3B3] text-xs sm:text-sm mb-4">{item.stock}</p>
        <NavLink
          to={`/product-details/${item.id}`}
          state={{ clickedProduct: item, allProducts: products }}
        >
          <button className="w-full bg-black text-white text-xs sm:text-sm py-2 sm:py-3 rounded-md hover:bg-[#2A2828] transition">
            Order Now
          </button>
        </NavLink>
      </div>
    </div>
  );

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);

  const getCategoryTitle = (cat) => {
    if (cat === "Hoodie") return "Hoodie";
    if (cat === "Sweaters") return "Sweaters";
    if (cat === "Coats & Jackets") return "Premium Jackets";
    return cat;
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-2 mt-10 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-sm sm:text-base px-3 py-2 rounded-sm font-semibold transition ${
              selectedCategory === cat
                ? "bg-[#CDAB63] text-white"
                : "bg-[#F4F4F4] text-black hover:bg-[#CDAB63] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="mt-10">
        <h3 className="text-xl text-center sm:text-2xl font-semibold mb-6 p-3">
          {selectedCategory === "All" ? "Winter Collection" : getCategoryTitle(selectedCategory)}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* CAROUSEL */}
      {selectedCategory === "All" && (
        <div className="my-10">
          <CarouselCard />
        </div>
      )}
    </div>
  );
};

export default AllProducts;
