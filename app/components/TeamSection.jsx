"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Matoyeh",
    role: "CEO & Founder",
    image:
      "/matoyeh2.jpg",
    bio: "Visionary leader with a passion for media and technology innovation.",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Nene",
    role: "Training Coordinator",
    image:
      "/nene.jpg",
    bio: "Passionate about empowering learners through hands-on computer training.",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Matoyeh Media Team",
    role: "General Management",
    image:
      "/matoyeh-team.jpg",
    bio: "Transforms ideas into compelling visual designs that captivate audiences.",
    linkedin: "#",
    instagram: "#",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative bg-gradient-to-b from-white via-indigo-50 to-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-indigo-700 mb-4"
        >
          Meet Our Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          The creative minds and skilled professionals driving excellence at
          Matoyeh Media & Technology.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-48 h-48 mx-auto mt-8 rounded-full overflow-hidden ring-4 ring-indigo-100 group-hover:ring-indigo-300 transition">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-indigo-700 mt-4">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>

                <div className="mt-4 flex justify-center gap-4">
                  <a
                    href={member.linkedin}
                    className="text-indigo-600 hover:text-indigo-400 transition"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={member.instagram}
                    className="text-indigo-600 hover:text-indigo-400 transition"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
