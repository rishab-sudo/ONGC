import React from "react";
// import Banner from "../components/Banner";
import "./Activities.css";
import Banner from "../components/Banner";

const socialLinks = {
  facebook: ["Click Here"],
  instagram: ["Click Here"],
  youtube: ["Click Here"],
};

const calendarData = [
  {
    month: "April",
    prePrimary: [
      "Pink Colour Day Celebration",
      "Food Fiesta - Sandwich Day",
      "English Rhyme Recitation",
      "Drawing Competition",
      "English Calligraphy",
      "English Debate",
      "Maths Aptitude Test",
      "Student Workshop - Mental & Emotional Well-being",
      "English Recitation",
    ],
    ...socialLinks,
  },
  {
    month: "May",
    prePrimary: [
      "Food Fiesta - Salad Making",
      "Hindi Rhyme Recitation",
      "Mother’s Day Celebration",
      "Card Making",
      "Essay Writing",
      "Show & Tell",
      "Olympiad 1",
      "Student Workshop – Effective Time Management",
      "English Debate",
    ],
    ...socialLinks,
  },
  {
    month: "July",
    prePrimary: [
      "Green Colour Day Celebration",
      "Seed Germination Activity",
      "Mask Making Activity",
      "Weaving a yarn",
      "Group Discussion English Jam",
      "Maths Aptitude Test",
      "Student's Workshop - Behaviour Management",
      "Stand up Comedy",
    ],
    ...socialLinks,
  },
  {
    month: "August",
    prePrimary: [
      "Fancy Dress - Patriotic Theme",
      "Rakhi Making",
      "Vegetable Painting",
      "Mask Making Activity",
      "Picture Composition",
      "Speech Competition",
      "Budding Poet",
      "Mehndi Competition",
      "Rakhi Making",
      "Student's Workshop - Career Counseling & Skill Enhancement",
      "Science Quiz",
    ],
    ...socialLinks,
  },
  {
    month: "September",
    prePrimary: [
      "Blue Colour Day Celebration",
      "Kitchen Garden in School",
      "Story Time with Props",
      "S.St Quiz",
      "Solo Singing Competition",
      "Olympiad 2",
      "Student's Workshop - Healthy Eating Habits",
    ],
    ...socialLinks,
  },
  {
    month: "October",
    prePrimary: [
      "Show & Tell",
      "Role Play",
      "Drawing Competition",
      "English Elocution",
      "Sports Commentary",
      "Food Fiesta",
      "Solo Dance Competition",
      "Maths Aptitude Test",
      "Group Singing Competition",
      "Student's Workshop - Entrepreneurship",
      "Social Science Quiz",
    ],
    ...socialLinks,
  },
  {
    month: "November",
    prePrimary: [
      "Red Colour Day Celebration",
      "Road Safety Pakhwada",
      "Fun Races",
      "Best out of the waste",
      "Dramatization",
      "The Opinion Newspaper",
      "Rangoli Competition",
      "Student's Workshop - Road Safety Awareness",
      "Science Exhibition",
    ],
    ...socialLinks,
  },
  {
    month: "December",
    prePrimary: [
      "Hindi Rhyme Recitation",
      "Anmol Vachan Competition",
      "FIT India Movement - Free Hand Exercise",
      "Panel Discussion",
      "Hindi Rhyme Recitation",
      "English Debate",
      "Olympiad 3",
      "Student's Workshop - Reasoning",
      "Sports Quiz",
    ],
    ...socialLinks,
  },
  {
    month: "January",
    prePrimary: [
      "Story Telling with Props",
      "Food Fiesta",
      "Science Exhibition",
      "Maths Aptitude Test",
      "Student's Workshop - Stress Free Examination",
    ],
    ...socialLinks,
  },
  {
    month: "February",
    prePrimary: [
      "Yellow Colour Day Celebration",
      "Drawing Competition",
      "Collage Making Competition",
      "Collage Making",
      "Story Telling",
      "Kite Making",
      "Olympiad 4",
      "Student's Workshop - Cyber Security",
      "Drawing Competition",
    ],
    ...socialLinks,
  },
];

const Activities = () => {
  return (
    <>
         <Banner
        title="Co-Curricular Activities"
        image={require("../assets/parents-guide-img.jpg")}
        breadcrumbs={[
          { label: "HOME", link: "/home" },
          { label: "Co-Curricular Activities", link: "Co-Curricular Activities" },
        ]}
      />
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
