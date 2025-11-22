import { Instagram, Facebook } from "lucide-react";
import { FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png";
import america from "../../assets/american-express 1.png";
import paypal from "../../assets/paypal 1.png";
import visa from "../../assets/visa 1.png";
import masterCard from "../../assets/masterCard.png";

export default function Footer() {
  return (
    <footer className="bg-[#F6F6F6] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Main Footer Content */}
        <div className="flex flex-c flex-wrap justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Logo" className="mb-2 w-28" />
          </div>

          {/* Navigation */}
          <div>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-[#000000] text-xs hover:text-gray-900 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[#000000] text-xs hover:text-gray-900 transition">
                  Product
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-[#000000] text-xs hover:text-gray-900 transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-[#000000] text-xs hover:text-gray-900 transition">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#000000] text-xs hover:text-gray-900 transition">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-1">Follow Us</h3>
            <div className="space-y-1">
              <a
                href="https://www.instagram.com/solonee.clo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-amber-600 transition text-xs"
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/share/1ACcxe3Xs2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-amber-600 transition text-xs"
              >
                <Facebook size={18} />
                <span>Facebook</span>
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-amber-600 transition text-xs"
              >
                <FaTwitter size={18} />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Payments and Bottom */}
        <div className="pt-6 space-y-3">
          {/* Payment Images */}
          <div className="flex items-center gap-3 flex-wrap">
            {[america, paypal, visa, masterCard].map((imgSrc, idx) => (
              <div key={idx} className="w-12 h-8 bg-white rounded flex items-center justify-center shadow">
                <img src={imgSrc} alt="" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>

          {/* Address */}
          <h2 className="text-sm text-[#CDCDCD]">
            103/A Khulshi 4No Road, Chattogram, Bangladesh
          </h2>

          {/* Bottom license */}
          <div className="space-y-0.5 text-right">
            <p className="text-gray-500 text-xs">LICENSES</p>
            <p className="text-gray-500 text-xs">© 2024 SOLONEE</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
