import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./HomeAbout.css"

const HomeAbout = () => {
  return (
    <Container fluid className='homeAbout-fluid'>
      <Container fluid className='homeAbout-container' >
        <div className='homeabout-img-div'>
          <img className='homeabout-img' src={require("../assets/ongc-school-img.jpg")} alt="" />
        </div>

     <div className='homeabout-text-div'>
  <h5 className='special-heading'>ABOUT US</h5>
  <h1 className='page-heading home-about-heading'>
    Building Bright Futures Through Quality Education
  </h1>

  <p className='page-text'>
    ONGC School is a CBSE-affiliated institution dedicated to nurturing young minds from Kindergarten to Class 12.
    We focus on academic excellence, strong moral values, and all-round development to prepare students for success in life.
  </p>

  <p className='sub-heading'>Academic Excellence</p>
  <p className='page-text'>
    Our well-structured curriculum and experienced faculty ensure that every student develops critical thinking,
    problem-solving skills, and a love for learning.
  </p>

  <p className='sub-heading'>Holistic Development</p>
  <p className='page-text'>
    We believe education goes beyond books, promoting sports, arts, and leadership activities that help students
    grow into confident and responsible individuals.
  </p>

  <p className='sub-heading'>Values & Discipline</p>
  <p className='page-text'>
    Rooted in integrity and respect, ONGC School instills strong values and discipline that guide students both
    in academics and in life.
  </p>

  <div className='aboutus-btn-div'>
      <Link to="/about" ><button>More About Us</button></Link>
  </div>
</div>

      </Container>
    </Container>
  )
}

export default HomeAbout