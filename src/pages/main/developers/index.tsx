// pages/developers.tsx
import DashboardLayout from "@/components/DashboardLayout";
import { EyeIcon, PencilIcon, Trash2Icon } from "lucide-react";
import React from "react";
import DataTable from "react-data-table-component";

interface Developer {
  id: number;
  name: string;
  email: string;
  projects: number;
  totalInvestment: number;
}

const data: Developer[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    projects: 3,
    totalInvestment: 120000,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    projects: 5,
    totalInvestment: 350000,
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    projects: 2,
    totalInvestment: 50000,
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    projects: 4,
    totalInvestment: 210000,
  },
  {
    id: 5,
    name: "David Lee",
    email: "david@example.com",
    projects: 6,
    totalInvestment: 450000,
  },
  // ... add more developers
];

const columns = [
  {
    name: "Name",
    selector: (row: Developer) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: Developer) => row.email,
  },
  {
    name: "Projects",
    selector: (row: Developer) => row.projects,
    sortable: true,
  },
  {
    name: "Total Investment ($)",
    selector: (row: Developer) => row.totalInvestment.toLocaleString(),
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: Developer) => (
      <div className="flex gap-2">
        <button
          className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={() => alert(`Viewing ${row.name}`)}
        >
          <EyeIcon size={16} />
        </button>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={() => alert(`Viewing ${row.name}`)}
        >
          <PencilIcon size={16} />
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={() => alert(`Viewing ${row.name}`)}
        >
          <Trash2Icon size={16} />
        </button>
      </div>
    ),
  },
];

export default function DevelopersPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Developers List</h1>
      <div className="mt-2 flex justify-between items-center mb-4">
        <input
          type="search"
          placeholder="Search developer"
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Create
        </button>
      </div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
        responsive
      />
    </DashboardLayout>
  );
}
