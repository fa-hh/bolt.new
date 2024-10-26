import React from 'react'

const About = () => {
  return (
    <div name="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-600">
              I'm a passionate web developer with expertise in modern web technologies.
              I love creating beautiful and functional websites that provide great user experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li className="bg-gray-100 p-2 rounded">HTML & CSS</li>
              <li className="bg-gray-100 p-2 rounded">JavaScript</li>
              <li className="bg-gray-100 p-2 rounded">React</li>
              <li className="bg-gray-100 p-2 rounded">Node.js</li>
              <li className="bg-gray-100 p-2 rounded">Tailwind CSS</li>
              <li className="bg-gray-100 p-2 rounded">Git</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
