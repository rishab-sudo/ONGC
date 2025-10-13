import React from 'react';
import Banner from '../components/Banner';
import { Container } from 'react-bootstrap';
import './DressCode.css'; // 👈 make sure this CSS file exists

const DressCode = () => {
  const summerBoys = [
    "Sky Blue Shirt (Half sleeves)",
    "Grey Trousers / Half Pant",
    "Grey with Sky Blue Strip Socks",
    "Black Leather Shoes",
    "School Tie & School Belt",
  ];

  const summerGirls = [
    "Sky Blue Shirt (Half sleeves)",
    "Grey Trousers / Half Pant",
    "Grey with Sky Blue Strip Socks",
    "Black Leather Shoes",
    "School Tie & School Belt",
  ];

  const winterBoys = [
    "Sky Blue Shirt (Full sleeves)",
    "Grey Trousers",
    "Navy Blue Blazer & Sweaters",
    "Grey with Blue Strip Socks",
    "Black Leather Shoes",
    "School Tie & School Belt",
  ];

  const winterGirls = [
    "Sky Blue Shirt (Full sleeves)",
    "Grey Divider Skirt / Twinik",
    "Navy Blue Blazer & Sweaters",
    "Grey with Sky Blue Strip Socks",
    "Black Leather Shoes",
    "School Tie & School Belt",
  ];
const houseData = [
  {
    title: "Chanakya House",
    description: "Steel Grey T Shirts, Track Suit, White Socks with Steel Grey stripes.",
  },
  {
    title: "C V Raman House",
    description: "Indigo T Shirts, Track Suit, White Socks with Indigo stripes.",
  },
  {
    title: "H J Bhabha House",
    description: "Magenta T Shirts, Track Suit, White Socks with Magenta stripes.",
  },
    {
    title: "Arya Bhatt House",
    description: "Dark Orange T Shirts, Track Suit, White Socks with Dark Orange stripes.",
  },
];
  return (
    <>
      <Banner
        title="Parents Guidelines"
        image={require("../assets/parents-guide-img.jpg")}
        breadcrumbs={[
          { label: "HOME", link: "/home" },
          { label: "DRESS CODE", link: "/DressCode" },
        ]}
      />

      {/* 🌤️ Summer Uniform Section */}
      <Container fluid className="uniform-section" >
        <Container className="uniform-container">
          <h2 className="uniform-title">Summer Uniform</h2>

          <div className="uniform-table">
            <div className="uniform-header">
              <div className="uniform-col-title">Boys</div>
              <div className="uniform-col-title">Girls</div>
            </div>

    <div className="uniform-body">
  <div className="uniform-col" data-heading="Boys">
    <ul>
      {summerBoys.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

  <div className="uniform-col" data-heading="Girls">
    <ul>
      {summerGirls.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
</div>
          </div>
        </Container>
      </Container>

      {/* ❄️ Winter Uniform Section */}
      <Container fluid className="uniform-section" >
        <Container className="uniform-container">
          <h2 className="uniform-title">Winter Uniform</h2>

          <div className="uniform-table">
            <div className="uniform-header">
              <div className="uniform-col-title">Boys</div>
              <div className="uniform-col-title">Girls</div>
            </div>

         <div className="uniform-body">
  <div className="uniform-col" data-heading="Boys">
    <ul>
      {winterBoys.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

  <div className="uniform-col" data-heading="Girls">
    <ul>
      {winterGirls.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
</div>
          </div>
        </Container>
      </Container>
      {/*  */}
        <Container className="app-container">
      {houseData.map((house, index) => (
        <div className="house-dress-wrapper" key={index}>
          <div className="house-dress">
            <h3 className="house-title">{house.title}</h3>
            <p className="house-desc">{house.description}</p>
            <div className="corner-border top-left"></div>
            <div className="corner-border bottom-right"></div>
          </div>
        </div>
      ))}
    </Container>
    </>
  );
};

export default DressCode;
