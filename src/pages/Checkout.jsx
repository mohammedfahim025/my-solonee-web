import { useState } from "react";
import { useLocation } from "react-router";
import BkashLogo from "../assets/BKash_Logo_icon-700x662 1.png";
import { NavLink } from "react-router";
import { ChevronDown } from "lucide-react";

export default function Checkout() {
  const location = useLocation();
  const product = location.state?.product;
  const selectedImage = location.state?.image; // image from OrderNow
  const selectedSize = location.state?.size;   // size from OrderNow
  const [quantity, setQuantity] = useState(1);
  const [transactionId, setTransactionId] = useState("1154 4444 44");

  if (!product) {
    return (
      <p className="text-center mt-20 text-lg font-semibold">
        No product selected!
      </p>
    );
  }

  const subtotal = product.price * quantity;
  const shipping = 150;
  const total = subtotal + shipping;

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen p-4 sm:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* LEFT SIDE */}
       <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 w-full shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
              Billing And Shipping
            </h2>

            {/* Name */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                Name <span className="text-black-500">:</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border bg-[#F7F7F7] border-gray-300 rounded-lg"
              />
            </div>

            {/* Phone */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                Phone Number <span className="text-black-500">:</span>
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border bg-[#F7F7F7] border-gray-300 rounded-lg"
              />
            </div>

            {/* District & Thana */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:mb-6">
              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2">
                  District <span className="text-black-500">:</span>
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg bg-[#F7F7F7] appearance-none">
                    <option>District</option>
                    <option>Dhaka</option>
                    <option>Chattogram</option>
                    <option>Khulna</option>
                    <option>Barisal</option>
                    <option>Sylhet</option>
                    <option>Rajshahi</option>
                    <option>Rangpur</option>
                    <option>Mymensingh</option>
                    <option>Comilla</option>
                    <option>Cox's Bazar</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2">
                  Thana <span className="text-black-500">:</span>
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg bg-[#F7F7F7] appearance-none">
                    <option>Thana / Area</option>
                    <option>Gulshan</option>
                    <option>Banani</option>
                    <option>Uttara</option>
                    <option>Mirpur</option>
                    <option>Dhanmondi</option>
                    <option>Motijheel</option>
                    <option>Farmgate</option>
                    <option>Mohammadpur</option>
                    <option>Baridhara</option>
                    <option>Shamoli</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Full Address */}
            <div className="mb-4 sm:mb-8">
              <label className="block text-sm font-medium mb-1 sm:mb-2">
                Full Address <span className="text-red-500">:</span>
              </label>
              <input
                type="text"
                placeholder="Full Address"
                className="w-full px-4 py-3 border border-gray-300 bg-[#F7F7F7] rounded-lg"
              />
            </div>
          </div>

          {/* PAYMENT SECTION */}
          <div className="bg-[#F4F4F4] p-5 rounded-lg pt-4 sm:pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-4">
              Payment Terms
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 sm:mr-3 text-base">•</span>
                <span>Payments can be made via bKash.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 sm:mr-3 text-base">•</span>
                <span>
                  Delivery charges: ৳150 .
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 sm:mr-3 text-base">•</span>
                <span>Orders are confirmed only after payment verification.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 sticky top-4 sm:top-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Product Details
            </h2>

            {/* Product Item */}
            <div className="flex gap-4 mb-4 pb-4 border-b border-gray-200">
              <img
                src={selectedImage || product.img} // ✅ Show selected image
                alt={product.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{product.title}</h3>
                <p className="text-sm text-gray-500">
                  Size: {selectedSize || "S"} {/* ✅ Show selected size */}
                </p>
                <p className="font-bold text-gray-900 mt-2">
                  BDT {product.price}
                </p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3">
              <button
                onClick={decrement}
                className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center"
              >
                −
              </button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <button
                onClick={increment}
                className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center"
              >
                +
              </button>
            </div>

            {/* Price Summary */}
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">BDT {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping Charge</span>
                <span className="font-medium">BDT {shipping}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-3 font-bold">
                <span>Total</span>
                <span>BDT {total}</span>
              </div>
            </div>
   {/* PAYMENT SECTION */}
            <div className="bg-white border border-gray-300 rounded-lg p-4 space-y-4">
              {/* 🔹 Bkash */}
              <div className="border border-gray-300 rounded-lg p-4 space-y-4">
                <div className="flex justify-between bg-[#F4F4F4] border border-gray-200 gap-3 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <img src={BkashLogo} className="w-6 h-6" />
                    <p className="font-medium">Bkash</p>
                  </div>
                  <div className="flex items-center px-5">
                    <p className="text-sm text-gray-500">01871122774</p>
                  </div>
                </div>

                <ul className="flex justify-between text-sm">
                  {/* <li>Shipping Charge</li> */}
                  {/* <li>BDT 0.00</li> */}
                </ul>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Transaction Id</span>
                  <input
                    type="text"
                    
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="w-36 text-center border border-gray-300 rounded px-2 py-1"
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <span className="text-yellow-600 text-lg">⚠</span>
                    <div>
                      <p className="font-semibold text-yellow-900 mb-2">
                        Delivery Charge Notice
                      </p>
                      <ul className="text-xs text-yellow-800 space-y-1">
                        <li>• ৳150 All District</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* CASH ON DELIVERY */}
              <div className="pt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="payment" className="w-4 h-4" />
                  <span className="text-gray-700 font-medium">
                    Cash on delivery
                  </span>
                </label>
              </div>

              {/* TERMS */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 mt-1" defaultChecked />
                  <span className="text-sm text-[#00AE7A] leading-5">
                    Accept Terms & Conditions and Privacy Policy{" "}
                    <span className="text-black">of salonee.shop</span>
                  </span>
                </label>
              </div>
            </div>

            {/* CONFIRM ORDER BUTTON */}
            <NavLink
              to="/order-animation"
              className="w-full block text-center bg-black text-white font-bold py-3 rounded-lg mt-4"
            >
              Order Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
