import React from "react";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import About from "./component/About";
import Services from "./component/Services";
import Skills from "./component/Skill";
import Projects from "./component/Project";
import Education from "./component/Education";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <About />
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
