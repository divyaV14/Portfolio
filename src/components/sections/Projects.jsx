import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const projectList = [
    {
      title: "Real-Time Delivery Tracker",
      shortDescription:
        "Interactive map-based dashboard that displays live vehicle movements and delivery status in real-time.",
      fullDescription:
        "This system is a real-time vehicle tracking and delivery management platform developed using React.js, TypeScript, Node.js, and Google Maps API. It integrates live GPS data via WebSockets to display dynamic vehicle positions on an interactive map with smooth animations and status indicators. The frontend features a modular component structure with role-based access control (admin, manager, delivery agent), and includes route overlays, ETA calculations, delivery progress states, and event-driven UI updates. The backend uses Express.js to expose RESTful APIs for delivery lifecycle management and secure authentication via JWT. Delivery data is persisted in a structured database (SQL), with optimized queries for real-time performance. The system includes geofencing logic to trigger alerts when vehicles enter or exit predefined zones, and visual indicators for delays, idle time, or delivery completion. It supports live delivery creation, status updates, and activity logs. Admins can monitor overall delivery performance with real-time dashboards, and the system is built with scalability in mind to handle high-frequency location updates efficiently.",
      tech: ["React.js", "TypeScript", "Socket.IO", "Google Maps API", "Node.js", "Express", "SQL", "JWT"],
      link: "#",
    },
    
    {
      title: "Data Visualization & Reports",
      shortDescription:
        "A full-stack solution to generate analytical reports from user-entered data with charts and export functionality.",
      fullDescription:
        "Users input structured data which is stored in a SQL database. React and Chart.js generate dynamic charts for KPIs like usage trends, compliance metrics, and cost analysis. Admins can filter data and export PDF/CSV reports.",
      tech: ["React", "Chart.js", "Node.js", "SQL", "Express"],
      link: "https://github.com/Sustainability-pro/brsr_tool",
    },
    {
      title: "OpsVision – Operations Management Platform",
      shortDescription:
        "A full-stack operations dashboard to manage workflows, monitor KPIs, and automate reporting across teams in real-time.",
      fullDescription:
        "OpsVision is a scalable operations management system built using React.js and Material UI on the frontend, with a Node.js and Express backend, and a structured SQL (PostgreSQL/MySQL) database. It enables team leads and operations managers to oversee daily workflows, assign tasks, and track live progress through interactive tables, status indicators, and charts. The platform includes authentication, role-based authorization (JWT), and a robust audit trail for all data changes. Key features include dynamic filtering, server-side pagination, scheduled data backups, and automated report generation in PDF/CSV formats. A modular notification system alerts users about pending tasks or anomalies based on business rules. Complex SQL queries and stored procedures are used for high-performance analytics and reporting.The UI emphasizes usability with collapsible side navigation, theme toggles, and responsive design optimized for desktops and tablets.",
      tech: ["React.js", "Material UI", "Node.js", "Express", "SQL", "JWT", "Chart.js", "PDFKit"],
      link: "#",
    },
    
    {
      title: "Basic 2048 game",
      shortDescription:
        "Classic 2048 game built with vanilla JS and CSS, playable in-browser.",
      fullDescription:
        "A fun implementation of the popular 2048 puzzle game. It uses JavaScript logic for tile movement and merging, and CSS transitions for smooth animations. Includes a scoring system and restart functionality.",
      tech: ["JavaScript", "CSS", "HTML"],
      link: "https://github.com/divyaV14/2048game",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectList.map((project, index) => {
              const isExpanded = expandedIndex === index;
              const showReadMore = !!project.fullDescription;

              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-400/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]"
                >
                  <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-100 via-cyan-100 to-white pointer-events-none transition-all duration-500 blur-sm"></div>

                  <h3 className="text-2xl font-bold text-gray-700 mb-3 relative z-10">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-2 relative z-10">
                    {isExpanded && project.fullDescription
                      ? project.fullDescription
                      : project.shortDescription}
                  </p>

                  {showReadMore && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-blue-500 hover:underline text-sm mb-4 relative z-10"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    {project.tech.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-600 font-medium py-1 px-3 rounded-full text-sm transition-all hover:bg-blue-500/20 hover:shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && project.link !== "#" && (
                  <div className="flex justify-between items-center relative z-10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-semibold hover:underline transition-all"
                    >
                      View Project →
                    </a>
                  </div>
                )}

                </div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
