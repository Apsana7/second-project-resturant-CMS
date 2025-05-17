import React from 'react'
import ServicesSection from '../Component/Page Component/Service/ServicesSection'
import ServiceSectionTable from '../Component/Page Component/Service/ServiceSectionTable'
import ChefDetail from '../Component/Page Component/Chef/ChefDetail'
import ChefTable from '../Component/Page Component/Chef/ChefTable'

function About() {
  return (
    <div className='flex flex-col  gap-10'>
      <ServicesSection/>
       <ServiceSectionTable/>
       <ChefDetail/>
       <ChefTable/>
    </div>
  )
}

export default About
