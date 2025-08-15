import React from "react";

const educationData = [
  {
    institution: "Nandha College of Technology",
    degree: "B.E. in Electronics and Communication Engineering",
    period: "2019 – 2023",
    details: [
       "GPA: 8.2/10",
      "Core studies: Signal Processing, Microcontrollers, Digital Communication",
      "Self-learned MERN stack alongside academic curriculum",
    ],
  },
  {
    institution: "Self-Learning & Online Platforms",
    degree: "Full-Stack Web Development (MERN)",
    period: "2024-Present",
    details: [
      "Built  full-stack projects using React, Node.js, MongoDB",
      "Completed courses on platforms like Udemy and freeCodeCamp",
      "Focused on REST APIs, React state management, and deployment",
    ],
  },
];

const EducationCard = ({ edu }) => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-teal-400">{edu.institution}</h3>
    <p className="text-gray-300">{edu.degree}</p>
    <p className="text-sm text-gray-400 italic mb-2">{edu.period}</p>
    <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
      {edu.details.map((item, index) => (
        <li key={index}>🎓 {item}</li>
      ))}
    </ul>
  </div>
);

const Education = () => (
  <section
    id="education"
    className="bg-gray-700 text-white py-16 px-6 sm:px-16"
  >
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-teal-400">Education</h2>
      <p className="text-gray-400 mt-2">
        My academic and self-learning journey
      </p>
    </div>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
      {educationData.map((edu, index) => (
        <EducationCard key={index} edu={edu} />
      ))}
    </div>
  </section>
);

export default Education;
