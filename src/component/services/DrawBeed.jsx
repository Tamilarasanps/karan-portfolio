import React, { useState, useEffect } from "react";
import {
  Settings,
  Zap,
  Target,
  Shield,
  Bot,
  Wrench,
  Eye,
  X,
} from "lucide-react";
import mannual from "../../assets/New folder/manual.png";
import mannual1 from "../../assets/New folder/manual1.png";
import mannual2 from "../../assets/New folder/manual1.png";
import auto from "../../assets/New folder/auto.png";
import auto1 from "../../assets/New folder/auto1.png";
import auto2 from "../../assets/New folder/auto1.png";
import image1 from "../../assets/simulation-img/img1.png";
import image2 from "../../assets/simulation-img/img2.png";
import image3 from "../../assets/simulation-img/img3.png";
import image4 from "../../assets/simulation-img/img4.png";
import picture from "../../assets/New folder/Picture1.png";
import part from "../../assets/New folder/PART.jpg";
import man1 from "../../assets/New folder/M_1.1.jpg";
import man2 from "../../assets/New folder/M_1.2.PNG";
import man3 from "../../assets/New folder/M_1.3.jpg";

import aut1 from "../../assets/New folder/A_1.1.jpg";
import aut2 from "../../assets/New folder/A_1.2.jpg";
import aut3 from "../../assets/New folder/A_1.3.jpg";
import aut from "../../assets/New folder/A.jpg";

