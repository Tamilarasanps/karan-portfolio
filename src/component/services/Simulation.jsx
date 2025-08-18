import React, { useEffect, useState, useRef } from "react";

import image1 from "../../assets/simulation-img/img1.png"; // Import the image
import image2 from "../../assets/simulation-img/img2.png"; // Import the image
import image3 from "../../assets/simulation-img/img3.png"; // Import the image
import image4 from "../../assets/simulation-img/img4.png"; // Import the image

import mannual from "../../assets/New folder/manual.png";
import mannual1 from "../../assets/New folder/manual1.png";
import auto from "../../assets/New folder/auto.png";
import auto1 from "../../assets/New folder/auto1.png";

const img1 = image1;
const img2 = image2;
const img3 = image3;
const img4 = image4;

export default function Simulation() {
  const [isVisible, setIsVisible] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = sectionRef.current?.querySelectorAll('[id^="animate-"]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const simulationData = [
    {
      id: 1,
      image: img1,
      title: "FLD Analysis Simulation",
      description:
        "Comprehensive Forming Limit Diagram analysis showcasing material behavior under various stress conditions.",
      details: [
        "Strain distribution analysis",
        "Failure prediction modeling",
        "Material thickness variation",
        "Critical zone identification",
      ],
      technology: "AutoForm + CATIA V5",
      material: "HSLA 340/450",
    },
    {
      id: 2,
      image: img2,
      title: "Manual Drawbeads Configuration",
      description:
        "Strategic placement of manual drawbeads for optimal material flow control and defect prevention.",
      details: [
        "Restraining force optimization",
        "Material flow direction control",
        "Wrinkling prevention strategy",
        "Custom bead geometry design",
      ],
      technology: "Manual Design Process",
      material: "Dual Phase 600",
    },
    {
      id: 3,
      image: img3,
      title: "AutoForm Drawbeads System",
      description:
        "Advanced automated drawbead placement using AutoForm's intelligent algorithms for superior results.",
      details: [
        "Automated bead positioning",
        "AI-driven optimization",
        "Multi-parameter analysis",
        "Production-ready solutions",
      ],
      technology: "AutoForm Advanced",
      material: "Deep Drawing Steel",
    },
    {
      id: 4,
      image: img4,
      title: "Process Optimization Results",
      description:
        "Final optimized simulation results demonstrating improved formability and reduced manufacturing risks.",
      details: [
        "Springback compensation",
        "Tool wear reduction",
        "Cycle time optimization",
        "Quality enhancement",
      ],
      technology: "Integrated CAE Tools",
      material: "Aluminum 6016",
    },
  ];

  const capabilities = [
    {
      icon: "🔬",
      title: "Advanced FLD Analysis",
      description:
        "Comprehensive forming limit analysis with stringent failure criteria and material behavior prediction.",
    },
    {
      icon: "⚙️",
      title: "Drawbead Optimization",
      description:
        "Expert placement and configuration of both manual and automated drawbead systems for optimal material flow.",
    },
    {
      icon: "📊",
      title: "Process Parameter Tuning",
      description:
        "Fine-tuning of forming parameters including blank holder force, draw depth, and tool geometry.",
    },
    {
      icon: "🎯",
      title: "Defect Prevention",
      description:
        "Proactive identification and mitigation of common forming defects like wrinkling, tearing, and springback.",
    },
  ];

  const Modal = ({ image, onClose }) => {
    if (!image) return null;

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <div className="relative max-w-4xl max-h-full">
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold"
          >
            ✕
          </button>
          <img
            src={image.image}
            alt={image.title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent text-white p-6 rounded-b-lg">
            <h3 className="text-xl font-bold mb-2">{image.title}</h3>
            <p className="text-sm opacity-90">{image.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-6 sm:px-16"
      id="simulation"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          id="animate-header"
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible["animate-header"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Simulation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Expertise
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            As a specialized sheet metal simulation engineer, I leverage
            advanced CAE tools and methodologies to optimize forming processes,
            predict manufacturing outcomes, and deliver high-quality solutions
            across diverse automotive applications.
          </p>
        </div>

        {/* Professional Summary */}
        <div
          id="animate-summary"
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible["animate-summary"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🚀</span>
                  Technical Excellence in Simulation
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  My expertise encompasses complex geometry analysis, forming
                  outcome prediction, and comprehensive process parameter
                  optimization. Through systematic simulation analysis, I
                  identify critical improvement opportunities and deliver
                  solutions that ensure both part quality and production
                  efficiency.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Complex Geometry Analysis",
                    "Process Optimization",
                    "Quality Assurance",
                    "Cost Reduction",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-3xl block mb-2">
                      {capability.icon}
                    </span>
                    <h3 className="font-semibold text-slate-800 text-sm mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-xs text-slate-600">
                      {capability.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Drawbeads Expertise Section */}
        <div
          id="animate-drawbeads"
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible["animate-drawbeads"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Drawbead Technology Mastery
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Drawbeads are critical components in controlling material flow and
              preventing forming defects. My experience spans both traditional
              manual drawbead design and cutting-edge AutoForm automated
              systems, ensuring optimal material behavior across all forming
              scenarios.
            </p>
            <p className="text-lg font-bold text-slate-700 max-w-3xl mx-auto leading-relaxed mt-10">
              The follwing A-pillar part output shows my bead placement strotegy
              & intelligence
            </p>
          </div>
          <div className="">
            <h1 className="font-bold text-xl mt-10 ml-6">
              Manual Drawing Input
            </h1>
            <img src={mannual} alt="Manual drawing input" />

            <h1 className="font-bold text-xl mt-10 ml-6">
              Corresponding Output
            </h1>
            <img
              src={mannual1}
              alt="Output for manual drawing"
              className="mb-10"
            />
          </div>

          <div className="">
            <h1 className="font-bold text-xl mt-10 ml-6">Auto Drawing Input</h1>
            <img src={auto} alt="Auto drawing input" />

            <h1 className="font-bold text-xl mt-10 ml-6">
              Corresponding Output
            </h1>
            <img src={auto1} alt="Output for auto drawing" className="mb-10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🔧</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Manual Drawbeads
                  </h3>
                  <p className="text-purple-600 font-semibold">
                    Traditional Precision Design
                  </p>
                </div>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Expert manual placement and configuration of drawbeads based on
                material flow analysis, part geometry requirements, and forming
                process constraints.
              </p>
              <ul className="space-y-2">
                {[
                  "Custom geometry design",
                  "Strategic positioning",
                  "Force optimization",
                  "Defect prevention",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-slate-600"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🤖</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    AutoForm Drawbeads
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    AI-Driven Optimization
                  </p>
                </div>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Leveraging AutoForm's advanced algorithms for automated drawbead
                placement, multi-parameter optimization, and production-ready
                solutions.
              </p>
              <ul className="space-y-2">
                {[
                  "Automated positioning",
                  "AI optimization",
                  "Multi-criteria analysis",
                  "Production validation",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-slate-600"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Simulation Gallery */}
        {/* <div
          id="animate-gallery"
          className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible["animate-gallery"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Simulation Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {simulationData.map((simulation, index) => (
              <div
                key={simulation.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={simulation.image}
                    alt={simulation.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    onClick={() => setSelectedImage(simulation)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button
                    onClick={() => setSelectedImage(simulation)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                  >
                    🔍
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800">
                      {simulation.title}
                    </h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-xs font-semibold">
                      {simulation.technology}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {simulation.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {simulation.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-2"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm text-slate-500">
                      Material: {simulation.material}
                    </span>
                    <button
                      onClick={() => setSelectedImage(simulation)}
                      className="text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Results & Impact */}
        <div
          id="animate-impact"
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible["animate-impact"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Proven Results & Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Simulation Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">30%</div>
                <div className="text-sm opacity-90">Defect Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25%</div>
                <div className="text-sm opacity-90">Material Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-sm opacity-90">Faster Development</div>
              </div>
            </div>
            <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
              Through advanced simulation techniques and strategic process
              optimization, I deliver measurable improvements in quality,
              efficiency, and cost-effectiveness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
              >
                Discuss Your Project
              </a>
              <a
                href="#about"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}
