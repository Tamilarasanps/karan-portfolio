import React, { useEffect, useState, useRef } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState({});
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

  const skills = [
    {
      name: "CATIA V5 Modeling",
      level: 95,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "AutoForm Simulation",
      level: 90,
      color: "from-purple-500 to-purple-600",
    },
    { name: "FLD Analysis", level: 88, color: "from-green-500 to-green-600" },
    { name: "Die Tool Design", level: 85, color: "from-red-500 to-red-600" },
    {
      name: "Process Planning",
      level: 82,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      name: "Material Optimization",
      level: 87,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const materials = [
    { name: "HSLA", fullName: "High Strength Low Alloy Steel", icon: "🔧" },
    { name: "DP", fullName: "Dual Phase Steel", icon: "⚙️" },
    { name: "DC", fullName: "Deep Drawing Steel", icon: "🛠️" },
    { name: "CR", fullName: "Cold Rolled Steel", icon: "🔩" },
    { name: "SS", fullName: "Stainless Steel", icon: "✨" },
    { name: "Aluminium", fullName: "Lightweight Alloys", icon: "🪶" },
  ];

  const services = [
    {
      title: "Advanced Simulation",
      description:
        "Comprehensive FLD analysis and forming simulation using cutting-edge software tools to predict and prevent manufacturing defects.",
      icon: "🖥️",
      details: [
        "Failure prediction analysis",
        "Springback compensation",
        "Thinning evaluation",
        "Wrinkling assessment",
      ],
    },
    {
      title: "Optimal Blank Layouts",
      description:
        "Strategic blank design and nesting optimization to maximize material utilization and minimize waste in production.",
      icon: "📐",
      details: [
        "Material waste reduction",
        "Cost optimization",
        "Grain direction consideration",
        "Scrap minimization",
      ],
    },
    {
      title: "Process Planning",
      description:
        "Comprehensive manufacturing process development from concept to production, ensuring efficiency and quality.",
      icon: "📋",
      details: [
        "Operation sequencing",
        "Tool design guidelines",
        "Quality checkpoints",
        "Production optimization",
      ],
    },
    {
      title: "Strip Layout Design",
      description:
        "Progressive die strip layouts engineered for maximum productivity and material efficiency in high-volume production.",
      icon: "🏭",
      details: [
        "Progressive die design",
        "Pilot system planning",
        "Carrier optimization",
        "Automation compatibility",
      ],
    },
  ];

  const companies = [
    {
      name: "EATA Industries Private Limited",
      position: "Sheet Metal Stamping Simulation Engineer",
      experience: "Experience working with Top-tier Companies",
      compa1: "Mahindra",
      compa2: "Bajaj Auto Ltd",
      period: "2023-2025",
      logo: "🏢",
      achievements: [
        "Led simulation projects for automotive stamping components",
        "Optimized die designs resulting in 15% material savings",
        "Implemented advanced FLD analysis protocols",
      ],
    },
    {
      // name: "Bajaj Auto Ltd",
      position: "Simulation Engineer",
      // period: "Previous Role",
      // logo: "🏍️",
      achievements: [
        "Specialized in two-wheeler component simulation",
        "Developed innovative forming solutions",
        "Collaborated with cross-functional engineering teams",
      ],
    },
    {
      // name: "Mahindra",
      // position: "Engineering Consultant",
      // period: "Contract Role",
      // logo: "🚗",
      achievements: [
        "Provided expertise in commercial vehicle stamping",
        "Optimized manufacturing processes",
        "Reduced production cycle time by 20%",
      ],
    },
  ];

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-6 sm:px-16"
      id="about"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          id="animate-header"
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible["animate-header"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Passionate Sheet Metal Stamping Simulation Engineer with expertise
            in advanced manufacturing processes, dedicated to optimizing
            automotive production through innovative simulation techniques and
            strategic process planning.
          </p>
        </div>

        {/* Professional Summary */}
        <div
          id="animate-summary"
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible["animate-summary"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span className="text-3xl mr-3">👨‍💼</span>
              Professional Summary
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              With extensive experience in sheet metal stamping simulation, I
              specialize in leveraging advanced CAE tools to solve complex
              manufacturing challenges in the automotive industry. My expertise
              spans from conceptual design through production optimization,
              working with leading automotive manufacturers to deliver
              cost-effective, high-quality stamping solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">90+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">2+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">25%</div>
                <div className="text-sm text-slate-600">
                  Average Cost Reduction
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div
          id="animate-skills"
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible["animate-skills"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Technical Expertise
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <h4 className="text-xl font-semibold text-slate-800 mb-6">
                Core Competencies
              </h4>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-700">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-slate-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible["animate-skills"]
                            ? `${skill.level}%`
                            : "0%",
                          transitionDelay: `${index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
           
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <h4 className="text-xl font-semibold text-slate-800 mb-6">
                Material Expertise
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {materials.map((material, index) => (
                  <div
                    key={material.name}
                    className="group p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{material.icon}</span>
                      <span className="font-bold text-slate-800">
                        {material.name}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                      {material.fullName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div
          id="animate-experience"
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible["animate-experience"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Professional Experience
          </h3>
          <h4 className="text-xl font-bold text-slate-700 mt-6  mb-10">
            I’ve had the opportunity to contribute to projects for leading,
            top-tier companies known for their excellence in the industry.
          </h4>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 hover:shadow-2xl transition-all duration-300">
            <div className="space-y-8">
              {companies.map((company, index) => (
                <div
                  key={company.name}
                  className="border-b border-slate-200 pb-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <span className="text-4xl mr-4">{company.logo}</span>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800">
                          {company.name}
                        </h4>
                        <p className="text-purple-600 font-semibold">
                          {company.position}
                        </p>
                      </div>
                    </div>
                    {company.period && (
                      <div className="bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full">
                        <span className="text-sm font-semibold text-purple-800">
                          {company.period}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col gap-2 mt-2">
                      {/* Main Experience */}
                      {company.experience && (
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                          <p className="text-slate-600 text-md font-bold leading-relaxed">
                            {company.experience}
                          </p>
                        </div>
                      )}

                      {/* Project/Company 1 */}
                      {company.compa1 && (
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                          <p className="text-slate-600 font-semibold text-sm leading-relaxed">
                            {company.compa1}
                          </p>
                        </div>
                      )}

                      {/* Project/Company 2 */}
                      {company.compa2 && (
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                          <p className="text-slate-600 font-semibold text-sm leading-relaxed">
                            {company.compa2}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {company.achievements.map(
                      (achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services & Capabilities */}
        <div
          id="animate-services"
          className={`mb-20 transition-all duration-1000 delay-500 ${
            isVisible["animate-services"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Services & Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 border border-slate-100 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <span className="text-4xl block mb-4">{service.icon}</span>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center text-xs text-slate-500"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-2"></div>
                      {detail}
                    </div>
                  ))}
                </div>
                {/* <div className="text-center mt-6">
                  <Link
                    to="/services" // Update this path to the page you want to navigate to
                    className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition-all duration-300"
                  >
                    View More
                  </Link>
                  "/BlankLayout"
                </div> */}
                {/* <div className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition-all duration-300 mt-6 text-center">
                  {" "}
                  <h2>View More</h2>
                </div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          id="animate-cta"
          className={`text-center transition-all duration-1000 delay-600 ${
            isVisible["animate-cta"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Optimize Your Manufacturing Process?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's collaborate to bring efficiency, innovation, and
              cost-effectiveness to your stamping operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="#portfolio"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
