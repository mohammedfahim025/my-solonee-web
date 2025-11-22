import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import tshirt1 from "../../assets/t-shirt1.png";
import tshirt2 from "../../assets/t-shirt2.png";
import tshirt3 from "../../assets/t-shirt3.png";
import tshirt4 from "../../assets/t-shirt4.png";

import CarouselCard from "../carusel/CarouselCard";

const AllProducts = () => {
  const products = [
    { id: 1, title: "Pro t-shirt", category: "Coats & Jackets", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt1 },
    { id: 2, title: "basic t-shirt", category: "Coats & Jackets", oldPrice: 40, price: 40, stock: "In Stock", discount: "-15%", img: tshirt1 },
    { id: 3, title: "Pro t-shirt", category: "Coats & Jackets", oldPrice: 40, price: 55, stock: "In Stock", discount: "-15%", img: tshirt1 },
    { id: 4, title: "Pro t-shirt", category: "Coats & Jackets", oldPrice: 40, price: 70, stock: "Out of Stock", discount: "-15%", img: tshirt1 },
    { id: 5, title: "Hoodie t-shirt", category: "Hoodie", oldPrice: 40, price: 955, stock: "Out of Stock", discount: "-15%", img: tshirt2 },
    { id: 6, title: "Cool t-shirt", category: "Sweaters", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt2 },
    { id: 7, title: "Basic t-shirt", category: "Hoodie", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt2 },
    { id: 8, title: "Basic t-shirt", category: "Hoodie", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt2 },
    { id: 9, title: "Basic t-shirt", category: "Sweaters", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt4 },
    { id: 10, title: "Basic t-shirt", category: "Sweaters", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt4 },
    { id: 11, title: "Basic t-shirt", category: "Sweaters", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt4 },
    { id: 12, title: "Basic t-shirt", category: "Sweaters", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt4 },
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
        <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#FA4A69] text-white text-xs sm:text-sm md:text-base rounded-3xl px-2 sm:px-3 py-1 font-bold z-10">
          {item.discount}
        </span>
        <img src={item.img} alt={item.title} className="w-full h-auto object-cover" />
      </div>
      <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{item.title}</h2>
          <div className="flex items-center gap-2">
            <span className="text-[#0000004D] line-through text-xs sm:text-sm md:text-base">${item.oldPrice}</span>
            <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900">${item.price}</span>
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

  const allSections = [
    { title: "Premium", products: products.slice(0, 4) },
    { title: "Huddie", products: products.slice(4, 8) },
    { title: "Switers", products: products.slice(8, 12) },
  ];

  const filteredProducts = selectedCategory === "All" ? [] : products.filter(p => p.category === selectedCategory);

  const getCategoryTitle = (cat) => {
    if (cat === "Hoodie") return "Huddie";
    if (cat === "Sweaters") return "Switers";
    if (cat === "Coats & Jackets") return "Premium";
    return cat;
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center lg:justify-center sm:justify-start gap-3 mt-10 relative z-10">
        {categories.map(cat => (
          <button key={cat} onClick={() => setSelectedCategory(cat)}
            className={`text-sm sm:text-base px-4 py-2 rounded-sm font-semibold transition ${selectedCategory === cat ? "bg-[#CDAB63] text-white" : "bg-[#F4F4F4] text-black hover:bg-[#CDAB63] hover:text-white"}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS DISPLAY */}
      {selectedCategory === "All" ? (
        allSections.map(section => (
          <div key={section.title} className="mt-10">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">{section.title}</h3>
            {chunkArray(section.products).map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
                {row.map(item => <ProductCard key={item.id} item={item} />)}
              </div>
            ))}
          </div>
        ))
      ) : (
        chunkArray(filteredProducts).map((row, idx) => (
          <div key={idx} className="mt-10">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">{getCategoryTitle(selectedCategory)}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
              {row.map(item => <ProductCard key={item.id} item={item} />)}
            </div>
          </div>
        ))
      )}

      {/* Carousel - only show when All is selected */}
      {selectedCategory === "All" && (
        <div className="my-10">
          <CarouselCard />
        </div>
      )}
    </div>
  );
};

export default AllProducts;
