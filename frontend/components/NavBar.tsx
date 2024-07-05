import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <Image
                  src="/your-icon.png"  // Replace with your icon path
                  alt="Logo"
                  width={50}
                  height={50}
                  className="h-8 w-8 mr-2"
                />
                <span className="font-semibold text-gray-500 text-lg">Jean Joelle Villanueva</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</Link>
            <Link href="/services" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</Link>
            <Link href="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</Link>
            <Link href="/work" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">My Work</Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-500 hover:text-green-500"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="hidden mobile-menu">
        <ul className="">
          <li><Link href="/about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</Link></li>
          <li><Link href="/services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</Link></li>
          <li><Link href="/contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact</Link></li>
          <li><Link href="/work" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">My Work</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;