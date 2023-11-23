import Link from "next/link";

export default function Header() {
  return (
    <header>
      <p className="p-5 bg-blue-500 font-bold text-white text-center">
        My header
      </p>
      <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
        Go back home
      </Link>
    </header>
  );
}
