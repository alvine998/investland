import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Coins, Building, MapPin } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Investor Funds Projects",
      description:
        "Investors contribute capital to developers, helping bring new property projects to life while earning potential returns.",
      icon: <Coins className="w-10 h-10 text-green-700" />,
    },
    {
      title: "Developer Acquires Land",
      description:
        "Developers use the funds to purchase land or collaborate with field owners to start building.",
      icon: <Building className="w-10 h-10 text-green-700" />,
    },
    {
      title: "Projects Grow & Profit",
      description:
        "Completed projects generate income, creating profit-sharing opportunities for all stakeholders.",
      icon: <MapPin className="w-10 h-10 text-green-700" />,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center bg-gradient-to-r from-green-100 to-green-300">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-green-900"
        >
          How It Works
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg max-w-2xl mx-auto text-gray-700"
        >
          We connect investors, developers, and landowners to create successful
          real estate projects together.
        </motion.p>
      </section>

      {/* Steps */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-green-900">
              {step.title}
            </h3>
            <p className="mt-3 text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-green-700 text-white">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          Ready to Start Your Investment Journey?
        </motion.h2>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="mt-6 inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </motion.a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        © {new Date().getFullYear()} InvestLand. All rights reserved.
      </footer>
    </div>
  );
}
