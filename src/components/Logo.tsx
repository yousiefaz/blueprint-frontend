import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-end gap-3 ">
      <Image src="/logos/blueprint.png" width={50} height={50} alt="logo" />
      <div className="relative space-x-0.5">
        <h1 className="capitalize text-white text-2xl font-bold tracking-wide hover:text-sky-500 transition-all duration-1500">
          blueprint
        </h1>
        <div className="absolute -right-2.5 bottom-1.5 w-2 h-2 rounded-full bg-sky-500" />
      </div>
    </Link>
  );
};

export default Logo;
