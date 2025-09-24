import React from 'react'
import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
import HeroSection from '../components/HeroSection'
import ExperienceSection from '../components/ExperienceSection'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'

const Home = () => {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <ProjectSection />
    </div>
  )
}

export default Home
