import Link from "next/link";
import Logo from "./Logo";
import { NavLinks } from "@/constants/NavLinks";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <nav className="hidden md:flex items-center gap-8 capitalize">
            {NavLinks.map((link, index) => (
              <Link
                key={index}
                href={`#${link}`}
                className="text-sm font-semibold tracking-wide text-slate-200 hover:text-sky-500 transition-colors"
              >
                {link}
              </Link>
            ))}
          </nav>

          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
