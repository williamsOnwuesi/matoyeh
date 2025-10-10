"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "./components/Hero";
import EventsSection from "./components/EventsSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";

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
      <Hero />

      {/* Events Section */}
      <EventsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Footer */}
  
      <Footer/>
     

    </main>
  );
}
