import React from "react";
import Logo from "@/components/Logo";
import {
  Facebook,
  Github,
  Instagram,
  Twitch,
  Twitter,
  X,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-20 pb-4">
      {/* Links */}
      <div className="container mb-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="basis-1/3 flex flex-col md:items-center lg:items-start gap-4  lg:gap-6">
          <Logo />
          <p className="text-lg">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
          <ul className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-0">
            <li className="cursor-pointer">
              <Facebook className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:text-sky-600 hover:-translate-y-1 transition-all" />
            </li>
            <li className="cursor-pointer">
              <Youtube className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:text-red-600 hover:-translate-y-1 transition-all" />
            </li>
            <li className="cursor-pointer">
              <Instagram className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:text-fuchsia-600 hover:-translate-y-1 transition-all" />
            </li>
            <li className="cursor-pointer">
              <Github className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:text-white hover:-translate-y-1 transition-all" />
            </li>
          </ul>
        </div>
      </div>
      {/* Links */}
      {/* Copyright */}
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
