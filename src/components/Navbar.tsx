import Link from "next/link";
import Logo from "@/components/Logo";
import { NAV_LINKS } from "@/constants/navLinks";
import MobileNav from "@/components/MobileNav";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30">
      {/* container controls left & right padding consistently */}
      <div className="container mx-auto py-6 flex items-center justify-between">
        {/* Logo inside container so it aligns with grid */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 capitalize">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className="text-[1rem] font-semibold tracking-wide text-slate-200 hover:text-sky-500 transition-colors"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation (hamburger) */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
