import React from "react";
import "./App.css";
import Home from "./Home.js";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Project from "./Project.js";
import About from "./About.js";
import Contact from './Contact.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={Project} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
