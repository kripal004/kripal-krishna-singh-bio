import React from "react";

// NOTE: The following components would be in separate files, e.g., src/Navbar.jsx
import Navbar from "./Navbar";
import Hero from "./Hero";
import SkillsEducation from "./SkillsEducation";
import Experience from "./Experience";
import Contributions from "./Contributions";
import Blog from "./Blog";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <SkillsEducation />
      <Experience />
      <Contributions />
      <Blog />
      <Projects />
      <Contact />
    </div>
  );
}