const DrawbeadShowcase = () => {
  const [isVisible, setIsVisible] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({
        "animate-drawbeads": true,
        "animate-gallery": true,
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const pic = part;
  const datas = [
    {
      id: 1,
      img: pic,
      imgData:
        "Material Simulated: Dual Phase (DP) 590 Steel, 0.5mm Thickness – chosen for its high strength-to-weight ratio, suitable for automotive structural components.",
      dataa:
        "Component: A-Pillar – a critical structural part designed to absorb impact and enhance passenger safety during collisions.",
    },
  ];

  const aPillarSimulationData = [
    {
      id: 1,
      image: man1,
      title: "Manual A-Pillar Drawbead Setup",
      description:
        "Traditional manual placement of drawbeads for A-Pillar forming with precise geometric control and operator-defined parameters.",
      details: [
        "Manual bead line positioning",
        "Operator-controlled restraining force",
        "Custom geometric constraints",
        "Traditional tooling approach",
        "Material flow visualization",
      ],
      technology: "Manual Design + CAE",
      material: "AHSS 980/1180",
      processType: "Manual Configuration",
      formingStage: "Input Setup",
    },
    {
      id: 2,
      image: man2,
      image2: mannual2,
      title: "Manual A-Pillar Formation Results",
      description:
        "Simulation outcomes from manual drawbead configuration showing material deformation patterns and structural integrity.",
      details: [
        "Strain distribution mapping",
        "Thickness reduction analysis",
        "Corner filling evaluation",
        "Surface quality assessment",
        "Dimensional accuracy check",
      ],
      technology: "Post-Processing Analysis",
      material: "AHSS 980/1180",
      processType: "Manual Results",
      formingStage: "Output Analysis",
    },
    {
      id: 3,
      image: man3,
      title: "Manual A-Pillar Springback Evaluation",
      description:
        "Detailed springback analysis performed after manual drawbead setup, helping assess form accuracy and die compensation needs.",
      details: [
        "Springback vector visualization",
        "Deviation from nominal geometry",
        "Compensation suggestion metrics",
        "Critical area detection",
        "Final part fit analysis",
      ],
      technology: "Manual + Springback Analysis",
      material: "AHSS 980/1180",
      processType: "Manual Results Evaluation",
      formingStage: "Springback Check",
    },
    {
      id: 4,
      image: aut1,
      title: "AutoForm A-Pillar Optimization",
      description:
        "Intelligent automated drawbead placement using AutoForm's advanced algorithms for optimal A-Pillar forming performance.",
      details: [
        "AI-driven bead optimization",
        "Automatic force calculation",
        "Multi-criteria optimization",
        "Adaptive parameter tuning",
        "Predictive failure analysis",
      ],
      technology: "AutoForm Professional",
      material: "AHSS 980/1180",
      processType: "Automated Setup",
      formingStage: "Smart Configuration",
    },
    {
      id: 5,
      image: aut2,
      title: "Optimized A-Pillar Formation",
      description:
        "Superior formation results achieved through AutoForm's intelligent optimization, demonstrating enhanced material utilization and quality.",
      details: [
        "Minimized thinning zones",
        "Improved corner definition",
        "Reduced springback effects",
        "Enhanced surface finish",
        "Production-ready geometry",
      ],
      technology: "AutoForm Validation",
      material: "AHSS 980/1180",
      processType: "Optimized Results",
      formingStage: "Final Output",
    },
    {
      id: 6,
      image: aut3,
      title: "A-Pillar Robustness Validation with AutoForm",
      description:
        "Final validation of A-Pillar performance across varying conditions using AutoForm’s robustness tools to ensure repeatability and quality.",
      details: [
        "Robustness evaluation under parameter variation",
        "Tolerancing impact analysis",
        "Worst-case thinning prediction",
        "Quality zone consistency check",
        "Die robustness certification",
      ],
      technology: "AutoForm Robustness+",
      material: "AHSS 980/1180",
      processType: "Robustness Simulation",
      formingStage: "Final Validation",
    },
  ];

  const imge = [
    {
      ima: mannual2,
    },
  ];
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

  const renderSimulationComparison = (isManual = false) => {
    const dataToUse = isManual
      ? aPillarSimulationData.filter((sim) =>
          sim.processType.includes("Manual")
        )
      : aPillarSimulationData.filter(
          (sim) =>
            sim.processType.includes("Automated") ||
            sim.processType.includes("Optimized")
        );

    return (
      <div className="mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            A-Pillar Formation Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive comparison between manual and automated drawbead
            placement strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataToUse.map((simulation, index) => (
            <div
              key={simulation.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className="flex items-center justify-center md:w-1/2 p-4">
                  <img
                    src={simulation.image}
                    alt={simulation.title}
                    className="w-32 h-32 md:w-64 md:h-64 object-cover mt-10 rounded-lg group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    onClick={() => setSelectedImage(simulation)}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      simulation.processType.includes("Manual")
                        ? "bg-purple-100 text-purple-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {simulation.processType}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedImage(simulation)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {simulation.title}
                  </h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-xs font-semibold">
                    {simulation.technology}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {simulation.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-800">
                      Key Features:
                    </h4>
                    <span className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-medium">
                      {simulation.formingStage}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {simulation.details.map((detail, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">
                      Material: {simulation.material}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">
                      {simulation.formingStage}
                    </span>
                  </div>
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
      </div>
    );
  };

  const TechCard = ({
    icon,
    title,
    subtitle,
    description,
    features,
    gradientFrom,
    gradientTo,
    isManual = false,
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
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            A-Pillar Formation Process
          </h4>
        </div>
        {renderSimulationComparison(isManual)}
      </div>
    </div>
  );

  const ImageModal = ({ image, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl max-h-full bg-white rounded-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full z-10 transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            {image.title}
          </h3>
          <img
            src={image.image}
            alt={image.title}
            className="w-full h-auto rounded-xl"
          />
          {image.description && (
            <p className="mt-4 text-gray-600">{image.description}</p>
          )}
          {image.technology && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-semibold">
                {image.technology}
              </span>
              {image.material && (
                <span className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full text-sm font-semibold">
                  {image.material}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Main Drawbead Section */}
      <div
        id="animate-drawbeads"
        className={`transition-all duration-1000 delay-300 ${
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

        <div className="flex flex-col gap-8 mb-10">
          {datas.map((simulation, index) => (
            <div
              key={simulation.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Container for image and content side by side on md+ */}
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="relative md:w-1/2 flex items-center justify-center bg-gray-50">
                  <div className="relative">
                    <img
                      src={simulation.img}
                      alt={simulation.title}
                      className="w-64 h-64 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                      onClick={() => setSelectedImage(simulation)}
                    />

                    <p
                      key={index}
                      className="px-4 mt-10 mb-6 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-semibold"
                    >
                      Material Simulated: Dual Phase (DP) 590 Steel
                    </p>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* View Button */}
                    <button
                      onClick={() => setSelectedImage(simulation)}
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex flex-col justify-center md:w-1/2 bg-gradient-to-r from-purple-100 to-blue-100 ">
                  {simulation.imgData && (
                    <p className="text-sm text-gray-800 font-bold mb-2">
                      {simulation.imgData}
                    </p>
                  )}

                  {simulation.dataa && (
                    <p className="text-sm text-gray-600 font-semibold">
                      {simulation.dataa}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1  gap-12 mb-20">
          <TechCard
            icon={<Wrench />}
            title="Manual Drawbeads"
            subtitle="Traditional Precision Design"
            description="Expert manual placement and configuration of drawbeads based on material flow analysis, part geometry requirements, and forming process constraints."
            features={manualFeatures}
            gradientFrom="from-purple-500"
            gradientTo="to-pink-500"
            isManual={true}
          />

          <TechCard
            icon={<Bot />}
            title="AutoForm Drawbeads"
            subtitle="AI-Driven Optimization"
            description="Leveraging AutoForm's advanced algorithms for automated drawbead placement, multi-parameter optimization, and production-ready solutions."
            features={autoFeatures}
            gradientFrom="from-blue-500"
            gradientTo="to-cyan-500"
            isManual={false}
          />
        </div>

        {/* Bottom Stats/Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Efficiency
            </h3>
            <p className="text-gray-600">
              Automated optimization reduces design time while improving quality
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Reliability
            </h3>
            <p className="text-gray-600">
              Production-validated solutions ensuring consistent forming results
            </p>
          </div>
        </div>
      </div>

      {/* Simulation Portfolio Section */}
      {/* <div
        id="animate-gallery"
        className={`mt-32 transition-all duration-1000 delay-400 ${
          isVisible["animate-gallery"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Simulation Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive showcase of advanced CAE simulation capabilities and
            results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {simulationData.map((simulation, index) => (
            <div
              key={simulation.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={simulation.image}
                  alt={simulation.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button
                  onClick={() => setSelectedImage(simulation)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {simulation.title}
                  </h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-xs font-semibold">
                    {simulation.technology}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {simulation.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {simulation.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
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

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default DrawbeadShowcase;
