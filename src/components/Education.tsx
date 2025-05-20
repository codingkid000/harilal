import React from 'react';
import resumeData from '../data/resumeData';
import { GraduationCap, MapPin, CalendarDays } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My academic background and qualifications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {resumeData.education.map((edu, index) => (
            <div 
              key={index} 
              className="timeline-item animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="timeline-dot"></div>
              <div className="bg-white p-6 rounded-xl shadow-md mb-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2 md:mb-0">{edu.degree}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <CalendarDays size={16} className="mr-1" />
                    <span>{edu.year}</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <GraduationCap size={18} className="text-primary-600 mr-2" />
                  <span className="font-medium">{edu.institution}</span>
                  <span className="mx-2">•</span>
                  <MapPin size={18} className="text-primary-600 mr-2" />
                  <span className="text-gray-600">{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto mt-8">
          <h3 className="text-xl font-semibold text-primary-700 mb-4">Professional Development</h3>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <h4 className="font-medium mb-2">Self-Learning Path</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                  <span className="text-gray-700">Advanced Django Techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                  <span className="text-gray-700">React Frontend Development</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                  <span className="text-gray-700">AI Integration in Web Apps</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-1">
              <h4 className="font-medium mb-2">Certifications</h4>
              <ul className="space-y-2">
                {resumeData.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;