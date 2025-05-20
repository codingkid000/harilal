import React from 'react';
import resumeData from '../data/resumeData';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">{resumeData.personalInfo.name}</h3>
            <p className="text-gray-300 mb-4">{resumeData.personalInfo.title}</p>
            <p className="text-gray-400">Dedicated to creating innovative web solutions with Django and modern frontend technologies.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-primary-400 transition-colors">Skills</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-primary-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-primary-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">{resumeData.personalInfo.email}</li>
              <li className="text-gray-300">{resumeData.personalInfo.phone}</li>
              <li className="text-gray-400 mt-4">
                <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400 transition-colors">GitHub</a>
                {' • '}
                <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400 transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gray-800 text-white p-3 rounded-full hover:bg-primary-600 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;