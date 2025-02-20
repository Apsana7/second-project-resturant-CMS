import React from 'react'
import AboutSection from '../Component/Page Component/About/AboutSection'
import ServicesSection from '../Component/Page Component/Service/ServicesSection'
import ServiceSectionTable from '../Component/Page Component/Service/ServiceSectionTable'
import ChefDetail from '../Component/Page Component/Chef/ChefDetail'

function About() {
  return (
    <div>
      <AboutSection/>
      <ServicesSection/>
       <ServiceSectionTable/>
       <ChefDetail/>
    </div>
  )
}

export default About
