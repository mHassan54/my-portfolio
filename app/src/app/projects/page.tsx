import Image from "next/image";
import Link from "next/link";

// Constants for project data
const projectData = [
  {
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce platform with product listings, cart, and checkout.",
    image: "/Hassan.jpg",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "A productivity app for managing tasks and projects with team collaboration features.",
    image: "/Hassan.jpg",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current conditions and forecasts for multiple locations.",
    image: "/Hassan.jpg",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
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
                <Link
                  href={project.link}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
