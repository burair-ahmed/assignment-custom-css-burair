"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-5 bg-blue-800 text-white flex items-center justify-between shadow-lg">
     <Link href="/">
      <h1 className="text-2xl font-bold">Burair Ahmed</h1>
      </Link>
      <nav className={`space-x-4 ${menuOpen ? "block" : "hidden"} md:flex`}>
        <Link href="/" className="hover:text-blue-300 transition duration-300">Home</Link>
        <Link href="/about" className="hover:text-blue-300 transition duration-300">About</Link>
        <Link href="/services" className="hover:text-blue-300 transition duration-300">Services</Link>
        <Link href="/blog" className="hover:text-blue-300 transition duration-300">Blog</Link>
        <Link href="/contact" className="hover:text-blue-300 transition duration-300">Contact</Link>
        <Link href="/faq" className="hover:text-blue-300 transition duration-300">FAQ</Link>
        <Link href="/error" className="hover:text-blue-300 transition duration-300">Error</Link>
      </nav>
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </header>
  );
}
