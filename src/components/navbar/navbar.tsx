"use client";
import { useState } from "react";
import { Logo } from "./itemsNavbar/logo";
import { DesktopMenu } from "./itemsNavbar/DesktopMenu";
import { MobileMenu } from "./itemsNavbar/MobileMenu";
import { Menu, X } from "lucide-react";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState("animate-slideDown");

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      setAnimation("animate-slideDown");
    } else {
      setAnimation("animate-slideUp");
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  return (
    <section className="w-screen h-14 fixed top-0 z-50 flex items-center justify-between p-5 bg-[#150c13] sm:bg-[#150c1300] sm:backdrop-blur-none sm:opacity-100 backdrop-blur-lg opacity-90 text-white">
      <Logo />
      <div className="sm:hidden ml-auto">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <DesktopMenu />
      <MobileMenu show={isOpen} animation={animation} />
    </section>
  );
};
