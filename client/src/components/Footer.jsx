import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 mb-4">
          Powered by AI to craft your perfect journey.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} AI Travel Itinerary Generator. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;