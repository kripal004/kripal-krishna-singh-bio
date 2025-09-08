import React from "react";
import { motion } from "framer-motion";

export default function SkillsEducation() {
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

  const skills = {
    "Languages": ["JavaScript", "TypeScript"],
    "Front-End": ["React.js", "Next.js", "Redux", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Material-UI"],
    "State Management": ["Redux Toolkit", "Redux Saga", "Zustand", "React Context API"],
    "UI/UX": ["Figma", "Adobe XD", "Canva"],
    "Testing": ["Jest", "React Testing Library", "Cypress", "Vitest"],
    "Version Control": ["Git", "GitHub", "Bitbucket", "Jira", "VersionOne", "ServiceNow"],
    "Cloud & DevOps": ["AWS (S3, CloudFront)", "Docker", "Jenkins", "Vercel"],
    "Tools": ["VS Code", "Chrome DevTools", "Postman", "Webpack", "Vite"],
    "Databases (Basic)": ["MongoDB", "MySQL", "Firebase"]
  };

  return (
    <section id="skills" className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={listVariants}
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Skills</h3>
        <div className="space-y-4">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-700 mb-2">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillList.map(skill => (
                  <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={listVariants}
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Education</h3>
        <div className="space-y-6">
          <div className="p-4 border-l-4 border-blue-500 bg-white rounded-r-lg shadow-sm">
            <p className="font-bold text-gray-900">Yeshwantrao Chavan College of Engineering</p>
            <p className="text-gray-600 text-sm">B.E. (Computer Technology), May 2020</p>
            <p className="text-gray-500 text-xs mt-1">Nagpur, IN</p>
          </div>
          <div className="p-4 border-l-4 border-blue-500 bg-white rounded-r-lg shadow-sm">
            <p className="font-bold text-gray-900">Senior Secondary (12th Grade)</p>
            <p className="text-gray-600 text-sm">NIOS</p>
            <p className="text-gray-500 text-xs mt-1">Ranchi, IN</p>
          </div>
          <div className="p-4 border-l-4 border-blue-500 bg-white rounded-r-lg shadow-sm">
            <p className="font-bold text-gray-900">Secondary (10th Grade)</p>
            <p className="text-gray-600 text-sm">CBSE</p>
            <p className="text-gray-500 text-xs mt-1">Ranchi, IN</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Courses & Certifications</h3>
          <div className="space-y-2">
            <p className="text-gray-700 text-sm">React – The Complete Guide (incl. Hooks, React Router, Redux)</p>
            <p className="text-gray-700 text-sm">Vue.js Fast Crash Course</p>
            <p className="text-gray-700 text-sm">The Complete 2024 Web Development Bootcamp</p>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
}