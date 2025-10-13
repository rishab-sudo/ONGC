import React from 'react'
import Banner from '../components/Banner'
import { Container } from 'react-bootstrap'
import "./Curriculum.css"

const Curriculum = () => {
  return (
    <>
     <Banner
          title="Curriculum"
          image={require("../assets/parents-guide-img.jpg")}
          breadcrumbs={[
            { label: "HOME", link: "/home" },
            { label: "Curriculum", link: "/Curriculum" },
          ]}
        />

            <div className="curriculum-table-container">
      {/* ================= CLASS I TABLE ================= */}
      <h2 className="table-heading page-heading">Class I - Academic Syllabus 2025-26</h2>
      <Container className="table-scroll">
        <table className="curriculum-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Book Name</th>
              <th>Periodic Assessment - I</th>
              <th>Summative Assessment - I</th>
              <th>Periodic Assessment - II</th>
              <th>Summative Assessment - II</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>English</td>
              <td>Roots & Wings</td>
              <td>Ch.1,2, Poem-1</td>
              <td>Ch.1–4, Poem-1,3 Pg.46</td>
              <td>Ch.5,6,7 Poem-4 Pg.76</td>
              <td>Ch.5,9, Poem-4,5 Pg.76 to 109</td>
            </tr>
            <tr>
              <td>Mathematics</td>
              <td>Universal Mathematics</td>
              <td>Ch.1,2,3,4</td>
              <td>Ch.1–6, Worksheet–1</td>
              <td>Ch.9–10</td>
              <td>Ch.13,23 Worksheet–4 Testpaper–2</td>
            </tr>
            <tr>
              <td>EVS</td>
              <td>Living Planet</td>
              <td>Ch.1–3</td>
              <td>Ch.1–7</td>
              <td>Ch.8–12</td>
              <td>Ch.12–14</td>
            </tr>
            <tr>
              <td>Hindi</td>
              <td>Shikhar</td>
              <td>Ch.1–4</td>
              <td>Ch.1,7,14</td>
              <td>Ch.8–10</td>
              <td>Ch.8–13,15</td>
            </tr>
            <tr>
              <td>Computer</td>
              <td>Cyber Quest</td>
              <td>Ch.1–2</td>
              <td>Ch.1–4 Worksheet–2</td>
              <td>Ch.5–6</td>
              <td>Ch.5–7 Worksheet–4</td>
            </tr>
            <tr>
              <td>Moral Edu.</td>
              <td>Life with Values</td>
              <td>Ch.1–3</td>
              <td>Ch.1–5</td>
              <td>Ch.6–7</td>
              <td>Ch.6–10</td>
            </tr>
            <tr>
              <td>G.K.</td>
              <td>The Knowledge Generation</td>
              <td>Page 1–12</td>
              <td>Page 1–25</td>
              <td>Page 26–37</td>
              <td>Page 25–50</td>
            </tr>
          </tbody>
        </table>
      </Container>

      {/* ================= CLASS IV TABLE ================= */}
      <h2 className="table-heading page-heading">Class IV - Academic Syllabus 2025-26</h2>
      <Container className="table-scroll">
        <table className="curriculum-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Book Name</th>
              <th>Periodic Assessment - I</th>
              <th>Summative Assessment - I</th>
              <th>Periodic Assessment - II</th>
              <th>Summative Assessment - II</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>English</td>
              <td>Focus</td>
              <td>Ch.1–3, Poem–1,2</td>
              <td>Ch.1–5, Comprehension, Passage,<br/> Paragraph  Writing, Letter Writing</td>
              <td>Ch.7–9, Poem–5,6</td>
              <td>Ch.7,13, Poem–5,7</td>
            </tr>
            <tr>
              <td>Mathematics</td>
              <td>Tune in to Grammar</td>
              <td>Ch.1–7</td>
              <td>Ch.1–11, Worksheet–1,4 Testpaper–1</td>
              <td>Ch.8–9,10</td>
              <td>Ch.8–13</td>
            </tr>
            <tr>
              <td>EVS</td>
              <td>Living Planet</td>
              <td>Ch.1–4</td>
              <td>Ch.1–5, Worksheet–1,2</td>
              <td>Ch.9–12</td>
              <td>Ch.12,17 Worksheet–5,7</td>
            </tr>
            <tr>
              <td>Hindi</td>
              <td>Shikhar</td>
              <td>Ch.1–4</td>
              <td>Ch.1–8,16,17</td>
              <td>Ch.9–12,18,19</td>
              <td>Ch.9–16</td>
            </tr>
            <tr>
              <td>Computer</td>
              <td>Prakhar</td>
              <td>Ch.1–3</td>
              <td>Ch.6–8,7</td>
              <td>Ch.6–9</td>
              <td>Ch.9–15,18,19</td>
            </tr>
            <tr>
              <td>Moral Edu.</td>
              <td>Cyber Quest</td>
              <td>Ch.1–2,3</td>
              <td>Ch.6,7</td>
              <td>Ch.6,9 Worksheet–3,4</td>
              <td>Ch.6–10</td>
            </tr>
            <tr>
              <td>G.K.</td>
              <td>The Knowledge Generation</td>
              <td>Page 1–29</td>
              <td>Page 30–41</td>
              <td>Page 30–58</td>
              <td>Page 30–58</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
    </>
  )
}

export default Curriculum