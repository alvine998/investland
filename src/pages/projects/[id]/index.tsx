// src/pages/projects/[id].tsx
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Dummy project data
  const project = {
    id: id || 1,
    name: "Green Valley Farm Expansion",
    developer: {
      name: "EcoGrow Developers",
      bio: "A sustainable agriculture developer focusing on eco-friendly farm expansions and organic produce projects.",
    },
    description:
      "This project aims to expand the Green Valley Farm by 20 acres, adding state-of-the-art irrigation systems and increasing crop yield capacity. Investors can benefit from long-term growth in sustainable farming returns.",
    targetFund: 5000000000,
    collectedFund: 320000000,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  };

  const progress = (project.collectedFund / project.targetFund) * 100;

  const handleFund = () => {
    alert(`Funding project ID: ${project.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="text-green-700 hover:underline mb-4"
        >
          ← Back to Projects
        </button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow p-6"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold text-gray-800">{project.name}</h1>
          <p className="text-gray-500">by {project.developer.name}</p>

          <p className="mt-4 text-gray-600">{project.description}</p>

          {/* Funding Info */}
          <div className="mt-6">
            <p className="text-sm text-gray-600">
              Target:{" "}
              <span className="font-semibold">
                Rp {project.targetFund.toLocaleString()}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Collected:{" "}
              <span className="font-semibold text-green-700">
                Rp {project.collectedFund.toLocaleString()}
              </span>
            </p>
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

          {/* Fund Button */}
          <button
            onClick={handleFund}
            className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
          >
            Fund This Project
          </button>
        </motion.div>

        {/* Developer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-xl shadow p-6 mt-8"
        >
          <h2 className="text-xl font-bold text-gray-800">About Developer</h2>
          <p className="mt-2 text-gray-600">{project.developer.bio}</p>
        </motion.div>
      </div>
    </div>
  );
}
