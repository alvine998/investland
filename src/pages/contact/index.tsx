import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
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
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg max-w-2xl mx-auto text-gray-700"
        >
          Have questions? We’d love to hear from you. Let’s connect and discuss
          your ideas.
        </motion.p>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-gray-600">
            Reach out to our team through the following channels or send us a
            message using the form.
          </p>
          <div className="flex items-center gap-3">
            <Mail className="text-green-700 w-6 h-6" />
            <span>support@investland.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-green-700 w-6 h-6" />
            <span>+62 812-3456-7890</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-green-700 w-6 h-6" />
            <span>Jakarta, Indonesia</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-xl p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="Your message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        © {new Date().getFullYear()} InvestLand. All rights reserved.
      </footer>
    </div>
  );
}
