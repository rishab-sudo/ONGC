import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaGlobe,
  FaFlag,
  FaFacebookF,
  FaInstagram
} from "react-icons/fa";

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
    <button className="enquiry-btn">Enquiry Now</button>
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

     
        <div className="middle-right">
          <img src={require("../assets/icons/ongc-partner1.png")} className="partner-icon" title="]" />
       <img src={require("../assets/icons/ongc-partner2.png")}  className="partner-icon" title="" />
        </div>
      </div>

      {/* NAVIGATION BAR */}
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
          <button
            className="hamburger"
            aria-label="toggle menu"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

         
          <nav className="nav-links-wrap" aria-label="Primary">
            <ul className="nav-links">
              <li className="home-link"><a href="/home">Home</a></li>

              <li className="dropdown"
                onMouseEnter={() => setOpenDropdown("about")}
                onMouseLeave={() => setOpenDropdown(null)}
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
                onMouseEnter={() => setOpenDropdown("academics")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="drop-btn">Academics</button>
                <ul className={`dropdown-menu ${openDropdown === "academics" ? "show" : ""}`}>
                  <li><a href="/Curriculum">Curriculum</a></li>
                  <li><a href="/AcademicsCalendar">Academics Calendar</a></li>
                  <li><a href="/ExaminationScheme">Examination Scheme</a></li>
                </ul>
              </li>

              <li className="dropdown"
                onMouseEnter={() => setOpenDropdown("life")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="drop-btn">Student Life</button>
                <ul className={`dropdown-menu ${openDropdown === "life" ? "show" : ""}`}>
                  <li><a href="/activities">Activities</a></li>
                  <li><a href="/Gallery">Gallery</a></li>
                </ul>
              </li>

              <li className="dropdown"
                onMouseEnter={() => setOpenDropdown("admission")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="drop-btn">Admission</button>
                <ul className={`dropdown-menu ${openDropdown === "admission" ? "show" : ""}`}>
                  <li><a href="/AdmissionPolicy">Admission Policy</a></li>
                  <li><a href="/tc">TC Verification</a></li>
                </ul>
              </li>

              <li className="dropdown"
                onMouseEnter={() => setOpenDropdown("policy")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="drop-btn">School Policy</button>
                <ul className={`dropdown-menu ${openDropdown === "policy" ? "show" : ""}`}>
                  <li><a href="/GeneralPolicy">General Policy</a></li>
                  <li><a href="/AbsencePolicy">Absence Policy</a></li>
                  <li><a href="/Punishment">Punishment Policy</a></li>
                </ul>
              </li>

              <li className="dropdown"
                onMouseEnter={() => setOpenDropdown("disclosure")}
                onMouseLeave={() => setOpenDropdown(null)}
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

            <li className="side-dropdown">
              <button onClick={() => setMobileStudentLifeOpen(!mobileStudentLifeOpen)} className="side-toggle">
                Student Life {mobileStudentLifeOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {mobileStudentLifeOpen && (
                <ul className="side-dropdown-menu">
                  <li><a href="/activities" onClick={toggleMenu}>Activities</a></li>
                  <li><a href="/Gallery" onClick={toggleMenu}>Gallery</a></li>
                </ul>
              )}
            </li>

            <li className="side-dropdown">
              <button onClick={() => setMobileAdmissionOpen(!mobileAdmissionOpen)} className="side-toggle">
                Admission {mobileAdmissionOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {mobileAdmissionOpen && (
                <ul className="side-dropdown-menu">
                  <li><a href="/AdmissionPolicy" onClick={toggleMenu}>Admission Policy</a></li>
                  <li><a href="/tc" onClick={toggleMenu}>TC Verification</a></li>
                </ul>
              )}
            </li>

            <li className="side-dropdown">
              <button onClick={() => setMobilePolicyOpen(!mobilePolicyOpen)} className="side-toggle">
                School Policy {mobilePolicyOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {mobilePolicyOpen && (
                <ul className="side-dropdown-menu">
                  <li><a href="/GeneralPolicy" onClick={toggleMenu}>General Policy</a></li>
                  <li><a href="/AbsencePolicy" onClick={toggleMenu}>Absence Policy</a></li>
                  <li><a href="/Punishment" onClick={toggleMenu}>Punishment Policy</a></li>
                </ul>
              )}
            </li>

            <li className="side-dropdown">
              <button onClick={() => setMobileDisclosureOpen(!mobileDisclosureOpen)} className="side-toggle">
                Disclosures {mobileDisclosureOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {mobileDisclosureOpen && (
                <ul className="side-dropdown-menu">
                  <li><a href="/Mandatory" onClick={toggleMenu}>Mandatory PD</a></li>
                </ul>
              )}
            </li>

            <li><a href="/contact" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
        </aside>
      </header>
    </>
  );
};

export default Navbar;
