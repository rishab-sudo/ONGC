import React from "react";
import Banner from "../components/Banner";
import { Container } from "react-bootstrap";
import "./Curriculum.css";

const Curriculum = () => {
  const curriculumData = [
    // ================= CLASS I =================
    {
      className: "Class I - Academic Syllabus 2025-26",
      rows: [
        {
          subject: "English",
          book: "Roots & Wings",
          pa1: "Ch.1,2, Poem-1",
          sa1: "Ch.1–4, Poem-1,3 Pg.46",
          pa2: "Ch.5,6,7 Poem-4 Pg.76",
          sa2: "Ch.5,9, Poem-4,5 Pg.76 to 109",
        },
        {
          subject: "Mathematics",
          book: "Universal Mathematics",
          pa1: "Ch.1,2,3,4",
          sa1: "Ch.1–6, Worksheet–1",
          pa2: "Ch.9–10",
          sa2: "Ch.13,23 Worksheet–4 Testpaper–2",
        },
        {
          subject: "EVS",
          book: "Living Planet",
          pa1: "Ch.1–3",
          sa1: "Ch.1–7",
          pa2: "Ch.8–12",
          sa2: "Ch.12–14",
        },
        {
          subject: "Hindi",
          book: "Shikhar",
          pa1: "Ch.1–4",
          sa1: "Ch.1,7,14",
          pa2: "Ch.8–10",
          sa2: "Ch.8–13,15",
        },
        {
          subject: "Computer",
          book: "Cyber Quest",
          pa1: "Ch.1–2",
          sa1: "Ch.1–4 Worksheet–2",
          pa2: "Ch.5–6",
          sa2: "Ch.5–7 Worksheet–4",
        },
        {
          subject: "Moral Edu.",
          book: "Life with Values",
          pa1: "Ch.1–3",
          sa1: "Ch.1–5",
          pa2: "Ch.6–7",
          sa2: "Ch.6–10",
        },
        {
          subject: "G.K.",
          book: "The Knowledge Generation",
          pa1: "Page 1–12",
          sa1: "Page 1–25",
          pa2: "Page 26–37",
          sa2: "Page 25–50",
        },
      ],
    },

    // ================= CLASS II =================
    {
      className: "Class II - Academic Syllabus 2025-26",
      rows: [
        {
          subject: "English",
          book: "Roots & Wings",
          pa1: "Ch.1,2, Poem-1",
          sa1: "Ch.4, Poem-1-3",
          pa2: "Ch.5-7, Poem-4",
          sa2: "Ch.5-9, Poem-4-5",
        },
        {
          subject: "Mathematics",
          book: "Universal Mathematics",
          pa1: "Ch.1-4",
          sa1: "Ch.1-6",
          pa2: "Ch.7-9",
          sa2: "Ch.7-12",
        },
        {
          subject: "EVS",
          book: "Living Planet",
          pa1: "Ch.1-6",
          sa1: "Ch.1-12",
          pa2: "Ch.13-18",
          sa2: "Ch.13-23",
        },
        {
          subject: "Hindi",
          book: "Shikhar / Prakhar",
          pa1: "Ch.1-4",
          sa1: "Ch.1-7",
          pa2: "Ch.8-10",
          sa2: "Ch.8-14",
        },
        {
          subject: "Computer",
          book: "Cyber Quest",
          pa1: "Ch.1-2",
          sa1: "Ch.1-4",
          pa2: "Ch.5-6",
          sa2: "Ch.5-7",
        },
        {
          subject: "Moral Edu.",
          book: "Life with Values",
          pa1: "Ch.1-3",
          sa1: "Ch.1-5",
          pa2: "Ch.6-7",
          sa2: "Ch.6-10",
        },
        {
          subject: "G.K.",
          book: "The Knowledge Generation",
          pa1: "Page 1-13",
          sa1: "Page 1-25",
          pa2: "Page 26-37",
          sa2: "Page 26-50",
        },
      ],
    },

    // ================= CLASS III =================
    {
      className: "Class III - Academic Syllabus 2025-26",
      rows: [
        {
          subject: "English",
          book: "Focus / Tune in to Grammar",
          pa1: "Ch.1-3, Poem-1",
          sa1: "Ch.1-6, Poem-1-4",
          pa2: "Ch.7-9, Poem-5-6",
          sa2: "Ch.7-13, Poem-5-7",
        },
        {
          subject: "Mathematics",
          book: "Universal Mathematics",
          pa1: "Ch.1-4",
          sa1: "Ch.1-6",
          pa2: "Ch.7-9",
          sa2: "Ch.7-12",
        },
        {
          subject: "EVS",
          book: "Living Planet",
          pa1: "Ch.1-6",
          sa1: "Ch.1-12",
          pa2: "Ch.13-18",
          sa2: "Ch.13-22",
        },
        {
          subject: "Hindi",
          book: "Shikhar / Prakhar",
          pa1: "Ch.1-4",
          sa1: "Ch.1-8",
          pa2: "Ch.9-12",
          sa2: "Ch.9-16",
        },
        {
          subject: "Computer",
          book: "Cyber Quest",
          pa1: "Ch.1-2",
          sa1: "Ch.1-4",
          pa2: "Ch.5-8",
          sa2: "Ch.5-10",
        },
        {
          subject: "Moral Edu.",
          book: "Life with Values",
          pa1: "Ch.1-2",
          sa1: "Ch.1-4",
          pa2: "Ch.5-8",
          sa2: "Ch.5-8",
        },
        {
          subject: "G.K.",
          book: "The Knowledge Generation",
          pa1: "Page 1-13",
          sa1: "Page 1-29",
          pa2: "Page 30-41",
          sa2: "Page 30-58",
        },
      ],
    },
    

    // ================= CLASS IV (YOUR EXISTING) =================
    {
      className: "Class IV - Academic Syllabus 2025-26",
      rows: [
        {
          subject: "English",
          book: "Focus",
          pa1: "Ch.1–3, Poem–1,2",
          sa1:
            "Ch.1–5, Comprehension, Passage, Paragraph Writing, Letter Writing",
          pa2: "Ch.7–9, Poem–5,6",
          sa2: "Ch.7,13, Poem–5,7",
        },
        {
          subject: "Mathematics",
          book: "Tune in to Grammar",
          pa1: "Ch.1–7",
          sa1: "Ch.1–11, Worksheet–1,4 Testpaper–1",
          pa2: "Ch.8–9,10",
          sa2: "Ch.8–13",
        },
        {
          subject: "EVS",
          book: "Living Planet",
          pa1: "Ch.1–4",
          sa1: "Ch.1–5, Worksheet–1,2",
          pa2: "Ch.9–12",
          sa2: "Ch.12,17 Worksheet–5,7",
        },
        {
          subject: "Hindi",
          book: "Shikhar",
          pa1: "Ch.1–4",
          sa1: "Ch.1–8,16,17",
          pa2: "Ch.9–12,18,19",
          sa2: "Ch.9–16",
        },
        {
          subject: "Computer",
          book: "Prakhar",
          pa1: "Ch.1–3",
          sa1: "Ch.6–8,7",
          pa2: "Ch.6–9",
          sa2: "Ch.9–15,18,19",
        },
        {
          subject: "Moral Edu.",
          book: "Cyber Quest",
          pa1: "Ch.1–2,3",
          sa1: "Ch.6,7",
          pa2: "Ch.6,9 Worksheet–3,4",
          sa2: "Ch.6–10",
        },
        {
          subject: "G.K.",
          book: "The Knowledge Generation",
          pa1: "Page 1–29",
          sa1: "Page 30–41",
          pa2: "Page 30–58",
          sa2: "Page 30–58",
        },
      ],
      
    },
    // ================= CLASS V =================
{
  className: "Class V - Academic Syllabus 2025-26",
  rows: [
    {
      subject: "English",
      book: "Focus / Tune in to Grammar",
      pa1: "Ch.1–3, Poem 1–2",
      sa1: "Ch.1–6, Poem 1–4",
      pa2: "Ch.7–9, Poem 5–6",
      sa2: "Ch.7–13, Poem 5–7",
    },
    {
      subject: "Mathematics",
      book: "Universal Mathematics",
      pa1: "Ch.1–4",
      sa1: "Ch.1–7",
      pa2: "Ch.8–10",
      sa2: "Ch.8–14",
    },
    {
      subject: "EVS",
      book: "Living Planet",
      pa1: "Ch.1–4",
      sa1: "Ch.1–8",
      pa2: "Ch.9–12",
      sa2: "Ch.9–16",
    },
    {
      subject: "Hindi",
      book: "Shikhar / Prakhar",
      pa1: "Ch.1–4",
      sa1: "Ch.1–8",
      pa2: "Ch.9–12",
      sa2: "Ch.9–16",
    },
    {
      subject: "Computer",
      book: "Cyber Quest",
      pa1: "Ch.1–3",
      sa1: "Worksheet 1–2",
      pa2: "Ch.6–7",
      sa2: "Worksheet 3–5",
    },
    {
      subject: "Moral Edu.",
      book: "Life with Values",
      pa1: "Ch.1–3",
      sa1: "Ch.1–5",
      pa2: "Ch.6–7",
      sa2: "Ch.6–10",
    },
    {
      subject: "G.K.",
      book: "The Knowledge Generation",
      pa1: "Pg. 1–15",
      sa1: "Pg. 1–33",
      pa2: "Pg. 34–49",
      sa2: "Pg. 34–66",
    },
  ],
},

// ================= CLASS VI =================
{
  className: "Class VI - Academic Syllabus 2025-26",
  rows: [
    {
      subject: "English",
      book: "Starburst / PC Wren’s Grammar",
      pa1: "Ch.1–4, Poem 1–2",
      sa1: "Ch.1–8, Poem 1–2",
      pa2: "Ch.9–12, Poem 3",
      sa2: "Ch.6–10, Poem 3–5",
    },
    {
      subject: "Mathematics",
      book: "Universal Mathematics",
      pa1: "Ch.1–4",
      sa1: "Ch.1–7",
      pa2: "Ch.8–11",
      sa2: "Ch.8–14",
    },
    {
      subject: "Science",
      book: "Neuberg",
      pa1: "Ch.1–4",
      sa1: "Ch.1–7",
      pa2: "Ch.8–11",
      sa2: "Ch.8–14",
    },
    {
      subject: "Hindi",
      book: "Shikhar / Vyakaran Abhilasha",
      pa1: "Ch.1–4",
      sa1: "Ch.1–8",
      pa2: "Ch.9–12",
      sa2: "Ch.13–16",
    },
    {
      subject: "Sanskrit",
      book: "Ruchira",
      pa1: "Ch.1–4",
      sa1: "Ch.1–8",
      pa2: "Ch.9–12",
      sa2: "Ch.9–15",
    },
    {
      subject: "Computer",
      book: "Cyber Quest",
      pa1: "Worksheet 1",
      sa1: "Worksheet 1–2",
      pa2: "Worksheet 3",
      sa2: "Worksheet 4–5",
    },
    {
      subject: "G.K.",
      book: "The Knowledge Generation",
      pa1: "Pg. 1–16",
      sa1: "Pg. 1–33",
      pa2: "Pg. 34–50",
      sa2: "Pg. 34–66",
    },
  ],
},

// ================= CLASS VII =================
{
  className: "Class VII - Academic Syllabus 2025-26",
  rows: [
    {
      subject: "English",
      book: "Starburst / PC Wren’s Grammar",
      pa1: "Ch.1–5, Poem 1",
      sa1: "Ch.1–10, Poem 1–2",
      pa2: "Ch.11–15, Poem 3",
      sa2: "Ch.6–10, Poem 3–5",
    },
    {
      subject: "Mathematics",
      book: "Universal Mathematics",
      pa1: "Ch.1–4",
      sa1: "Ch.1–8",
      pa2: "Ch.8–11",
      sa2: "Ch.8–13",
    },
    {
      subject: "Science",
      book: "Neuberg",
      pa1: "Ch.1–4",
      sa1: "Ch.1–7",
      pa2: "Ch.8–11",
      sa2: "Ch.8–14",
    },
    {
      subject: "Social Science",
      book: "History / Civics / Geography",
      pa1: "Ch.1–3",
      sa1: "Ch.1–7",
      pa2: "Ch.5–6",
      sa2: "Ch.4–7",
    },
    {
      subject: "Computer",
      book: "Cyber Quest",
      pa1: "Worksheet 1",
      sa1: "Worksheet 1–2",
      pa2: "Worksheet 3",
      sa2: "Worksheet 4–5",
    },
    {
      subject: "G.K.",
      book: "The Knowledge Generation",
      pa1: "Pg. 1–19",
      sa1: "Pg. 1–37",
      pa2: "Pg. 38–57",
      sa2: "Pg. 38–74",
    },
  ],
},

// ================= CLASS VIII =================
{
  className: "Class VIII - Academic Syllabus 2025-26",
  rows: [
    {
      subject: "English",
      book: "Starburst / PC Wren’s Grammar",
      pa1: "Ch.1–7, Poem 1",
      sa1: "Ch.1–15, Poem 1–2",
      pa2: "Ch.16–23, Poem 3",
      sa2: "Ch.6–10, Poem 3–5",
    },
    {
      subject: "Mathematics",
      book: "Universal Mathematics",
      pa1: "Ch.1–4",
      sa1: "Ch.1–8",
      pa2: "Ch.8–11",
      sa2: "Ch.8–14",
    },
    {
      subject: "Science",
      book: "Neuberg",
      pa1: "Ch.1–4",
      sa1: "Ch.1–7",
      pa2: "Ch.8–11",
      sa2: "Ch.8–14",
    },
    {
      subject: "Social Science",
      book: "History / Civics / Geography",
      pa1: "Ch.1–3",
      sa1: "Ch.1–7",
      pa2: "Ch.5–6",
      sa2: "Ch.4–10",
    },
    {
      subject: "Computer",
      book: "Cyber Quest",
      pa1: "Worksheet 1",
      sa1: "Worksheet 1–2",
      pa2: "Worksheet 3",
      sa2: "Worksheet 3–5",
    },
    {
      subject: "G.K.",
      book: "The Knowledge Generation",
      pa1: "Pg. 1–19",
      sa1: "Pg. 1–37",
      pa2: "Pg. 38–57",
      sa2: "Pg. 38–74",
    },
  ],
},

  ];

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
        {curriculumData.map((classItem, index) => (
          <React.Fragment key={index}>
            <p className="table-heading page-heading">
              {classItem.className}
            </p>

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
                  {classItem.rows.map((row, i) => (
                    <tr key={i}>
                      <td>{row.subject}</td>
                      <td>{row.book}</td>
                      <td>{row.pa1}</td>
                      <td>{row.sa1}</td>
                      <td>{row.pa2}</td>
                      <td>{row.sa2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Container>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Curriculum;
