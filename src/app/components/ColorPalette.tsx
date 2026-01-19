import React from "react";
import { Check, X, AlertCircle, Info } from "lucide-react";

export function ColorPalette() {
  const colorGroups = [
    {
      name: "Primary Colors",
      colors: [
        { name: "Blue 50", class: "bg-blue-50", hex: "#eff6ff" },
        { name: "Blue 100", class: "bg-blue-100", hex: "#dbeafe" },
        { name: "Blue 200", class: "bg-blue-200", hex: "#bfdbfe" },
        { name: "Blue 300", class: "bg-blue-300", hex: "#93c5fd" },
        { name: "Blue 400", class: "bg-blue-400", hex: "#60a5fa" },
        { name: "Blue 500", class: "bg-blue-500", hex: "#3b82f6" },
        { name: "Blue 600", class: "bg-blue-600", hex: "#2563eb" },
        { name: "Blue 700", class: "bg-blue-700", hex: "#1d4ed8" },
        { name: "Blue 800", class: "bg-blue-800", hex: "#1e40af" },
        { name: "Blue 900", class: "bg-blue-900", hex: "#1e3a8a" },
      ],
    },
    {
      name: "Secondary Colors",
      colors: [
        { name: "Purple 50", class: "bg-purple-50", hex: "#faf5ff" },
        { name: "Purple 100", class: "bg-purple-100", hex: "#f3e8ff" },
        { name: "Purple 200", class: "bg-purple-200", hex: "#e9d5ff" },
        { name: "Purple 300", class: "bg-purple-300", hex: "#d8b4fe" },
        { name: "Purple 400", class: "bg-purple-400", hex: "#c084fc" },
        { name: "Purple 500", class: "bg-purple-500", hex: "#a855f7" },
        { name: "Purple 600", class: "bg-purple-600", hex: "#9333ea" },
        { name: "Purple 700", class: "bg-purple-700", hex: "#7e22ce" },
        { name: "Purple 800", class: "bg-purple-800", hex: "#6b21a8" },
        { name: "Purple 900", class: "bg-purple-900", hex: "#581c87" },
      ],
    },
    {
      name: "Accent Colors",
      colors: [
        { name: "Pink 50", class: "bg-pink-50", hex: "#fdf2f8" },
        { name: "Pink 100", class: "bg-pink-100", hex: "#fce7f3" },
        { name: "Pink 200", class: "bg-pink-200", hex: "#fbcfe8" },
        { name: "Pink 300", class: "bg-pink-300", hex: "#f9a8d4" },
        { name: "Pink 400", class: "bg-pink-400", hex: "#f472b6" },
        { name: "Pink 500", class: "bg-pink-500", hex: "#ec4899" },
        { name: "Pink 600", class: "bg-pink-600", hex: "#db2777" },
        { name: "Pink 700", class: "bg-pink-700", hex: "#be185d" },
        { name: "Pink 800", class: "bg-pink-800", hex: "#9d174d" },
        { name: "Pink 900", class: "bg-pink-900", hex: "#831843" },
      ],
    },
    {
      name: "Neutral Colors",
      colors: [
        { name: "Gray 50", class: "bg-gray-50", hex: "#f9fafb" },
        { name: "Gray 100", class: "bg-gray-100", hex: "#f3f4f6" },
        { name: "Gray 200", class: "bg-gray-200", hex: "#e5e7eb" },
        { name: "Gray 300", class: "bg-gray-300", hex: "#d1d5db" },
        { name: "Gray 400", class: "bg-gray-400", hex: "#9ca3af" },
        { name: "Gray 500", class: "bg-gray-500", hex: "#6b7280" },
        { name: "Gray 600", class: "bg-gray-600", hex: "#4b5563" },
        { name: "Gray 700", class: "bg-gray-700", hex: "#374151" },
        { name: "Gray 800", class: "bg-gray-800", hex: "#1f2937" },
        { name: "Gray 900", class: "bg-gray-900", hex: "#111827" },
      ],
    },
  ];

  const semanticColors = [
    {
      name: "Success",
      icon: <Check className="w-5 h-5" />,
      colors: [
        { shade: "50", class: "bg-green-50", text: "text-green-900" },
        { shade: "100", class: "bg-green-100", text: "text-green-900" },
        { shade: "200", class: "bg-green-200", text: "text-green-900" },
        { shade: "500", class: "bg-green-500", text: "text-white" },
        { shade: "600", class: "bg-green-600", text: "text-white" },
        { shade: "900", class: "bg-green-900", text: "text-white" },
      ],
    },
    {
      name: "Warning",
      icon: <AlertCircle className="w-5 h-5" />,
      colors: [
        { shade: "50", class: "bg-yellow-50", text: "text-yellow-900" },
        { shade: "100", class: "bg-yellow-100", text: "text-yellow-900" },
        { shade: "200", class: "bg-yellow-200", text: "text-yellow-900" },
        { shade: "500", class: "bg-yellow-500", text: "text-white" },
        { shade: "600", class: "bg-yellow-600", text: "text-white" },
        { shade: "900", class: "bg-yellow-900", text: "text-white" },
      ],
    },
    {
      name: "Error",
      icon: <X className="w-5 h-5" />,
      colors: [
        { shade: "50", class: "bg-red-50", text: "text-red-900" },
        { shade: "100", class: "bg-red-100", text: "text-red-900" },
        { shade: "200", class: "bg-red-200", text: "text-red-900" },
        { shade: "500", class: "bg-red-500", text: "text-white" },
        { shade: "600", class: "bg-red-600", text: "text-white" },
        { shade: "900", class: "bg-red-900", text: "text-white" },
      ],
    },
    {
      name: "Info",
      icon: <Info className="w-5 h-5" />,
      colors: [
        { shade: "50", class: "bg-blue-50", text: "text-blue-900" },
        { shade: "100", class: "bg-blue-100", text: "text-blue-900" },
        { shade: "200", class: "bg-blue-200", text: "text-blue-900" },
        { shade: "500", class: "bg-blue-500", text: "text-white" },
        { shade: "600", class: "bg-blue-600", text: "text-white" },
        { shade: "900", class: "bg-blue-900", text: "text-white" },
      ],
    },
  ];

  return (
    <section id="color" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Color Palette
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A carefully crafted color system for consistent design
          </p>
        </div>

        <div className="space-y-12">
          {colorGroups.map((group) => (
            <div key={group.name}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {group.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
                {group.colors.map((color) => (
                  <div
                    key={color.name}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-200"
                  >
                    <div className={`${color.class} h-20`}></div>
                    <div className="p-3">
                      <p className="text-xs font-medium text-gray-900 dark:text-white mb-1">
                        {color.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                        {color.hex}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Semantic Colors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {semanticColors.map((semantic) => (
                <div
                  key={semantic.name}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <div
                      className={
                        semantic.colors[4].class +
                        " " +
                        semantic.colors[4].text +
                        " p-2 rounded-lg"
                      }
                    >
                      {semantic.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {semantic.name}
                    </h4>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {semantic.colors.map((color) => (
                      <div
                        key={color.shade}
                        className={`${color.class} ${color.text} h-12 rounded-lg flex items-center justify-center text-xs font-semibold`}
                      >
                        {color.shade}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Gradient Examples
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="h-32 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shadow-xl">
                <span className="text-white font-semibold">Blue to Cyan</span>
              </div>
              <div className="h-32 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-xl">
                <span className="text-white font-semibold">Purple to Pink</span>
              </div>
              <div className="h-32 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center shadow-xl">
                <span className="text-white font-semibold">Orange to Red</span>
              </div>
              <div className="h-32 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                <span className="text-white font-semibold">Multi-color</span>
              </div>
              <div className="h-32 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center shadow-xl">
                <span className="text-white font-semibold">Green to Blue</span>
              </div>
              <div className="h-32 rounded-2xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center shadow-xl">
                <span className="text-white font-semibold">Warm Gradient</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
