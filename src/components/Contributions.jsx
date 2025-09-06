import React from "react";

export default function Contributions() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-10">
      <div>
        <h3 className="text-xl font-semibold mb-2">Notable Contributions</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>Spearheaded refactoring initiative to modularize codebase and reduce bundle size by 25%.</li>
          <li>Promoted consistent UI through design system contributions across 3 teams.</li>
          <li>Championed use of React Testing Library and Jest for improved test coverage in major releases.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Courses</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>React – The Complete Guide (incl. Hooks, React Router, Redux)</li>
          <li>Vue.js Fast Crash Course</li>
          <li>The Complete 2024 Web Development Bootcamp</li>
        </ul>
      </div>
    </section>
  );
}