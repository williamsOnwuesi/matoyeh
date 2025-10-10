"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-[90vh] overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        {/* Replace this source with your own MP4 video file or CDN link */}
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay (for better text visibility) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
          Matoyeh Media & Technology
        </h1>

        <p className="text-lg sm:text-xl font-medium text-gray-200 max-w-2xl mx-auto">
          General Printing • Videography • Computer Training • Project Binding
        </p>

        <p className="mt-3 text-yellow-300 font-semibold text-lg">
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
  );
}
