import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const DeveloperDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Dummy data for demo purposes
  const developer = {
    id,
    name: "GreenBuild Developers",
    description:
      "GreenBuild Developers specialize in sustainable and eco-friendly real estate projects, focusing on community well-being and environmental preservation.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200",
    projects: [
      {
        id: 1,
        title: "Eco Valley Residences",
        targetInvestment: 500000,
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      },
      {
        id: 2,
        title: "Urban Green Towers",
        targetInvestment: 750000,
        image:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
      },
    ],
  };

  const handleFund = (projectId: number) => {
    alert(`Funding project ID: ${projectId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Navbar />
      {/* Developer Header */}
      <div className="relative h-64 w-full">
        <Image
          src={developer.image}
          alt={developer.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center lg:px-32 px-4">
          <h1 className="text-4xl font-bold text-black">{developer.name}</h1>
          <p className="text-gray-500 max-w-2xl">{developer.description}</p>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto px-4 mt-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Projects by {developer.name}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developer.projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Target Investment: $
                  {project.targetInvestment.toLocaleString()}
                </p>
                <button
                  onClick={() => handleFund(project.id)}
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Create Appointment
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperDetail;
