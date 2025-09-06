import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold mb-6">Contact</h2>
            <div className="text-gray-700">
                <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
                <div className="mt-4">
                    <p className="mb-1">Email: <a href="mailto:kripal.hec@gmail.com" className="text-blue-600 hover:underline">kripal.hec@gmail.com</a></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/kripal-singh-a9989512a" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">kripal-singh-a9989512a</a></p>
                </div>
            </div>
        </section>
    );
}