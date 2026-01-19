import React, { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const tableData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
    joinDate: "2024-02-20",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Editor",
    status: "Inactive",
    joinDate: "2024-03-10",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice@example.com",
    role: "User",
    status: "Active",
    joinDate: "2024-01-25",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Admin",
    status: "Pending",
    joinDate: "2024-04-05",
  },
  {
    id: 6,
    name: "Diana Prince",
    email: "diana@example.com",
    role: "Editor",
    status: "Active",
    joinDate: "2024-02-14",
  },
  {
    id: 7,
    name: "Ethan Hunt",
    email: "ethan@example.com",
    role: "User",
    status: "Inactive",
    joinDate: "2024-03-22",
  },
  {
    id: 8,
    name: "Fiona Apple",
    email: "fiona@example.com",
    role: "User",
    status: "Active",
    joinDate: "2024-01-30",
  },
];

type SortField = "name" | "email" | "role" | "status" | "joinDate";
type SortDirection = "asc" | "desc";

export function TableSection() {
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sorting logic
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedData = [...tableData].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    const modifier = sortDirection === "asc" ? 1 : -1;
    return aValue > bValue ? modifier : -modifier;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) {
      return <ChevronUp className="w-4 h-4 opacity-30" />;
    }
    return sortDirection === "asc" ? (
      <ChevronUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
    ) : (
      <ChevronDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400";
      case "Inactive":
        return "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400";
      case "Pending":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400";
      default:
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400";
    }
  };

  return (
    <section id="tables" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Data Tables
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Responsive tables with sorting, pagination, and status badges
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              User Management
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("name")}
                      className="flex items-center space-x-1 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <span>Name</span>
                      <SortIcon field="name" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("email")}
                      className="flex items-center space-x-1 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <span>Email</span>
                      <SortIcon field="email" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("role")}
                      className="flex items-center space-x-1 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <span>Role</span>
                      <SortIcon field="role" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("status")}
                      className="flex items-center space-x-1 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <span>Status</span>
                      <SortIcon field="status" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("joinDate")}
                      className="flex items-center space-x-1 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <span>Join Date</span>
                      <SortIcon field="joinDate" />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {paginatedData.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150 ${
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-800"
                        : "bg-gray-50/50 dark:bg-gray-800/50"
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {row.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {row.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {row.role}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(row.status)}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {row.joinDate}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
              <span className="font-medium">
                {Math.min(startIndex + itemsPerPage, sortedData.length)}
              </span>{" "}
              of <span className="font-medium">{sortedData.length}</span>{" "}
              results
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      currentPage === page
                        ? "bg-indigo-600 text-white"
                        : "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
