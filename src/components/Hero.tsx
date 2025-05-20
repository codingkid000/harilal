import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import resumeData from '../data/resumeData';
import profileImage from '../Images/hari.jpg';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-3/5 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4">
              <span className="text-primary-600">Hi, I'm {resumeData.personalInfo.name}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              {resumeData.personalInfo.title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              {resumeData.personalInfo.summary}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact" className="btn btn-primary">
                Contact Me <ArrowRight size={18} className="ml-2"/>
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href={resumeData.personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href={resumeData.personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${resumeData.personalInfo.email}`}
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-200 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-500 opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
  src={profileImage}
  alt="Profile"
  className="w-full h-full object-cover"
/>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;