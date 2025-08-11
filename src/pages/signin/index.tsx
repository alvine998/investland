import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Navbar />

      <section className="flex items-center justify-center pt-28 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full"
        >
          <h2 className="text-3xl font-bold text-center text-green-900 mb-6">
            Sign In
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
            >
              Sign In
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="text-green-700 hover:underline">
              Sign Up
            </Link>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
