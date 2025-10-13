import React from 'react'
import { Container } from 'react-bootstrap'
import "./HomeAbout.css"

const HomeAbout = () => {
  return (
    <Container fluid className='homeAbout-fluid'>
      <Container fluid className='homeAbout-container' >
        <div className='homeabout-img-div'>
          <img className='homeabout-img' src={require("../assets/ongc-school-img.jpg")} alt="" />
        </div>

        <div className='homeabout-text-div'>
          <p>ABOUT US</p>
          <p className='page-heading'>The largest & Most Diverse Universities in the United Emirates</p>

          <p>Far far away, behind the word mountains, far from the Consonantia, there live the blind texts.
            Separated they marks grove right at the coast of the Semantics a large language ocean</p>

          <p className='sub-heading'>Graduate Program</p>
          <p>Browse the Undergraduate Degrees</p>

          <p className='sub-heading'>Graduate Program</p>
          <p>Browse the Undergraduate Degrees</p>

  <p className='sub-heading'>Graduate Program</p>
          <p>Browse the Undergraduate Degrees</p>

          <div className='aboutus-btn-div'>
            <button>More About Us</button>
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default HomeAbout