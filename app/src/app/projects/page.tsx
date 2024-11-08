"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  link?: string | null;
  duration?: string | null;
  technologies: string[];
  description: string[];
  image?: string | null;
};

const projects: Project[] = [
  {
    title: "Karaz Care Health, Karaz Platform",
    link: null,
    duration: "Jul '24 - Present",
    technologies: ["Next.js", "TypeScript", "CSS", "Figma", "API Integration"],
    description: [
      "Developed new screens and interactive components for the Karaz Care Health app, enhancing user experience.",
      "Integrated APIs and RPCs for efficient data exchange and system functionality.",
      "Designed and maintained server components for patient data, focusing on reliability and security.",
    ],
    image: "/karaz-logo.png",
  },
  {
    title: "Nucleus, Strategic Systems International",
    link: "https://cloud.flywheeldigital.com/beta",
    duration: "Jan '24 - Jun '24",
    technologies: ["ReactJS", "Node.js", "TypeScript", "Tailwind", "Figma"],
    description: [
      "Developed a new SaaS-based application with a focus on scalability and user experience.",
      "Utilized ReactJS, Node.js, and Tailwind to build high-quality and interactive web features.",
    ],
    image: "/FW-logo.png",
  },
  {
    title: "Flywheel Commerce Cloud, Strategic Systems International",
    link: "https://cloud.flywheeldigital.com",
    duration: "Feb '23 - Jun '24",
    technologies: [
      "Next.js",
      "ReactJS",
      "Node.js",
      "TypeScript",
      "Material UI",
      "Tailwind",
      "Figma",
    ],
    description: [
      "Played a key role in developing new features and pages using Next.js, ReactJS, and Node.js.",
      "Worked on the redesign of various Ascential applications, leveraging TypeScript and Tailwind for modern UI/UX.",
    ],
    image: "/FW-logo.png",
  },
  {
    title: "Ascential Digital Commerce, Strategic Systems International",
    link: "https://digitalcommerce.ascential.com/#/auth/login",
    duration: "Oct '22 - Jan '23",
    technologies: ["AngularJS", "Next.js", "TypeScript", "Material UI"],
    description: [
      "Integrated two web applications using AngularJS and TypeScript for a cohesive user experience.",
      "Contributed to the redesign of the application interface, significantly improving performance and usability.",
    ],
    image: "/ADC-logo.png",
  },
  {
    title: "Chatting App, TapNClicks",
    link: null,
    duration: "Jun '21 - Sep '21",
    technologies: ["Kotlin", "Java", "Android Studio"],
    description: [
      "Developed a psychological chatting app, 'Chat with the God,' for Android using Kotlin.",
      "Published the app on the Play Store, providing users with a unique chatting experience.",
    ],
    image: null,
  },
  {
    title: "TapNHire",
    link: null,
    duration: "Sep '21 - May '22",
    technologies: ["React Native", "ReactJS", "Node.js"],
    description: [
      "Developed a hybrid React Native application connecting servicemen with customers seeking daily life services.",
      "Created an admin panel as a web application using ReactJS and Node.js.",
    ],
    image: null,
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h1>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden min-h-28 flex flex-col justify-center"
            >
              <div
                className="p-4 cursor-pointer hover:bg-gray-50 transition duration-150 ease-in-out"
                onClick={() =>
                  setOpenProject(openProject === index ? null : index)
                }
              >
                <div className="flex items-center space-x-4">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={80}
                      height={80}
                      className="max-h-20 max-w-20 rounded"
                    />
                  )}
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <span className="text-gray-500">
                      {project.duration || "Ongoing"}
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
              {openProject === index && (
                <div className="p-4 border-t border-gray-200">
                  <div className="space-y-2 mb-4">
                    {project.description.map((desc, i) => (
                      <p key={i} className="text-gray-600">
                        {desc}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <Link
                      href={project.link}
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                    >
                      View Project
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
