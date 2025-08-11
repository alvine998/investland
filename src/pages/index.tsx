// pages/index.tsx
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Building, Coins, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />
      {/* Hero */}
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
            Invest Smarter, Build Better
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Connecting Investors, Developers, and Landowners to create thriving
            real estate projects together.
          </p>
          <div className="mt-6 space-x-4">
            <a
              href="/how-it-works"
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              How It Works
            </a>
            <a
              href="/contact"
              className="bg-white text-green-700 border border-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src="https://www.99.co/id/panduan/wp-content/uploads/2022/11/pengembang-properti-1120x630.jpg"
            alt="InvestLand hero"
            width={500}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Actors */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Who Is InvestLand For?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Coins className="w-12 h-12 text-green-600" />,
              title: "Investor",
              desc: "Grow your wealth by funding trusted property projects from professional developers.",
            },
            {
              icon: <Building className="w-12 h-12 text-green-600" />,
              title: "Developer / Property Agent",
              desc: "Create projects, attract investors, and collaborate with landowners easily.",
            },
            {
              icon: <MapPin className="w-12 h-12 text-green-600" />,
              title: "Field Owner",
              desc: "Monetize your land by selling or collaborating with developers for new projects.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center"
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-green-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          {[
            "Investor finds a property project",
            "Developer funds project with investor’s capital",
            "Developer collaborates with field owner",
            "Project completed, profits shared",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/4 text-center"
            >
              <div className="text-green-700 font-bold text-lg mb-2">
                Step {idx + 1}
              </div>
              <p className="text-gray-600">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "120+", label: "Projects Funded" },
            { number: "$5M+", label: "Total Investment" },
            { number: "300+", label: "Land Collaborations" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.5 }}
              className="bg-green-700 text-white rounded-xl p-6"
            >
              <div className="text-4xl font-bold">{stat.number}</div>
              <div className="mt-2 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Join InvestLand Today</h2>
        <p className="mt-2 text-lg">
          Start investing, developing, or collaborating in minutes.
        </p>
        <Link href={"/signup"}>
          <button className="mt-6 bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Sign Up Now
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        © {new Date().getFullYear()} InvestLand. All rights reserved.
      </footer>
    </div>
  );
}
