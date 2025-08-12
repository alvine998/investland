import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function DeveloperFields() {
  // Dummy data
  const fields = [
    {
      id: 1,
      name: "Sunrise Agricultural Land",
      location: "California, USA",
      size: "50 Ha",
      price: 2500000000,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    },
    {
      id: 2,
      name: "Riverside Construction Plot",
      location: "Texas, USA",
      size: "20 Ha",
      price: 180000000,
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
    },
    {
      id: 3,
      name: "Hillside Development Land",
      location: "Colorado, USA",
      size: "35 Ha",
      price: 250000000,
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    },
  ];

  const router = useRouter();

  const handleAction = (fieldId: number) => {
    router.push(`/fields/${fieldId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Available Fields for Development
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fields.map((field) => (
            <motion.div
              key={field.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={field.image}
                  alt={field.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {field.name}
                </h2>
                <p className="text-sm text-gray-500">{field.location}</p>
                <p className="text-sm text-gray-500">Size: {field.size}</p>
                <p className="text-green-700 font-bold mt-2">
                  Rp {field.price.toLocaleString()}
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleAction(field.id)}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
                  >
                    Detail
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
