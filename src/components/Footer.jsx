import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Fabian H.</h2>
            <p className="text-gray-400">Web Developer & Designer</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary"><FaGithub size={24} /></a>
            <a href="#" className="hover:text-primary"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-primary"><FaTwitter size={24} /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 Fabian H. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
