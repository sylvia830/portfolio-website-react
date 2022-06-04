import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Project from "./Project";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Project />
      <Footer />
      </header>
    </div>
  );
}

export default App;
