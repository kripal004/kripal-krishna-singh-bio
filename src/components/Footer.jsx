import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>&copy; {currentYear} Kripal Krishna Singh. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://linkedin.com/in/kripal-singh-a9989512a" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            LinkedIn
          </a>
          <a href="https://github.com/kripal004" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            GitHub
          </a>
          <a href="mailto:kripal.hec@gmail.com" className="hover:text-blue-500">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}