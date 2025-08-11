// components/Navbar.tsx
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-700">
          InvestLand
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "How It Works", href: "/how-it-works" },
            { name: "Contact", href: "/contact" },
          ].map((link, idx) => (
            <motion.div whileHover={{ scale: 1.1 }} key={idx}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-green-700 transition"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Sign In Button */}
        <Link
          href="/signin"
          className="hidden md:block bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
