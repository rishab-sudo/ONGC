import React from 'react';
import { Container } from 'react-bootstrap';
import { MdOutlineArrowOutward } from "react-icons/md";
import "./Navigate.css";

const Navigate = () => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <Container fluid className='navigate-fluid'>
      <Container className='navigate-container'>

        {/* LEFT SECTION */}
    <div className='navigate-left-sec'>
  <h1 className='page-heading' style={{color:"#fff",textAlign:"left"}}>Empowering Minds to Learn, Lead, and Grow</h1>
  <p className='page-text'>
Navigate through a world of learning, innovation, and growth at ONGC School. We guide every student on a 
journey of discovery, nurturing knowledge, character, and confidence to help them reach their fullest potential.
 </p>
  <p className='page-text'>
At ONGC School, we help young minds navigate the path of education with curiosity and courage. Through holistic 
learning and value-based guidance, students explore, learn, and grow into responsible global citizens.
  </p>

  {/* ✅ Add curved arrow container here */}
  <div className="curved-arrow"></div>

  <button className='view-more-btn'>View More</button>
</div>

        {/* RIGHT SECTION */}
        <div className='navigate-right-section'>
          <div className='navigate-row'>
            <div className='navigate-img-text-div' onClick={() => handleRedirect("#")}>
              <div className="img-wrapper">
                <img className='right-img' src={require("../assets/gallery/sports/co-1.jpg")} alt="Campus" />
              </div>
              <div className='img-bottom'>
                <p>Campus Student Life</p>
                <MdOutlineArrowOutward className="arrow" />
              </div>
            </div>

            <div className='navigate-img-text-div top-margin' onClick={() => handleRedirect("#")}>
              <div className="img-wrapper">
                <img className='right-img' src={require("../assets/gallery/anualFest/Afn-6.jpg")} alt="Campus" />
              </div>
              <div className='img-bottom'>
                <p>Campus Events</p>
                <MdOutlineArrowOutward className="arrow" />
              </div>
            </div>
          </div>

          <div className='navigate-row'>
            <div className='navigate-img-text-div' onClick={() => handleRedirect("#")}>
              <div className="img-wrapper">
                <img className='right-img' src={require("../assets/gallery/sports/co-7.jpg")} alt="Campus" />
              </div>
              <div className='img-bottom'>
                <p>Facilities</p>
                <MdOutlineArrowOutward className="arrow" />
              </div>
            </div>

            <div className='navigate-img-text-div top-margin' onClick={() => handleRedirect("#")}>
              <div className="img-wrapper">
                <img className='right-img' src={require("../assets/campur_life_1.jpg")} alt="Campus" />
              </div>
              <div className='img-bottom'>
                <p>Mandatory Disclosure</p>
                <MdOutlineArrowOutward className="arrow" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Navigate;
