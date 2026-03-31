import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const [openDropdown, setOpenDropdown] = useState(null);

  // mobile dropdown states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [mobileStudentLifeOpen, setMobileStudentLifeOpen] = useState(false);
  const [mobileAdmissionOpen, setMobileAdmissionOpen] = useState(false);
  const [mobilePolicyOpen, setMobilePolicyOpen] = useState(false);
  const [mobileDisclosureOpen, setMobileDisclosureOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((p) => !p);
  };
useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  const dropdownRef = useRef();
  return (
    <>
      {/* TOP HEADER */}
  <div className="top-header">
<div className="top-left">
  <div className="marquee">
    <div className="marquee-content">
      <span>CBSE AFFILIATION No. 2132671  Phone: +91 8009244441</span>
      <span>CBSE AFFILIATION No. 2132671  Phone: +91 8009244441</span>
      <span>CBSE AFFILIATION No. 2132671  Phone: +91 8009244441</span>

      {/* Duplicate set for seamless loop */}
      <span>CBSE AFFILIATION No. 2132671  Phone: +91 8009244441</span>
      <span>CBSE AFFILIATION No. 2132671  Phone: +91 8009244441</span>
      <span>CBSE AFFILIATION No. 2132671  Phone: +91 8009244441</span>
    </div>
  </div>
</div>


  <div className="top-right">
 <a 
      href="https://www.youtube.com/@ONGCCommunitySchool" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="facebook"
    >
      <FaFacebookF />
    </a>

    <a 
      href="https://www.instagram.com/ongccommunityschool/" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="instagram"
    >
      <FaInstagram />
    </a>
   <a href="mailto:info@example.com" aria-label="email">
      <FaEnvelope />
    </a>
    <Link to ="/contact"> <button className="enquiry-btn">Enquiry Now</button></Link>

   

     <button
            className="hamburger"
            aria-label="toggle menu"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
  </div>
</div>

      {/* MIDDLE HEADER */}
      <div className="middle-header">
    
        <div className="middle-left">
          <a href="/home">
            <img
              src={require("../assets/ONGC LOGO 11.png")}
              alt="logo"
              className="mid-logo"
            />
          </a>
        </div>

     
     {/* NAVIGATION BAR */}
     <div>
      <header className="navigation-bar" role="banner">
        <div className="nav-inner">
          {/* <div className="nav-logo">
            <a href="/home">
              <img
                src={require("../assets/ONGC LOGO 11.png")}
                alt="logo"
                className="nav-logo-img"
              />
            </a>
          </div> */}

          {/* Step 7: Hamburger should be at RIGHT on mobile */}
         

         
          <nav className="nav-links-wrap" aria-label="Primary">
            <ul className="nav-links">
              <li className="home-link"><a href="/home">Home</a></li>

              <li className="dropdown"
            onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}
              >
                <button className="drop-btn">
                  About
                </button>
                <ul className={`dropdown-menu ${openDropdown === "about" ? "show" : ""}`}>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/ParentsGuideLines">Parents Guidelines</a></li>
                  <li><a href="/dressCode">Dress Code</a></li>
                  <li><a href="/feeStructure">Fee Structure</a></li>
                </ul>
              </li>

              <li className="dropdown"
             onClick={() => setOpenDropdown(openDropdown === "academics" ? null : "academics")}
              >
                <button className="drop-btn">Academics</button>
                <ul className={`dropdown-menu ${openDropdown === "academics" ? "show" : ""}`}>
                  <li><a href="/Curriculum">Curriculum</a></li>
                  <li><a href="/AcademicsCalendar">Academics Calendar</a></li>
                  <li><a href="/ExaminationScheme">Examination Scheme</a></li>
                </ul>
              </li>

              <li className="dropdown"
          onClick={() => setOpenDropdown(openDropdown === "life" ? null : "life")}
              >
                <button className="drop-btn">Student Life</button>
                <ul className={`dropdown-menu ${openDropdown === "life" ? "show" : ""}`}>
                  <li><a href="/activities">Activities</a></li>
                  <li><a href="/Gallery">Gallery</a></li>
                </ul>
              </li>

              <li className="dropdown"
onClick={() => setOpenDropdown(openDropdown === "admission" ? null : "admission")}
              >
                <button className="drop-btn">Admission</button>
                <ul className={`dropdown-menu ${openDropdown === "admission" ? "show" : ""}`}>
                  <li><a href="/AdmissionPolicy">Admission Policy</a></li>
                  <li><a href="/TcVerification">TC Verification</a></li>
                </ul>
              </li>

              <li className="dropdown"
             onClick={() => setOpenDropdown(openDropdown === "policy" ? null : "policy")}
              >
                <button className="drop-btn">School Policy</button>
                <ul className={`dropdown-menu ${openDropdown === "policy" ? "show" : ""}`}>
                  <li><a href="/GeneralPolicy">General Policy</a></li>
                  <li><a href="/AbsencePolicy">Absence Policy</a></li>
                  <li><a href="/Punishment">Punishment Policy</a></li>
                </ul>
              </li>

              <li className="dropdown"
onClick={() => setOpenDropdown(openDropdown === "disclosure" ? null : "disclosure")}
              >
                <button className="drop-btn">Disclosures</button>
                <ul className={`dropdown-menu ${openDropdown === "disclosure" ? "show" : ""}`}>
                  <li><a href="/Mandatory">Mandatory PD</a></li>
                </ul>
              </li>

              <li className="contact-link"><a href="/contact" className="contact-btn">Contact Us</a></li>
            </ul>
          </nav>
        </div>

        {/* MOBILE SIDE MENU - Step 7 behavior:
            - top equals navigation-bar height (so it starts below bar)
            - opens from left
            - links stacked left column
            - mobile dropdown toggles work */}
            
    <aside className={`side-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>

  {/* ✅ LOGO TOP LEFT */}
  <div className="side-logo">
    <a href="/home" onClick={toggleMenu}>
      <img
        src={require("../assets/ONGC LOGO 11.png")}
        alt="logo"
      />
    </a>
  </div>

  <ul className="side-nav-links">
    <li><a href="/home" onClick={toggleMenu}>Home</a></li>

    <li className="side-dropdown">
      <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)} className="side-toggle">
        About {mobileAboutOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {mobileAboutOpen && (
        <ul className="side-dropdown-menu">
          <li><a href="/about" onClick={toggleMenu}>About Us</a></li>
          <li><a href="/ParentsGuideLines" onClick={toggleMenu}>Parents Guidelines</a></li>
          <li><a href="/dressCode" onClick={toggleMenu}>Dress Code</a></li>
          <li><a href="/feeStructure" onClick={toggleMenu}>Fee Structure</a></li>
        </ul>
      )}
    </li>

    {/* SAME ALL BELOW — NO CHANGE */}

    <li className="side-dropdown">
      <button onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)} className="side-toggle">
        Academics {mobileAcademicsOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {mobileAcademicsOpen && (
        <ul className="side-dropdown-menu">
          <li><a href="/Curriculum" onClick={toggleMenu}>Curriculum</a></li>
          <li><a href="/AcademicsCalendar" onClick={toggleMenu}>Academics Calendar</a></li>
          <li><a href="/ExaminationScheme" onClick={toggleMenu}>Examination Scheme</a></li>
        </ul>
      )}
    </li>

    {/* बाकी same */}
    
    <li><a href="/contact" onClick={toggleMenu}>Contact Us</a></li>
  </ul>
</aside>
      </header>
</div>

      </div>

   
    </>
  );
};
 
export default Navbar;
