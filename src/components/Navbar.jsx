import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="">
      {/* Navbar */}
      <div className="h-14 flex justify-between items-center p-2 bg-gray-50 shadow-md">
        {/* Hamburger Menu */}
        <div
          className="text-2xl cursor-pointer"
          onClick={() => setIsActive(true)}
          aria-label="Open menu"
        >
          <RxHamburgerMenu />
        </div>

        {/* Logo */}
        <div>
          <img
            src="/logo-64c8c1795318a.jpg"
            alt="Mobile Plaza logo"
            className="h-8"
          />
        </div>

        {/* Cart Icon */}
        <div className="text-2xl cursor-pointer" aria-label="Open cart">
          <BsCart3 />
        </div>
      </div>
 {/* Search Bar */}
 <div className="flex items-center w-full max-w-md md:max-w-full bg-white rounded-md shadow-sm px-2 py-2 my-2 ">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 outline-none text-sm text-gray-700"
          />
          <button
            className="text-gray-500 hover:text-gray-800"
            aria-label="Search"
          >
            <BiSearch className="text-xl" />
          </button>
        </div>
      {/* Sidebar */}
      {isActive && (
        <div className="fixed top-0 left-0 w-64 h-full bg-amber-300 z-50 p-4 shadow-lg transition-transform duration-300">
          {/* Close Button */}
          <div className="flex justify-end">
            <span
              onClick={() => setIsActive(false)}
              className="text-2xl border rounded-full p-1 cursor-pointer hover:bg-white hover:text-red-600"
              aria-label="Close menu"
            >
              <RxCross2 />
            </span>
          </div>
          {/* Sidebar Content */}
          <div className="mt-4">
            <ul className="space-y-2">
              <li className="hover:bg-amber-400 p-2 rounded cursor-pointer">
                Home
              </li>
              <li className="hover:bg-amber-400 p-2 rounded cursor-pointer">
                Products
              </li>
              <li className="hover:bg-amber-400 p-2 rounded cursor-pointer">
                Contact Us
              </li>
              <li className="hover:bg-amber-400 p-2 rounded cursor-pointer">
                About Us
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
