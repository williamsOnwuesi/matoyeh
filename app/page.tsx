"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, Printer, Phone, ChevronDown, Cpu, ImageIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-gray-900/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-2 text-xl font-bold">
          <Cpu className="text-pink-400" />
          <span>Matoyeh Media & Tech</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="#" className="hover:text-pink-400 transition">
            Home
          </a>
          <div className="relative">
            <button
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="flex items-center gap-1 hover:text-pink-400 transition"
            >
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="absolute left-0 mt-2 w-48 rounded-lg bg-gray-800 shadow-lg"
              >
                {[
                  "Banner Printing",
                  "Shirt Printing",
                  "Cup/Cap Printing",
                  "Project Binding",
                  "Videography",
                  "Computer Training",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#gallery" className="hover:text-pink-400 transition">
            Gallery
          </a>
          <a href="#contact" className="hover:text-pink-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden hover:text-pink-400"
        >
          <Menu className="h-6 w-6" />
        </button>

        {isMenuOpen && (
          <div className="absolute left-0 top-[64px] w-full bg-gray-900/95 p-4 md:hidden">
            <a href="#" className="block py-2 hover:text-pink-400">
              Home
            </a>
            <a href="#gallery" className="block py-2 hover:text-pink-400">
              Gallery
            </a>
            <a href="#contact" className="block py-2 hover:text-pink-400">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
        >
          Matoyeh Media & Technology
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          General Printing • Videography • Computer Training • Project Binding
        </p>
        <p className="mt-2 text-pink-400 font-semibold">
          Super Bonanza: Get 10% - 40% OFF on all printings!
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#gallery"
            className="rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-pink-500/30"
          >
            View Gallery
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-pink-400 px-8 py-3 text-lg font-semibold text-pink-400 transition hover:bg-pink-400 hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="px-6 py-16 bg-gray-900">
        <h2 className="text-center text-3xl font-bold text-pink-400 mb-10">
          Our Works & Prints
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60",
          ].map((url, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={url}
                alt="Matoyeh Print Sample"
                width={800}
                height={500}
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-6 py-16 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-200 max-w-xl mx-auto">
          Reach out for your printing, media, and training needs. We’re always ready to help you bring your ideas to life.
        </p>

        <div className="mt-6 flex flex-col gap-2 text-gray-100">
          <p className="flex justify-center items-center gap-2">
            <Phone className="h-5 w-5" /> 08158233333 • 08068899417
          </p>
          <p className="flex justify-center items-center gap-2">
            <ImageIcon className="h-5 w-5" /> By Unity Garden, Opp. A.A Rano, Secretariat Junction Ado, Karu LGA, Nasarawa State
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-6 text-center text-sm text-gray-400 border-t border-gray-800">
        © {new Date().getFullYear()} Matoyeh Media & Technology. All rights reserved.
      </footer>
    </main>
  );
}
