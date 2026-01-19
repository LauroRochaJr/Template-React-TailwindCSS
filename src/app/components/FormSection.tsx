import React, { useState } from "react";
import { Mail, Lock, User, Check } from "lucide-react";

export function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    newsletter: false,
    gender: "",
    plan: "free",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section id="form" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Form Components
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive form elements with validation states
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Registration Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-400`}
                    placeholder="Enter your name"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-400`}
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border ${
                      errors.password
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-400`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.password}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Country
                </label>
                <select
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white"
                >
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Gender
                </label>
                <div className="space-y-2">
                  {["male", "female", "other"].map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={option}
                        checked={formData.gender === option}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300 capitalize">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={(e) =>
                      setFormData({ ...formData, newsletter: e.target.checked })
                    }
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                  />
                  <div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Subscribe to newsletter
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get the latest updates and offers
                    </p>
                  </div>
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Disabled State
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  disabled
                  placeholder="Disabled input"
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 dark:text-gray-500 cursor-not-allowed"
                />
                <button
                  disabled
                  className="w-full px-6 py-3 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 rounded-lg cursor-not-allowed"
                >
                  Disabled Button
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Success State
              </h3>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value="john@example.com"
                    readOnly
                    className="w-full px-4 py-3 pr-10 bg-white dark:bg-gray-800 border-2 border-green-500 rounded-lg text-gray-900 dark:text-white"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                </div>
                <p className="text-sm text-green-600 dark:text-green-400 flex items-center space-x-1">
                  <Check className="w-4 h-4" />
                  <span>Email verified successfully</span>
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Select Plan
              </h3>
              <div className="space-y-3">
                {[
                  { id: "free", name: "Free", price: "$0/mo" },
                  { id: "pro", name: "Pro", price: "$19/mo" },
                  { id: "enterprise", name: "Enterprise", price: "$49/mo" },
                ].map((plan) => (
                  <label
                    key={plan.id}
                    className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                      formData.plan === plan.id
                        ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="plan"
                        value={plan.id}
                        checked={formData.plan === plan.id}
                        onChange={(e) =>
                          setFormData({ ...formData, plan: e.target.value })
                        }
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {plan.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {plan.price}
                        </div>
                      </div>
                    </div>
                    {formData.plan === plan.id && (
                      <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    )}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
