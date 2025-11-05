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
    "Languages": [
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" }
    ],
    "Front-End": [
      { name: "React.js", url: "https://react.dev/" },
      { name: "Next.js", url: "https://nextjs.org/docs" },
      { name: "Redux", url: "https://redux.js.org/" },
      { name: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
      { name: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "SCSS", url: "https://sass-lang.com/documentation" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
      { name: "Material-UI", url: "https://mui.com/material-ui/getting-started/" }
    ],
    "State Management": [
      { name: "Redux Toolkit", url: "https://redux-toolkit.js.org/introduction/getting-started" },
      { name: "Redux Saga", url: "https://redux-saga.js.org/" },
      { name: "Zustand", url: "https://github.com/pmndrs/zustand" },
      { name: "React Context API", url: "https://react.dev/learn/passing-data-deeply-with-context" }
    ],
    "UI/UX": [
      { name: "Figma", url: "https://www.figma.com/" },
      { name: "Adobe XD", url: "https://helpx.adobe.com/support/xd.html" },
      { name: "Canva", url: "https://www.canva.com/" }
    ],
    "Testing": [
      { name: "Jest", url: "https://jestjs.io/docs/getting-started" },
      { name: "React Testing Library", url: "https://testing-library.com/docs/react-testing-library/intro/" },
      { name: "Cypress", url: "https://docs.cypress.io/" },
      { name: "Vitest", url: "https://vitest.dev/guide/" }
    ],
    "Version Control": [
      { name: "Git", url: "https://git-scm.com/doc" },
      { name: "GitHub", url: "https://docs.github.com/" },
      { name: "Bitbucket", url: "https://support.atlassian.com/bitbucket-cloud/" },
      { name: "Jira", url: "https://www.atlassian.com/software/jira" },
      { name: "VersionOne", url: "https://www.digital.ai/agile-planning/" },
      { name: "ServiceNow", url: "https://www.servicenow.com/" }
    ],
    "Cloud & DevOps": [
      { name: "AWS (S3, CloudFront)", url: "https://aws.amazon.com/documentation/" },
      { name: "Docker", url: "https://docs.docker.com/" },
      { name: "Jenkins", url: "https://www.jenkins.io/doc/" },
      { name: "Vercel", url: "https://vercel.com/docs" }
    ],
    "Tools": [
      { name: "VS Code", url: "https://code.visualstudio.com/docs" },
      { name: "Chrome DevTools", url: "https://developer.chrome.com/docs/devtools/" },
      { name: "Postman", url: "https://learning.postman.com/docs/getting-started/introduction/" },
      { name: "Webpack", url: "https://webpack.js.org/concepts/" },
      { name: "Vite", url: "https://vitejs.dev/guide/" }
    ],
    "Databases (Basic)": [
      { name: "MongoDB", url: "https://www.mongodb.com/docs/" },
      { name: "MySQL", url: "https://dev.mysql.com/doc/" },
      { name: "Firebase", url: "https://firebase.google.com/docs" }
    ]
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
                  <a href={skill.url} key={skill.name} target="_blank" rel="noopener noreferrer" className="block">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 hover:shadow-sm transition-all duration-200">
                      {skill.name}
                    </span>
                  </a>
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
            <p className="text-gray-600 text-sm">B.E. (Computer Technology)</p>
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
      </motion.div>
      </div>
    </section>
  );
}