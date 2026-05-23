import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from "../components/Banner";
import "./ParentsGuideLines.css";
import QuerySection from '../components/QuerySection';

const leftPoints = [
  "Ensure your child completes his/her work on routine basis.",

  "Encourage your ward to take a poised interest in studies, co-curricular activities and sports.",

  "Ensure your ward carries book/exercise books according to the time table every day. No extra books are allowed.",

  "Ensure your child proper haircut, uniform, nails, school shoes, school ID, Almanac (school diary), and punctuality in attending morning assembly.",

  "Ensure your child do not carry fancy & expensive stationery items.",

  "Ensure your child does not carry unwarranted items to school like pen-markers, crackers, colours, mobiles phones, smart watches etc. Bursting of crackers and playing with colours is liable to lead to expulsion of your student from the school.",

  "Ensure your ward is careful about his/her things. There should be a name tag on blazers and sweaters. Expensive articles like mobiles, Calculators etc. should not be brought to school. They are also not allowed to wear Jewellery in school.",

  "During School hours no student will be allowed to go home without the written permission of the Principal.",

  "School transport is optional facility provided by school for your convenience and in no way school can be held responsible for any mishappening or otherwise.",

  {
    main: "All parents are requested to impart Health Education to their children so that they -",
    sub: [
      "Immunize child as per the doctor's guidance.",
      "Students should exercise regularly.",
      "Sleep for at least eight hours daily.",
      "Have a balanced diet, nutritionally rich in proteins and milk.",
      "Drink water which is either boiled or filtered. All students are advised to bring their own water bottles from home.",
      "Avoid Consumption of ice-creams, other milk products and eatables from road side vendors.",
      "De-worm your child every year. Requisite advice to be taken from Physician.",
      "Get dental and eye check up done once in every year by a dental surgeon and eye surgeon.",
      "Maintain personal hygiene like: trimming of nails and being neat on a regular basis."
    ]
  },

  "Students suffering from disease such as chicken pox, cholera, Measles, Mumps, Whooping Cough and Jaundice must observe the prescribed period of quarantine as mentioned under the heading, 'Absence' in the Almanac.",

  "Students suffering from infectious diseases like conjunctivitis, Dermatitis, Scabies etc. should not be sent to school.",

  "Students suffering from chronic diseases like Asthma, Epilepsy, Rheumatic, Heart Disease etc. are advised to be under continuous medical supervision of a specialized doctor. History of the illness must be filled up in the Almanac along with the treatment being given.",

  "Lost & Found department is constituted in school. Contact school office for lost & found article along with written application."
];

const ParentsGuideLines = () => {

  return (
    <>
      <Banner
        title="Parents/ STUDENTS Guidelines"
        image={require("../assets/parents-guide-img.jpg")}
        breadcrumbs={[
          { label: "HOME", link: "/home" },
          { label: "PARENTS/STUDENTS GUIDELINES", link: "/ParentsGuideLines" },
        ]}
      />

      <Container fluid className='pg-fluid g-0'>
        <Container className='pg-container'>
          <div className="instructions-container">
            <div className="instructions-box scrollable-box">

              <div className='d-flex justify-content-center align-items-center'>
                <p className='page-heading'>
                  Parents-Students Communication & Guidelines
                </p>
              </div>

              <ul>
                {leftPoints.map((point, index) =>

                  typeof point === "string" ? (

                    <li key={index} className="guideline">
                      <span className="circle-number">
                        {index + 1}
                      </span>

                      <div className="guideline-text">
                        {point}
                      </div>
                    </li>

                  ) : (

                    <li key={index} className="guideline">
                      <span className="circle-number">
                        {index + 1}
                      </span>

                      <div className="guideline-text">

                        <strong>{point.main}</strong>

                        <ul className="guideline-points">
                          {point.sub.map((subPoint, subIndex) => (
                            <li key={subIndex}>
                              {subPoint}
                            </li>
                          ))}
                        </ul>

                      </div>
                    </li>

                  )
                )}
              </ul>

            </div>
          </div>
        </Container>
      </Container>

      <QuerySection />
    </>
  );
};

export default ParentsGuideLines;