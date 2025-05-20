import React from 'react';
import resumeData from '../data/resumeData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive set of technologies I work with to build efficient and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {resumeData.skills.map((skillCategory, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary-700 pb-2 border-b-2 border-gray-100">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-semibold mb-6 text-primary-700">Professional Development</h3>
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-4">Certifications</h4>
            <div className="flex flex-wrap gap-3">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="bg-primary-50 px-4 py-2 rounded-md text-primary-700 border border-primary-100">
                  {cert}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Currently Learning</h4>
            <div className="flex flex-wrap gap-3">
              <div className="bg-secondary-50 px-4 py-2 rounded-md text-secondary-700 border border-secondary-100">
                Docker & Containerization
              </div>
              <div className="bg-secondary-50 px-4 py-2 rounded-md text-secondary-700 border border-secondary-100">
                GraphQL
              </div>
              <div className="bg-secondary-50 px-4 py-2 rounded-md text-secondary-700 border border-secondary-100">
                FastAPI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;