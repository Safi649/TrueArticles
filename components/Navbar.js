// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <img src="/logo.png" alt="TrueArticles" className="w-10 h-10 rounded" />
            <span className="text-lg font-semibold">TrueArticles</span>
          </a>
        </Link>

        <nav className="space-x-4">
          <Link href="/"><a className="hover:underline">Home</a></Link>
          <Link href="/articles"><a className="hover:underline">Articles</a></Link>
          <Link href="/about"><a className="hover:underline">About</a></Link>
          <Link href="/contact"><a className="hover:underline">Contact</a></Link>
          <Link href="/admin"><a className="ml-4 px-3 py-1 rounded bg-indigo-600 text-white">Admin</a></Link>
        </nav>
      </div>
    </header>
  );
}

