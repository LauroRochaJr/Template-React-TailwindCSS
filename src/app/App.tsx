import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TemplateShowcase } from "./components/TemplateShowcase";
import { ComponentsLibrary } from "./components/ComponentsLibrary";
import { TableSection } from "./components/TableSection";
import { FormSection } from "./components/FormSection";
import { TypographySection } from "./components/TypographySection";
import { ColorPalette } from "./components/ColorPalette";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />

        <main>
          <Hero />

          <TemplateShowcase />

          <ComponentsLibrary />

          <TableSection />

          <FormSection />

          <TypographySection />

          <ColorPalette />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
