"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventsSection from "./components/EventsSection";
import GallerySection from "./components/GallerySection";
import TeamSection from "./components/TeamSection";
import FAQSection from "./components/FAQSection";
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
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Events Section */}
      <EventsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Team Section */}
      <TeamSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
     

    </main>
  );
}
