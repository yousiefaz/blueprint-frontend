import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 transition-transform duration-200"
    >
      <Image
        src="/logos/yourLogo-white.png"
        alt="VGA Logo"
        width={90}
        height={100}
      />
      <h1 className="text-2xl font-bold text-sky-400 tracking-wide capitalize hover:text-sky-600 transition-colors">
        yaz
      </h1>
    </Link>
  );
};

export default Logo;
