"use client";

import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import DashboardLayout from "@/components/DashboardLayout";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Report {
  id: number;
  investor: string;
  project: string;
  amount: number;
  date: string;
}

export default function InvestmentReportsPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const reports: Report[] = [
    {
      id: 1,
      investor: "John Doe",
      project: "Solar Plant",
      amount: 5000,
      date: "2025-08-01",
    },
    {
      id: 2,
      investor: "Jane Smith",
      project: "Organic Farm",
      amount: 7500,
      date: "2025-08-03",
    },
    {
      id: 3,
      investor: "Adam Lee",
      project: "Tech Startup",
      amount: 10000,
      date: "2025-08-07",
    },
  ];

  const filteredReports = reports.filter((r) => {
    const reportDate = new Date(r.date);
    const afterStart = startDate ? reportDate >= new Date(startDate) : true;
    const beforeEnd = endDate ? reportDate <= new Date(endDate) : true;
    return afterStart && beforeEnd;
  });

  const columns = [
    { name: "ID", selector: (row: Report) => row.id, sortable: true },
    {
      name: "Investor",
      selector: (row: Report) => row.investor,
      sortable: true,
    },
    { name: "Project", selector: (row: Report) => row.project, sortable: true },
    {
      name: "Amount",
      selector: (row: Report) => `Rp ${row.amount.toLocaleString()}`,
      sortable: true,
    },
    { name: "Date", selector: (row: Report) => row.date, sortable: true },
  ];

  // Export to CSV
  const exportCSV = () => {
    const csv = [
      ["ID", "Investor", "Project", "Amount", "Date"],
      ...filteredReports.map((r) => [
        r.id,
        r.investor,
        r.project,
        r.amount,
        r.date,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "investment-reports.csv");
  };

  // Export to Excel
  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredReports);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Reports");
    XLSX.writeFile(wb, "investment-reports.xlsx");
  };

  // Export to PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Investment Reports", 14, 10);
    autoTable(doc, {
      head: [["ID", "Investor", "Project", "Amount", "Date"]],
      body: filteredReports.map((r) => [
        r.id,
        r.investor,
        r.project,
        `Rp ${r.amount.toLocaleString()}`,
        r.date,
      ]),
    });
    doc.save("investment-reports.pdf");
  };

  return (
    <DashboardLayout>
      <h1 className="text-xl font-bold mb-4">Investment Reports</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-4 flex-wrap">
        <div>
          <label className="block text-sm font-medium">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border px-2 py-1 rounded"
          />
        </div>

        {/* Export Buttons */}
        <div className="flex gap-2 self-end">
          <button
            onClick={exportCSV}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm"
          >
            CSV
          </button>
          <button
            onClick={exportExcel}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
          >
            Excel
          </button>
          <button
            onClick={exportPDF}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
          >
            PDF
          </button>
        </div>
      </div>

      {/* Chart */}
      <div
        className="bg-white p-4 rounded shadow mb-4"
        style={{ height: "300px" }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredReports}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#4CAF50"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={filteredReports}
        pagination
        highlightOnHover
        striped
      />
    </DashboardLayout>
  );
}
