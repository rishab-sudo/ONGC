import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import "./Sports.css";

const Sports = () => {
  return (
    <>
        <Banner
          title="Games & sports"
          image={require("../assets/parents-guide-img.jpg")}
          breadcrumbs={[
            { label: "HOME", link: "/sports" },
            { label: "Games & Sports", link: "/Games & Sports" },
          ]}
        />
  
    <div className="sport">
      <h2 className="table-heading page-heading">GAMES AND SPORTS</h2>

      <Container className="table-container">
        <table>
          <thead>
            <tr className="tr-month">
              <th>Month</th>
              <th>Type</th>
              <th>Sub Jr.</th>
              <th>Junior</th>
              <th>Senior</th>
              <th>Teacher Vs Students</th>
              <th>Inter School</th>
              <th>Venue</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>April</td>
              <td>Outdoor</td>
              <td>Dodgeball</td>
              <td>Volleyball</td>
              <td>Throwball</td>
              <td>Volleyball / Throwball</td>
              <td>-</td>
              <td>SEI</td>
            </tr>

            <tr>
              <td>May</td>
              <td>Indoor</td>
              <td>Tennikoit</td>
              <td>Table Tennis</td>
              <td>-</td>
              <td>Table Tennis</td>
              <td>-</td>
              <td>SEI</td>
            </tr>

            <tr>
              <td>July</td>
              <td>Outdoor</td>
              <td>Kabaddi</td>
              <td>Kho-Kho</td>
              <td>-</td>
              <td>-</td>
              <td>Kabaddi / Kho-Kho</td>
              <td>ONGCCS</td>
            </tr>

            <tr>
              <td>August</td>
              <td>Outdoor / Indoor</td>
              <td>Frisbee</td>
              <td>Chess</td>
              <td>-</td>
              <td>Chess</td>
              <td>-</td>
              <td>ONGCCS</td>
            </tr>

            <tr>
              <td>September</td>
              <td>Outdoor</td>
              <td>Soccer</td>
              <td>Soccer</td>
              <td>Soccer</td>
              <td>Soccer</td>
              <td>-</td>
              <td>ONGCCS</td>
            </tr>

            <tr>
              <td>October</td>
              <td>Outdoor</td>
              <td>Seven Stone</td>
              <td>Pithoo</td>
              <td>Hockey</td>
              <td>Hockey</td>
              <td>-</td>
              <td>SEI</td>
            </tr>

            <tr>
              <td>November</td>
              <td>Outdoor</td>
              <td>Cricket</td>
              <td>Cricket</td>
              <td>Cricket</td>
              <td>Cricket</td>
              <td>-</td>
              <td>ONGCCS</td>
            </tr>

            <tr>
              <td>December</td>
              <td>Outdoor / Indoor</td>
              <td>Handball</td>
              <td>Handball</td>
              <td>Handball</td>
              <td>-</td>
              <td>Handball</td>
              <td>SEI</td>
            </tr>

            <tr>
              <td>January</td>
              <td>Outdoor</td>
              <td colSpan="3">Athletic Meet</td>
              <td>-</td>
              <td>Athletic Meet</td>
              <td>ONGCCS / SEI</td>
            </tr>

            <tr>
              <td>February</td>
              <td>Outdoor</td>
              <td>Hopscotch</td>
              <td>Badminton</td>
              <td>-</td>
              <td>Badminton</td>
              <td>-</td>
              <td>SEI</td>
            </tr>
          </tbody>
        </table>

        <div className="note">
          <p>
            Match Fixture - All matches will be on League basis except Cricket
            Tournament & Athletic Meet
          </p>
          <div className="points">
            <span>Winner - 3</span>
            <span>Looser - 0</span>
            <span>Draw - 1</span>
          </div>
        </div>
      </Container>
    </div>
      </>
  );
};

export default Sports;