import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./pages/Home"
import Fee from "./pages/Fee"
import ParentsGuideLines from './pages/ParentsGuideLines';
import DressCode from './pages/DressCode';
import About from './pages/About';
import Curriculum from './pages/Curriculum';
import AcademicsCalendar from "./pages/AcademicsCalendar"
import AdmissionPolicy from "./pages/AdmissionPolicy"
import Activities from './pages/Activities';
import Mandatory from "./pages/Mandatory";
import GeneralPolicy from "./pages/GeneralPolicy";
import Punishment from "./pages/Punishment"
import Gallery from "./pages/Gallery";
import AbsencePolicy  from "./pages/AbsencePolicy"

function App() {

  return (
  
    <Router>
      <div className="App">
      <div>  <Header className="mt-0"/></div>

       <div style={{marginTop:"2rem"}}><Navbar /></div> 
    
        <Routes>
             <Route path="*" element={<Home />} />
             <Route path="/" element={<Home />} />
           <Route path="/home" element={<Home />} />
             <Route path="/about" element={<About />} />
            <Route path="/feeStructure" element={<Fee />} />
                <Route path="/ParentsGuideLines" element={<ParentsGuideLines />} />
        {/* <Route path="/" element={<Demo />} /> */}
          <Route path="/contact" element={<Contact />} />
        <Route path="/DressCode" element={<DressCode />} />
             <Route path="/Curriculum" element={<Curriculum />} />
              <Route path="/AcademicsCalendar" element={<AcademicsCalendar />} />
       <Route path="/AdmissionPolicy" element={<AdmissionPolicy />} />
           <Route path="/Activities" element={<Activities />} />
            <Route path="/Mandatory" element={<Mandatory />} />
                   <Route path="/GeneralPolicy" element={<GeneralPolicy />} />
                     <Route path="/AbsencePolicy" element={<AbsencePolicy />} />
                              <Route path="/Punishment" element={<Punishment />} />
            
               <Route path="/Gallery" element={<Gallery />} />
           
       
         </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
