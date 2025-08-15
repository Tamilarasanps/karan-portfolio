import React, { useEffect, useState } from "react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiGithub,
  SiJenkins,
  SiDocker,
  SiPostman,
  SiNetlify,
  SiVercel,
  // SiAmazonaws,
} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { color, motion } from "framer-motion";
import { SiAmazon, SiAwsamplify } from "react-icons/si";
import { label } from "framer-motion/client";

// Reusable Skill Icon Component
const SkillIcon = ({ Icon, label, color }) => {
  // Randomize animations
  const randomX = Math.floor(Math.random() * 100) - 50; // Random X position from -50 to 50
  const randomY = Math.floor(Math.random() * 100) - 50; // Random Y position from -50 to 50
  const randomRotate = Math.floor(Math.random() * 360); // Random rotation between 0 and 360
  const randomDelay = Math.random(); // Random delay for each icon animation

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: randomX,
        y: randomY,
        rotate: randomRotate,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
      }}
      transition={{
        duration: 1,
        delay: randomDelay * 0.5, // Apply random delay
        ease: "easeOut",
      }}
      className={`flex flex-col items-center ${color}`}
    >
      <Icon size={40} />
      <span className="mt-2 text-sm text-gray-100">{label}</span>
    </motion.div>
  );
};

const Skills = () => {
  const [key, setKey] = useState(0); // State to reset and trigger animations on re-visit

  const frontendSkills = [
    { Icon: SiHtml5, label: "HTML5", color: "text-orange-500" },
    { Icon: SiCss3, label: "CSS3", color: "text-blue-500" },
    { Icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
    { Icon: SiReact, label: "React", color: "text-cyan-400" },
    { Icon: SiReact, label: "React Native", color: "text-cyan-300" },
    { Icon: SiRedux, label: "Redux", color: "text-purple-400" },
    { Icon: SiTailwindcss, label: "Tailwind", color: "text-teal-400" },
  ];

  const backendSkills = [
    { Icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
    { Icon: SiExpress, label: "Express", color: "text-gray-300" },
    { Icon: SiMongodb, label: "MongoDB", color: "text-green-400" },
  ];

  const toolsAndPlatforms = [
    { Icon: FaLaptopCode, label: "VS Code", color: "text-blue-500" },
    { Icon: SiGit, label: "Git", color: "text-orange-400" },
    { Icon: SiGithub, label: "GitHub", color: "text-white" },
    { Icon: SiPostman, label: "Postman", color: "text-orange-500" },
    { Icon: SiNetlify, label: "Netlify", color: "text-green-400" },
    { Icon: SiVercel, label: "Vercel", color: "text-white" },
  ];

  const devOpsSkills = [
    { Icon: SiJenkins, label: "Jenkins", color: "text-red-500" },
    { Icon: SiDocker, label: "Docker", color: "text-blue-400" },
  ];

  const Cloud = [{ Icon: SiAmazon, label: "Aws", color: "#FF9900" }];
  // Reset the key whenever the page is revisited
  useEffect(() => {
    setKey((prevKey) => prevKey + 1); // Increment key on each visit to force re-render
  }, []);

  return (
    <section
      id="skills"
      className="bg-gray-900 text-white py-16 px-6 sm:px-16"
      key={key} // Ensure re-mounting happens when the key changes
    >
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-teal-400">
          Technical Skills
        </h2>

        <div className="space-y-10">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Frontend
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
              {frontendSkills.map(({ Icon, label, color }, idx) => (
                <SkillIcon key={idx} Icon={Icon} label={label} color={color} />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Backend
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
              {backendSkills.map(({ Icon, label, color }, idx) => (
                <SkillIcon key={idx} Icon={Icon} label={label} color={color} />
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
              {toolsAndPlatforms.map(({ Icon, label, color }, idx) => (
                <SkillIcon key={idx} Icon={Icon} label={label} color={color} />
              ))}
            </div>
          </motion.div>

          {/* DevOps / CI-CD */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              CI/CD & DevOps
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
              {devOpsSkills.map(({ Icon, label, color }, idx) => (
                <SkillIcon key={idx} Icon={Icon} label={label} color={color} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Cloud services
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center ms-16">
              <SiAmazon size={40} color="#FF9900" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
