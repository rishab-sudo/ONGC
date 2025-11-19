import React from "react";
// import Banner from "../components/Banner";
import "./Activities.css";

const calendarData = [
  {
    month: "April",
    prePrimary: [
      "Pink Colour Day Celebration (PRE-PRIMARY)",
      "Food Fiesta - Sandwich Day (PRE-PRIMARY)",
      "English Rhyme Recitation (PRE-PRIMARY)",
      "Drawing Competition (I-IV)",
      "English Calligraphy (I-VIII)",
      "English Debate (IX-XII)",
      "Maths Aptitude Test (I-XII)",
      "Student Workshop - Mental & Emotional Well-being (VI-XII)",
      "English Recitation (INTER SCHOOL)",
    ],
    facebook: ["Click Here"],
    instagram: ["Click Here"],
    youtube: ["Click Here"],
  },
  {
    month: "May",
    prePrimary: [
      "Food Fiesta - Salad Making (PRE-PRIMARY)",
      "Hindi Rhyme Recitation (PRE-PRIMARY)",
      "Mother’s Day Celebration (PRE-PRIMARY)",
      "Card Making (I-IV)",
      "Essay Writing (IX-XII)",
      "Show & Tell (V-VIII)",
      "Olympiad 1 (I-XII)",
      "Student Workshop – Effective Time Management (VI-XII)",
      "English Debate (INTER SCHOOL)",
    ],
    facebook: ["Click Here"],
    instagram: ["Click Here"],
    youtube: ["Click Here"],
  },
  {
    month: "June",
    prePrimary: ["NIL"],
    facebook: ["Click Here"],
    instagram: ["Click Here"],
    youtube: ["Click Here"],
  },
  {
    month: "July",
    prePrimary: [
      "Green Colour Day Celebration (PRE-PRIMARY)",
      "Seed Germination Activity (PRE-PRIMARY)",
      "Mother’s Day Celebration (PRE-PRIMARY)",
      "Card Making (PRE-PRIMARY)",
      "Weaving a Yarn",
      "Group Discussion",
      "English JAM (I-IV)",
      "Maths Aptitude Test (I-XII)",
      "Student’s Workshop - Behaviour Management (VI-XII)",
      "Stand up Comedy (INTER SCHOOL)",
    ],
    facebook: ["Click Here"],
    instagram: ["Click Here"],
    youtube: ["Click Here"],
  },
  {
    month: "August",
    prePrimary: [
      "Fancy Dress – Patriotic Theme (PRE-PRIMARY)",
      "Rakhi Making (PRE-PRIMARY)",
      "Vegetable Painting (PRE-PRIMARY)",
      "Mask Making Activity (PRE-PRIMARY)",
      "Picture Composition (I-IV)",
      "Speech Competition (IX-XII)",
      "Budding Poet (V-XII)",
      "Mehndi Competition (V-XII)",
      "Rakhi Making (I-VIII)",
      "Student’s Workshop - Career Counseling & Skill Enhancement Workshop (VI-XII)",
      "Science Quiz (INTER SCHOOL)",
    ],
    facebook: ["Click Here"],
    instagram: ["Click Here"],
    youtube: ["Click Here"],
  },
  {
    month: "September",
    prePrimary: [
      "Blue Colour Day Celebration (PRE-PRIMARY)",
      "Kitchen Garden in School (PRE-PRIMARY)",
      "Story Time with Props (PRE-PRIMARY)",
      "S.St Quiz (V-XII)",
      "Solo Singing Competition (I-XII)",
      "Olympiad 2 (I-XII)",
      "Student’s Workshop - Healthy Eating Habits (VI-XII)",
    ],
    facebook: ["Click Here"],
    instagram: ["Click Here"],
    youtube: ["Click Here"],
  },
  {
    month: "October",
    prePrimary: [
      "Show & Tell (PRE-PRIMARY)",
      "Role Play (PRE-PRIMARY)",
      "Drawing Competition (PRE-PRIMARY)",
      "English Elocution (I-IV)",
      "Sports Commentary (IX-XII)",
      "Food Fiesta (I-XII)",
      "Solo Dance Competition (I-XII)",
      "Maths Aptitude Test (I-XII)",
      "Group Singing Competition (I-XII)",
      "Student’s Workshop – Entrepreneurship (VI-XII)",
      "Social Science Quiz (INTER SCHOOL)",
    ],
    facebook: ["Click Here"],
    instagram: ["Click Here"],
    youtube: ["Click Here"],
  },
  {
    month: "November",
    prePrimary: [
      "Red Colour Day Celebration (PRE-PRIMARY)",
      "Road Safety Pakhwada (PRE-PRIMARY)",
      "Fun Races (PRE-PRIMARY)",
      "Best out of the Waste (I-VIII)",
      "Dramatization (V-VIII)",
      "The Opinion Newspaper (IX-XII)",
      "Rangoli Competition (V-XII)",
      "Student’s Workshop - Road Safety Awareness (V-XII)",
      "Science Exhibition (INTER SCHOOL)",
    ],
    facebook: ["Click Here"],
    instagram: ["Click Here"],
    youtube: ["Click Here"],
  },
  {
    month: "December",
    prePrimary: [
      "Hindi Rhyme Recitation (PRE-PRIMARY)",
      "Anmol Vachan Competition (PRE-PRIMARY)",
      "FIT India Movement - Free Hand Exercise (PRE-PRIMARY)",
      "Panel Discussion (IX-XII)",
      "Hindi Rhyme Recitation (I-IV)",
      "English Debate (V-VIII)",
      "Olympiad 3 (I-XII)",
      "Student’s Workshop - Reasoning (VI-XII)",
      "Sports Quiz (INTER SCHOOL)",
    ],
    facebook: ["Click Here"],
    instagram: ["Click Here"],
    youtube: ["Click Here"],
  },
  {
    month: "January",
    prePrimary: [
      "Story Telling with Props (PRE-PRIMARY)",
      "Food Fiesta (PRE-PRIMARY)",
      "Science Exhibition (I-XII)",
      "Maths Aptitude Test (I-XII)",
      "Student’s Workshop - Stress Free Examination (VI-XII)",
    ],
    facebook: ["Click Here"],
    instagram: ["Click Here"],
    youtube: ["Click Here"],
  },
  {
    month: "February",
    prePrimary: [
      "Yellow Colour Day Celebration (PRE-PRIMARY)",
      "Drawing Competition (PRE-PRIMARY)",
      "Collage Making Competition (PRE-PRIMARY)",
      "Collage Making (I-VIII)",
      "Story Telling (I-IV)",
      "Kite Making (I-VIII)",
      "Olympiad 4 (I-XII)",
      "Student’s Workshop – Cyber Security (VI-XII)",
      "Drawing Competition (INTER SCHOOL)",
    ],
    facebook: ["Click Here"],
    instagram: ["Click Here"],
    youtube: ["Click Here"],
  },
  {
    month: "March",
    prePrimary: ["NIL"],
    facebook: ["Click Here"],
    instagram: ["Click Here"],
    youtube: ["Click Here"],
  },
];

