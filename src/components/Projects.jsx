import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const featuredWorks = [
    {
        title: "Modular Frontend System for Aerospace Client",
        year: "2024",
        role: "Lead Front-End Developer",
        description: "Architected and implemented a modular frontend system using React.js, Next.js, Redux, and TypeScript for a major aerospace client. Improved app performance by 40% through SSR, dynamic imports, and advanced image optimization. Led the development of shared UI libraries, reducing code duplication by 60%."
    },
    {
        title: "Shared UI Component Library",
        year: "2024",
        role: "UI Library Architect",
        description: "Designed and developed a reusable UI component library adopted across 5+ modules in a large-scale enterprise application. Promoted consistent UI/UX and accelerated feature delivery by standardizing design patterns and best practices."
    },
    // ... Add other featured works here
];

export default function Projects() {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const featuredWorkVariants = {
        hidden: { opacity: 0, x: -50 },
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
        <section id="work" className="bg-gray-50 py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Newest Project</h2>
                <motion.div className="bg-white shadow-lg rounded-xl overflow-hidden md:flex mb-16" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                    <div className="md:w-1/2 p-6">
                        <h3 className="text-2xl font-bold mb-2">E-commerce UI for a SaaS Dashboard</h3>
                        <p className="text-sm text-gray-500 mb-4">React.js, Redux, Tailwind CSS | Dec 2025</p>
                        <p className="text-gray-700 mb-6">
                            Developed a complete e-commerce user interface for a SaaS analytics dashboard. This project focused on building responsive, data-driven components for product management and sales tracking. I utilized React hooks for state management and Tailwind CSS for rapid styling, and implemented REST APIs for seamless data fetching.
                        </p>
                        <div className="flex space-x-4">
                            <Button component="a" variant="contained" href="[link-to-live-demo]" target="_blank" rel="noopener noreferrer">
                                Live Demo
                            </Button>
                            <Button component="a" variant="outlined" href="[link-to-github]" target="_blank" rel="noopener noreferrer">
                                View on GitHub
                            </Button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex items-center justify-center p-4">
                        {/* <img src="/path-to-project-image.jpg" alt="Screenshot of the e-commerce dashboard" className="rounded-lg w-full h-auto" /> */}
                    </div>
                </motion.div>

                <h2 className="text-2xl font-semibold mb-6">Featured works</h2>
                <motion.div className="space-y-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                    {featuredWorks.map((work, index) => (
                        <motion.div key={work.title} className="grid md:grid-cols-3 gap-6 items-center" custom={index} variants={featuredWorkVariants}>
                            {/* <img src="/work1.png" alt={work.title} className="rounded-xl shadow" /> */}
                            <div className="md:col-span-2">
                                <h3 className="text-lg font-semibold">{work.title}</h3>
                                <p className="text-sm text-gray-500 mb-2">{work.year} • {work.role}</p>
                                <p className="text-gray-600 text-sm">{work.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}