import React from 'react'
import AboutSection from '../Component/Page Component/Home/AboutSection'
import ServicesSection from '../Component/Page Component/Home/ServicesSection'
import ChefDetail from '../Component/Page Component/Home/ChefDetail'
import TestimonySec from '../Component/Page Component/Home/TestimonySec'
import BlogSection from '../Component/Page Component/Home/BlogSection'


function Home() {
  return (
    <div className='relative flex flex-col gap-10'>
      
      <AboutSection/>
      <ServicesSection/>
      <ChefDetail/>
      <TestimonySec/>
      <BlogSection/>
    
    </div>
  )
}

export default Home
