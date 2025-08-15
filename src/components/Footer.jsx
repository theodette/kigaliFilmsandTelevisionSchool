import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-[#ff0000] py-8 px-4 border-t border-gray-200">
      {/* Main Footer - Hidden on small devices */}
      <div className="container mx-auto hidden md:flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="logo1.png"
            alt="Kigali Film and Television School Logo"
            className="w-32 md:w-48 mb-4"
          />
          <p className="text-sm text-gray-700 text-center md:text-left">
            Inspiring the next generation of film professionals.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-3 items-center md:items-start">
          <h1 className="text-lg font-semibold text-[#ff0000]">Links</h1>
          <a href="/" className="hover:underline text-gray-700">Home</a>
          <a href="/about" className="hover:underline text-gray-700">About Us</a>
          <a href="/programs" className="hover:underline text-gray-700">Programs</a>
          <a href="/media" className="hover:underline text-gray-700">Media</a>
          <a href="/contact" className="hover:underline text-gray-700">Contact</a>
        </div>

        {/* Contacts */}
        <div className="flex flex-col space-y-3 items-center md:items-start">
          <h1 className="text-lg font-semibold text-[#ff0000]">Contacts</h1>
          <p className="text-gray-700">📍 Kigali, Rwanda</p>
          <p className="text-gray-700">📞 +250 788 123 456</p>
          <p className="text-gray-700">✉ info@kigalifilmacademy.com</p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          <h1 className="text-lg font-semibold mb-3 text-[#ff0000]">Search</h1>
          <div className="flex w-full md:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 py-2 rounded-l-md border border-[#ff0000] focus:outline-none text-black"
            />
            <button className="bg-[#ff0000] text-white px-4 rounded-r-md hover:bg-red-700 transition">
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Always Visible */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-200 pt-4">
        © {new Date().getFullYear()} Kigali Film and Television School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
