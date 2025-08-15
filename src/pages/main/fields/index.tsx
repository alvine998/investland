"use client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Trash2, EyeIcon, PencilIcon, Plus } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

type Field = {
  id: number;
  name: string;
  location: string;
  size: string;
  owner: string;
  images: string[];
};

export default function FieldsPage() {
  const [fields, setFields] = useState<Field[]>([
    {
      id: 1,
      name: "Sunset Soccer Field",
      location: "Jakarta",
      size: "20x40m",
      owner: "John Doe",
      images: [],
    },
    {
      id: 2,
      name: "Green Valley Field",
      location: "Bandung",
      size: "25x50m",
      owner: "Jane Smith",
      images: [],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedField, setSelectedField] = useState<Field | null>(null);

  const [form, setForm] = useState({
    name: "",
    location: "",
    size: "",
    owner: "",
    images: [] as string[],
  });

  const openCreateModal = () => {
    setForm({ name: "", location: "", size: "", owner: "", images: [] });
    setSelectedField(null);
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const openEditModal = (field: Field) => {
    setForm({
      name: field.name,
      location: field.location,
      size: field.size,
      owner: field.owner,
      images: field.images,
    });
    setSelectedField(field);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    if (isEditMode && selectedField) {
      setFields(
        fields.map((f) => (f.id === selectedField.id ? { ...f, ...form } : f))
      );
    } else {
      setFields([...fields, { id: Date.now(), ...form }]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this field?")) {
      setFields(fields.filter((f) => f.id !== id));
    }
  };

  const columns = [
    { name: "Field Name", selector: (row: Field) => row.name, sortable: true },
    {
      name: "Location",
      selector: (row: Field) => row.location,
      sortable: true,
    },
    { name: "Size", selector: (row: Field) => row.size },
    { name: "Owner", selector: (row: Field) => row.owner },
    {
      name: "Actions",
      cell: (row: Field) => (
        <div className="flex gap-2">
          <button
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
            onClick={() => openEditModal(row)}
          >
            <PencilIcon size={16} />
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            onClick={() => handleDelete(row.id)}
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Field List</h1>
      <div className="mt-2 flex justify-between items-center mb-4">
        <input
          type="search"
          placeholder="Search field"
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={openCreateModal}
          className="bg-blue-500 text-white flex items-center gap-2 px-3 py-1 rounded hover:bg-blue-600"
        >
          <Plus size={16} /> Create
        </button>
      </div>

      <DataTable
        columns={columns}
        data={fields}
        pagination
        highlightOnHover
        striped
      />

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 animate-fadeIn">
            <h3 className="text-lg font-bold mb-4">
              {isEditMode ? "Edit Field" : "Create Field"}
            </h3>

            <input
              type="text"
              placeholder="Field Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border border-gray-300 w-full px-3 py-2 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="border border-gray-300 w-full px-3 py-2 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Size"
              value={form.size}
              onChange={(e) => setForm({ ...form, size: e.target.value })}
              className="border border-gray-300 w-full px-3 py-2 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Owner"
              value={form.owner}
              onChange={(e) => setForm({ ...form, owner: e.target.value })}
              className="border border-gray-300 w-full px-3 py-2 mb-3 rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                {isEditMode ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
