import React from 'react'
// import HomeBanner from '../components/HomeBanner'
import HomeAbout from '../components/HomeAbout'
// import Features from '../components/Features'
// import Separate from '../components/Separate'
import Testimonials from '../components/Testimonials'
import CampusSection from '../components/Campus'
import { motion } from "framer-motion";
import PrincipalMessage from '../components/PrincipalMessage'
import Welcome from '../components/Welcome'
import GuideStudent from '../components/Campus'
import DemoBanner from '../components/DemoBanner'
import Trsutees from '../components/Trsutees';
import Process  from '../components/Process';
import CampusFacility from '../components/CampusFacility';
import WhyOngc from '../components/WhyOngc';
import Achievements from '../components/Achievements';

const Home = () => {
  return (
    <div>
        {/* <HomeBanner/> */}
        <DemoBanner/>
       {/* <ScrolLinks/> */}

          <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
   <Welcome/>
      </motion.div>


       <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
   <WhyOngc/>
      </motion.div>

       {/* <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
   <BannerBottom/>
      </motion.div> */}

               <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
   <PrincipalMessage/>
      </motion.div>
   {/* <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >   
      <Separate/>
      </motion.div> */}

       <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
   <Process/>
      </motion.div>
     <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
   <Trsutees/>
      </motion.div>

     <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >   
      < CampusSection/>
      </motion.div>
     

          <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >   
      <   CampusFacility/>
      </motion.div>

   
      {/* <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >   
        <Features/>
        </motion.div> */}

     {/* <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >   
<Navigate/>
</motion.div> */}

{/*  */}
         <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >   
<Achievements/>
</motion.div>

{/*  */}
         <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >   
<Testimonials/>
</motion.div>

 {/* <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >   
<QuerySection/>

</motion.div> */}
    </div>
  )
}

export default Home