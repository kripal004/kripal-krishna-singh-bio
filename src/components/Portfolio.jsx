import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// NOTE: The following components would be in separate files, e.g., src/Navbar.jsx
import Navbar from "./Navbar";
import Hero from "./Hero";
import SkillsEducation from "./SkillsEducation";
import Certifications from "./Certifications";
import Experience from "./Experience";
import Blog from "./Blog";
import KeyAchievements from "./KeyAchievements";
import Contact from "./Contact";
import Footer from "./Footer"; 
import BackToTop from "./BackToTop";

function HomePage() {
  return (
    <>
      <Hero />
      {/* <Projects /> */}
      <Experience />
      <KeyAchievements />
      {/* <Testimonials /> */}
      <SkillsEducation />
      <Certifications />
      <Blog />
      <Contact />
    </>
  );
}

export default function Portfolio() {
  return (
    <Router basename="/kripal-krishna-singh-bio">
      <div className="bg-white text-gray-900 font-sans">
        <Routes>
          <Route path="/" element={<><Navbar /><AnimatePresence><HomePage /></AnimatePresence><Footer /><BackToTop /></>} />
        </Routes>
      </div>
    </Router>
  );
}