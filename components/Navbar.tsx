"Use client";
import { WithSessionProp } from "@/typings.d";
import Image from "next/image";
import Link from "next/link";
import SignInButton from "./buttons/SignInButton";

export default async function Navbar({ session }: WithSessionProp) {
  return (
    <header className="w-full relative z-10 header">
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
        <SignInButton session={session} />
      </nav>
    </header>
  );
}
