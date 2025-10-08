"use client";

import { motion } from "framer-motion";
import { Printer, Monitor, Percent, Phone, MapPin } from "lucide-react";

export default function MatoyehMediaTech() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 p-[2px] shadow-2xl"
    >
      <div className="relative rounded-3xl bg-gray-950/95 p-8 text-center text-gray-100 backdrop-blur-md">
        {/* Glow Effects */}
        <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-pink-500/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-indigo-500/30 blur-3xl" />

        {/* Header */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl"
        >
          Matoyeh Media & Technology
        </motion.h1>

        <p className="mt-3 text-lg text-gray-300">
          General Printing • Videography • Training
        </p>

        {/* Bonanza Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 p-[1px] shadow-xl"
        >
          <div className="rounded-2xl bg-gray-950/90 p-4">
            <div className="flex items-center justify-center gap-2 text-xl font-semibold text-yellow-400">
              <Percent className="h-6 w-6" />
              Super Bonanza
            </div>
            <p className="mt-2 text-gray-200">
              Get <span className="text-yellow-400 font-bold">10% - 40% Discount</span> on all your printings!
            </p>
          </div>
        </motion.div>

        {/* Services */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Banner Printing",
            "Cup / Cap Printing",
            "Shirt Printing",
            "DI Printing",
            "Computer Training",
            "Project Binding",
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl border border-gray-800 bg-gray-900/60 p-3 text-sm text-gray-300 transition hover:border-pink-500/40 hover:bg-gray-900/90"
            >
              <Printer className="mx-auto mb-2 h-5 w-5 text-pink-400" />
              {service}
            </motion.div>
          ))}
        </div>

        {/* Items List */}
        <p className="mt-6 text-sm text-gray-400">
          T-shirts, Mugs, Caps, ID Cards, Throw Pillows, Photo Frames, Wedding Cards, Jotters, Business Cards, IV Cards, Receipts, Envelopes, SAV, Souvenirs, Calendars, and more.
        </p>

        {/* Contact Info */}
        <div className="mt-8 flex flex-col items-center gap-2 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-pink-400" />
            <span>08158233333 • 08068899417</span>
          </div>
          <div className="flex items-center gap-2 text-center">
            <MapPin className="h-4 w-4 text-indigo-400" />
            <span>
              By Unity Garden, Opp. A.A Rano, Secretariat Junction Ado, Karu LGA, Nasarawa State
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-pink-500/30"
          >
            Order Your Print Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}
