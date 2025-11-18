import { useState } from "react";
import { useLocation } from "react-router";
import BkashLogo from "../assets/BKash_Logo_icon-700x662 1.png";
import { NavLink } from "react-router";
import { ChevronDown } from "lucide-react";

export default function Checkout() {
  const location = useLocation();
  const product = location.state?.product;
  const [quantity, setQuantity] = useState(1);
  const [transactionId, setTransactionId] = useState("1154 4444 44");

  if (!product) {
    return <p className="text-center mt-20 text-lg font-semibold">No product selected!</p>;
  }

  const subtotal = product.price * quantity;
  const shipping = 70; // Adjust logic if needed
  const total = subtotal + shipping;

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen p-4 sm:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* LEFT: Billing & Shipping */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 w-full shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
              Billing And Shipping
            </h2>

            {/* Name */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Phone */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* District & Thana */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                  District <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <option>District</option>
                    <option>Dhaka</option>
                    <option>Chattogram</option>
                    <option>Sylhet</option>
                    <option>Khulna</option>
                    <option>Rajshahi</option>
                    <option>Barishal</option>
                    <option>Mymensingh</option>
                    <option>Rangpur</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                  Thana <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <option>Thana / Area</option>
                    <option>Bayazid</option>
                    <option>Kotwali</option>
                    <option>Pahartali</option>
                    <option>Halishahar</option>
                    <option>Chandgaon</option>
                    <option>Karnaphuli</option>
                    <option>Rangadia</option>
                    <option>Banasree</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Full Address */}
            <div className="mb-4 sm:mb-8">
              <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                Full Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Payment Terms */}
            <div className="border-t border-gray-200 pt-4 sm:pt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2 sm:mb-4">
                Payment Terms
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3">•</span>
                  <span>Payments can be made via bKash.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3">•</span>
                  <span>Delivery charges: ৳70 inside Chattogram, ৳120 outside.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3">•</span>
                  <span>Orders are confirmed only after payment verification.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div className="col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 sticky top-4 sm:top-8 space-y-6 shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Product Details</h2>

            {/* Product Item */}
            <div className="flex gap-3 sm:gap-4 mb-4 pb-4 border-b border-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500">Size: {product.size}</p>
                <p className="font-bold text-gray-900 mt-1 sm:mt-2">BDT {product.price}</p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-2 sm:gap-3 w-fit">
              <button
                onClick={decrement}
                className="w-8 h-8 sm:w-8 sm:h-8 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50"
              >−</button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <button
                onClick={increment}
                className="w-8 h-8 sm:w-8 sm:h-8 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50"
              >+</button>
            </div>

            {/* Order Summary */}
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <div className="flex justify-between"><span className="text-gray-600">Subtotal</span><span className="font-medium text-gray-900">BDT {subtotal}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Shipping Charge</span><span className="font-medium text-gray-900">BDT {shipping}</span></div>
              <div className="flex justify-between border-t border-gray-200 pt-2 sm:pt-3 font-bold text-base sm:text-base"><span>Total Order</span><span className="text-gray-900">BDT {total}</span></div>
            </div>

            {/* Payment Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 space-y-4">
              <div className="flex justify-between gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10  bg-white rounded-full flex items-center justify-center shadow">
                  <img src={BkashLogo} alt="Bkash" className="w-4 sm:w-6 h-4 sm:h-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Bkash</p>
                  <p className="text-sm text-gray-500">+880 154 4444 44</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm sm:text-base text-gray-600">
                <span>Transaction Id</span>
                <input
                  type="text"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="w-28 sm:w-36 text-center text-sm sm:text-base text-gray-600 border border-gray-300 rounded px-2 py-1"
                />
              </div>
            </div>

            {/* Confirm Button */}
            <NavLink
              to="/order-animation"
              className="w-full bg-[#CDAB63] hover:bg-[#B5944A] text-white font-bold py-2 sm:py-3 px-4 rounded-lg transition-all"
            >
              Confirm Order
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
