import React from 'react'
import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
import HeroSection from '../components/HeroSection'
import ExperienceSection from '../components/ExperienceSection'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <ProjectSection />
    <ContactSection />
    <Footer />
    </div>
  )
}

export default Home
