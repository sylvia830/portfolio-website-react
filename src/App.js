import React from "react";
import NavbarComp from "./NavbarComp";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import {
	Routes,
	Route,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Experiences from "./Experiences";  
import Project from "./Project";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <NavbarComp />
		  <Routes>
		    <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={ <About />} />
        <Route path="/experiences" element={<Experiences />}/>
		    <Route path="/project" element={<Project />}/>
		    <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
