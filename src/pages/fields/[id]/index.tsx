import { useRouter } from "next/router";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Slider from "react-slick";
import { useState } from "react";

export default function FieldDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dummy field detail
  const field = {
    id: id || 1,
    name: "Sunrise Agricultural Land",
    location: "California, USA",
    size: "50 acres",
    price: 300000,
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800",
      "https://images.unsplash.com/photo-1500534314209-a26db0f5d9b0?w=800",
    ],
    description:
      "This beautiful agricultural land is perfect for sustainable farming or potential development projects. Located in a serene area with access to irrigation and transportation facilities.",
  };

  const otherFields = [
    {
      id: 2,
      name: "Green Valley Farm",
      price: 2500000000,
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500",
    },
    {
      id: 3,
      name: "Mountain View Land",
      price: 4000000000,
      image:
        "https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=500",
    },
    {
      id: 6,
      name: "Hill View",
      price: 5000000000,
      image:
        "https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=500",
    },
  ];

  const recommendedFields = [
    {
      id: 4,
      name: "Lakeside Plantation",
      price: 3500000000,
      image:
        "https://images.unsplash.com/photo-1503264116251-35a269479413?w=500",
    },
    {
      id: 5,
      name: "Golden Wheat Fields",
      price: 2800000000,
      image:
        "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=500",
    },
    {
      id: 7,
      name: "Silver Wheat Fields",
      price: 2800000000,
      image:
        "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=500",
    },
  ];

  const handleCreateAppointment = () => {
    alert(`Create appointment for field ID: ${field.id}`);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-green-700 hover:underline"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          {/* Premium Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Slider {...settings}>
              {field.images.map((src, index) => (
                <div
                  key={index}
                  className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={src}
                    alt={`${field.name} - ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </Slider>

            {/* Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {field.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-green-700" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Field Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-800">{field.name}</h1>
            <p className="text-gray-500 mt-2">{field.location}</p>
            <p className="text-sm text-gray-500">Size: {field.size}</p>
            <p className="text-green-700 text-xl font-bold mt-4">
              ${field.price.toLocaleString()}
            </p>
            <p className="mt-4 text-gray-600">{field.description}</p>

            <button
              onClick={handleCreateAppointment}
              className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
            >
              Create Appointment
            </button>
          </motion.div>
        </div>

        {/* Other Fields */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Other Fields from This Owner
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherFields.map((f) => (
              <div
                key={f.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{f.name}</h3>
                  <p className="text-green-700 font-bold">
                    Rp {f.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Fields */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Recommended Fields
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedFields.map((f) => (
              <div
                key={f.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{f.name}</h3>
                  <p className="text-green-700 font-bold">
                    Rp {f.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
