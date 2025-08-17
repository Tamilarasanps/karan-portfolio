import React from "react";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import About from "./component/About";
// import Services from "./component/Services";
// import Skills from "./component/Skill";
// import Projects from "./component/Project";
// import Education from "./component/Education";
// import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Simulation from "./component/services/Simulation";
import BlankLayout from "./component/services/BlankLayout";
import ProcessPlanning from "./component/services/ProcessPlanning";
import StripLayout from "./component/services/StripLayout";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <About />
      <Simulation />
      <BlankLayout />
      <ProcessPlanning />
      <StripLayout />
      {/* <Services />
      <Skills />
      <Projects />
      <Education />
      <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
