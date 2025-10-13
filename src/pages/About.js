import React from 'react'
import { Container } from 'react-bootstrap'
import Banner from '../components/Banner'
import ScrolLinks from "../components/ScrolLinks"
import "./About.css"
import PolicyCards from '../components/PolicyCards'

const About = () => {
  return (
    <>
   <Banner
        title="About Us"
        image={require("../assets/parents-guide-img.jpg")}
        breadcrumbs={[
          { label: "HOME", link: "/home" },
          { label: "About Us", link: "/About Us" },
        ]}
      />
<ScrolLinks/>


   <Container fluid className="about-fluid">
   <Container className="about-container1" >
<div className='about-content-section1'>
<p className='page-heading about-heading'>About ONGC Community
</p>
<p>“Making Tomorrow Brighter” is the motto of ONGC Community School. ONGC Community School is the first of its kind in India. Launched by ONGC with SDMC Trust-as its COM Partner. Our aim was to start a school that had sensitivity and a deeper understanding of the child.
    Each one is adapted to the character of the location and seeks to meet the educational needs of our time. The School, affiliated to the Central Board of Secondary Education, catering to the educational needs of students, with an uncompromising emphasis on quality education.

      </p>
      <p>
         ONGC CS epitomises vibrancy and freshness, dovetailing much of the ethos of the new post-independence India into its educational program and philosophy. The school is a secular co-educational one integrating into its curriculum concern for the environment,
          the spirit of community service and international peace and brotherhood.
          </p>
          <p>
Besides spacious classrooms and playgrounds, we have fully developed facilities for each department, with Maths and Science laboratories, a Computer Resource Center, well stocked libraries, an auditorium and open-air stage, and a Teachers’ Learning Center.
</p>
</div>
   </Container>

 <Container fluid className="about-container-fluid2 g-0" >
<Container className='about-content-section2'>
<div className='about-section2-left-side'>
    <img src={require("../assets/testimonial_img.png")} alt=""/>
</div>

<div className='about-section2-right-side'>
   <p>Ms. Vrinda Sarup</p>
   <p>Ms. Vrinda Sarup is a retired IAS officer of the 1981 batch, who has served as secretary, to Govt of India in the Dept. of School Education and Literacy, Ministry of Human Resources Development, and in the Dept. of Food and Public Distribution. Ms. Sarup has worked 
    in the sector of Education for over 23 years both at the Central and State Govts, where she has experience both as an implementer and policymaker. She has been closely associated with the formulation and implementation of some of the most significant national programmes
     of the District Primary Education Programme and the Sarva Shiksha Abhiyan for elementary education and the revised Vocational Education Programme at the secondary/senior secondary level. She was Secretary in the Ministry of Consumer Affairs, Food and Public Distribution 
     and Human Resource Development. Her key area of specialization has been in the Social Sector.</p>
</div>
</Container>
   </Container>
{/* mission vision */}
<Container fluid className="about-container-fluid3 g-0" >
<Container className='about-content-section3'>
<div className='about-section3-right-side'>
   <p>Ms. Vrinda Sarup</p>
   <p>Ms. Vrinda Sarup is a retired IAS officer of the 1981 batch, who has served as secretary, to Govt of India in the Dept. of School Education and Literacy, Ministry of Human Resources Development, and in the Dept. of Food and Public Distribution. Ms. Sarup has worked 
  
     </p>
</div>
<div className='about-section3-left-side'>
    <img src={require("../assets/testimonial_img.png")} alt=""/>
</div>
</Container>
   </Container>

   <Container fluid className="about-container-fluid3 g-0" >
<Container className='about-content-section3'>
    <div className='about-section3-left-side'>
    <img src={require("../assets/testimonial_img.png")} alt=""/>
</div>
<div className='about-section3-right-side'>
   <p>Ms. Vrinda Sarup</p>
   <p>Ms. Vrinda Sarup is a retired IAS officer of the 1981 batch, who has served as secretary, to Govt of India in the Dept. of School Education and Literacy, Ministry of Human Resources Development, and in the Dept. of Food and Public Distribution. Ms. Sarup has worked 
  
     </p>
</div>

</Container>
   </Container>

   <Container fluid className="about-container-fluid3 g-0" >
<Container className='about-content-section3'>
<div className='about-section3-right-side'>
   <p>Ms. Vrinda Sarup</p>
   <p>Ms. Vrinda Sarup is a retired IAS officer of the 1981 batch, who has served as secretary, to Govt of India in the Dept. of School Education and Literacy, Ministry of Human Resources Development, and in the Dept. of Food and Public Distribution. Ms. Sarup has worked 
  
     </p>
</div>
<div className='about-section3-left-side'>
    <img src={require("../assets/testimonial_img.png")} alt=""/>
</div>
</Container>
   </Container>


   </Container>

   <PolicyCards/>
   </>
  )
}

export default About