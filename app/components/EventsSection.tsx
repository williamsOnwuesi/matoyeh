"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const eventsData = [
  {
    id: "1",
    title: "Printing Workshop & Demo Day",
    date: "Nov 15, 2025",
    description: "Join us for a live demo of modern printing techniques.",
    imageUrl:
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "2",
    title: "Graphic Design Bootcamp",
    date: "Dec 3, 2025",
    description: "A full-day intensive training in graphic design and branding.",
    imageUrl:
      "/graphics-design.jpeg",
  },
  {
    id: "3",
    title: "Bonanza & Product Showcase",
    date: "Jan 10, 2026",
    description: "See our latest printing equipment and special offers in person.",
    imageUrl:
      "/bonanza.jpg",
  },
  {
    id: "4",
    title: "T-Shirt Printing Masterclass",
    date: "Feb 7, 2026",
    description: "Hands-on session for T-shirt and fabric printing experts.",
    imageUrl:
      "/july-bonanza-t-shirt.jpg",
  },
  {
    id: "5",
    title: "Creative Branding Meetup",
    date: "Mar 20, 2026",
    description: "A networking event for designers, printers, and creatives.",
    imageUrl:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=800&q=60",
  },
];

export default function EventsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate events for seamless infinite scroll
  const extendedEvents = [...eventsData, ...eventsData];

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollSpeed = 1.5; // Adjust for speed
    let animationFrame: number;

    const scroll = () => {
      if (!isHovered && container) {
        container.scrollLeft += scrollSpeed;

        // When scroll reaches halfway (since duplicated), reset seamlessly
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  const handleScrollClick = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const distance = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section
      id="events"
      className="bg-gray-100 py-16 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">
          Upcoming Events & Computer Trainings
        </h2>

        {/* Scroll Buttons */}
        <button
          onClick={() => handleScrollClick("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-indigo-600 p-2 rounded-full shadow-lg hidden md:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleScrollClick("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-indigo-600 p-2 rounded-full shadow-lg hidden md:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Infinite Scroll Container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-hidden scroll-smooth scrollbar-hide pb-4"
        >
          {extendedEvents.map((evt, idx) => (
            <motion.div
              key={`${evt.id}-${idx}`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="min-w-[280px] sm:min-w-[340px] md:min-w-[360px] bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0"
            >
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src={evt.imageUrl}
                  alt={evt.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="text-sm text-indigo-500 font-semibold">
                  {evt.date}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mt-1">
                  {evt.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm line-clamp-3">
                  {evt.description}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700 transition"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10 text-center">
          <a
            href="/events"
            className="inline-block px-8 py-3 font-semibold text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition"
          >
            See All Events
          </a>
        </div>
      </div>
    </section>
  );
}
