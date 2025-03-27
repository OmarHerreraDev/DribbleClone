'use client'
import { useState, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const categories = [
    'Following',
    'Popular',
    'New and Noteworthy',
    'Product Design',
    'Web Design',
    'Animation',
    'Branding',
    'Illustration',
    'Mobile',
    'Typography',
    'Print'
  ];

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Pequeño retardo para evitar cierre accidental
  };

  return (
    <div 
      ref={dropdownRef}
      className="relative h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className={`flex items-center text-sm font-medium ${isOpen ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'} transition-colors`}
      >
        Explore <IoIosArrowDown className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute left-0 top-full mt-0 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              {category}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;