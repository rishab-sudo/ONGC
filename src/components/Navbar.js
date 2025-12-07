import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

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

  // 🔥 Scroll state for desktop background
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 992) {        // apply only desktop
        setIsScrolled(window.scrollY > 80);  // when scroll > 80px
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (window.innerWidth < 992) {
      setMenuOpen(prev => !prev);
    }
  };

  return (
    <>
      {/* 🔥 Add dynamic class */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          
          <div>
            <a href="/home">
              <img className="logo" src={require("../assets/ONGC LOGO 11.png")} alt="Logo" />
            </a>
          </div>

          <ul className="nav-links">
             <li><a href="/home" className="">Home</a></li>
            {/* About */}
            <li className="dropdown"
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="dropdown-toggle">About</span>
              <ul className={`dropdown-menu ${openDropdown === "about" ? 'show' : ''}`}>
                <li><a href="/about">About Us</a></li>
                <li><a href="/ParentsGuideLines">Parents Guidelines</a></li>
                <li><a href="/dressCode">Dress Code</a></li>
                <li><a href="/feeStructure">Fee Structure</a></li>
              </ul>
            </li>

            {/* Academics */}
            <li className="dropdown"
              onMouseEnter={() => setOpenDropdown("academics")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="dropdown-toggle">Academics</span>
              <ul className={`dropdown-menu ${openDropdown === "academics" ? 'show' : ''}`}>
                <li><a href="/Curriculum">Curriculum</a></li>
                <li><a href="/AcademicsCalendar">Academics Calendar</a></li>
                <li><a href="/ExaminationScheme">Examination Scheme</a></li>
              </ul>
            </li>

            {/* Student Life */}
            <li className="dropdown"
              onMouseEnter={() => setOpenDropdown("studentLife")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="dropdown-toggle">Student Life</span>
              <ul className={`dropdown-menu ${openDropdown === "studentLife" ? 'show' : ''}`}>
                <li><a href="/activities">Activities</a></li>
                <li><a href="/Gallery">Gallery</a></li>
              </ul>
            </li>

            {/* Admission */}
            <li className="dropdown"
              onMouseEnter={() => setOpenDropdown("admission")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="dropdown-toggle">Admission</span>
              <ul className={`dropdown-menu ${openDropdown === "admission" ? 'show' : ''}`}>
                <li><a href="/AdmissionPolicy">Admission policy</a></li>
                <li><a href="/tc">TC Verification</a></li>
              </ul>
            </li>

            {/* School Policy */}
            <li className="dropdown"
              onMouseEnter={() => setOpenDropdown("policy")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="dropdown-toggle">School Policy</span>
              <ul className={`dropdown-menu ${openDropdown === "policy" ? 'show' : ''}`}>
                <li><a href="/GeneralPolicy">General Policy</a></li>
                <li><a href="/AbsencePolicy">Absence Policy</a></li>
                <li><a href="/Punishment">Punishment Policy</a></li>
              </ul>
            </li>

            {/* Disclosures */}
            <li className="dropdown"
              onMouseEnter={() => setOpenDropdown("disclosure")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="dropdown-toggle">Disclosures</span>
              <ul className={`dropdown-menu ${openDropdown === "disclosure" ? 'show' : ''}`}>
                <li><a href="/Mandatory">Mandatory PD</a></li>
              </ul>
            </li>

            <li><a href="/contact" className="contact-btn desktop-only">Contact Us</a></li>
          </ul>

          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
          <div className="side-menu-header"></div>
          <ul className="side-nav-links">

            <li><a href="/home" onClick={toggleMenu}>Home</a></li>

            {/* About */}
            <li className="side-dropdown">
              <span onClick={() => setMobileAboutOpen(!mobileAboutOpen)}>
                About {mobileAboutOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {mobileAboutOpen && (
                <ul className="side-dropdown-menu">
                  <li><a href="/about" onClick={toggleMenu}>About Us</a></li>
                  <li><a href="/ParentsGuideLines" onClick={toggleMenu}>Parents Guidelines</a></li>
                  <li><a href="/dressCode" onClick={toggleMenu}>Dress Code</a></li>
                  <li><a href="/feeStructure" onClick={toggleMenu}>Fee Structure</a></li>
                </ul>
              )}
            </li>

            {/* Academics */}
            <li className="side-dropdown">
              <span onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}>
                Academics {mobileAcademicsOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {mobileAcademicsOpen && (
                <ul className="side-dropdown-menu">
                  <li><a href="/Curriculum" onClick={toggleMenu}>Curriculum</a></li>
                  <li><a href="/AcademicsCalendar" onClick={toggleMenu}>Academics Calendar</a></li>
                  <li><a href="/ExaminationScheme" onClick={toggleMenu}>Examination Scheme</a></li>
                </ul>
              )}
            </li>

            {/* Student Life */}
            <li className="side-dropdown">
              <span onClick={() => setMobileStudentLifeOpen(!mobileStudentLifeOpen)}>
                Student Life {mobileStudentLifeOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {mobileStudentLifeOpen && (
                <ul className="side-dropdown-menu">
                  <li><a href="/activities" onClick={toggleMenu}>Activities</a></li>
                  <li><a href="/Gallery" onClick={toggleMenu}>Gallery</a></li>
                </ul>
              )}
            </li>

            {/* Admission */}
            <li className="side-dropdown">
              <span onClick={() => setMobileAdmissionOpen(!mobileAdmissionOpen)}>
                Admission {mobileAdmissionOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {mobileAdmissionOpen && (
                <ul className="side-dropdown-menu">
                  <li><a href="/AdmissionPolicy" onClick={toggleMenu}>Admission Policy</a></li>
                  <li><a href="/tc" onClick={toggleMenu}>TC Verification</a></li>
                </ul>
              )}
            </li>

            {/* Policy */}
            <li className="side-dropdown">
              <span onClick={() => setMobilePolicyOpen(!mobilePolicyOpen)}>
                School Policy {mobilePolicyOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {mobilePolicyOpen && (
                <ul className="side-dropdown-menu">
                  <li><a href="/GeneralPolicy" onClick={toggleMenu}>General Policy</a></li>
                  <li><a href="/AbsencePolicy" onClick={toggleMenu}>Absence Policy</a></li>
                  <li><a href="/Punishment" onClick={toggleMenu}>Punishment Policy</a></li>
                </ul>
              )}
            </li>

            {/* Disclosures */}
            <li className="side-dropdown">
              <span onClick={() => setMobileDisclosureOpen(!mobileDisclosureOpen)}>
                Disclosures {mobileDisclosureOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {mobileDisclosureOpen && (
                <ul className="side-dropdown-menu">
                  <li><a href="/Mandatory" onClick={toggleMenu}>Mandatory PD</a></li>
                </ul>
              )}
            </li>

            <li><a href="/contact" onClick={toggleMenu}>Contact Us</a></li>

          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
