import React, { useState } from "react";
import {
  Check,
  X,
  AlertCircle,
  Info,
  ChevronDown,
  Settings,
  User,
  LogOut,
  HelpCircle,
} from "lucide-react";

export function ComponentsLibrary() {
  const [activeTab, setActiveTab] = useState("buttons");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <section id="components" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            UI Components Library
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Reusable, accessible components ready to use in your projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            "buttons",
            "badges",
            "alerts",
            "modals",
            "dropdowns",
            "tooltips",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium capitalize transition-all duration-200 ${
                activeTab === tab
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          {activeTab === "buttons" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Button Variants
                </h3>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Primary
                  </button>
                  <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
                    Secondary
                  </button>
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                    Success
                  </button>
                  <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
                    Danger
                  </button>
                  <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    Default
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Button Sizes
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors duration-200">
                    Small
                  </button>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Medium
                  </button>
                  <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-colors duration-200">
                    Large
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Outline Buttons
                </h3>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200">
                    Outline Primary
                  </button>
                  <button className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200">
                    Outline Secondary
                  </button>
                  <button className="px-6 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-200">
                    Outline Success
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Gradient Buttons
                </h3>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                    Blue Gradient
                  </button>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                    Purple Gradient
                  </button>
                  <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                    Orange Gradient
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "badges" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Badge Variants
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                    Primary
                  </span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                    Success
                  </span>
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium">
                    Warning
                  </span>
                  <span className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-medium">
                    Danger
                  </span>
                  <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium">
                    Default
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Badge with Icons
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium flex items-center space-x-2">
                    <Check className="w-4 h-4" />
                    <span>Verified</span>
                  </span>
                  <span className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-medium flex items-center space-x-2">
                    <X className="w-4 h-4" />
                    <span>Rejected</span>
                  </span>
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium flex items-center space-x-2">
                    <Info className="w-4 h-4" />
                    <span>Info</span>
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Squared Badges
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-semibold">
                    NEW
                  </span>
                  <span className="px-3 py-1 bg-green-600 text-white rounded text-xs font-semibold">
                    ACTIVE
                  </span>
                  <span className="px-3 py-1 bg-yellow-600 text-white rounded text-xs font-semibold">
                    PENDING
                  </span>
                  <span className="px-3 py-1 bg-red-600 text-white rounded text-xs font-semibold">
                    CLOSED
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "alerts" && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded-lg flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                    Information
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-400">
                    This is an informational alert message with some important
                    details.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 rounded-lg flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                    Success
                  </h4>
                  <p className="text-sm text-green-800 dark:text-green-400">
                    Your action has been completed successfully!
                  </p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">
                    Warning
                  </h4>
                  <p className="text-sm text-yellow-800 dark:text-yellow-400">
                    Please review this warning before proceeding.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-lg flex items-start space-x-3">
                <X className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">
                    Error
                  </h4>
                  <p className="text-sm text-red-800 dark:text-red-400">
                    An error occurred. Please try again later.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "modals" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Modal Example
              </h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Open Modal
              </button>

              {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Modal Title
                      </h3>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                      >
                        <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      </button>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      This is a modal dialog. You can add any content here
                      including forms, images, or other components.
                    </p>
                    <div className="flex justify-end space-x-3">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "dropdowns" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Dropdown Menu
              </h3>
              <div className="relative inline-block">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-6 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>User Menu</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden z-10 animate-in slide-in-from-top-2 duration-200">
                    <div className="p-2">
                      <button className="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                      <button className="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </button>
                      <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
                      <button className="w-full px-4 py-3 text-left hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200 flex items-center space-x-3 text-red-600 dark:text-red-400">
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "tooltips" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tooltip Example
              </h3>
              <div className="flex flex-wrap gap-6">
                <div className="relative inline-block">
                  <button
                    onMouseEnter={() => setTooltipVisible(true)}
                    onMouseLeave={() => setTooltipVisible(false)}
                    className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <HelpCircle className="w-5 h-5" />
                  </button>
                  {tooltipVisible && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-200">
                      This is a tooltip
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
