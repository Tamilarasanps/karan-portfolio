import React from "react";

const projects = [
  {
    name: "MachineStreet",
    description:
      "A specialized platform for onboarding industrial mechanics from various sectors, allowing users to discover and contact verified mechanics through the app and website.",
    techStack: [
      "React Native",
      "Expo",
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "AsyncStorage",
    ],
    features: [
      "Mechanic onboarding with detailed profiles",
      "User authentication and profile management",
      "Search and filter mechanics by industry, location, and services",
      "Direct contact and service request options",
      "Admin dashboard for managing users and mechanics",
    ],
    liveDemo: "https://machinestreets.com",
  },
  {
    name: "Shiv Sakthi Travels",
    description:
      "A travel service platform offering customized car rental solutions for local and outstation trips, providing easy booking through a user-friendly web interface.",
    techStack: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "EmailJS",
    ],
    features: [
      "Service listings for local and outstation travel",
      "User-friendly booking form with validation",
      "Admin access to manage inquiries",
      "Responsive design for mobile and desktop",
      "Email notifications on booking inquiries",
    ],
    liveDemo: "https://shivsakthitravels.com/",
    github: "https://github.com/yourusername/shivsakthitravels",
  },
  {
    name: "FaceQR App",
    description:
      "A web-based QR code scanner that integrates facial recognition to verify users before allowing QR-based access or actions. Ideal for attendance and secure check-ins.",
    techStack: [
      "React.js",
      "Face API.js",
      "Netlify",
      "Tailwind CSS",
      "HTML5 Webcam API",
    ],
    features: [
      "Real-time face detection using webcam",
      "QR code scanning with face match verification",
      "Lightweight and responsive UI",
      "Deployed with Netlify for fast access",
      "No installation required — runs entirely in browser",
    ],
    liveDemo: "https://faceqrapp.netlify.app/",
    github: "https://github.com/yourusername/faceqrapp",
  },
  {
    name: "MM Crane Service",
    description:
      "A responsive website for MM Crane, showcasing crane rental services, contact information, and service highlights for industrial and construction needs.",
    techStack: ["React.js", "Netlify", "Tailwind CSS", "EmailJS"],
    features: [
      "Service showcase with crane types and uses",
      "Responsive design for mobile and desktop",
      "Contact form with EmailJS integration",
      "Location and inquiry details",
      "Deployed using Netlify for fast and reliable access",
    ],
    liveDemo: "https://mm-crane.netlify.app/",
    github: "https://github.com/yourusername/mm-crane",
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-2xl font-semibold text-teal-400">{project.name}</h3>
    <p className="mt-2 text-gray-300">{project.description}</p>
    <p className="mt-2 text-sm text-gray-400">
      <span className="font-semibold">Tech Stack:</span>{" "}
      {project.techStack.join(", ")}
    </p>
    <ul className="list-disc list-inside mt-2 text-sm text-gray-200">
      {project.features.map((feature, idx) => (
        <li key={idx}>✅ {feature}</li>
      ))}
    </ul>
    <div className="mt-4 space-x-4">
      <a
        href={project.liveDemo}
        target="_blank"
        rel="noreferrer"
        className="text-teal-400 hover:underline"
      >
        🔗 Live Demo
      </a>
      {/* <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="text-teal-400 hover:underline"
      >
        📂 GitHub
      </a> */}
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="bg-gray-800 text-white py-16 px-6 sm:px-16">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-teal-400">Projects</h2>
      <p className="text-gray-400 mt-2">
        Here are some of the MERN stack apps I've built
      </p>
    </div>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
