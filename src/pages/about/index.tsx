// pages/about.tsx
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] text-center px-6 bg-gradient-to-br from-green-100 to-green-300 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-green-900"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl max-w-2xl"
        >
          InvestLand connects <strong>Investors</strong>,{" "}
          <strong>Developers</strong>, and <strong>Field Owners</strong> to
          build a brighter real estate future together.
        </motion.p>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
        <div className="space-y-8">
          {[
            {
              year: "2022",
              text: "InvestLand was founded with a vision to democratize property investment, making it accessible to everyone.",
            },
            {
              year: "2023",
              text: "We launched our platform, connecting the first wave of investors and developers.",
            },
            {
              year: "2024",
              text: "Expanded to include field owner collaboration, enabling seamless land acquisition and partnerships.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              <div className="bg-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shadow-lg">
                {item.year}
              </div>
              <p className="text-gray-700 md:text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-green-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Mission",
              text: "To create a transparent and inclusive property investment ecosystem where anyone can participate and benefit.",
            },
            {
              title: "Vision",
              text: "To be the leading platform for connecting property investors, developers, and field owners across the globe.",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-green-700">
                {card.title}
              </h3>
              <p className="mt-4 text-gray-600">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Ikna Abdul Kholik", role: "CEO & Founder" },
            { name: "Alvine Yoga Pratama", role: "CTO" },
            { name: "Michael Lee", role: "Head of Partnerships" },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <img
                src={`https://i.pravatar.cc/150?img=${idx + 1}`}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="mt-4 font-semibold text-lg">{member.name}</h3>
              <p className="text-green-700">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Join InvestLand Today</h2>
        <p className="mt-2 text-lg">
          Be part of our journey to reshape real estate investment.
        </p>
        <button className="mt-6 bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        © {new Date().getFullYear()} InvestLand. All rights reserved.
      </footer>
    </div>
  );
}
