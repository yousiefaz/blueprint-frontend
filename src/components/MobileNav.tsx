"use client";

import { NavLinks } from "@/constants/NavLinks";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="md:hidden relative">
      <button
        className="p-2 rounded-md focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        {!isOpen ? (
          <Menu className="text-slate-200" />
        ) : (
          <X className="text-slate-200" />
        )}
      </button>

      <div
        ref={menuRef}
        className={`absolute right-0 mt-2 w-40 bg-slate-800 rounded-md shadow-lg transform transition-all origin-top ${
          isOpen
            ? "scale-y-100 opacity-100 visible"
            : "scale-y-0 opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col p-2 space-y-2 capitalize font-normal">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className="py-1 px-2 rounded-md hover:bg-slate-700 text-sky-400 transition-colors"
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
