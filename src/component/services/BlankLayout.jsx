import React, { useEffect, useState, useRef } from "react";
import image1 from "../../assets/blankLayout/img1.png";
import image2 from "../../assets/blankLayout/img2.png";

const img1 = image1;
const img2 = image2;

export default function BlankLayout() {
  const [isVisible, setIsVisible] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
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

  const blankLayoutData = [
    {
      id: 1,
      image: img1,
      title: "Optimized Blank Layout Design",
      description:
        "Strategic blank geometry design maximizing material utilization while ensuring optimal forming characteristics.",
      details: [
        "Material grain direction optimization",
        "Scrap minimization strategies",
        "Part orientation analysis",
        "Formability assessment",
      ],
      materialSaving: "18%",
      complexity: "High",
      application: "Automotive Door Panel",
    },
    {
      id: 2,
      image: img2,
      title: "Advanced Nesting Solutions",
      description:
        "Multi-part nesting optimization reducing material waste and improving production efficiency.",
      details: [
        "Multi-part layout optimization",
        "Cutting path efficiency",
        "Material waste reduction",
        "Production cost analysis",
      ],
      materialSaving: "25%",
      complexity: "Expert",
      application: "Body Panel Assembly",
    },
  ];

  const designPrinciples = [
    {
      icon: "📐",
      title: "Geometric Optimization",
      description:
        "Precise calculation of blank dimensions considering material flow, stretch, and forming requirements.",
      benefits: [
        "Reduced trial iterations",
        "Improved part quality",
        "Optimized tool design",
      ],
    },
    {
      icon: "🔄",
      title: "Material Flow Analysis",
      description:
        "Comprehensive analysis of material behavior during forming to determine optimal blank shape and size.",
      benefits: [
        "Defect prevention",
        "Uniform thickness",
        "Enhanced formability",
      ],
    },
    {
      icon: "💰",
      title: "Cost Optimization",
      description:
        "Strategic layout design focusing on material utilization efficiency and production cost reduction.",
      benefits: ["Material savings", "Reduced scrap", "Lower production costs"],
    },
    {
      icon: "⚡",
      title: "Production Efficiency",
      description:
        "Optimized blank layouts designed for high-volume production with minimal setup and changeover time.",
      benefits: [
        "Faster production",
        "Reduced downtime",
        "Improved throughput",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Part Analysis",
      description:
        "Detailed analysis of part geometry, material requirements, and forming constraints.",
    },
    {
      step: "02",
      title: "Material Selection",
      description:
        "Optimal material grade selection based on formability, strength, and cost requirements.",
    },
    {
      step: "03",
      title: "Blank Design",
      description:
        "Strategic blank shape and size determination using advanced CAE simulation tools.",
    },
    {
      step: "04",
      title: "Layout Optimization",
      description:
        "Nesting optimization for maximum material utilization and minimum waste generation.",
    },
    {
      step: "05",
      title: "Validation",
      description:
        "Comprehensive validation through simulation and prototype testing before production.",
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "process", label: "Process", icon: "⚙️" },
    { id: "benefits", label: "Benefits", icon: "🎯" },
  ];

  const Modal = ({ image, onClose }) => {
    if (!image) return null;

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <div className="relative max-w-5xl max-h-full">
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold z-10"
          >
            ✕
          </button>
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-slate-600">{image.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    {image.materialSaving}
                  </div>
                  <div className="text-sm text-slate-500">Material Savings</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {image.details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-slate-700">
                      Complexity:
                    </span>
                    <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                      {image.complexity}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-700">
                      Application:
                    </span>
                    <span className="ml-2 text-sm text-slate-600">
                      {image.application}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-6 sm:px-16"
      id="blank-layout"
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
            Blank Layout{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Optimization
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Expert blank layout design and optimization services that maximize
            material utilization, minimize waste, and ensure optimal forming
            characteristics for automotive stamping applications.
          </p>
        </div>

        {/* Key Message Section */}
        <div
          id="animate-message"
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible["animate-message"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Precision-Driven Blank Layout Solutions
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
              Manual drawbeads create customized solutions with precise control
              over bead geometry, location, and size, allowing for tailored
              optimization of complex geometries and material properties. This
              approach ensures maximum efficiency and quality in every blank
              layout design.
            </p>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div
          id="animate-tabs"
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible["animate-tabs"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-wrap justify-center mb-8 bg-white rounded-full p-2 shadow-lg max-w-md mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 min-h-96">
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">
                    Strategic Blank Layout Design
                  </h3>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Our blank layout optimization combines advanced engineering
                    principles with practical manufacturing experience to
                    deliver superior results in material efficiency and part
                    quality.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        25%
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">
                          Average Material Savings
                        </h4>
                        <p className="text-sm text-slate-600">
                          Through optimized nesting and layout design
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        95%
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">
                          First-Time Success Rate
                        </h4>
                        <p className="text-sm text-slate-600">
                          Reducing trials and development time
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {designPrinciples.map((principle, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <span className="text-3xl block mb-3">
                        {principle.icon}
                      </span>
                      <h4 className="font-semibold text-slate-800 text-sm mb-2">
                        {principle.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "process" && (
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                  Blank Layout Development Process
                </h3>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-6 group hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 p-4 rounded-xl transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "benefits" && (
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                  Key Benefits & Advantages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {designPrinciples.map((principle, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                    >
                      <span className="text-4xl block mb-4">
                        {principle.icon}
                      </span>
                      <h4 className="font-bold text-slate-800 mb-3">
                        {principle.title}
                      </h4>
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        {principle.description}
                      </p>
                      <div className="space-y-1">
                        {principle.benefits.map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="text-xs text-slate-500 flex items-center justify-center"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-2"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Portfolio Gallery */}
        <div
          id="animate-gallery"
          className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible["animate-gallery"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Blank Layout Portfolio
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blankLayoutData.map((layout, index) => (
              <div
                key={layout.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={layout.image}
                    alt={layout.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    onClick={() => setSelectedImage(layout)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button
                    onClick={() => setSelectedImage(layout)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                  >
                    🔍
                  </button>
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {layout.materialSaving} Saved
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800">
                      {layout.title}
                    </h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-xs font-semibold">
                      {layout.complexity}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {layout.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Optimization Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {layout.details.map((detail, detailIndex) => (
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
                      Application: {layout.application}
                    </span>
                    <button
                      onClick={() => setSelectedImage(layout)}
                      className="text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          id="animate-cta"
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible["animate-cta"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Ready to Optimize Your Material Usage?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              Transform your manufacturing efficiency with expertly designed
              blank layouts that reduce waste, improve quality, and lower
              production costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="#simulation"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Simulation Work
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
