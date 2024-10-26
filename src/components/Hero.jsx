import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div name="home" className="section-padding min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Fabian H.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Web Developer & Designer
          </p>
          <Link
            to="projects"
            smooth
            duration={500}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary cursor-pointer"
          >
            View My Work
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
