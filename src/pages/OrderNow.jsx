import { useState } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { NavLink } from "react-router";

import Tshirt1 from "../../src/assets/t-shirt1.png";
import Tshirt2 from "../../src/assets/t-shirt2.png";
import Tshirt3 from "../../src/assets/t-shirt3.png";
import Tshirt4 from "../../src/assets/t-shirt4.png";

export default function OrderNow() {
  // State for main image
  const [mainImage, setMainImage] = useState(Tshirt4);

  // State for selected size
  const [selectedSize, setSelectedSize] = useState("S");

  const product = {
    name: "MENS TWILL PAYJAMA",
    price: 850,
    image: mainImage,
    size: selectedSize,
    colors: [Tshirt1, Tshirt2, Tshirt3, Tshirt4],
  };

  const sizes = [
    { label: "S", available: true },
    { label: "M", available: true },
    { label: "L", available: true },
    { label: "XL", available: false },
    { label: "XXL", available: false },
  ];

  return (
    <div className="bg-gray-50 -mt-5 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3 w-20">
              {product.colors.map((img, idx) => (
                <div
                  key={idx}
                  className={`w-20 h-24 rounded-lg border-2 cursor-pointer overflow-hidden ${
                    mainImage === img ? "border-amber-600" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(img)}
                >
                  <img
                    src={img}
                    alt={`thumbnail${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={mainImage}
                alt="main product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-[#101828] mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mb-6">
              <span className="text-2xl font-bold text-[#101828]">
                ৳ {product.price.toFixed(2)}
              </span>
            </div>

            {/* Color Section */}
            <div className="mb-6">
              <p className="text-[#9599A0] text-sm mb-3">Color:</p>
              <div className="flex gap-3">
                {product.colors.map((img, idx) => (
                  <div
                    key={idx}
                    className={`w-14 h-14 rounded-lg border-2 cursor-pointer overflow-hidden ${
                      mainImage === img
                        ? "border-amber-400"
                        : "border-gray-300"
                    }`}
                    onClick={() => setMainImage(img)}
                  >
                    <img
                      src={img}
                      alt={`color${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <p className="text-[#9599A0] text-sm font-semibold mb-3">
                Select Size: <span className="text-black">{selectedSize}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size.label}
                    disabled={!size.available}
                    onClick={() => setSelectedSize(size.label)}
                    className={`w-12 h-12 rounded font-semibold transition ${
                      selectedSize === size.label
                        ? "bg-[#CDAB63] text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-[#CDAB63] hover:text-white"
                    } ${!size.available ? "line-through opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
              <p className="text-sm text-black mt-3 cursor-pointer">
                View Size Chart
              </p>
            </div>

            {/* Order Button */}
            <NavLink
              to="/checkout"
              state={{ product }}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white text-center font-bold py-3 px-6 rounded-lg transition mb-6"
            >
              Order Now
            </NavLink>

            {/* Share Section */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-300">
              <span className="text-black text-sm">Share :</span>
              <button className="text-black transition">
                <Facebook size={20} />
              </button>
              <button className="text-black transition">
                <Twitter size={20} />
              </button>
              <button className="text-black transition">
                <Linkedin size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-gray-300">
            Description
          </h2>

          <p className="text-gray-700 text-base mb-6">
            Our Luxury Twill Pant is the perfect choice for your everyday go-to,
            offering unmatched comfort and style!
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="font-semibold text-gray-900">
                100% Cotton Twill
              </span>
              <span>(GSM 220-250) for comfort and durability</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-gray-900">
                Non-stitch design
              </span>
              <span>ideal for Salat and daily wear</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-gray-900">Button closure</span>
              <span>with premium stitching for a polished look</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-gray-900">Added ribbon</span>
              <span>for a customizable waist fit</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-gray-900">Versatile style</span>
              <span>for prayer, walks, and casual wear</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
