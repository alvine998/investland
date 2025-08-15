// pages/admin/users.tsx
import DashboardLayout from "@/components/DashboardLayout";
import { EyeIcon, PencilIcon, Trash2Icon } from "lucide-react";
import React, { useState } from "react";
import DataTable from "react-data-table-component";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Developer",
      status: "Active",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      role: "Investor",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      role: "Field Owner",
      status: "Active",
    },
    {
      id: 5,
      name: "David Lee",
      email: "david@example.com",
      role: "Investor",
      status: "Active",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Admin",
    status: "Active" as "Active" | "Inactive",
  });

  const openCreateModal = () => {
    setForm({ name: "", email: "", role: "Admin", status: "Active" });
    setSelectedUser(null);
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const openEditModal = (user: User) => {
    setForm({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    });
    setSelectedUser(user);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const handleSubmit = () => {
    if (isEditMode && selectedUser) {
      setUsers(
        users.map((u) => (u.id === selectedUser.id ? { ...u, ...form } : u))
      );
    } else {
      const newUser: User = { id: Date.now(), ...form };
      setUsers([...users, newUser]);
    }
    setIsModalOpen(false);
  };

  const columns = [
    { name: "Name", selector: (row: User) => row.name, sortable: true },
    { name: "Email", selector: (row: User) => row.email },
    { name: "Role", selector: (row: User) => row.role, sortable: true },
    {
      name: "Status",
      cell: (row: User) => (
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${
            row.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {row.status}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row: User) => (
        <div className="flex gap-2">
          <button
            className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
            onClick={() => alert(`Viewing ${row.name}`)}
          >
            <EyeIcon size={16} />
          </button>
          <button
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            onClick={() => openEditModal(row)}
          >
            <PencilIcon size={16} />
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            onClick={() => handleDelete(row.id)}
          >
            <Trash2Icon size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <div className="mt-2 flex justify-between items-center mb-4">
        <input
          type="search"
          placeholder="Search user"
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={openCreateModal}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Create
        </button>
      </div>
      <DataTable
        columns={columns}
        data={users}
        pagination
        highlightOnHover
        striped
        responsive
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700/50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative">
            {/* Modal Title */}
            <h3 className="text-xl font-semibold mb-6 border-b pb-3">
              {isEditMode ? "Edit User" : "Create User"}
            </h3>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border border-gray-300 w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border border-gray-300 w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="border border-gray-300 w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Admin</option>
                  <option>Developer</option>
                  <option>Investor</option>
                  <option>Field Owner</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={form.status}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      status: e.target.value as "Active" | "Inactive",
                    })
                  }
                  className="border border-gray-300 w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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
