'use client' // Render on client side
import React, { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-900 p-3">
      <ul className="flex border-b">
        <li className="mr-6">
          <Link className="hover:text-blue-800" href="/">Home</Link>
        </li>
        <li className="mr-6">
          <Link className="hover:text-blue-800" href="/about">About</Link>
        </li>
        <li className="mr-6">
          <Link className="hover:text-blue-800" href="/contact">Contact</Link>
        </li>
        <li
          className="mr-6 relative"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <Link href="#" className="hover:text-blue-800">User</Link>
          {isOpen && (
            <ul className="absolute bg-green-900 text-green-400 mt-1">
              <li className="hover:bg-green-100 p-2">
                <Link className="hover:text-blue-800" href="/user/adam">Adam</Link>
              </li>
              <li className="hover:bg-green-100 p-2">
                <Link className="hover:text-blue-800" href="/user/eve">Eve</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}