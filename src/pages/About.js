import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner';
import ScrolLinks from '../components/ScrolLinks';
import PolicyCards from '../components/PolicyCards';
import './About.css';
import QuerySection from '../components/QuerySection';

const About = () => {
  const section1Images = [
    require('../assets/campur_life_1.jpg'),
    require('../assets/ongc-school-img.jpg'),
    require('../assets/testimonial_img.png'),
  ];

  const section2Images = [
    require('../assets/testimonial_img.png'),
    require('../assets/ongc-school-img.jpg'),
    require('../assets/campur_life_1.jpg'),
  ];

  const section3Images = [
    require('../assets/ongc-school-img.jpg'),
    require('../assets/campur_life_1.jpg'),
    require('../assets/testimonial_img.png'),
  ];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setIndex1((prev) => (prev + 1) % section1Images.length);
    }, 2000);

    const interval2 = setInterval(() => {
      setIndex2((prev) => (prev + 1) % section2Images.length);
    }, 2500);

    const interval3 = setInterval(() => {
      setIndex3((prev) => (prev + 1) % section3Images.length);
    }, 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <>
      <Banner
        title="About Us"
        image={require('../assets/parents-guide-img.jpg')}
        breadcrumbs={[
          { label: 'HOME', link: '/home' },
          { label: 'About Us', link: '/About Us' },
        ]}
      />
      <ScrolLinks />

      {/* ===== Section 1 ===== */}
      <Container fluid className="about-fluid">
      <Container className="about-container1">
  <div className="about-content-section1">
    <p className="page-heading about-heading">About ONGC Community</p>
    <p className="page-text">
      <span className="highlight">“Making Tomorrow Brighter”</span> is the motto of 
      <span className="highlight"> ONGC Community School</span>. 
      <span className="highlight"> ONGC Community School</span> is the 
      <span className="highlight"> first of its kind in India</span>. Launched by 
      <span className="highlight"> ONGC</span> with 
      <span className="highlight"> SDMC Trust</span> as its 
      <span className="highlight"> COM Partner</span>. Our aim was to start a school
      that had <span className="highlight"> sensitivity and a deeper understanding of the child</span>.
    </p>

    <p className="page-text">
      <span className="highlight">ONGC CS</span> epitomises 
      <span className="highlight"> vibrancy and freshness</span>, dovetailing much of the 
      <span className="highlight"> ethos of the new post-independence India</span> into its 
      <span className="highlight"> educational program and philosophy</span>. The school is a 
      <span className="highlight"> secular co-educational institution</span>, integrating into
      its curriculum <span className="highlight"> concern for the environment</span>, the 
      <span className="highlight"> spirit of community service</span>, and 
      <span className="highlight"> international peace and brotherhood</span>.
    </p>

    <p className="page-text">
      Besides <span className="highlight"> spacious classrooms</span> and 
      <span className="highlight"> playgrounds</span>, we have fully developed
      facilities for each department, including 
      <span className="highlight"> Maths and Science laboratories</span>, a 
      <span className="highlight"> Computer Resource Center</span>, 
      <span className="highlight"> well-stocked libraries</span>, an 
      <span className="highlight"> auditorium and open-air stage</span>, and a 
      <span className="highlight"> Teachers’ Learning Center</span>.
    </p>
  </div>
</Container>


        {/* ===== Section 2 ===== */}
        <Container fluid className="about-container-fluid3 g-0">
          <Container className="about-content-section3">
            <div className="about-section3-left-side fade-image uniform-image">
              <img src={section1Images[index1]} alt="About section 1" />
            </div>
            <div className="about-section3-right-side">
              <p className='page-heading mvc-heading'>Mission</p>
              <p className='page-text'>
                To nurture every child with sensitivity, care, and a deeper understanding, 
                fostering their holistic development. ONGC Community School aims to provide 
                an education that combines academic excellence with social responsibility, 
                environmental awareness, and a spirit of community service.
              </p>
            </div>
          </Container>
        </Container>

        <Container fluid className="about-container-fluid3 g-0">
          <Container className="about-content-section3">
            <div className="about-section3-right-side">
              <p className='page-heading mvc-heading'>Vision</p>
              <p className='page-text'>
                To be a pioneering institution that embodies vibrancy, innovation, and
                inclusivity in education, shaping future-ready individuals who contribute 
                positively to society, uphold secular values, and promote international peace and brotherhood.
              </p>
            </div>
            <div className="about-section3-left-side fade-image uniform-image">
              <img src={section2Images[index2]} alt="About section 2" />
            </div>
          </Container>
        </Container>

        <Container fluid className="about-container-fluid3 g-0">
          <Container className="about-content-section3">
            <div className="about-section3-left-side fade-image uniform-image">
              <img src={section3Images[index3]} alt="About section 3" />
            </div>
            <div className="about-section3-right-side">
              <p className='page-heading mvc-heading'>Values</p>
              <p className='page-text'>
                Excellence in Learning: Encouraging curiosity, critical thinking, and lifelong learning.<br /><br />
                Integrity and Respect: Upholding honesty, ethical behavior, and mutual respect.<br /><br />
                Community and Environment: Promoting social responsibility, environmental consciousness, and active community engagement.<br /><br />
                Inclusivity and Diversity: Celebrating secularism, diversity, and equal opportunities for all students.
              </p>
            </div>
          </Container>
        </Container>
      </Container>

      <PolicyCards />
      <QuerySection />
    </>
  );
};

export default About;
