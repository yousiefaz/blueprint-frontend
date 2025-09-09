import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-end gap-2">
      <Image src="/vga.png" alt="VGA Logo" width={50} height={50} />
      <div className="relative">
        <h1 className="capitalize text-2xl font-bold text-sky-400 tracking-wide hover:text-sky-600">
          yaz
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
