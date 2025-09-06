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

  return (
    <section className="max-w-5xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-10">
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={listVariants}
      >
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li><b>Languages:</b> JavaScript, TypeScript</li>
          <li><b>Front-End:</b> React.js, Next.js, Redux, HTML5, CSS3, SCSS, Tailwind CSS, Material-UI</li>
          <li><b>State Management:</b> Redux Toolkit, Redux Saga, Zustand, React Context API</li>
          <li><b>UI/UX:</b> Figma, Adobe XD, Canva</li>
          <li><b>Testing:</b> Jest, React Testing Library, Cypress, Vitest</li>
          <li><b>Version Control:</b> Git, GitHub, Bitbucket, Jira, VersionOne, ServiceNow</li>
          <li><b>Cloud & DevOps:</b> AWS (S3, CloudFront), Docker, Jenkins, Vercel</li>
          <li><b>Tools:</b> VS Code, Chrome DevTools, Postman, Webpack, Vite</li>
          <li><b>Databases (Basic):</b> MongoDB, MySQL, Firebase</li>
        </ul>
      </motion.div>
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={listVariants}
      >
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <div className="text-gray-700 text-sm mb-4">
          <b>Yeshwantrao Chavan College of Engineering</b><br />
          B.E. (Computer Technology), May 2020<br />
          Nagpur, IN
        </div>
        <div className="text-gray-700 text-sm">
          <b>Senior Secondary (12th Grade)</b><br />
          NIOS<br />
          Ranchi, IN
        </div>
        <div className="text-gray-700 text-sm mt-2">
          <b>Secondary (10th Grade)</b><br />
          CBSE<br />
          Ranchi, IN
        </div>
      </motion.div>
    </section>
  );
}