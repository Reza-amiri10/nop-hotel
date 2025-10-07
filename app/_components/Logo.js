import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <div className="z-10">
      <Link href="/" className="flex items-center gap-4 z-10">
        <Image
          src="/logo.png"
          height="60"
          width="60"
          alt="The Wild Oasis logo"
          quality={80}
        />
        <span className="text-xl font-semibold text-primary-100">
          Nop Hotel
        </span>
      </Link>
    </div>
  );
}

export default Logo;
