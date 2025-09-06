import React from "react";
import { AnimatePresence } from "framer-motion";

// NOTE: The following components would be in separate files, e.g., src/Navbar.jsx
import Navbar from "./Navbar";
import Hero from "./Hero";
import SkillsEducation from "./SkillsEducation";
import Experience from "./Experience";
import Contributions from "./Contributions";
import Blog from "./Blog";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer"; 
import BackToTop from "./BackToTop";

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <AnimatePresence>
        <Navbar />
        <Hero />
        <SkillsEducation />
        <Experience />
        <Contributions />
        <Blog />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
        <BackToTop />
      </AnimatePresence>
    </div>
  );
}