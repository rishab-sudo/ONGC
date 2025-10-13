import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner';
import ScrolLinks from '../components/ScrolLinks';
import PolicyCards from '../components/PolicyCards';
import './About.css';

const About = () => {
  // --- Separate rotating image groups for each section
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

  // --- Separate indexes for each section
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  // --- Rotations for each section
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

      <Container fluid className="about-fluid">
        <Container className="about-container1">
          <div className="about-content-section1">
            <p className="page-heading about-heading">About ONGC Community</p>
            <p>
              “Making Tomorrow Brighter” is the motto of ONGC Community School.
              ONGC Community School is the first of its kind in India. Launched by
              ONGC with SDMC Trust-as its COM Partner. Our aim was to start a school
              that had sensitivity and a deeper understanding of the child.
            </p>
            <p>
              ONGC CS epitomises vibrancy and freshness, dovetailing much of the ethos
              of the new post-independence India into its educational program and
              philosophy. The school is a secular co-educational one integrating into
              its curriculum concern for the environment, the spirit of community
              service and international peace and brotherhood.
            </p>
            <p>
              Besides spacious classrooms and playgrounds, we have fully developed
              facilities for each department, with Maths and Science laboratories, a
              Computer Resource Center, well stocked libraries, an auditorium and
              open-air stage, and a Teachers’ Learning Center.
            </p>
          </div>
        </Container>

        {/* ===== Section 1 ===== */}
  

        {/* ===== Section 2 ===== */}
              <Container fluid className="about-container-fluid3 g-0">
          <Container className="about-content-section3">
            <div className="about-section2-left-side fade-image">
              <img src={section1Images[index1]} alt="About section 1" />
            </div>
            <div className="about-section3-right-side">
              <p>Ms. Vrinda Sarup</p>
              <p>
                       Mr. Rajesh Sharma is a senior educationist and has worked in several
                prestigious institutions...
                   Mr. Rajesh Sharma is a senior educationist and has worked in several
                prestigious institutions...
                   Mr. Rajesh Sharma is a senior educationist and has worked in several
                prestigious institutions...
              </p>
            </div>
          </Container>
        </Container>

        <Container fluid className="about-container-fluid3 g-0">
          <Container className="about-content-section3">
            <div className="about-section3-right-side">
              <p>Mr. Rajesh Sharma</p>
              <p>
                Mr. Rajesh Sharma is a senior educationist and has worked in several
                prestigious institutions...
                   Mr. Rajesh Sharma is a senior educationist and has worked in several
                prestigious institutions...
                   Mr. Rajesh Sharma is a senior educationist and has worked in several
                prestigious institutions...
              </p>
            </div>
            <div className="about-section3-left-side fade-image">
              <img src={section2Images[index2]} alt="About section 2" />
            </div>
          </Container>
        </Container>

        {/* ===== Section 3 ===== */}
        <Container fluid className="about-container-fluid3 g-0">
          <Container className="about-content-section3">
            <div className="about-section3-left-side fade-image">
              <img src={section3Images[index3]} alt="About section 3" />
            </div>
            <div className="about-section3-right-side">
              <p>Ms. Ritu Malhotra</p>
              <p>
                     Mr. Rajesh Sharma is a senior educationist and has worked in several
                prestigious institutions...
                   Mr. Rajesh Sharma is a senior educationist and has worked in several
                prestigious institutions...
                   Mr. Rajesh Sharma is a senior educationist and has worked in several
                prestigious institutions...
              </p>
            </div>
          </Container>
        </Container>
      </Container>

      <PolicyCards />
    </>
  );
};

export default About;
