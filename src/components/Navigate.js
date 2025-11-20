import React from 'react';
import { Container } from 'react-bootstrap';
import { MdOutlineArrowOutward } from "react-icons/md";
import "./Navigate.css";
import { Link } from 'react-router-dom';

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
At ONGC Community School, learning goes beyond books, it’s a journey of curiosity, courage, and character. We inspire 
students to think deeply, act compassionately, and grow confidently through holistic and value-based education.
 </p>
  <p className='page-text'>
Our nurturing environment encourages innovation, teamwork, and lifelong learning. By blending knowledge with values,
 we empower young minds to explore their potential and evolve into responsible global citizens, ready to shape a brighter and better tomorrow.
  </p>

  {/* ✅ Add curved arrow container here */}
  <div className="curved-arrow"></div>
<div className='navigate-btn-div'>
  
  <button className='navigate-view-more-btn'><Link className='view-more-btn' style={{color:"#000"}} to="/activities">View More </Link></button>
 </div>
</div>
       {/* RIGHT SECTION */}
        <div className='navigate-right-section'>
          <div className='navigate-row'>
            <div className='navigate-img-text-div' onClick={() => handleRedirect("/Gallery")}>
              <div className="img-wrapper">
                <img className='right-img' src={require("../assets/gallery/sports/co-1.jpg")} alt="Campus" />
              </div>
              <div className='img-bottom'>
              <p>Campus Student Life</p>
                <MdOutlineArrowOutward className="arrow" />
              </div>
            </div>

            <div className='navigate-img-text-div top-margin' onClick={() => handleRedirect("/activities")}>
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
            <div className='navigate-img-text-div' onClick={() => handleRedirect("/facilities")} >
              <div className="img-wrapper">
                <img className='right-img' src={require("../assets/gallery/sports/co-7.jpg")} alt="Campus" />
              </div>
              <div className='img-bottom'>
                <p>Facilities</p>
                <MdOutlineArrowOutward className="arrow" />
              </div>
            </div>

            <div className='navigate-img-text-div top-margin' onClick={() => handleRedirect("Mandatory")}>
              <div className="img-wrapper">
                <img className='right-img' src={require("../assets/mandatory2.png")} alt="Campus"/>
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
