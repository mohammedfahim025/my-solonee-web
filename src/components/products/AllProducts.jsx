// AllProducts.jsx
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import tshirt1 from "../../assets/t-shirt1.png";
import tshirt2 from "../../assets/t-shirt2.png";
import tshirt3 from "../../assets/t-shirt3.png";
import tshirt4 from "../../assets/t-shirt4.png";
import { NavLink } from "react-router-dom";

import CarouselCard from "../carusel/CarouselCard";

const AllProducts = () => {
  const products = [
    { id: 1, title: "Basic t-shirt", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt1 },
    { id: 2, title: "pro t-shirt", oldPrice: 40, price: 40, stock: "In Stock", discount: "-15%", img: tshirt1 },
    { id: 3, title: "premium t-shirt", oldPrice: 40, price: 55, stock: "In Stock", discount: "-15%", img: tshirt1 },
    { id: 4, title: "soft t-shirt", oldPrice: 40, price: 70, stock: "Out of Stock", discount: "-15%", img: tshirt1 },
    { id: 5, title: "Hoddie t-shirt", oldPrice: 40, price: 955, stock: "Out of Stock", discount: "-15%", img: tshirt2 },
    { id: 6, title: "Cool t-shirt", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt2 },
    { id: 7, title: "Basic t-shirt", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt2 },
    { id: 8, title: "Basic t-shirt", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt2 },
    { id: 9, title: "Basic t-shirt", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt4 },
    { id: 10, title: "Basic t-shirt", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt4 },
    { id: 11, title: "Basic t-shirt", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt4 },
    { id: 12, title: "Basic t-shirt", oldPrice: 40, price: 35, stock: "Out of Stock", discount: "-15%", img: tshirt4 },
  ];

  const chunkProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    chunkProducts.push(products.slice(i, i + 4));
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center items-center mt-6 gap-3">
        <NavLink
          to="/all-products"
          className={({ isActive }) =>
            `text-black text-sm sm:text-lg px-4 py-2 rounded-sm ${isActive ? "bg-[#CDAB63] text-white" : "bg-[#F4F4F4]"}`
          }
        >
          All
        </NavLink>
        <button className="text-black text-sm sm:text-lg bg-[#F4F4F4] hover:bg-[#CDAB63] px-4 py-2 rounded-sm">Coats & Jackets</button>
        <button className="text-black text-sm sm:text-lg bg-[#F4F4F4] hover:bg-[#CDAB63] px-4 py-2 rounded-sm">Sweaters</button>
        <button className="text-black text-sm sm:text-lg bg-[#F4F4F4] hover:bg-[#CDAB63] px-4 py-2 rounded-sm">Huddie</button>
      </div>

      {/* PRODUCTS GRID */}
      {chunkProducts.map((group, index) => (
        <div key={index} className="max-w-7xl mx-auto mt-10">
          {/* Title */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-xl sm:text-2xl font-semibold">Premium Coats & Jackets</h3>

            <div className="flex items-center gap-4">
              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center text-black hover:bg-yellow-400 hover:text-white transition">
                <FiArrowLeft size={20} />
              </button>

              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center text-black hover:bg-yellow-400 hover:text-white transition">
                <FiArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {group.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                <div className="relative flex justify-center items-center">
                  <span className="absolute top-4 left-4 bg-[#FA4A69] text-white rounded-3xl px-3 py-1 font-bold">
                    {item.discount}
                  </span>
                  <img src={item.img} alt={item.title} className="w-full h-auto object-cover" />
                </div>

                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h2>
                    <div className="flex items-center gap-2">
                      <span className="text-[#0000004D] line-through text-sm sm:text-lg">${item.oldPrice}</span>
                      <span className="text-md sm:text-xl font-bold text-gray-900">${item.price}</span>
                    </div>
                  </div>

                  <p className="text-[#B3B3B3] text-xs sm:text-sm mb-4">{item.stock}</p>

                 <NavLink
  to={`/product-details/${item.id}`}
  state={{ product: item }} // product info 
  className="mt-auto"
>
  <button className="w-full bg-[#102B21] text-white text-xs sm:text-sm py-2 sm:py-3 rounded-md hover:bg-green-800 transition">
    ORDER NOW
  </button>
</NavLink>

                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <CarouselCard />
    </div>
  );
};

export default AllProducts;
