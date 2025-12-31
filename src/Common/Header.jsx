import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            Study<span className="text-indigo-600">Stacks</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="/" className="hover:text-indigo-600 transition">
              Home
            </a>
            <a href="/subjects" className="hover:text-indigo-600 transition">
              Subjects
            </a>
            <a href="/about" className="hover:text-indigo-600 transition">
              About
            </a>
            <a href="/contact" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-3 px-4 py-4 text-gray-700 font-medium">
            <a href="/" className="hover:text-indigo-600">
              Home
            </a>
            <a href="/subjects" className="hover:text-indigo-600">
              Subjects
            </a>
            <a href="/about" className="hover:text-indigo-600">
              About
            </a>
            <a href="/contact" className="hover:text-indigo-600">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
