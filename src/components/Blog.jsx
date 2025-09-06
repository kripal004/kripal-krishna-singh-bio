import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
    {
        title: "Architecting a scalable React application with Redux Toolkit",
        date: "Oct 2, 2025",
        tags: "React, Redux",
        description: "A deep dive into how to structure a large-scale application using Redux Toolkit to ensure predictable state management and maintainability.",
        delay: 0.1,
    },
    {
        title: "5 best practices for accessible UI components",
        date: "Sep 15, 2025",
        tags: "Accessibility, UI/UX",
        description: "Learn how to build UI components that are usable for everyone, from proper semantic HTML to ARIA attributes and keyboard navigation.",
        delay: 0.2,
    },
    {
        title: "From Figma to Code: A guide to perfect UI implementation",
        date: "Aug 20, 2025",
        tags: "UI/UX, Development",
        description: "A practical guide to bridging the gap between design and development, ensuring your coded components are pixel-perfect and match the Figma prototype.",
        delay: 0.3,
    },
];

export default function Blog() {
    return (
        <section id="blog" className="bg-gray-50 py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">From the Blog</h2>
                    <a href="/blog" className="text-blue-500 hover:underline">View all posts</a>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map(post => (
                        <motion.div key={post.title} className="p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: post.delay }}>
                            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">{post.date} • {post.tags}</p>
                            <p className="text-gray-700 text-sm">{post.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}