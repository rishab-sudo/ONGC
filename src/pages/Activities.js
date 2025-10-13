import React from "react";
import Banner from "../components/Banner";
import "./Activities.css";

const calendarData = [
  {
    month: "April",
    prePrimary: [
      "Red Color Day Celebration",
      "Food Fiesta - Sandwich Day",
      "Seed Germination Activity",
      "Rain Dance",
      "Fit India Movement - Free Hand Exercise",
      "Story Telling Session - Prep",
    ],
    facebook: ["Click Here"],
    instagram: ["Click Here"],
    youtube: ["Click Here"],
  },
  {
    month: "May",
    prePrimary: [
      "Food Fiesta - Salad Making",
      "Varnmahotsav - Save Our Environment",
      "Hindi Singing Recitation",
      "Fashion Show (With Mother)",
      "Fit India Movement - Free Hand Exercise",
      "Story Telling Session - Class I",
    ],
    facebook: ["Click Here"],
    instagram: ["Click Here"],
    youtube: ["Click Here"],
  },
  // add all months similarly...
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
                <td>
                  {row.prePrimary.length > 0 ? (
                    <ul>
                      {row.prePrimary.map((event, i) => (
                        <li key={i}>{event}</li>
                      ))}
                    </ul>
                  ) : (
                    "-"
                  )}
                </td>
                <td>{row.facebook.map((link, i) => <a key={i} href="#">{link}</a>)}</td>
                <td>{row.instagram.map((link, i) => <a key={i} href="#">{link}</a>)}</td>
                <td>{row.youtube.map((link, i) => <a key={i} href="#">{link}</a>)}</td>
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
