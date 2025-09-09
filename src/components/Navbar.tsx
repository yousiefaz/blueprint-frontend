import Link from "next/link";
import Logo from "./Logo";
import { NavLinks } from "@/constants/NavLinks";
import MobileNav from "./MobileNav";
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 p-4 backdrop-blur-md z-30 shadow-md flex items-center justify-between">
      <div className="relative container py-6 flex justify-between transition-all">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 capitalize">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className="text-sm font-semibold tracking-wide text-slate-200 hover:text-sky-700 transition-colors"
            >
              {link}
            </Link>
          ))}
        </nav>
        <MobileNav/>
      </div>
    </header>
  );
};

export default Navbar;
