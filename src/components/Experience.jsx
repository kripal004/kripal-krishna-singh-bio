import React from "react";

const Job = ({ title, company, duration, location, points }) => (
  <div className="mb-6">
    <b>{company}</b> | {title}
    <br />
    <span className="text-gray-500 text-sm">{duration} | {location}</span>
    <ul className="list-disc list-inside text-gray-700 text-sm mt-1 space-y-1">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

export default function Experience() {
  const experiences = [
    {
      title: "Senior Associate Consultant – Front-End Developer",
      company: "Infosys Ltd.",
      duration: "May 2024 – Present",
      location: "Bangalore, IN",
      points: [
        "Architected and deployed a scalable frontend system for a high-profile aerospace client, leveraging React.js, Next.js, and TypeScript to handle complex data visualizations and workflows.",
        "Boosted application load performance by 40% by implementing Server-Side Rendering (SSR), code-splitting with dynamic imports, and integrating next-gen image formats, significantly enhancing user experience.",
        "Drove a 60% reduction in code duplication across the organization by designing, developing, and leading the adoption of a reusable UI component library shared across more than five different modules.",
        "Elevated team productivity by mentoring three junior developers and instituting a robust code review process that enforced best practices and maintained high code quality standards.",
        "Streamlined development cycles and ensured on-time feature delivery by integrating seamlessly with Agile/Scrum methodologies, managing workflows in Jira and ServiceNow, and consistently delivering a high volume of production-ready features.",
      ],
    },
    {
      title: "React.js Developer",
      company: "Aventior Digital Pvt. Ltd.",
      duration: "Dec 2020 – Apr 2024",
      location: "Pune, IN",
      points: [
        "Spearheaded the development and maintenance of key SPA features using React.js, integrating with complex REST APIs to deliver a responsive and data-rich user experience within an Agile framework.",
        "Managed end-to-end delivery of four major version releases, independently handling full feature modules from concept to deployment, ensuring a high level of quality and stability.",
        "Improved code maintainability and scalability by refactoring legacy components, introducing modern React patterns like custom hooks and the Context API.",
        "Optimized application performance through strategic implementation of techniques like lazy loading, memoization, and route-based rendering.",
      ],
    },
    {
      title: "Web Designer Intern",
      company: "Take IT Ideas Innovative Solutions",
      duration: "Jan 2020 – July 2020",
      location: "Nagpur, IN",
      points: [
        "Assisted in frontend development and UI design, gaining hands-on experience with core technologies including HTML, CSS, and JavaScript.",
        "Enhanced UI consistency across internal dashboards by customizing existing layouts and adhering to design guidelines.",
        "Developed a foundational understanding of the complete frontend development lifecycle and applied principles of responsive design.",
      ],
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-8">
      <h3 className="text-xl font-semibold mb-4">Experience</h3>
      {experiences.map((job, index) => (
        <Job
          key={index}
          title={job.title}
          company={job.company}
          duration={job.duration}
          location={job.location}
          points={job.points}
        />
      ))}
    </section>
  );
}