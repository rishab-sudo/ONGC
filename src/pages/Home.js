import React from 'react'
import HomeBanner from '../components/HomeBanner'
import HomeAbout from '../components/HomeAbout'
import Features from '../components/Features'
import Separate from '../components/Separate'
import Testimonials from '../components/Testimonials'
import QuerySection from '../components/QuerySection'
import  Navigate  from '../components/Navigate'
import { motion } from "framer-motion";
import ScrolLinks from '../components/ScrolLinks'
import PrincipalMessage from '../components/PrincipalMessage'
import Facilities from '../components/Facilities'

const Home = () => {
  return (
    <div>
        <HomeBanner/>
           {/* <ScrolLinks/> */}

          <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
   <HomeAbout/>
      </motion.div>

               <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
   <PrincipalMessage/>
      </motion.div>
  
       <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >   
        <Facilities/>
        </motion.div>
        
       <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >   
      <Separate/>
      </motion.div>
     
      {/* <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >   
        <Features/>
        </motion.div> */}

     


 <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >   
<Navigate/>
</motion.div>
         <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >   
<Testimonials/>
</motion.div>

 <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >   
<QuerySection/>

</motion.div>
    </div>
  )
}

export default Home