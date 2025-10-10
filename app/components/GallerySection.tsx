"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    title: "Banner Printing",
    description:
      "High-quality banners for events, advertising, and branding — durable and vibrant.",
    imageUrl:
      "/large-format.jpg",
  },
  {
    title: "T-Shirt Printing",
    description:
      "Custom T-shirt printing for teams, businesses, and events with professional finishes.",
    imageUrl:
      "/t-shirt.webp", 
  },
  {
    title: "Mug & Cap Printing",
    description:
      "Personalized mugs and caps with your logo or design — perfect for gifts or promotions.",
    imageUrl:
      "/mug-printing.jpg",
  },
  {
    title: "Project Binding",
    description:
      "Professional project and document binding for students, offices, and businesses.",
    imageUrl:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Computer Training",
    description:
      "Empowering you with hands-on computer and design skills through practical training.",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Videography & Photography",
    description:
      "Capture your moments and promote your brand with our expert photo and video services.",
    imageUrl:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=60",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8">
          Our Work Gallery
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Explore some of the professional services we offer — from printing and
          design to training and media production.
        </p>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-56 w-full overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-lg font-bold text-indigo-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12">
          <a
            href="/gallery"
            className="inline-block px-8 py-3 font-semibold text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
