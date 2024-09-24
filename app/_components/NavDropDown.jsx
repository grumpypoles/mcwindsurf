"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";


export default function NavDropDown() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="text-xl text-primary-100">
      <div className="container mx-auto px-4 md:flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center justify-between md:w-auto w-full">
          {/* <Link href="/" className="py-5 px-2 text-white flex-1 font-bold">
            Webcrunch.com
          </Link> */}

          {/* Mobile menu icon */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="mobile-menu-button"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop menu */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex md:flex-row flex-col items-center justify-start md:space-x-1 pb-3 md:pb-0 navigation-menu`}
        >
          {/* <Link href="/" className="py-2 px-3 block">
            Home
          </Link> */}
          

          {/* Dropdown menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className="dropdown-toggle py-2 px-3 hover:bg-primary-700 flex items-center gap-2 rounded"
              onClick={toggleDropdown}
            >
              <span className="pointer-events-none select-none">Equipment</span>
              <svg
                className="w-3 h-3 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div
              className={`${
                dropdownOpen ? "block" : "hidden"
              } dropdown-menu absolute bg-primary-700 text-primary-100 rounded-b-lg pb-2 w-48`}
            >
              <Link
                href="/sails"
                className="block px-6 py-2 hover:bg-stone-600"
                onClick={closeDropdown}
              >
                Sails
              </Link>
              <Link
                href="/boards"
                className="block px-6 py-2 hover:bg-stone-600"
                onClick={closeDropdown}
              >
                Boards
              </Link>
              <Link
                href="/masts"
                className="block px-6 py-2 hover:bg-stone-600"
                onClick={closeDropdown}
              >
                Masts
              </Link>
              {/* <Link
                href="/services/seo"
                className="block px-6 py-2 hover:bg-stone-600"
              >
                SEO
              </Link> */}
            </div>
          </div>
          {/* <Link href="/about" className="py-2 px-3 block">
            About
          </Link>
          <Link href="/contact" className="py-2 px-3 block">
            Contact
          </Link> */}
        </div>
       
      </div>
    </nav>
  );
}
