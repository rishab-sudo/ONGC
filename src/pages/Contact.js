import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
import { FaPhoneVolume, FaEnvelope } from "react-icons/fa6";
import { SiLibreofficewriter } from "react-icons/si";
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Container fluid className="contact-page">
      <Container className="contact-content-container">
        <div className='contact-page-heading-div'>
          <div className='contact-tag-heading-div'>
            <p className='page-tag-heading'>CONTACT US</p>
          </div>
          <h2 className='page-heading' style={{textTransform:"uppercase"}}>ONGC Community School</h2>
          <h5 style={{ marginTop: "-12px" }}>
            Have questions or need any help? We’re here to help you with that
          </h5>
        </div>
{/* section-1 */}
<div className='info-main-div'>
<div className='info-div'>
<FaPhoneVolume className='info-icon'/>
<p>Contact</p>
<p>+91 8009244441</p>
</div>

<div className='info-div'>
    <FaEnvelope className='info-icon'/>
    <p>Email</p>
    <p> info@ongcschool.com</p>
</div>

<div className='info-div'>
    <div><SiLibreofficewriter className='info-icon'/></div>
    <p>Address</p>
    <p>Hargaon- Laharpur road,<br/> paintala village,near ranifarm<br/>Sitapur (UP)</p>
</div>
</div>
        {/* Section 2 */}
        <section className="contact-main-section">

          {/* Left Section: Image + Info Box */}
        <div className='contact-left-img-div'>
            <img className='contact-left-img' src={require("../assets/ongc-school-img.jpg")} alt=""/>
        </div>

          {/* Right Section - Contact Form */}
          <div className="form-container">
            <ContactForm />
          </div>
        </section>

        {/* Section 2 - Google Map */}
        <section className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.025123919405!2d79.356557!3d28.42793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4f2b7c32653%3A0xf47cdb5f9ebf7a9f!2sBandia%20Road%2C%20Parsakhera%20Industrial%20Area%2C%20Bareilly%2C%20Uttar%20Pradesh%20243122!5e0!3m2!1sen!2sin!4v1692999999999!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </section>
      </Container>
    </Container>
  );
};

export default Contact;
