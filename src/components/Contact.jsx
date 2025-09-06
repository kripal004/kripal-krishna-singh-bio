import React, { useState } from "react";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "kripal.hec@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    };

    return (
        <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold mb-6">Contact</h2>
            <div className="text-gray-700">
                <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
                <div className="mt-4">
                    <div className="flex items-center mb-2">
                        <p className="mr-2">Email: <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a></p>
                        <button 
                            onClick={handleCopy} 
                            className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                            aria-label="Copy email to clipboard"
                        >
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                    <p>LinkedIn: <a href="https://linkedin.com/in/kripal-singh-a9989512a" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a></p>
                </div>
            </div>
        </section>
    );
}