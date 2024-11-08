import Image from "next/image";
import Link from "next/link";

// Constants for home page data
const personalInfo = {
  name: "Muhammad Hassan",
  introduction:
    "A passionate and experienced full-stack developer with a strong emphasis on front-end technologies creating beautiful and functional websites.",
  profileImage: "/Hassan.jpg",
};

const links = {
  projects: "/projects",
  about: "/about",
};

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "ReactJS",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "AngularJS",
      "HTML",
      "CSS",
      "Sass",
      "Tailwind",
      "Material UI",
      "Figma",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Nest.js", "SQL", "Python"],
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Android Development", "Kotlin", "Java"],
  },
  {
    title: "Full Stack Development",
    skills: [
      "RESTful API",
      "GraphQL",
      "Server-side Rendering",
      "Microservices",
    ],
  },
  {
    title: "Version Control",
    skills: ["Git", "Github", "GitLab"],
  },
  {
    title: "Project Management",
    skills: ["Jira", "ClickUp", "Agile Methodologies", "Scrum"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Team Collaboration",
      "Problem Solving",
      "Communication",
      "Client Relations",
      "Analytical Thinking",
      "Adaptability",
      "Critical Thinking",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Hi, I am{" "}
              <span className="text-blue-600">{personalInfo.name}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {personalInfo.introduction}
            </p>
            <div className="flex space-x-4">
              <Link
                href={links.projects}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
              >
                View Projects
              </Link>
              <Link
                href={links.about}
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition duration-300"
              >
                About Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
