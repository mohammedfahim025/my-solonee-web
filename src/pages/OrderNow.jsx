import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import sizeChart from "../assets/cloth-size.png";
import { FaInstagram } from "react-icons/fa";

export default function OrderNow() {
  const location = useLocation();
  const navigate = useNavigate();
  const { clickedProduct } = location.state;

  const [mainImage, setMainImage] = useState(clickedProduct.img);
  const [selectedSize, setSelectedSize] = useState("S");

  const sizes = [
    { label: "S", available: true },
    { label: "M", available: true },
    { label: "L", available: true },
    { label: "XL", available: false },
    { label: "XXL", available: false },
  ];

  // Use clicked product child images if available
  const sideImages = [clickedProduct.img, ...(clickedProduct.child || [])];

  const handleOrderNow = () => {
    navigate("/checkout", {
      state: {
        product: clickedProduct,
        size: selectedSize,
        image: mainImage, // pass selected image
      },
    });
  };

  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* LEFT IMAGE */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-3 w-20">
              {sideImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`w-20 h-24 rounded-lg border-2 cursor-pointer overflow-hidden ${
                    mainImage === img ? "border-amber-600" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(img)}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={mainImage}
                className="w-full h-full object-cover"
                alt="main-product"
              />
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-[#101828] mb-4">
              {clickedProduct.title}
            </h1>
            <div className="mb-6">
              <span className="text-2xl font-bold text-[#101828]">
                ৳ {clickedProduct.price.toFixed(2)}
              </span>
            </div>

            {/* COLOR SELECTION */}
            <div className="mb-6">
              <p className="text-[#9599A0] text-sm mb-3">Color:</p>
              <div className="flex gap-3">
                {sideImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`w-14 h-14 rounded-lg border-2 cursor-pointer overflow-hidden ${
                      mainImage === img ? "border-amber-400" : "border-gray-300"
                    }`}
                    onClick={() => setMainImage(img)}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* SIZE SELECTION */}
            <div className="mb-6 ">
              <p className="text-[#9599A0] text-sm font-semibold mb-3">
                Select Size: <span className="text-black">{selectedSize}</span>
              </p>
              <div className="flex gap-2  flex-wrap">
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

           <button
  onClick={handleOrderNow}
  className="w-full md:w-[280px] bg-black mb-4 hover:bg-[#2A2828] text-white font-bold py-3 px-6 rounded-lg transition mt-4"
>
  Order Now
</button>



              {/* SOCIAL SHARE */}
              <div className="flex items-center gap-4 p-2 pt-4 border-t border-gray-300">
                <span className="text-[#737A87] text-sm">Share :</span>
               <a href="https://www.facebook.com/share/1ACcxe3Xs2/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
               <a href="https://www.instagram.com/solonee.cloth/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>  
              </div>

              {/* SIZE CHART */}
              <div className="mt-6">
                <div className="flex gap-2 mb-2">
                  <button className="bg-gray-200 px-3 py-1 text-sm rounded-md">
                    NCh
                  </button>
                  <button className="bg-[#EFEFEF] px-3 py-1 text-sm rounded-md">
                    Cm
                  </button>
                </div>
                <img width={250} height={200} src={sizeChart} alt="Size Chart" />
              </div>
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        {sideImages.length > 1 && (
          <div className="border-t border-gray-300 pt-12 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              You may also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sideImages.map((img, idx) => (
                <div
                  key={idx}
                  className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="relative flex justify-center items-center">
                    {/* <span className="absolute top-4 left-4 bg-[#FA4A69] text-white rounded-3xl px-3 py-1 font-bold">
                      {clickedProduct.discount || "-15%"}
                    </span> */}
                    <img
                      src={img}
                      alt={clickedProduct.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {clickedProduct.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {/* <span className="text-[#0000004D] line-through text-sm sm:text-lg">
                          ${clickedProduct.oldPrice}
                        </span> */}
                        <span className="text-md sm:text-xl font-bold text-gray-900">
                          ৳{clickedProduct.price}
                        </span>
                      </div>
                    </div>
                    <p className="text-[#B3B3B3] text-xs sm:text-sm mb-4">
                      {clickedProduct.stock}
                    </p>
                    <button
                      onClick={() => setMainImage(img)}
                      className="w-full bg-black text-white text-xs sm:text-sm py-2 sm:py-3 rounded-md hover:bg-[#2A2828] transition mt-auto"
                    >
                      ORDER NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
