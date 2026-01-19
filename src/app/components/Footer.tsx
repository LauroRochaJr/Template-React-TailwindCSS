import React from "react";
import { Zap, Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Product: [
      { name: "Templates", href: "#templates" },
      { name: "Components", href: "#components" },
      { name: "Pricing", href: "#pricing" },
      { name: "Updates", href: "#updates" },
    ],
    Resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Guides", href: "#guides" },
      { name: "API Reference", href: "#api" },
      { name: "Support", href: "#support" },
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
    ],
    Legal: [
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" },
      { name: "License", href: "#license" },
      { name: "Security", href: "#security" },
    ],
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/ryanannda",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "#twitter",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "www.linkedin.com/in/ryanannda",
    },
    { name: "Email", icon: <Mail className="w-5 h-5" />, href: "#email" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-indigo-600 bg-clip-text text-transparent">
                Template
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
              Access a curated collection of modern, responsive templates and
              components. Designed for developers, built for speed, optimized
              for success.
            </p>

            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 text-gray-600 dark:text-gray-400"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-b border-gray-200 dark:border-gray-800 py-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get the latest templates and updates delivered to your inbox
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
            © 2026 Template. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Riyan Ananda</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
