'use client';

import { ExternalLink } from 'lucide-react';
import HoverGlow from './HoverGlow';
import ScrollFloat from './ScrollFloat';
import TiltedCard from './TiltedCard';

export default function Projects() {
  const projects = [
    {
      title: 'ML-Based Vegetable Price Forecasting',
      summary:
        'Developed a data-driven forecasting platform that predicts vegetable prices using machine learning and delivers results through a full-stack workflow.',
      highlights: [
        'Trained a Random Forest model using seasonal, climatic, and market-related features.',
        'Built a Flask REST API to serve predictions to a frontend dashboard.',
        'Connected model outputs to a React interface for easier analysis and decision-making.',
      ],
      image: '/project-forecasting.svg',
      tech: ['Python', 'Random Forest', 'Flask API', 'React', 'Data Analysis'],
      github: 'https://github.com/Nitish041',
      demo: '#',
    },
    {
      title: 'Medicine Expiry & Refill Tracker',
      summary:
        'Designed a database-focused healthcare utility to automate expiry tracking and improve refill management through structured backend logic.',
      highlights: [
        'Modeled a MySQL database for medicine inventory, refill cycles, and expiry tracking.',
        'Used SQL triggers to automate alert logic and reduce manual monitoring effort.',
        'Focused on data integrity and maintainable relational design for operational reliability.',
      ],
      image: '/project-medicine.svg',
      tech: ['MySQL', 'SQL Triggers', 'Database Design', 'Automation', 'Data Integrity'],
      github: 'https://github.com/Nitish041',
      demo: 'https://nitish041.github.io/medicine-expiry-refill-tracker/',
    },
    {
      title: 'Event Management System',
      summary:
        'Built a Laravel-based event platform for booking workflows and ticket management with a structured backend and user-friendly interface.',
      highlights: [
        'Implemented booking and ticket management workflows for event operations.',
        'Developed backend functionality using Laravel and relational data handling.',
        'Created a responsive web interface to support usability across devices.',
      ],
      image: '/project-events.svg',
      tech: ['Laravel', 'PHP', 'MySQL', 'Responsive UI', 'CRUD Workflow'],
      github: 'https://github.com/Nitish041',
      demo: '#',
    },
    {
      title: 'CI/CD Pipeline for Web Application',
      summary:
        'Built a deployment-focused project to learn how modern applications are containerized, tested, and delivered through automated workflows.',
      highlights: [
        'Dockerized a web application to standardize runtime behavior across environments.',
        'Configured CI/CD automation using GitHub Actions for build and deployment flow.',
        'Explored cloud deployment concepts with basic monitoring and logging practices.',
      ],
      image: '/project-cicd.svg',
      tech: ['Docker', 'GitHub Actions', 'CI/CD', 'Cloud Basics', 'Monitoring'],
      github: 'https://github.com/Nitish041',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#111111] to-[#6a6a6a] bg-clip-text text-transparent">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.01}
            >
              Featured Projects
            </ScrollFloat>
          </h2>
          <p className="text-xl text-black/55 max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <HoverGlow
              key={index}
              glowColor="#5f5f5f"
              intensity={0.18}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/70 to-[#e7e2d9]/75 backdrop-blur-sm border border-black/10 hover:border-black/20 transition-all duration-500 hover:scale-105"
            >
              {/* Project Image */}
              <div className="aspect-video px-5 pt-5">
                <TiltedCard
                  imageSrc={project.image}
                  altText={project.title}
                  captionText={project.title}
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={14}
                  scaleOnHover={1.03}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-[#111111] group-hover:text-black/70 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-black/52 text-sm leading-7">
                  {project.summary}
                </p>

                <ul className="space-y-2 text-sm leading-7 text-black/58">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#111111]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-black/[0.04] text-black/60 rounded-full border border-black/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-[#111111] transition-all duration-300 hover:bg-white"
                    aria-label={`${project.title} GitHub`}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-[#f7f5f1] transition-all duration-300 hover:bg-black"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </HoverGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
