import React, { useEffect, useState } from "react";

import image from "../../assets/processplanning/img1.png";
import image1 from "../../assets/processplanning/img2.png";
const img1 = image;
const img2 = image1;
export default function ProcessPlanning() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const planningElements = [
    {
      title: "Customer Requirements",
      description:
        "Understanding and analyzing specific customer needs, quality standards, and production targets.",
      icon: "👥",
    },
    {
      title: "Steel Strength Analysis",
      description:
        "Material property evaluation and selection based on strength requirements and formability characteristics.",
      icon: "🔩",
    },
    {
      title: "Scrap Relief Optimization",
      description:
        "Strategic planning to minimize material waste and optimize cutting patterns for maximum efficiency.",
      icon: "♻️",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6 sm:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Process{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Planning
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive manufacturing process planning that ensures optimal
            production efficiency, quality standards, and cost-effectiveness.
          </p>
        </div>

        {/* Planning Elements */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planningElements.map((element, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <span className="text-5xl block mb-6">{element.icon}</span>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  {element.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Images */}
        <div
          className={`mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Process Planning Workflow
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
              <img
                src={img1}
                alt="Process Planning Flow"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Manufacturing Process Flow
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Detailed workflow design showing the complete manufacturing
                  sequence from raw material to finished product with optimized
                  process parameters.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
              <img
                src={img2}
                alt="Manufacturing Steps"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Process Implementation
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Step-by-step implementation guide ensuring consistent quality
                  and efficiency throughout the entire manufacturing process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              Process Planning Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">30%</div>
                <div className="text-sm opacity-90">Efficiency Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25%</div>
                <div className="text-sm opacity-90">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Quality Consistency</div>
              </div>
            </div>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
              Strategic process planning ensures optimal resource utilization,
              maintains quality standards, and delivers consistent results
              across all manufacturing operations.
            </p>
            <a
              href="#contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Discuss Your Process Needs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
