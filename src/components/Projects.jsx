import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A web application built with React and Node.js",
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 2,
      title: "Project 2",
      description: "An e-commerce platform using modern technologies",
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 3,
      title: "Project 3",
      description: "A responsive website design for a local business",
      image: "https://via.placeholder.com/400x300",
    },
  ]

  return (
    <div name="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, description, image }) => (
            <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={image} alt={title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
