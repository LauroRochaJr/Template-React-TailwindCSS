import React, { useState } from "react";
import { Eye, Download, Star, Crown } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Modern Dashboard",
    category: "Dashboard",
    isPremium: true,
    rating: 4.9,
    downloads: "12.5k",
    image:
      "https://images.unsplash.com/photo-1758411898007-6a17c74ef528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY4NjA5MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Business Website",
    category: "Website",
    isPremium: false,
    rating: 4.7,
    downloads: "8.2k",
    image:
      "https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwdGVtcGxhdGV8ZW58MXx8fHwxNzY4NTc1Mjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Mobile App UI",
    category: "Mobile",
    isPremium: true,
    rating: 4.8,
    downloads: "15.3k",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4NTcxNzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "E-commerce Store",
    category: "E-commerce",
    isPremium: true,
    rating: 4.9,
    downloads: "21.7k",
    image:
      "https://images.unsplash.com/photo-1719464521902-4dc9595b182d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4NTYwMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "Portfolio Template",
    category: "Portfolio",
    isPremium: false,
    rating: 4.6,
    downloads: "9.4k",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDF8fHx8MTc2ODU5Nzc0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    name: "Landing Page Pro",
    category: "Landing",
    isPremium: false,
    rating: 4.8,
    downloads: "18.1k",
    image:
      "https://images.unsplash.com/photo-1560202582-a391c31ec300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kaW5nJTIwcGFnZSUyMGRlc2lnbnxlbnwxfHx8fDE3Njg1NzM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function TemplateShowcase() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "Dashboard",
    "Website",
    "Mobile",
    "E-commerce",
    "Portfolio",
    "Landing",
  ];

  const filteredTemplates =
    filter === "All"
      ? templates
      : templates.filter((t) => t.category === filter);

  return (
    <section id="templates" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Premium Template Collection
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose from our carefully crafted templates designed for modern web
            applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === category
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {template.isPremium && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full flex items-center space-x-1 text-sm font-semibold">
                  <Crown className="w-4 h-4" />
                  <span>Premium</span>
                </div>
              )}

              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  <button className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-200">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {template.name}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                    {template.category}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{template.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>{template.downloads}</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>Preview</span>
                  </button>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
