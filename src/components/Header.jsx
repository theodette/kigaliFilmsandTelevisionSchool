import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    setSearchTerm(""); // clear after search
  };

  return (
    <header className="sticky top-0 w-full bg-white text-[#ff0000] shadow z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <NavLink to="/">
          <img
            src="/logo1.png"
            alt="Kigali Film and Television School Logo"
            className="h-12"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 font-semibold text-[#ff0000]">
          <NavLink to="/" className="hover:underline">Home</NavLink>
          <NavLink to="/programs" className="hover:underline">Programs</NavLink>
          <NavLink to="/about" className="hover:underline">About Us</NavLink>
          <NavLink to="/Life" className="hover:underline">Student Life</NavLink>
          <NavLink to="/media" className="hover:underline">News</NavLink>
          <NavLink to="/donate" className="hover:underline">Donate</NavLink>
          <NavLink to="/contact" className="hover:underline">Contact</NavLink>

          {/* Search */}
          <form onSubmit={handleSearch} className="ml-4 flex">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="px-2 py-1 border border-[#ff0000] rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#ff0000] text-white px-3 rounded-r-md font-semibold hover:bg-red-700 transition-colors"
            >
              Go
            </button>
          </form>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-2 text-[#ff0000] border-t border-gray-200">
          <NavLink to="/" className="block hover:underline" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/programs" className="block hover:underline" onClick={() => setIsOpen(false)}>Programs</NavLink>
          <NavLink to="/about" className="block hover:underline" onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/about" className="block hover:underline" onClick={() => setIsOpen(false)}>Student Life</NavLink>
          <NavLink to="/media" className="block hover:underline" onClick={() => setIsOpen(false)}>News</NavLink>
          <NavLink to="/donate" className="block hover:underline" onClick={() => setIsOpen(false)}>Donate</NavLink>
          <NavLink to="/contact" className="block hover:underline" onClick={() => setIsOpen(false)}>Contact</NavLink>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex mt-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="flex-1 px-2 py-1 border border-[#ff0000] rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#ff0000] text-white px-3 rounded-r-md font-semibold hover:bg-red-700 transition-colors"
            >
              Go
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
