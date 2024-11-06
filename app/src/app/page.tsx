import Image from "next/image";
import Link from "next/link";

// Constants for home page data
const personalInfo = {
  name: "Muhammad Hassan",
  introduction:
    "A passionate web developer creating beautiful and functional websites.",
  profileImage: "/Hassan.jpg",
};

const links = {
  projects: "/projects",
  about: "/about",
};

const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "MongoDB",
  "AWS",
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-gray-100 rounded-lg p-4 text-center"
              >
                <p className="text-lg font-semibold text-gray-700">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
