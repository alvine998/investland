import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const developers = [
  {
    id: "skyline-estates",
    name: "Skyline Estates",
    description: "Luxury apartments and commercial spaces in prime locations.",
    image: "https://picsum.photos/seed/dev1/400/250",
  },
  {
    id: "greenfields-developers",
    name: "GreenFields Developers",
    description: "Eco-friendly housing and sustainable communities.",
    image: "https://picsum.photos/seed/dev2/400/250",
  },
  {
    id: "urbanbuild-co",
    name: "UrbanBuild Co.",
    description: "Modern designs for urban living and business hubs.",
    image: "https://picsum.photos/seed/dev3/400/250",
  },
  {
    id: "coastal-view-group",
    name: "Coastal View Group",
    description: "Seaside resorts, villas, and vacation homes.",
    image: "https://picsum.photos/seed/dev4/400/250",
  },
];

export default function DevelopersPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-green-700 mb-10"
        >
          Our Trusted Developers
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <Link href={`/developers/${dev.id}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={dev.image}
                    alt={dev.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {dev.name}
                  </h2>
                  <p className="text-gray-600 text-sm">{dev.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
