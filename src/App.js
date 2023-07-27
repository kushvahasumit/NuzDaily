import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
 

export default class App extends Component {
  render() {
    return (
  <Router>
       
        <div>
          <Navbar />
          
          <Routes>
          <Route exact  path="/" element={<News pageSize={5} />} />

          <Route exact  path="/about" element={<About />} />
          <Route exact  path="/contact" element={<Contact />} />
          </Routes>
         
        </div>
      </Router>
    );
  }
}
