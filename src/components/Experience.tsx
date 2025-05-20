import React from 'react';
import resumeData from '../data/resumeData';
import { Briefcase, MapPin, CalendarDays } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My journey as a Django Developer across different companies and projects.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {resumeData.experience.map((job, index) => (
            <div 
              key={index} 
              className="timeline-item animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="timeline-dot"></div>
              <div className="bg-white p-6 rounded-xl shadow-md mb-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2 md:mb-0">{job.position}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <CalendarDays size={16} className="mr-1" />
                    <span>{job.period}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <Briefcase size={18} className="text-primary-600 mr-2" />
                  <span className="font-medium">{job.company}</span>
                  <span className="mx-2">•</span>
                  <MapPin size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-600">{job.location}</span>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {job.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;