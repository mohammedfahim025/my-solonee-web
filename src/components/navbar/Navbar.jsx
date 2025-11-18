import React, { useState } from "react";
import logo from "../../assets/Group.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();

  // Search state
  const [searchText, setSearchText] = useState("");
  const [filtered, setFiltered] = useState([]);

  // Mobile search toggle
  const [showSearch, setShowSearch] = useState(false);

  // Mobile menu toggle
  const [showMenu, setShowMenu] = useState(false);

  // all products for suggestion
  const products = [
    { id: 1, title: "Basic T-shirt" },
    { id: 2, title: "Premium Jacket" },
    { id: 3, title: "Winter Hoodie" },
    { id: 4, title: "Sweater Men's" },
  ];

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);

    if (text.trim() === "") {
      setFiltered([]);
      return;
    }

    const result = products.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(result);
  };

  const handleSelect = (id) => {
    navigate(`/product-details/${id}`);
    setFiltered([]);
    setSearchText("");
    setShowSearch(false); // mobile search hide
  };

  return (
    <div className="p-4 w-full py-4">
      <div className="flex bg-[#F6F6F6] justify-between items-center px-6 md:px-20 py-6 rounded-2xl">

        {/* Logo */}
        <img src={logo} alt="logo" className="h-10" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          <NavLink to="/" className=" text-base">Home</NavLink>
          <NavLink to="/all-products" className=" text-base">Product</NavLink>
        </ul>

        {/* Desktop Search */}
        <div className="relative w-64 hidden md:block">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#102B21] text-xl" />
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleSearch}
            className="w-full border text-sm border-[#969696] pl-10 pr-4 py-2 rounded-lg focus:outline-none"
          />

          {/*  Dropdown */}
          {filtered.length > 0 && (
            <div className="absolute top-12 w-full bg-white shadow-lg rounded-lg z-50">
              {filtered.map((item) => (
                <p
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                >
                  {item.title}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Mobile icons */}
        <div className="flex gap-4 md:hidden">
          {/* Search Icon */}
          <FiSearch
            className="text-2xl cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          />

          {/* Menu Icon */}
          <FiMenu
            className="text-2xl cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>

      {/* Mobile Search Bar Slide */}
      {showSearch && (
        <div className="relative mt-3 md:hidden">
          <input
            type="text"
            placeholder="Search product..."
            value={searchText}
            onChange={handleSearch}
            className="w-full border text-sm border-gray-400 px-4 py-2 rounded-lg"
          />

          {filtered.length > 0 && (
            <div className="absolute top-12 w-full bg-white shadow-lg rounded-lg z-50">
              {filtered.map((item) => (
                <p
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                >
                  {item.title}
                </p>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Mobile Menu */}
      {showMenu && (
        <div className="bg-white shadow-md mt-3 p-4 md:hidden rounded-xl">
          <NavLink to="/" className="block py-2">Home</NavLink>
          <NavLink to="/all-products" className="block py-2">Product</NavLink>
        </div>
      )}

    </div>
  );
};

export default Navbar;
