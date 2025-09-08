import React from "react";
import { motion } from "framer-motion";

export default function KeyAchievements() {
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="achievements" className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={listVariants}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Key Achievements</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 md:w-3/4 mx-auto">
            <li>Spearheaded refactoring initiative to modularize codebase and reduce bundle size by 25%.</li>
            <li>Promoted consistent UI through design system contributions across 3 teams.</li>
            <li>Championed use of React Testing Library and Jest for improved test coverage in major releases.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}