import { useState } from 'react';
import { FaHamburger } from 'react-icons/fa'; // Hamburger icon
import { IoCloseCircleSharp } from 'react-icons/io5'; // Close icon
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold tracking-tight">
              Logo
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink to="/" className="hover:text-gray-300 transition-colors">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-gray-300 transition-colors">
              About
            </NavLink>
            <NavLink to="/services" className="hover:text-gray-300 transition-colors">
              Services
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </NavLink>
            <NavLink to="/dashboard" className="hover:text-gray-300 transition-colors">
              Dashboard
            </NavLink>
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <FaHamburger
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              />
              {/* Close Icon */}
              <IoCloseCircleSharp
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;