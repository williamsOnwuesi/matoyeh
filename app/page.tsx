"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Menu,
  ChevronDown,
  Printer,
  Phone,
  MapPin,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const galleryUrls = [
    
    "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60",
  ];

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-2xl font-bold text-indigo-600">
            <Printer />
            <span>Matoyeh Media & Tech</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:text-indigo-500">Home</a>
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:text-indigo-500">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesDropdown && (
                <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg border border-gray-200">
                  {[
                    "Banner Printing",
                    "Cup / Cap Printing",
                    "Shirt Printing",
                    "DI Printing",
                    "Computer Training",
                    "Project Binding",
                  ].map((svc) => (
                    <a
                      key={svc}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {svc}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#gallery" className="hover:text-indigo-500">Gallery</a>
            <a href="#contact" className="hover:text-indigo-500">Contact</a>
          </div>

          <button
            className="md:hidden p-2 hover:text-indigo-500"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <a href="#" className="block px-6 py-3 hover:bg-gray-100">Home</a>
            <a href="#gallery" className="block px-6 py-3 hover:bg-gray-100">Gallery</a>
            <a href="#contact" className="block px-6 py-3 hover:bg-gray-100">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Matoyeh Media & Technology
          </h1>
          <p className="mt-4 text-lg">
            General Printing • Videography • Computer Training • Project Binding
          </p>
          <p className="mt-2 text-yellow-300 font-semibold">
            Super Bonanza: <span className="text-white">10% – 40% Discount</span>
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#gallery"
              className="px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-lg shadow hover:scale-105 transition"
            >
              View Gallery
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-10">
          Our Work Gallery
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryUrls.map((url, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <Image
                src={url}
                alt={`Print sample ${idx + 1}`}
                width={800}
                height={500}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-indigo-700 text-white">
        <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center">
          For all your printing, branding, and training needs, reach out to us:
        </p>
        <div className="mt-8 space-y-4 text-center">
          <p className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" /> 08158233333 · 08068899417
          </p>
          <p className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" /> Unity Garden, Opp. A.A Rano, Secretariat Junction Ado, Karu LGA, Nasarawa State
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        © {new Date().getFullYear()} Matoyeh Media & Technology. All rights reserved.
      </footer>
    </main>
  );
}
