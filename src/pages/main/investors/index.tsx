// pages/investors.tsx
import DashboardLayout from "@/components/DashboardLayout";
import { EyeIcon, PencilIcon, Trash2Icon } from "lucide-react";
import React from "react";
import DataTable from "react-data-table-component";

interface Investor {
  id: number;
  name: string;
  email: string;
  investments: number; // number of projects invested in
  totalFunded: number; // total money funded
}

const data: Investor[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    investments: 4,
    totalFunded: 200000,
  },
  {
    id: 2,
    name: "Robert Miller",
    email: "robert@example.com",
    investments: 7,
    totalFunded: 550000,
  },
  {
    id: 3,
    name: "Emma Davis",
    email: "emma@example.com",
    investments: 3,
    totalFunded: 150000,
  },
  {
    id: 4,
    name: "William Anderson",
    email: "william@example.com",
    investments: 5,
    totalFunded: 320000,
  },
  {
    id: 5,
    name: "Sophia Taylor",
    email: "sophia@example.com",
    investments: 6,
    totalFunded: 400000,
  },
  // ... add more investors
];

const columns = [
  {
    name: "Name",
    selector: (row: Investor) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: Investor) => row.email,
  },
  {
    name: "Investments",
    selector: (row: Investor) => row.investments,
    sortable: true,
  },
  {
    name: "Total Funded ($)",
    selector: (row: Investor) => row.totalFunded.toLocaleString(),
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: Investor) => (
      <div className="flex gap-2">
        <button
          className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
          onClick={() => alert(`Viewing ${row.name}`)}
        >
          <EyeIcon size={16} />
        </button>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          onClick={() => alert(`Editing ${row.name}`)}
        >
          <PencilIcon size={16} />
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          onClick={() => alert(`Deleting ${row.name}`)}
        >
          <Trash2Icon size={16} />
        </button>
      </div>
    ),
  },
];

export default function InvestorsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Investors List</h1>
      <div className="mt-2 flex justify-between items-center mb-4">
        <input
          type="search"
          placeholder="Search investor"
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
