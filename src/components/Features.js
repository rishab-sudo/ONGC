import React from 'react';
import { Container } from 'react-bootstrap';
import "./Features.css";

const Features = () => {
  const facilities = [
    {
      title: "Smart Classrooms",
      desc: "Digitally equipped classrooms with interactive learning tools that make lessons engaging and effective for every student.",
      // icon: require("../assets/campur_life_1.jpg"),
    },
    {
      title: "Science & Computer Labs",
      desc: "Well-equipped laboratories that encourage hands-on learning in Physics, Chemistry, Biology, and Computer Science.",
      //  icon: require("../assets/campur_life_1.jpg"),
    },
    {
      title: "Sports & Physical Education",
      desc: "Spacious playgrounds and expert coaches promoting fitness, teamwork, and discipline through various indoor and outdoor sports.",
   // icon: require("../assets/campur_life_1.jpg"),
    },
    {
      title: "Library & Reading Room",
      desc: "A peaceful and resourceful space with a vast collection of books, journals, and digital materials to enhance knowledge and curiosity.",
      // icon: require("../assets/campur_life_1.jpg"),
    },
  ];

  return (
    <Container fluid className='features-fluid'>
      <Container className='features-container'>
        {/* Left Image Section */}
        <div className='feature-left-section'>
          <img src={require("../assets/campur_life_1.jpg")} alt="Campus View" />
        </div>

        {/* Right Content Section */}
        <div className='feature-right-section'>
          <div className='features-heading-div'>
            <p className='special-heading' style={{ textAlign: "left" }}>CAMPUS</p>
            <p className='page-heading'>World-Class Facilities for Every Student</p>
            <p className='page-text'>
              ONGC School provides a safe, inspiring, and well-equipped learning environment where students
              grow intellectually, physically, and emotionally.
            </p>
          </div>

          {facilities.map((item, index) => (
            <div className='features-point-div' key={index}>
              <div className='feature-icon-div'>
                <img src={item.icon} alt={item.title} />
              </div>
              <div className='feature-text-div'>
                <p className='h2'>{item.title}</p>
                <p className='h5'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Features;
