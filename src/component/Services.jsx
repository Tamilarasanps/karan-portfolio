import React from "react";
import { FaLaptopCode, FaMobileAlt, FaUserTie } from "react-icons/fa";

const services = [
  {
    title: "Full Stack Web Development",
    icon: <FaLaptopCode size={40} className="text-teal-400" />,
    description:
      "Building scalable web applications using the MERN stack (MongoDB, Express, React, Node.js) with RESTful APIs, authentication, and responsive UI/UX.",
  },
  {
    title: "Mobile Application Development",
    icon: <FaMobileAlt size={40} className="text-teal-400" />,
    description:
      "Creating cross-platform mobile apps using React Native with seamless integration of APIs, offline support, and beautiful interfaces.",
  },
  {
    title: "Freelance Services",
    icon: <FaUserTie size={40} className="text-teal-400" />,
    description:
      "Offering custom development solutions for startups and businesses — from landing pages to complex dashboards and app deployments.",
  },
];

const ServiceCard = ({ title, icon, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold text-white text-center mb-2">
      {title}
    </h3>
    <p className="text-gray-300 text-sm text-center">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gray-900 text-white py-16 px-6 sm:px-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-teal-400">Services</h2>
        <p className="text-gray-400 mt-2">What I can do for you</p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
