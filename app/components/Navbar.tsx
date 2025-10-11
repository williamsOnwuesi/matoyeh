"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const services = [
    "Banner Printing",
    "Cup / Cap Printing",
    "Shirt Printing",
    "DI Printing",
    "Computer Training",
    "Project Binding",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-indigo-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-27 h-10">
            <Image
              src="/logo.jpg"
              alt="Matoyeh Logo"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <span className="text-lg font-semibold text-indigo-700">
            Matoyeh Media & Tech
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-indigo-600 transition">Home</a>

          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-indigo-600 transition">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            {servicesDropdown && (
              <div className="absolute left-0 mt-3 w-56 rounded-xl bg-white border border-gray-200 shadow-lg overflow-hidden">
                {services.map((svc) => (
                  <a
                    key={svc}
                    href="#"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition"
                  >
                    {svc}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#gallery" className="hover:text-indigo-600 transition">Gallery</a>
          <a href="#team" className="hover:text-indigo-600 transition">Our Team</a>
          <a href="#faq" className="hover:text-indigo-600 transition">FAQ</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600 transition"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-indigo-100 shadow-inner">
          <a href="#" className="block px-6 py-3 hover:bg-indigo-50 transition">Home</a>
          <details className="group">
            <summary className="flex justify-between items-center px-6 py-3 cursor-pointer hover:bg-indigo-50 transition">
              <span>Services</span>
              <ChevronDown className="w-4 h-4 transition group-open:rotate-180" />
            </summary>
            <div className="bg-indigo-50/40 border-t border-indigo-100">
              {services.map((svc) => (
                <a
                  key={svc}
                  href="#"
                  className="block px-8 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition"
                >
                  {svc}
                </a>
              ))}
            </div>
          </details>
          <a href="#gallery" className="block px-6 py-3 hover:bg-indigo-50 transition">Gallery</a>
          <a href="#team" className="block px-6 py-3 hover:bg-indigo-50 transition">Our Team</a>
          <a href="#faq" className="block px-6 py-3 hover:bg-indigo-50 transition">FAQ</a>
          <a href="#contact" className="block px-6 py-3 hover:bg-indigo-50 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}
