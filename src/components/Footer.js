import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer-section">
      <div className="footer-overlay">

        <Row className="footer-content-wrapper">
          {/* Left Column */}
          <Col lg={4} md={12} sm={12} className="footer-column-wrapper">
            <div className="footer-left">
              <img src={require("../assets/ongc-logo1.jpg")} alt="logo" className="footer-logo" />
              <div className="trust-text">
                <h2>Building Excellence Through Innovation, Quality, and Community Focus</h2>
                <p>
                  ONGC School fosters trust, innovation, and excellence. Through modern practices and a community-driven approach,
                  we empower students and teachers, providing a nurturing environment and quality resources to shape confident, future-ready learners.
                </p>
              </div>
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61578129710470"><FaFacebook /></a>
                <a href="https://www.instagram.com/alutuff.panels/"><FaInstagram /></a>
                <a href="https://wa.me/918009244441" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                <a href="https://www.linkedin.com/company/alutuff/"><FaLinkedin /></a>
              </div>
            </div>
          </Col>

          {/* Center Column - Quick Links */}
          <Col lg={3} md={6} sm={12} className="footer-column-wrapper">
            <div className="footer-column">
              <div className="col-text-div">
                <h4>Quick Links</h4>
                <div className="footer-links-column">
                  <a href="/home">Home</a>
                  <a href="/about">About Us</a>
                  <a href="/Curriculum">Curriculum</a>
                  <a href="/AcademicsCalendar">Academics Calendar</a>
                  <a href="/Gallery">Gallery</a>
                  <a href="/contact">Contact Us</a>

                </div>
              </div>
            </div>
          </Col>

          {/* Right Column - Contact Info */}
          <Col lg={3} md={5} sm={12} className="footer-column-wrapper">
            <div className="footer-column">
              <div className="col-text-div">
                <h4>Contact Info</h4>
                <div className="footer-contact-info">
                  <p><strong>Address:</strong><br />xxxxx International,<br />xxxxx Road, xxxxxx xxxxx, Bareilly.</p>
                  <p><strong>Phone:</strong><br />
                    <a href="tel:+916396854974">+91 xxxxx xxxxx</a>
                  </p>
                  <p><strong>Email:</strong><br />
                    <a href="mailto:xxxxx@alutuff.in">sales@xxxxx.in</a>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

      </div>

      <div className='copyright-div'>
        Copyright © 2025 <span style={{ color: "#ea3138" }}>ONGC School</span>. All Right Reserved.
      </div>
    </Container>
  );
};

export default Footer;
