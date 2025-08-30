// src/components/navbar.tsx
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-[#9BEC00] p-4 nav-wrapper shadow-md flex items-center justify-between fixed inset-x-0 z-20">
        <a href="#Home" className="flex items-center">
          <img
            className="max-w-[40px]"
            src="./logo-a.png"
            alt="Logo"
          />
          <span className="ml-2 text-xl font-bold"></span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a
              href="#About"
              className="text-white hover:underline transition-all font-bold"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="text-white hover:underline transition-all font-bold"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="text-white hover:underline transition-all font-bold"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          id="menu-btn"
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <img
            src="./hamburger.png"
            alt="Open Menu"
            className={`h-6 w-6 block ${isMobileMenuOpen ? 'hidden' : ''}`}
          />
          <img
            src="./close.png"
            alt="Close Menu"
            className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu-wrapper"
        className={`${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="bg-[#393939] shadow-md p-4 menu-mobile rounded-[10px] fixed inset-x-5 top-24 z-20">
          <ul className="space-y-4 text-center">
            <li>
              <a
                href="#About"
                className="block text-white hover:underline transition-all text-lg font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className="block text-white hover:underline transition-all text-lg font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="block text-white hover:underline transition-all text-lg font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
