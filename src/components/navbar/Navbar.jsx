import React, { useState } from "react";
import logo from "../../assets/Group.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiSearch, FiMenu } from "react-icons/fi";

//AllProducts image
import tshirt1 from "../../assets/t-shirt1.png";
import tshirt2 from "../../assets/t-shirt2.png";
import tshirt3 from "../../assets/t-shirt3.png";
import tshirt4 from "../../assets/t-shirt4.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  //AllProducts data exactly same as in AllProducts component
  const products = [
    {
      id: 1,
      title: "Pro t-shirt",
      category: "Coats & Jackets",
      oldPrice: 40,
      price: 35,
      stock: "Out of Stock",
      discount: "-15%",
      img: tshirt1,
    },
    {
      id: 2,
      title: "basic t-shirt",
      category: "Coats & Jackets",
      oldPrice: 40,
      price: 40,
      stock: "In Stock",
      discount: "-15%",
      img: tshirt1,
    },
    {
      id: 3,
      title: "Pro t-shirt",
      category: "Coats & Jackets",
      oldPrice: 40,
      price: 55,
      stock: "In Stock",
      discount: "-15%",
      img: tshirt1,
    },
    {
      id: 4,
      title: "Pro t-shirt",
      category: "Coats & Jackets",
      oldPrice: 40,
      price: 70,
      stock: "Out of Stock",
      discount: "-15%",
      img: tshirt1,
    },
    {
      id: 5,
      title: "Hoodie t-shirt",
      category: "Hoodie",
      oldPrice: 40,
      price: 95,
      stock: "Out of Stock",
      discount: "-15%",
      img: tshirt2,
    },
    {
      id: 6,
      title: "Cool t-shirt",
      category: "Sweaters",
      oldPrice: 40,
      price: 35,
      stock: "Out of Stock",
      discount: "-15%",
      img: tshirt2,
    },
    {
      id: 7,
      title: "Basic t-shirt",
      category: "Hoodie",
      oldPrice: 40,
      price: 35,
      stock: "Out of Stock",
      discount: "-15%",
      img: tshirt2,
    },
    {
      id: 8,
      title: "Basic t-shirt",
      category: "Hoodie",
      oldPrice: 40,
      price: 35,
      stock: "Out of Stock",
      discount: "-15%",
      img: tshirt2,
    },
    {
      id: 9,
      title: "Basic t-shirt",
      category: "Sweaters",
      oldPrice: 40,
      price: 35,
      stock: "Out of Stock",
      discount: "-15%",
      img: tshirt4,
    },
    {
      id: 10,
      title: "Basic t-shirt",
      category: "Sweaters",
      oldPrice: 40,
      price: 35,
      stock: "Out of Stock",
      discount: "-15%",
      img: tshirt4,
    },
    {
      id: 11,
      title: "Basic t-shirt",
      category: "Sweaters",
      oldPrice: 40,
      price: 35,
      stock: "Out of Stock",
      discount: "-15%",
      img: tshirt4,
    },
    {
      id: 12,
      title: "Basic t-shirt",
      category: "Sweaters",
      oldPrice: 40,
      price: 35,
      stock: "Out of Stock",
      discount: "-15%",
      img: tshirt4,
    },
  ];

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(e.target.value);

    if (text.trim() === "") {
      setFiltered([]);
      return;
    }

    const result = products.filter((item) =>
      item.title.toLowerCase().includes(text)
    );
    setFiltered(result);
  };

  const handleSelect = (product) => {
    navigate(`/product-details/${product.id}`, {
      state: { clickedProduct: product, allProducts: products },
    });
    setSearchText("");
    setFiltered([]);
    setShowSearch(false);
  };

  return (
    <div className="p-4 w-full py-4">
      <div className="flex bg-[#F6F6F6] justify-between items-center px-6 md:px-20 py-6 rounded-2xl">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 cursor-pointer" />
        </Link>
        

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium">
          <NavLink to="/" className="text-base hover:text-amber-600 transition">
            Home
          </NavLink>
          <NavLink
            to="/all-products"
            className="text-base hover:text-amber-600 transition"
          >
            Product
          </NavLink>
        </ul>

        {/* Desktop Search */}
        <div className="relative hidden md:block w-80">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={handleSearch}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-500 transition"
          />

          {/* Search Dropdown */}
          {filtered.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-white shadow-2xl rounded-xl  overflow-hidden z-50">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className="flex items-center gap-4 p-4 hover:bg-gray-200 cursor-pointer  last:border-0transition"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded-lg border border-gray-300"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-amber-600 font-bold">
                        ৳{item.price}
                      </span>
                      {item.oldPrice > item.price && (
                        <span className="text-xs text-gray-500 line-through">
                          ৳{item.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                    {item.discount}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Icons */}
        <div className="flex gap-5 md:hidden">
          <FiSearch
            className="text-2xl cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          />
          <FiMenu
            className="text-2xl cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>

      {/* Mobile Search */}
      {showSearch && (
        <div className="mt-4 md:hidden">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleSearch}
            className="w-full px-5 py-4 rounded-xl border border-gray-400 focus:outline-none"
          />
          {filtered.length > 0 && (
            <div className="mt-2 bg-white shadow-2xl rounded-xl overflow-hidden">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className="flex items-center gap-4 p-4 hover:bg-amber-50 border-b last:border-0"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-16 h-16 rounded-lg object-cover border"
                  />
                  <div>
                    <p className="font-bold text-gray-800">{item.title}</p>
                    <p className="text-amber-600 font-bold text-lg">
                      ৳{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Mobile Menu */}
      {showMenu && (
        <div className="bg-white shadow-xl mt-4 p-6 rounded-2xl md:hidden">
          <NavLink to="/" className="block py-3 text-lg font-medium">
            Home
          </NavLink>
          <NavLink
            to="/all-products"
            className="block py-3 text-lg font-medium"
          >
            Product
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
