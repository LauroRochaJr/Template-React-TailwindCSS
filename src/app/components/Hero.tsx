import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToTemplates = () => {
    const section = document.getElementById("templates");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafafa] dark:bg-[#0b1220] transition-colors">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.04)_1px,transparent_1px)] bg-[size:80px_80px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl xl:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Website Template <br />
            React & Tailwind CSS
          </h1>

          <p className="mt-6 max-w-xl text-gray-600 dark:text-gray-300 text-lg">
            Access a curated collection of modern, responsive templates and
            components. Designed for developers, built for speed, optimized for
            success.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <button
              onClick={scrollToTemplates}
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Get started
            </button>
          </div>
        </div>

        <div className="relative h-[520px] hidden lg:block">
          <ImageCard className="top-0 right-8" src="img/foto1.png" />
          <ImageCard className="top-32 right-60" src="img/foto2.png" />
          <ImageCard className="bottom-0 right-20" src="img/foto3.png" />
        </div>
      </div>
    </section>
  );
}

function ImageCard({ src, className }: { src: string; className: string }) {
  return (
    <div
      className={`absolute w-56 h-72 rounded-2xl overflow-hidden shadow-2xl ${className}`}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
