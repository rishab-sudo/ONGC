import React from 'react'
import { Container } from 'react-bootstrap'
import "./Features.css"

const Features = () => {
   return (
      <Container fluid className='features-fluid'>
         <Container className='features-container'>
            <div className='feature-left-section'>
               <img src={require("../assets/campur_life_1.jpg")} alt="" />
            </div>

            <div className='feature-right-section'>

               <div className='features-heading-div'>
                  <p>CAMPUS</p>
                  <p className='page-heading'>Campus is your Dream Lifestyle</p>
               </div>

               <div className='features-point-div'>
                  <div className='feature-icon-div'>
                     <img alt="features-icon" />
                  </div>
                  <div className='feature-text-div'>
                     <p className='h2'>Smart Hostel</p>
                     <p className='h5'>Behind the word mountains, far from the Conso there live the blind texts</p>
                  </div>
               </div>

               <div className='features-point-div'>
                  <div className='feature-icon-div'>
                     <img alt="features-icon" />
                  </div>
                  <div className='feature-text-div'>
                     <p className='h2'>Smart Hostel</p>
                     <p className='h5'>Behind the word mountains, far from the Conso there live the blind texts</p>
                  </div>
               </div>

               <div className='features-point-div'>
                  <div className='feature-icon-div'>
                     <img alt="features-icon" />
                  </div>
                  <div className='feature-text-div'>
                     <p className='h2'>Smart Hostel</p>
                     <p className='h5'>Behind the word mountains, far from the Conso there live the blind texts</p>
                  </div>
               </div>

               <div className='features-point-div'>
                  <div className='feature-icon-div'>
                     <img alt="features-icon" />
                  </div>
                  <div className='feature-text-div'>
                     <p className='h2'>Smart Hostel</p>
                     <p className='h5'>Behind the word mountains, far from the Conso there live the blind texts</p>
                  </div>
               </div>

            </div>
         </Container>
      </Container>
   )
}

export default Features