const Activities = () => {
  return (
    <>
      {/* <Banner
        title="Activities"
        image={require("../assets/parents-guide-img.jpg")}
        breadcrumbs={[
          { label: "HOME", link: "/home" },
          { label: "Activities", link: "/Activities" },
        ]}
      /> */}

      <div className="calendar-table-section">
        <h2 className="calendar-heading">Co-Curricular Activities Calendar</h2>
        <div className="calendar-table-container">
          <table className="calendar-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Pre-Primary</th>
                <th>Facebook</th>
                <th>Instagram</th>
                <th>Youtube</th>
              </tr>
            </thead>
         <tbody>
  {calendarData.map((row, idx) => (
    <tr key={idx}>
      <td className="month-cell">{row.month}</td>

      {/* Pre-Primary column */}
      <td>
        {row.prePrimary.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </td>

      {/* Facebook */}
      <td>
        {row.facebook.map((link, i) => (
          <a
            key={i}
            href="https://www.facebook.com/profile.php?id=100064055612636"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link}
          </a>
        ))}
      </td>

      {/* Instagram */}
      <td>
        {row.instagram.map((link, i) => (
          <a
            key={i}
            href="https://www.instagram.com/ongccommunityschool/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link}
          </a>
        ))}
      </td>

      {/* YouTube */}
      <td>
        {row.youtube.map((link, i) => (
          <a
            key={i}
            href="https://www.youtube.com/@ONGCCommunitySchool"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link}
          </a>
        ))}
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>
    </>
  );
};

export default Activities;
