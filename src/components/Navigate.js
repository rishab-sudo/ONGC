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
  <p className='page-heading' style={{color:"#fff"}}>Navigate</p>
  <p className='page-text'>
    Far far away, behind the word mountains, far from the Consonantia,
    there live the blind texts. Separated they marks grove right at the coast of the Semantics.
  </p>
  <p className='page-text'>
    Far far away, behind the word mountains, far from the Consonantia,
    there live the blind texts. Separated they marks grove right at the coast of the Semantics.
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
                <img src={require("../assets/campur_life_1.jpg")} alt="Campus" />
              </div>
              <div className='img-bottom'>
                <p>Campus Student Life</p>
                <MdOutlineArrowOutward className="arrow" />
              </div>
            </div>

            <div className='navigate-img-text-div top-margin' onClick={() => handleRedirect("#")}>
              <div className="img-wrapper">
                <img src={require("../assets/campur_life_1.jpg")} alt="Campus" />
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
                <img src={require("../assets/campur_life_1.jpg")} alt="Campus" />
              </div>
              <div className='img-bottom'>
                <p>Facilities</p>
                <MdOutlineArrowOutward className="arrow" />
              </div>
            </div>

            <div className='navigate-img-text-div top-margin' onClick={() => handleRedirect("#")}>
              <div className="img-wrapper">
                <img src={require("../assets/campur_life_1.jpg")} alt="Campus" />
              </div>
              <div className='img-bottom'>
                <p>Student Resources</p>
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
