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
    "Experienced full-stack developer with a strong emphasis on front-end technologies, particularly React/Next.js and Node.js. Proven expertise in creating intuitive user interfaces and managing server-side logic. Adept at utilizing modern frameworks and leveraging AI/ML technologies to build scalable, high-quality applications. Passionate about driving innovation and delivering exceptional user experiences.",
  journey:
    "My journey in web development started 3 years ago, and since then, I've had the opportunity to work on a variety of projects, from small business websites to large-scale web applications. I'm constantly learning and staying up-to-date with the latest trends and technologies in the ever-evolving world of web development.",
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "FAST National University of Computer and Emerging Sciences",
      year: "Aug '18 — May '22",
    },
  ],
  workExperience: [
    {
      title: "Lead Front End Developer",
      company: "Karaz",
      years: "Jul '24 - Present",
    },
    {
      title: "Software Engineer",
      company: "Strategic Systems International",
      years: "Jul '22 — Jun '24",
    },
    {
      title: "Android Developer Intern",
      company: "Tap'N'Clicks",
      years: "Jun '21 — Sep '21",
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
