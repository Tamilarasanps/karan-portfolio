import React, { useState, useEffect } from "react";
import { Settings, Zap, Target, Shield, Bot, Wrench } from "lucide-react";

import mannual from "../../assets/New folder/manual.png";
import mannual1 from "../../assets/New folder/manual1.png";
import auto from "../../assets/New folder/auto.png";
import auto1 from "../../assets/New folder/auto1.png";

const DrawbeadShowcase = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({ "animate-drawbeads": true });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const manualFeatures = [
    { icon: <Target className="w-4 h-4" />, text: "Custom geometry design" },
    { icon: <Settings className="w-4 h-4" />, text: "Strategic positioning" },
    { icon: <Zap className="w-4 h-4" />, text: "Force optimization" },
    { icon: <Shield className="w-4 h-4" />, text: "Defect prevention" },
  ];

  const autoFeatures = [
    { icon: <Bot className="w-4 h-4" />, text: "Automated positioning" },
    { icon: <Zap className="w-4 h-4" />, text: "AI optimization" },
    { icon: <Target className="w-4 h-4" />, text: "Multi-criteria analysis" },
    { icon: <Shield className="w-4 h-4" />, text: "Production validation" },
  ];

  const TechCard = ({
    icon,
    title,
    subtitle,
    description,
    features,
    gradientFrom,
    gradientTo,
    inputImage,
    outputImage,
  }) => (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white text-2xl mr-4 shadow-lg`}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{title}</h3>
            <p
              className={`font-semibold text-lg bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}
            >
              {subtitle}
            </p>
          </div>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center group">
              <div
                className={`w-8 h-8 rounded-lg bg-gradient-to-r ${gradientFrom} ${gradientTo} flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <span className="text-gray-700 font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-8 pb-8">
        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <div className="aspect-video rounded-xl flex items-center justify-center mb-4">
            <img src={inputImage} alt="Input drawing" className="mb-10" />
          </div>
          <p className="text-sm text-gray-600 text-center font-medium">
            Input Setup & Parameters
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <div className="aspect-video bg-gradient-to-br from-blue-50 to-green-50 rounded-xl flex items-center justify-center mb-4">
            <img src={outputImage} alt="Output drawing" className="mb-10" />
          </div>
          <p className="text-sm text-gray-600 text-center font-medium">
            A-Pillar Formation Result
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      id="animate-drawbeads"
      className={`max-w-7xl mx-auto px-6 py-20 transition-all duration-1000 delay-300 ${
        isVisible["animate-drawbeads"]
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {/* Header Section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl mb-8 shadow-2xl">
          <Wrench className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
          Drawbead Technology
          <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Mastery
          </span>
        </h2>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
          Drawbeads are critical components in controlling material flow and
          preventing forming defects. My experience spans both traditional
          manual drawbead design and cutting-edge AutoForm automated systems,
          ensuring optimal material behavior across all forming scenarios.
        </p>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 max-w-3xl mx-auto border border-purple-100">
          <p className="text-lg font-semibold text-gray-700 leading-relaxed">
            The following A-pillar part output demonstrates my bead placement
            strategy & intelligence
          </p>
        </div>
      </div>

      {/* Technology Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <TechCard
          icon={<Wrench />}
          title="Manual Drawbeads"
          subtitle="Traditional Precision Design"
          description="Expert manual placement and configuration of drawbeads based on material flow analysis, part geometry requirements, and forming process constraints."
          features={manualFeatures}
          gradientFrom="from-purple-500"
          gradientTo="to-pink-500"
          inputImage={mannual}
          outputImage={mannual1}
        />

        <TechCard
          icon={<Bot />}
          title="AutoForm Drawbeads"
          subtitle="AI-Driven Optimization"
          description="Leveraging AutoForm's advanced algorithms for automated drawbead placement, multi-parameter optimization, and production-ready solutions."
          features={autoFeatures}
          gradientFrom="from-blue-500"
          gradientTo="to-cyan-500"
          inputImage={auto}
          outputImage={auto1}
        />
      </div>

      {/* Bottom Stats/Metrics */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Precision</h3>
          <p className="text-gray-600">
            Exact material flow control with optimized drawbead positioning
          </p>
        </div>

        <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Efficiency</h3>
          <p className="text-gray-600">
            Automated optimization reduces design time while improving quality
          </p>
        </div>

        <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Reliability</h3>
          <p className="text-gray-600">
            Production-validated solutions ensuring consistent forming results
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrawbeadShowcase;
