import React, { useState,  } from 'react';
import { Container } from 'react-bootstrap';
import Banner from "../components/Banner"
import "./ParentsGuideLines.css";
// import { Link } from 'react-router-dom';
import QuerySection from '../components/QuerySection';
import ScrolLinks from '../components/ScrolLinks';

const leftPoints = [
  "Check the haircut, uniform and punctuality of your ward in the morning.",
  "See that your ward carries book/exercise books according to the time table for that day. No extra books are allowed.",
  "See that he/she is prepared for the Tuesday tests and brings answer books to school on Tuesday.",
  "Also see his/her report card and teachers remarks in his/her class work / home work exercise books.",
  "Encourage your ward to take a balanced interest in studies, co-curricular activities and sports.",
  "Children should not bring crackers, colors, transistors etc. to the school. Bursting of crackers and playing with colors is liable to lead to expulsion of a student from the school.",
  "During school hours no student will be allowed to go home without the written permission of the Principal.",
  "Your ward should be instructed to be careful about his/her things. There should be a name tag on blazers and sweaters. Expensive articles like transistors, calculators etc. should not be brought to school. They are also not allowed to wear jewellery in school. In case of violation, articles will be confiscated.",
  "If your ward is absent from school, he/she must make up all the work missed.",
  "Ensure that children do not carry fancy & expensive stationery items.",
  "Students suffering from diseases such as chicken pox, cholera, measles, mumps, whooping cough and jaundice must observe the prescribed period of quarantine as mentioned in the Almanac.",
    "Students suffering from infectious diseases like conjunctivitis, dermatitis, scabies etc. should not be sent to school.",
  "Students suffering from chronic diseases like asthma, epilepsy, rheumatic heart disease etc. are advised to be under the continuous medical supervision of a specialized doctor.",
    "School transport is an optional facility. The school cannot be held responsible for any mishap otherwise.",
];

const rightPoints = [


  {
    main: "All parents are requested to impart health education to their children so that they maintain personal hygiene like trimming nails and being neat regularly.",
    sub: [
      "Students should exercise regularly.",
      "Sleep for at least eight hours daily.",
      "Have a balanced diet, nutritionally rich in proteins and milk.",
      "Drink water which is either boiled or filtered. All students are advised to bring their own water bottles.",
      "Avoid consumption of ice-creams, other milk products and eatables from roadside vendors.",
      "De-worm your child every year. Advice to be taken from your family physician.",
      "Get dental and eye check-up done once every year by a dental and eye surgeon.",
      "Parents should immunize all children as per the schedule below:",
      "BCG, DPT, Oral Polio, Measles/MMR (before entry to school)",
      "DT at 5 years of age, Tetanus, Typhoid booster (7–16 years), Cholera (yearly), Hepatitis (preferably in March), Meningitis (optional but recommended)."
    ],
  }
];

  

 
const ParentsGuideLines = () => {
  
  const [viewMore, setViewMore] = useState(false);

  // Merge all points
  const allPoints = [...leftPoints, ...rightPoints.flatMap(p => typeof p === "string" ? p : [p])];

  // Split points at the "view more" line
  const splitIndex = allPoints.findIndex(
    p => typeof p === "string" && p.includes("Students suffering from infectious diseases like conjunctivitis")
  );

  const initialPoints = allPoints.slice(0, splitIndex + 1);
  const remainingPoints = allPoints.slice(splitIndex + 1);

  return (
    <>
   <Banner
        title="Parents Guidelines"
        image={require("../assets/parents-guide-img.jpg")}
        breadcrumbs={[
          { label: "HOME", link: "/home" },
          { label: "PARENTS GUIDELINES", link: "/ParentsGuideLines" },
        ]}
      />
<ScrolLinks/>


 <Container fluid className='pg-fluid g-0'>
     <Container className='pg-container '>
          <div className="instructions-container">
            <div className="instructions-box scrollable-box">
              <div className='d-flex justify-content-center align-items-center'>

            <p className='page-heading'>Parental Advisory & School Guidelines</p>
              </div>
<ul>
  {/* Initial visible points */}
  {initialPoints.map((point, index) =>
    typeof point === "string" ? (
      <li key={index} className="guideline">
        <span className="circle-number">{index + 1}</span>
        <div className="guideline-text">{point}</div>
      </li>
    ) : (
      <li key={index} className="guideline">
        <span className="circle-number">{index + 1}</span>
        <div className="guideline-text">
          {point.main}
          <ul className="guideline-points">
            {point.sub.map((subPoint, subIndex) => (
              <li key={subIndex}>{subPoint}</li>
            ))}
          </ul>
        </div>
      </li>
    )
  )}

  {/* View More Points */}
  {viewMore &&
    remainingPoints.map((point, index) =>
      typeof point === "string" ? (
        <li key={index + initialPoints.length} className="guideline">
          <span className="circle-number">
            {index + 1 + initialPoints.length}
          </span>
          <div className="guideline-text">{point}</div>
        </li>
      ) : (
        <li key={index + initialPoints.length} className="guideline">
          <span className="circle-number">
            {index + 1 + initialPoints.length}
          </span>
          <div className="guideline-text">
            {point.main}
            <ul className="guideline-points">
              {point.sub.map((subPoint, subIndex) => (
                <li key={subIndex}>{subPoint}</li>
              ))}
            </ul>
          </div>
        </li>
      )
    )}
</ul>



              {!viewMore && remainingPoints.length > 0 && (
                <button className="view-moree-btn" onClick={() => setViewMore(true)}>
                  View More
                </button>
              )}
            </div>
          </div>
        </Container>
      </Container>

<QuerySection />
    </>
  );
};

export default ParentsGuideLines;
