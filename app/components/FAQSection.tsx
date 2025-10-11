"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What services does Matoyeh Media & Technology offer?",
    answer:
      "We specialize in general printing, large format banners, T-shirt and mug printing, videography, computer training, and project binding. We also handle customized souvenirs and corporate branding solutions.",
  },
  {
    question: "Do you offer discounts on bulk printing orders?",
    answer:
      "Yes! Our Super Bonanza offers between 10% to 40% discount depending on your order volume and type of printing project.",
  },
  {
    question: "Where are you located?",
    answer:
      "We’re located by Unity Garden, opposite A.A Rano, Karu LGA, Secretariat Junction Ado, Nasarawa State.",
  },
  {
    question: "Can I get digital designs before printing?",
    answer:
      "Absolutely! We provide high-quality digital proofs for your approval before final printing to ensure everything looks perfect.",
  },
  {
    question: "Do you handle urgent or same-day printing requests?",
    answer:
      "Yes, we do. Our express printing service ensures your urgent jobs are completed within the shortest time possible without compromising quality.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-gradient-to-b from-indigo-50 via-white to-indigo-50 py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-semibold text-sm"
        >
          <HelpCircle size={18} /> Frequently Asked Questions
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-indigo-800 mt-4"
        >
          We’ve Got Answers
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 mt-4"
        >
          Get to know more about our services, processes, and how we help you
          bring your creative visions to life.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-5">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-md border border-indigo-100 shadow-sm hover:shadow-lg rounded-2xl transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <h3 className="text-lg font-semibold text-indigo-800">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown
                  className={`text-indigo-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="px-6 pb-5 text-gray-600 border-t border-indigo-50">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
