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
            <li>Architected and deployed a scalable frontend system for a high-profile aerospace client, boosting application performance by 40% through SSR and code-splitting.</li>
            <li>Drove a 60% reduction in code duplication by designing and leading the adoption of a reusable UI component library across multiple teams.</li>
            <li>Managed the end-to-end delivery of four major version releases for an enterprise SPA, independently handling modules from concept to deployment.</li>
            <li>Elevated team productivity by mentoring junior developers and instituting a robust code review process to enforce best practices.</li>
            <li>Improved code maintainability and scalability by refactoring legacy components with modern React patterns like custom hooks and the Context API.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}