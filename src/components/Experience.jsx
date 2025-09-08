import React from "react";
import { motion } from "framer-motion";
import { experiences } from "./experienceData";

const jobVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Job = ({ title, company, duration, location, points, index }) => (
  <motion.div className="relative pl-12 pb-12" custom={index} variants={jobVariants}>
    {/* Timeline Marker */}
    <div className="absolute left-0 top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>

    <p className="text-sm font-medium text-gray-500 mb-1">{duration} | {location}</p>
    <h4 className="text-lg font-bold text-gray-900">{title}</h4>
    <p className="font-semibold text-blue-700 mb-3">{company}</p>
    <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
      {points.map((point, index) => (
        <li key={index} className="pl-2">{point}</li>
      ))}
    </ul>
  </motion.div>
);

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="max-w-5xl mx-auto px-6 py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h3 className="text-2xl font-bold mb-8 text-gray-800">Work Experience</h3>
      <div className="relative">
        {/* This div creates the main timeline line that all jobs will connect to */}
        <div className="absolute left-[7px] top-1 h-full w-0.5 bg-gray-200 -z-10"></div>
        {experiences.map((job, index) => (
          <Job
            key={index}
            title={job.title}
            company={job.company}
            duration={job.duration}
            location={job.location}
            points={job.points}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
}