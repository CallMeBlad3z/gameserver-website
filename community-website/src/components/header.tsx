'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);

  // This function toggles the menu open and closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // This effect runs when the isOpen state changes
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setShowMenuItems(true);
      }, 500); // Delay to match the overlay animation duration
    } else {
      setShowMenuItems(false);
    }
  }, [isOpen]);

  return (
    <div className="flex bg-darkest">
      <nav className="flex mt-16 flex-wrap w-full 2xl:w-3/5 xl:w-8/12 md:w-10/12 text-white items-center justify-between mx-auto p-8 bg-dark rounded-3xl">
        <Link href="/" className="text-4xl font-sans bg-gradient-to-r from-red-custom via-purple-500 to-blue-custom bg-clip-text text-transparent">
          PeliTupa
        </Link>

        <div className="hidden xl:flex space-x-6 lg:text-2xl">
          <Link href="/servers">Palvelimet</Link>
          <Link href="/commands">Komennot</Link>
          <Link className="mr-100" href="/about">Tietoa meistä</Link>
        </div>

        <div className="hidden xl:flex">
          <div className="flex items-center justify-center bg-white rounded-full shadow-lg w-9 h-9">
            <Link className="space-x-4 text-xl" href="https://discord.com/invite/6JdyrDhn">
              <FaDiscord className="fill-black w-6 h-6 fill-red-custom" />
            </Link>
          </div>
        </div>

        <button className="xl:hidden text-3xl" onClick={toggleMenu}>
          &#9776;
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 animate-slide-in">
          <button className="absolute top-6 right-6 text-6xl text-white" onClick={toggleMenu}>
            &times;
          </button>
          {showMenuItems && (
            <div className="flex flex-col items-center space-y-16 text-4xl text-white">
              <Link href="/servers" onClick={toggleMenu} className="animate-fade-in-left">Palvelimet</Link>
              <Link href="/commands" onClick={toggleMenu} className="animate-fade-in-left">Komennot</Link>
              <Link href="/about" onClick={toggleMenu} className="animate-fade-in-left">Tietoa meistä</Link>
              <Link href="https://discord.com/invite/6JdyrDhn" onClick={toggleMenu} className="animate-fade-in-left">Discord</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}