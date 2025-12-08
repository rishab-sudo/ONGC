import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
import { FaPhoneVolume, FaEnvelope } from "react-icons/fa6";
import { SiLibreofficewriter } from "react-icons/si";
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Container fluid className="contact-page">
   <div className="contact-heading">
          <h3 className='page-heading'>CONTACT US</h3>
          <p className='page-text'>  Have questions or need any help? We’re here to help you with that</p>
        </div>
      {/* ====== TOP CONTAINER SECTION ====== */}
      <Container className="contact-top-box">
 <div className="contact-grid">

          {/* 1 --- CONTACT */}
          <div className="contact-item">
            <FaPhoneVolume className='contact-icon'/>
            <h5>Contact</h5>
            <p>+91 8009244441</p>
          </div>

          {/* 2 --- EMAIL */}
          <div className="contact-item">
            <FaEnvelope className='contact-icon'/>
            <h5>Email</h5>
            <p>info@ongcschool.com</p>
          </div>

          {/* 3 --- ADDRESS */}
          <div className="contact-item">
            <SiLibreofficewriter className='contact-icon'/>
            <h5>Address</h5>
            <p>Hargaon- Laharpur road,<br/>paintala village, near ranifarm<br/>Sitapur (UP)</p>
          </div>

        </div>
      </Container>

      {/* ===== SECOND SECTION (MAP LEFT + FORM RIGHT) ===== */}
      <Container className="contact-lower-section">

        <div className='map-box'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.025123919405!2d79.356557!3d28.42793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4f2b7c32653%3A0xf47cdb5f9ebf7a9f!2sBandia%20Road%2C%20Parsakhera%20Industrial%20Area%2C%20Bareilly%2C%20Uttar%20Pradesh%20243122!5e0!3m2!1sen!2sin!4v1692999999999!5m2!1sen!2in"
            allowFullScreen="" loading="lazy" title="Google Map">
          </iframe>
        </div>

        <div className='form-box'>
          <ContactForm />
        </div>

      </Container>
    </Container>
  );
};

export default Contact;
