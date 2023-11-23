import Image from "next/image";
import Link from "next/link";

async function Navbar() {
  return (
    <header className="w-full absolute z-10 header">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="CarHub"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        (((SignInButton)))
      </nav>
    </header>
  );
}
export default Navbar;
