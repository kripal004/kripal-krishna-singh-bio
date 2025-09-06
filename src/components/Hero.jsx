import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I am Kripal Krishna Singh</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Senior Associate Consultant – Front-End Developer</h2>
        <div className="mb-4 text-gray-700">
          <div className="mb-1">
            <a href="mailto:kripal.hec@gmail.com" className="text-blue-600 hover:underline">
              kripal.hec@gmail.com
            </a>{" "}
            |{" "}
            <a href="tel:+918149345927" className="hover:underline">
              +91 8149345927
            </a>
          </div>
          <div className="mb-1">
            <a href="https://linkedin.com/in/kripal-singh-a9989512a" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LinkedIn
            </a>{" "}
            |{" "}
            <a href="https://github.com/kripal004" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              GitHub
            </a>
          </div>
        </div>
        <p className="text-gray-600 mb-6">
          Frontend developer with strong expertise in React.js, TypeScript, and modern state management (Redux). Proficient in building reusable UI components, responsive and accessible designs. Experienced with CI/CD, REST APIs, Agile/Scrum, and automated testing.
        </p>
        <Button component="a" href="/kripal-krishna-singh/assets/260725.pdf" target="_blank" download>
          Download Resume
        </Button>
      </motion.div>
      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src="/kripal-krishna-singh/assets/Bio.jpg" alt="Profile" className="w-48 h-48 rounded-full object-cover shadow-lg" />
      </motion.div>
    </section>
  );
}