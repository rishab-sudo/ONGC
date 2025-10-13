import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ For desktop dropdowns
  const [openDropdown, setOpenDropdown] = useState(null);

  // ✅ Separate states for each mobile dropdown
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [mobileStudentLifeOpen, setMobileStudentLifeOpen] = useState(false);
  const [mobileAdmissionOpen, setMobileAdmissionOpen] = useState(false);
  const [mobileDisclosureOpen, setMobileDisclosureOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth < 992) {
      setMenuOpen(prev => !prev);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="nav-links">
            <li><a href="/home">Home</a></li>

            {/* About Dropdown */}
            <li
              className="dropdown"
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

            {/* Academics Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => setOpenDropdown("academics")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="dropdown-toggle">Academics</span>
              <ul className={`dropdown-menu ${openDropdown === "academics" ? 'show' : ''}`}>
                <li><a href="/Curriculum">Curriculum</a></li>
                <li><a href="/AcademicsCalendar">Academics Calendar</a></li>
                <li><a href="/examinationScheme">Examination Scheme</a></li>
              </ul>
            </li>

            {/* Student Life Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => setOpenDropdown("studentLife")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="dropdown-toggle">Student Life</span>
              <ul className={`dropdown-menu ${openDropdown === "studentLife" ? 'show' : ''}`}>
                <li><a href="/activities">Activities</a></li>
                <li><a href="/Gallery">Gallery</a></li>
              </ul>
            </li>

            {/* Admission Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => setOpenDropdown("admission")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="dropdown-toggle">Admission</span>
              <ul className={`dropdown-menu ${openDropdown === "admission" ? 'show' : ''}`}>
                <li><a href="/AdmissionPolicy">Admission policy</a></li>
                <li><a href="/tc">TC Verification</a></li>
              </ul>
            </li>

            {/* Disclosures Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => setOpenDropdown("disclosure")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="dropdown-toggle">Disclosures</span>
              <ul className={`dropdown-menu ${openDropdown === "disclosure" ? 'show' : ''}`}>
                <li><a href="/Mandatory">Mandatory PD</a></li>
              </ul>
            </li>

            <li>
              <a href="/contact" className="dealer-btn desktop-only">Contact Us</a>
            </li>
          </ul>

          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* ✅ MOBILE MENU FIXED */}
        <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
          <div className="side-menu-header"></div>

          <ul className="side-nav-links">
            <li><a href="/home" onClick={toggleMenu}>Home</a></li>

            {/* About */}
            <li className="side-dropdown">
              <span
                className="side-about-title"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              >
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
              <span
                className="side-about-title"
                onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}
              >
                Academics {mobileAcademicsOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {mobileAcademicsOpen && (
                <ul className="side-dropdown-menu">
                  <li><a href="/Curriculum" onClick={toggleMenu}>Curriculum</a></li>
                  <li><a href="/AcademicsCalendar" onClick={toggleMenu}>Academics Calendar</a></li>
                  <li><a href="/examinationScheme" onClick={toggleMenu}>Examination Scheme</a></li>
                </ul>
              )}
            </li>

            {/* Student Life */}
            <li className="side-dropdown">
              <span
                className="side-about-title"
                onClick={() => setMobileStudentLifeOpen(!mobileStudentLifeOpen)}
              >
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
              <span
                className="side-about-title"
                onClick={() => setMobileAdmissionOpen(!mobileAdmissionOpen)}
              >
                Admission {mobileAdmissionOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {mobileAdmissionOpen && (
                <ul className="side-dropdown-menu">
                  <li><a href="/AdmissionPolicy" onClick={toggleMenu}>Admission Policy</a></li>
                  <li><a href="/tc" onClick={toggleMenu}>TC Verification</a></li>
                </ul>
              )}
            </li>

            {/* Disclosures */}
            <li className="side-dropdown">
              <span
                className="side-about-title"
                onClick={() => setMobileDisclosureOpen(!mobileDisclosureOpen)}
              >
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
