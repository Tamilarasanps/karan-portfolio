import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import BlankLayout from "./component/services/BlankLayout";
import ProcessPlanning from "./component/services/ProcessPlanning";
import Simulation from "./component/services/simulation";
import StripLayout from "./component/services/StripLayout";

function Routes() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav> */}

        {/* Routes */}
        <Routes>
          <Route path="/BlankLayout" element={<BlankLayout />} />
          <Route path="/ProcessPlanning" element={<ProcessPlanning />} />
          <Route path="/Simulation" element={<Simulation />} />
          <Route path="/StripLayout" element={<StripLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
