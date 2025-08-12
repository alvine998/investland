"use client";

import dynamic from "next/dynamic";
import DashboardLayout from "@/components/DashboardLayout";
import { useEffect, useState } from "react";

// Dynamically import ApexCharts to avoid SSR hydration errors
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DashboardHome() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const chartOptions = {
    chart: { id: "basic-bar" },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
    colors: ["#16a34a"], // Tailwind green-600
  };

  const chartSeries = [
    {
      name: "Investments",
      data: [30, 40, 45, 50, 49, 60],
    },
  ];

  const stats = [
    { title: "Total Users", value: "1,250", color: "bg-blue-500" },
    { title: "Field Owners", value: "320", color: "bg-green-500" },
    { title: "Investors", value: "450", color: "bg-yellow-500" },
    { title: "Developers", value: "180", color: "bg-purple-500" },
  ];

  return (
    <DashboardLayout>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl text-white shadow-md ${item.color}`}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Investments Over Time</h2>
        {mounted && (
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={350}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
