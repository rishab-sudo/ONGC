import React from "react";
import Banner from "../components/Banner";
import { Container } from "react-bootstrap";
import "./Curriculum.css";

const Curriculum = () => {
// Good morning here is the classes data 

  const curriculumData = [
    // ================= CLASS I =================
{
  className: "Class I - Academic Syllabus 2026-27",
  rows: [
    {
      subject: "English",
      book: "Roots & Wings",
      pa1: "Ch. 1, 2, Poem-1",
      sa1: "Ch. 1-4, Poem 1-2",
      pa2: "Ch. 5, 6, Poem-3",
      sa2: "Ch. 5-8, Poem 3-4",
    },
    {
      subject: "Mathematics",
      book: "Universal Mathematics",
      pa1: "Ch. 1, 2, 3",
      sa1: "Ch. 1-7",
      pa2: "Ch. 8-10",
      sa2: "Ch. 8-13",
    },
    {
      subject: "EVS",
      book: "Living Planet",
      pa1: "Ch. 1-5, Worksheet-1",
      sa1: "Ch. 1-12, Worksheet 1-3",
      pa2: "Ch. 13-17, Worksheet 4-5",
      sa2: "Ch. 13-23, Worksheet 4-6",
    },
    {
      subject: "Hindi",
      book: "Shikhar",
      pa1: "Ch. 1-3",
      sa1: "Ch. 1-7",
      pa2: "Ch. 8-12",
      sa2: "Ch. 12-14",
    },
    {
      subject: "Hindi",
      book: "Prakhar",
      pa1: "Ch. 1-4",
      sa1: "Ch. 1-7, 14",
      pa2: "Ch. 8-10",
      sa2: "Ch. 8-13, 15",
    },
    {
      subject: "Computer",
      book: "Cyber Quest",
      pa1: "Ch. 1-2",
      sa1: "Ch. 1-4",
      pa2: "Ch. 5-6, Worksheet 1-2",
      sa2: "Ch. 5-7, Worksheet 3-4",

    },
    {
      subject: "Moral Edu.",
      book: "Life with Values",
      pa1: "Ch. 1-3",
      sa1: "Ch. 1-5",
      pa2: "Ch. 6-7",
      sa2: "Ch. 6-10",
    },
    {
      subject: "G.K.",
      book: "The Knowledge Generation",
      pa1: "Ch. 1-8 & Quiz Corner-1",
      sa1: "Ch. 1-18, Quiz Corner-2, Model Test Paper-1",
      pa2: "Ch. 19-27",
      sa2: "Ch. 19-34, Model Test Paper-2",
    },
  ],
},

    // ================= CLASS II =================
{
  className: "Class II - Academic Syllabus 2026-27",
  rows: [
    {
      subject: "English",
      book: "Roots & Wings",
      pa1: "Ch. 1, 2, Poem-1",
      sa1: "Ch. 1-4, Poem 1-2",
      pa2: "Ch. 5-6, Poem-3",
      sa2: "Ch. 5-8, Poem 3-4",
    },
    {
      subject: "Mathematics",
      book: "Universal Mathematics",
      pa1: "Ch. 1-3",
      sa1: "Ch. 1-6",
      pa2: "Ch. 7-9",
      sa2: "Ch. 7-12",
    },
    {
      subject: "EVS",
      book: "Living Planet",
      pa1: "Ch. 1-5, Worksheet-1",
      sa1: "Ch. 1-12, Worksheet 1-3",
      pa2: "Ch. 13-17, Worksheet-4",
      sa2: "Ch. 13-23, Worksheet 4-5",
    },
    {
      subject: "Hindi",
      book: "Shikhar",
      pa1: "Ch. 1-4",
      sa1: "Ch. 1-7",
      pa2: "Ch. 8-12",
      sa2: "Ch. 8-14",
    },
    {
      subject: "Hindi",
      book: "Prakhar",
      pa1: "Ch. 1-4, 14",
      sa1: "Ch. 1-7, 14, 15",
      pa2: "Ch. 8-10",
      sa2: "Ch. 8-13, 16",
    },
    {
      subject: "Computer",
      book: "Cyber Quest",
      pa1: "Ch. 1-2",
      sa1: "Ch. 1-4, Worksheet-1-2",
      pa2: "Ch. 5-6",
      sa2: "Ch. 5-7, Worksheet-3-4",
    },
    {
      subject: "Moral Edu.",
      book: "Life with Values",
      pa1: "Ch. 1, 2, 3",
      sa1: "Ch. 1-5",
      pa2: "Ch. 6, 7",
      sa2: "Ch. 6-10",
    },
    {
      subject: "G.K.",
      book: "The Knowledge Generation",
      pa1: "Ch. 1-9 & Quiz Corner-1",
      sa1: "Ch. 1-19, Quiz Corner-2, Model Test Paper-1",
      pa2: "Ch. 20-26",
      sa2: "Ch. 20-32, Model Test Paper-2",
    },
  ],
},

    // ================= CLASS III =================
 {
  className: "Class III - Academic Syllabus 2026-27",
  rows: [
    {
      subject: "English",
      book: "Focus / Tune in to Grammar",
      pa1: "Focus: Ch. 1-3, Poem 1-2 | Grammar: Ch. 1-4",
      sa1: "Focus: Ch. 1-6, Poem 1-4, Pg. 97-100 | Grammar: Ch. 1-12, Comprehension Passage-1, Poem-1, Writing Paragraph",
      pa2: "Focus: Ch. 7-9, Poem 5-6 | Grammar: Ch. 13-18",
      sa2: "Focus: Ch. 7-13, Poem 5-7, Pg. 101-104 | Grammar: Ch. 13-23, Comprehension Passage-2, Letter Writing, Paragraph, Poem-2, Pg. 152-158",
    },
    {
      subject: "Mathematics",
      book: "Universal Mathematics",
      pa1: "Ch. 1-3",
      sa1: "Ch. 1-6",
      pa2: "Ch. 7-9",
      sa2: "Ch. 7-12",
    },
    {
      subject: "EVS",
      book: "Living Planet",
      pa1: "Ch. 1-5, Worksheet-1",
      sa1: "Ch. 1-11, Worksheet 1-3",
      pa2: "Ch. 12-16, Worksheet-4",
      sa2: "Ch. 12-22, Worksheet 4-6",
    },
    {
      subject: "Hindi",
      book: "Shikhar",
      pa1: "Ch. 1-4",
      sa1: "Ch. 1-8",
      pa2: "Ch. 9-12",
      sa2: "Ch. 9-16",
    },
    {
      subject: "Hindi",
      book: "Prakhar",
      pa1: "Ch. 1-4, 16",
      sa1: "Ch. 1-8, 16, 17, 20",
      pa2: "Ch. 9-12, 18",
      sa2: "Ch. 9-15, 18, 19, 20",
    },
    {
      subject: "Computer",
      book: "Cyber Quest",
      pa1: "Ch. 1-2",
      sa1: "Ch. 1-4, Worksheet 1-2",
      pa2: "Ch. 5-6",
      sa2: "Ch. 5-8, Worksheet 3-4",
    },
    {
      subject: "Moral Edu.",
      book: "Life with Values",
      pa1: "Ch. 1-3",
      sa1: "Ch. 1-5",
      pa2: "Ch. 6-7",
      sa2: "Ch. 6-10",
    },
    {
      subject: "G.K.",
      book: "The Knowledge Generation",
      pa1: "Ch. 1-12 & Quiz Corner-1",
      sa1: "Ch. 1-23, Quiz Corner-2, Model Test Paper-1",
      pa2: "Ch. 24-30",
      sa2: "Ch. 24-39, Quiz Corner-3, Model Test Paper-2",
    },
  ],
},
    

    // ================= CLASS IV (YOUR EXISTING) =================
   {
  className: "Class IV - Academic Syllabus 2026-27",
  rows: [
    {
      subject: "English",
      book: "Focus / Tune in to Grammar",
      pa1: "Focus: Ch. 1-3, Poem 1-2 | Grammar: Ch. 1-5",
      sa1: "Focus: Ch. 1-6, Poem 1-4, Pg. 105-107 | Grammar: Ch. 1-12, Comprehension Passage-1, Poem-1, Paragraph Writing",
      pa2: "Focus: Ch. 7-9, Poem 5-6 | Grammar: Ch. 13-19",
      sa2: "Focus: Ch. 7-13, Poem 5-7, Pg. 108-111 | Grammar: Ch. 13-25, Comprehension Passage-2, Poem-2, Letter Writing, Paragraph, Story Writing",
    },
    {
      subject: "Mathematics",
      book: "Universal Mathematics",
      pa1: "Ch. 1-4 ",
      sa1: "Ch. 1-7",
      pa2: "Ch. 8-10",
      sa2: "Ch. 8-13",
    },
    {
      subject: "EVS",
      book: "Living Planet",
      pa1: "Ch. 1-5, Worksheet 1-2",
      sa1: "Ch. 1-11, Worksheet 1-4, Test Paper-1",
      pa2: "Ch. 12-16, Worksheet 5-6",
      sa2: "Ch. 12-22, Worksheet 5-7",
    },
    {
      subject: "Hindi",
      book: "Shikhar",
      pa1: "Ch. 1-4",
      sa1: "Ch. 1-8",
      pa2: "Ch. 9-12",
      sa2: "Ch. 9-16",
    },
    {
      subject: "Hindi",
      book: "Prakhar",
      pa1: "Ch. 1-4, 16",
      sa1: "Ch. 1-8, 16, 17, 20",
      pa2: "Ch. 9-12, 18",
      sa2: "Ch. 9-15, 18, 19, 20",
    },
    {
      subject: "Computer",
      book: "Cyber Quest",
      pa1: "Ch. 1-3",
      sa1: "Ch. 1-5, Worksheet 1-2",
      pa2: "Ch. 6-7",
      sa2: "Ch. 6-9, Worksheet 3-4",
    },
    {
      subject: "Moral Edu.",
      book: "Life with Values",
      pa1: "Ch. 1-3",
      sa1: "Ch. 1-5",
      pa2: "Ch. 6-7",
      sa2: "Ch. 6-10",
    },
    {
      subject: "G.K.",
      book: "The Knowledge Generation",
      pa1: "Ch. 1-15 & Quiz Corner-1",
      sa1: "Ch. 1-29, Quiz Corner-2, Model Test Paper-1",
      pa2: "Ch. 30-36, Quiz Corner-3",
      sa2: "Ch. 30-41, Model Test Paper-2",
    },
  ],
},
    // ================= CLASS V =================
{
  className: "Class V - Academic Syllabus 2026-27",
  rows: [
    {
      subject: "English",
      book: "Focus / Tune in to Grammar",
      pa1: "Focus: Ch. 1-3, Poem 1-2 | Grammar: Ch. 1-6, Comprehension Passage-1, Poem-1, Paragraph Writing, Letter Writing",
      sa1: "Focus: Ch. 1-6, Poem 1-4, Pg. 121-124 | Grammar: Ch. 1-13, Comprehension Passage-1, Poem-1, Paragraph Writing, Letter Writing",
      pa2: "Focus: Ch. 7-9, Poem 5-6 | Grammar: Ch. 14-21, Comprehension Passage-2, Poem-2, Letter Writing, Paragraph Writing",
      sa2: "Focus: Ch. 7-13, Poem 5-7, Pg. 125-127 | Grammar: Ch. 14-27, Comprehension Passage-2, Poem-2, Letter Writing, Paragraph, Story Writing",
    },
    {
      subject: "Mathematics",
      book: "Universal Mathematics",
      pa1: "Ch. 1-4",
      sa1: "Ch. 1-8",
      pa2: "Ch. 9-11",
      sa2: "Ch. 9-14",
    },
    {
      subject: "EVS",
      book: "Living Planet",
      pa1: "Ch. 1-7, Worksheet-1",
      sa1: "Ch. 1-14, Worksheet 1-3",
      pa2: "Ch. 15-21, Worksheet-4",
      sa2: "Ch. 15-28, Worksheet 4-5",
    },
    {
      subject: "Hindi",
      book: "Shikhar",
      pa1: "Ch. 1-4",
      sa1: "Ch. 1-8",
      pa2: "Ch. 9-12",
      sa2: "Ch. 9-16",
    },
    {
      subject: "Hindi",
      book: "Prakhar",
      pa1: "Ch. 1-5, 20, 21",
      sa1: "Ch. 1-10, 20, 21, 22",
      pa2: "Ch. 11-15, 23, 24",
      sa2: "Ch. 11-19, 23, 24, 25",
    },
    {
      subject: "Computer",
      book: "Cyber Quest",
      pa1: "Ch. 1-3",
      sa1: "Ch. 1-5, Worksheet 1-2",
      pa2: "Ch. 6-7, Worksheet-3",
      sa2: "Ch. 6-9, Worksheet 4-5",
    },
    {
      subject: "Moral Edu.",
      book: "Life with Values",
      pa1: "Ch. 1-3",
      sa1: "Ch. 1-5",
      pa2: "Ch. 6-7",
      sa2: "Ch. 6-10",
    },
    {
      subject: "G.K.",
      book: "The Knowledge Generation",
      pa1: "Ch. 1-14 & Quiz Corner-1",
      sa1: "Ch. 1-27, Quiz Corner-2, Model Test Paper-1",
      pa2: "Ch. 28-35, Quiz Corner-3",
      sa2: "Ch. 28-46, Model Test Paper-2, Quiz Corner-3",
    },
  ],
},

// ================= CLASS VI =================
{
  className: "Class VI - Academic Syllabus 2026-27",
  rows: [
    {
      subject: "English",
      book: "Communicate With Cambridge / PC Wren’s Grammar",
      pa1: "Cambridge: Ch. 1-3, Poem 1-2 | Grammar: Ch. 1-4, 18-21",
      sa1: "Cambridge: Ch. 1-7, Poem 1-3 | Grammar: Ch. 1-8, 18-23",
      pa2: "Cambridge: Ch. 8-11, Poem 4-5 | Grammar: Ch. 9-12, 24, 25, 28",
      sa2: "Cambridge: Ch. 8-14, Poem 4-7 | Grammar: Ch. 9-17, 24, 28",
    },
    {
      subject: "Mathematics",
      book: "Mindful Maths",
      pa1: "Ch. 1-3",
      sa1: "Ch. 1-5",
      pa2: "Ch. 6-8",
      sa2: "Ch. 6-10",
    },
    {
      subject: "Science",
      book: "Science Us",
      pa1: "Ch. 1-3",
      sa1: "Ch. 1-6",
      pa2: "Ch. 7-9",
      sa2: "Ch. 7-11",
    },
    {
      subject: "Social Science",
      book: "Lets Explore India and Beyond",
      pa1: "History Ch. 4-5 | Geography Ch. 1 | Civics Ch. 9",
      sa1: "History Ch. 4-6 | Geography Ch. 1-2 | Civics Ch. 9-10 | Economics Ch. 13",
      pa2: "History Ch. 7 | Geography Ch. 3 | Civics Ch. 11",
      sa2: "History Ch. 7-8 | Geography Ch. 3 | Civics Ch. 11-12 | Economics Ch. 14",
    },
    {
      subject: "Hindi",
      book: "Shikhar / Vyakran Abhilasha",
      pa1: "Shikhar: Ch. 1-4 | Vyakran: Ch. 1-5, 19, 20, 21",
      sa1: "Shikhar: Ch. 1-8 | Vyakran: Ch. 1-9, 19, 20, 21",
      pa2: "Shikhar: Ch. 9-12 | Vyakran: Ch. 10-14, 23",
      sa2: "Shikhar: Ch. 13-16 | Vyakran: Ch. 10-18, 22, 23, 24",
    },
    {
      subject: "Sanskrit",
      book: "Ruchira",
      pa1: "Ch. 1-4",
      sa1: "Ch. 1-8",
      pa2: "Ch. 9-12",
      sa2: "Ch. 9-15",
    },
    {
      subject: "Computer",
      book: "Cyber Quest",
      pa1: "Ch. 1-3, Worksheet-1",
      sa1: "Ch. 1-5, Worksheet 1-2",
      pa2: "Ch. 6-7, Worksheet-3",
      sa2: "Ch. 6-9, Worksheet 4-5",
    },
    {
      subject: "Moral Edu.",
      book: "Inspiring Souls",
      pa1: "Ch. 1-4",
      sa1: "Ch. 1-7",
      pa2: "Ch. 8-11",
      sa2: "Ch. 8-14",
    },
    {
      subject: "G.K.",
      book: "Wonders of G.K.",
      pa1: "Ch. 1-16, Self Assessment-1",
      sa1: "Ch. 1-28, Self Assessment-2",
      pa2: "Ch. 29-38, Self Assessment-3",
      sa2: "Ch. 29-53, Self Assessment-4",
    },
  ],
},

// ================= CLASS VII =================
{
  className: "Class VII - Academic Syllabus 2026-27",
  rows: [
    {
      subject: "English",
      book: "Communicate With Cambridge / PC Wren’s Grammar",
      pa1: "Cambridge: Ch. 1-3, Poem 1-2 | Grammar: Ch. 1-5, 20-23, 34",
      sa1: "Cambridge: Ch. 1-7, Poem 1-3 | Grammar: Ch. 1-10, 20-27, 34",
      pa2: "Cambridge: Ch. 8-11, Poem 4-5 | Grammar: Ch. 11-15, 20, 28, 30, 34",
      sa2: "Cambridge: Ch. 8-14, Poem 4-7 | Grammar: Ch. 11-19, 20, 28-34",
    },
    {
      subject: "Mathematics",
      book: "Mindful Maths",
      pa1: "Ch. 1-2",
      sa1: "Ch. 1-4",
      pa2: "Ch. 5-6",
      sa2: "Ch. 5-8",
    },
    {
      subject: "Science",
      book: "Science Us",
      pa1: "Ch. 1-3",
      sa1: "Ch. 1-7",
      pa2: "Ch. 8-10",
      sa2: "Ch. 8-13",
    },
    {
      subject: "Social Science",
      book: "Lets Explore India and Beyond",
      pa1: "History Ch. 4 | Geography Ch. 1 | Civics Ch. 8",
      sa1: "History Ch. 4-5 | Geography Ch. 1-2 | Civics Ch. 8 | Economics Ch. 11",
      pa2: "History Ch. 6 | Geography Ch. 3 | Civics Ch. 9",
      sa2: "History Ch. 6-7 | Geography Ch. 3 | Civics Ch. 9-10 | Economics Ch. 12",
    },
    {
      subject: "Hindi",
      book: "Shikhar / Vyakran Abhilasha",
      pa1: "Shikhar: Ch. 1-4 | Vyakran: Ch. 1-5, 21",
      sa1: "Shikhar: Ch. 1-8 | Vyakran: Ch. 1-10, 20-23",
      pa2: "Shikhar: Ch. 9-12 | Vyakran: Ch. 11-15, 24, 25",
      sa2: "Shikhar: Ch. 9-16 | Vyakran: Ch. 11-19, 26, 27",
    },
    {
      subject: "Sanskrit",
      book: "Ruchira",
      pa1: "Ch. 1-4",
      sa1: "Ch. 1-8",
      pa2: "Ch. 9-12",
      sa2: "Ch. 9-15",
    },
    {
      subject: "Computer",
      book: "Cyber Quest",
      pa1: "Ch. 1-3, Worksheet-1",
      sa1: "Ch. 1-5, Worksheet 1-2",
      pa2: "Ch. 6-8, Worksheet-3",
      sa2: "Ch. 6-10, Worksheet 4-5",
    },
    {
      subject: "Moral Edu.",
      book: "Inspiring Souls",
      pa1: "Ch. 1-4",
      sa1: "Ch. 1-7",
      pa2: "Ch. 8-11",
      sa2: "Ch. 8-15",
    },
    {
      subject: "G.K.",
      book: "Wonders of G.K.",
      pa1: "Ch. 1-13, Self Assessment-1",
      sa1: "Ch. 1-23, Self Assessment-2",
      pa2: "Ch. 24-38, Self Assessment-3",
      sa2: "Ch. 24-53, Self Assessment-4",
    },
  ],
},

// ================= CLASS VIII =================
{
  className: "Class VIII - Academic Syllabus 2026-27",
  rows: [
    {
      subject: "English",
      book: "Communicate With Cambridge / PC Wren’s Grammar",
      pa1: "Cambridge: Ch. 1-3, Poem 1-2 | Grammar: Ch. 1-7, 29-31, 38",
      sa1: "Cambridge: Ch. 1-7, Poem 1-3 | Grammar: Ch. 1-5, 29-33, 38",
      pa2: "Cambridge: Ch. 8-11, Poem 4-5 | Grammar: Ch. 16-23, 29, 34, 35, 38",
      sa2: "Cambridge: Ch. 8-14, Poem 4-7 | Grammar: Ch. 16-28, 29, 34-38",
    },
    {
      subject: "Mathematics",
      book: "Mindful Maths",
      pa1: "Ch. 1-2",
      sa1: "Ch. 1-4",
      pa2: "Ch. 5-6",
      sa2: "Ch. 5-7",
    },
    {
      subject: "Science",
      book: "Science Us",
      pa1: "Ch. 1-3",
      sa1: "Ch. 1-7",
      pa2: "Ch. 8-11",
      sa2: "Ch. 8-14",
    },
    {
      subject: "Social Science",
      book: "Lets Explore India and Beyond",
      pa1: "History Ch. 2 | Geography Ch. 1 | Civics Ch. 8",
      sa1: "History Ch. 2 | Geography Ch. 1-2 | Civics Ch. 5 | Economics Ch. 11",
      pa2: "History Ch. 6 | Geography Ch. 3 | Civics Ch. 9",
      sa2: "History Ch. 6-7 | Geography Ch. 3 | Civics Ch. 9-10 | Economics Ch. 12",
    },
    {
      subject: "Hindi",
      book: "Shikhar / Vyakran Abhilasha",
      pa1: "Shikhar: Ch. 1-4 | Vyakran: Ch. 1-5, 24, 25",
      sa1: "Shikhar: Ch. 1-8 | Vyakran: Ch. 1-11, 24-26",
      pa2: "Shikhar: Ch. 9-12 | Vyakran: Ch. 12-17, 27, 28",
      sa2: "Shikhar: Ch. 9-16 | Vyakran: Ch. 12-22, 29-30",
    },
    {
      subject: "Sanskrit",
      book: "Ruchira",
      pa1: "Ch. 1-4",
      sa1: "Ch. 1-8",
      pa2: "Ch. 9-12",
      sa2: "Ch. 9-15",
    },
    {
      subject: "Computer",
      book: "Cyber Quest",
      pa1: "Ch. 1-3, Worksheet-1",
      sa1: "Ch. 1-5, Worksheet 1-2",
      pa2: "Ch. 6-8, Worksheet-3",
      sa2: "Ch. 6-10, Worksheet 4-5",
    },
    {
      subject: "Moral Edu.",
      book: "Inspiring Souls",
      pa1: "Ch. 1-4",
      sa1: "Ch. 1-7",
      pa2: "Ch. 8-11",
      sa2: "Ch. 8-15",
    },
    {
      subject: "G.K.",
      book: "Wonders of G.K.",
      pa1: "Ch. 1-15, Self Assessment-1",
      sa1: "Ch. 1-26, Self Assessment 1-2",
      pa2: "Ch. 27-38, Self Assessment-3",
      sa2: "Ch. 24-53, Self Assessment-4",
    },
  ],
},

// ================= CLASS IX & X =================
{
  className: "Class IX & X - Academic Syllabus 2026-27",
  rows: [
    {
      subject: "Periodic Assessment / Assorted Assessment",
      book: "As per CBSE Curriculum",
      pa1: "Syllabus covered till announcement of assessment",
      sa1: "-",
      pa2: "-",
      sa2: "-",
    },
    {
      subject: "Subject Enrichment",
      book: "CBSE Prescribed Books",
      pa1: "Specified by teacher as per CBSE Curriculum",
      sa1: "-",
      pa2: "-",
      sa2: "-",
    },
    {
      subject: "Annual Examination",
      book: "CBSE Curriculum",
      pa1: "Syllabus & Marking as per CBSE Curriculum specification",
      sa1: "-",
      pa2: "-",
      sa2: "-",
    },
  ],
},

// ================= CLASS XI & XII =================
{
  className: "Class XI & XII - Academic Syllabus 2026-27",
  rows: [
    {
      subject: "Periodic Assessment / Assorted Assessment",
      book: "As per CBSE Curriculum",
      pa1: "Syllabus covered till announcement of assessment",
      sa1: "-",
      pa2: "-",
      sa2: "-",
    },
    {
      subject: "Annual Examination",
      book: "CBSE Curriculum",
      pa1: "Syllabus & Marking as per CBSE Curriculum specification",
      sa1: "-",
      pa2: "-",
      sa2: "-",
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
