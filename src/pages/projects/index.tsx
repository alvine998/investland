// src/pages/projects/index.tsx
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  // Dummy data for projects
  const [projects] = useState([
    {
      id: 1,
      name: "Green Valley Farm Expansion",
      developer: "EcoGrow Developers",
      targetFund: 5000000000,
      collectedFund: 3200000000,
    },
    {
      id: 2,
      name: "Urban Hydroponics Tower",
      developer: "City Harvest Group",
      targetFund: 7500000000,
      collectedFund: 450000000,
    },
    {
      id: 3,
      name: "Organic Orchard Revitalization",
      developer: "NatureFirst Farms",
      targetFund: 3000000000,
      collectedFund: 180000000,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Investment Projects
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const progress =
              (project.collectedFund / project.targetFund) * 100;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {project.name}
                </h2>
                <p className="text-sm text-gray-500">
                  by {project.developer}
                </p>

                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    Target:{" "}
                    <span className="font-semibold text-gray-800">
                      ${project.targetFund.toLocaleString()}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Collected:{" "}
                    <span className="font-semibold text-green-700">
                      Rp {project.collectedFund.toLocaleString()}
                    </span>
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {progress.toFixed(1)}% funded
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <Link
                    href={`/projects/${project.id}`}
                    className="block text-center bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
