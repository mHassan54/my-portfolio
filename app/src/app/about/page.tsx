import Image from "next/image";

// Constants for about page data
const aboutData = {
  name: "Hassan",
  image: {
    src: "/Hassan.jpg",
    alt: "Hassan",
    width: 400,
    height: 600,
  },
  intro:
    "Hello! I'm a passionate web developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies, I strive to build applications that are not only functional but also aesthetically pleasing.",
  journey:
    "My journey in web development started 5 years ago, and since then, I've had the opportunity to work on a variety of projects, from small business websites to large-scale web applications. I'm constantly learning and staying up-to-date with the latest trends and technologies in the ever-evolving world of web development.",
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      year: "Year",
    },
    {
      degree: "Full-Stack Web Development Bootcamp",
      institution: "Bootcamp Name",
      year: "Year",
    },
  ],
  workExperience: [
    {
      title: "Senior Web Developer",
      company: "Company Name",
      years: "Year - Present",
    },
    {
      title: "Front-end Developer",
      company: "Another Company",
      years: "Year - Year",
    },
  ],
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={aboutData.image.src}
                alt={aboutData.image.alt}
                width={aboutData.image.width}
                height={aboutData.image.height}
                className="h-full w-full object-cover md:w-64"
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                About Me
              </h1>
              <p className="text-gray-600 mb-4">{aboutData.intro}</p>
              <p className="text-gray-600 mb-4">{aboutData.journey}</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Education
              </h2>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {aboutData.education.map((item, index) => (
                  <li key={index}>
                    {item.degree}, {item.institution}, {item.year}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Work Experience
              </h2>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {aboutData.workExperience.map((item, index) => (
                  <li key={index}>
                    {item.title}, {item.company}, {item.years}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
