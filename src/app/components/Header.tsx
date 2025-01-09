"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link href="/">
        <h1 className="header-title">Burair Ahmed</h1>
      </Link>
      <nav className={`header-nav ${menuOpen ? "block" : "hidden"} md:flex`}>
        <Link href="/" className="header-link">Home</Link>
        <Link href="/about" className="header-link">About</Link>
        <Link href="/services" className="header-link">Services</Link>
        <Link href="/blog" className="header-link">Blog</Link>
        <Link href="/contact" className="header-link">Contact</Link>
        <Link href="/faq" className="header-link">FAQ</Link>
        <Link href="/error" className="header-link">Error</Link>
      </nav>
      <button
        className="header-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </header>
  );
}
