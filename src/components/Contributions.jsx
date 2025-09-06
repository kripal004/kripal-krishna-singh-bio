import React from "react";
import { motion } from "framer-motion";

export default function Contributions() {
  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-10">
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={listVariants}
      >
        <h3 className="text-xl font-semibold mb-2">Notable Contributions</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>Spearheaded refactoring initiative to modularize codebase and reduce bundle size by 25%.</li>
          <li>Promoted consistent UI through design system contributions across 3 teams.</li>
          <li>Championed use of React Testing Library and Jest for improved test coverage in major releases.</li>
        </ul>
      </motion.div>
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={listVariants}
      >
        <h3 className="text-xl font-semibold mb-2">Courses</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>React – The Complete Guide (incl. Hooks, React Router, Redux)</li>
          <li>Vue.js Fast Crash Course</li>
          <li>The Complete 2024 Web Development Bootcamp</li>
        </ul>
      </motion.div>
    </section>
  );
}