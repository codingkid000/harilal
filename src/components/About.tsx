import React from 'react';
import resumeData from '../data/resumeData';
import { Code, Server, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate Django Developer who loves crafting elegant, efficient solutions for complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="card p-6 flex flex-col items-center text-center hover:border-l-4 hover:border-primary-500 transition-all">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <Code size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-600">Crafting robust server-side applications with Django and Python</p>
          </div>

          <div className="card p-6 flex flex-col items-center text-center hover:border-l-4 hover:border-primary-500 transition-all">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <Server size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">RESTful APIs</h3>
            <p className="text-gray-600">Designing and implementing RESTful services with Django REST Framework</p>
          </div>

          <div className="card p-6 flex flex-col items-center text-center hover:border-l-4 hover:border-primary-500 transition-all">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <Database size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Database Design</h3>
            <p className="text-gray-600">Creating efficient data structures with PostgreSQL and other databases</p>
          </div>

          <div className="card p-6 flex flex-col items-center text-center hover:border-l-4 hover:border-primary-500 transition-all">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <Globe size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">Building responsive interfaces with React and modern JavaScript</p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">My Approach</h3>
              <p className="text-gray-700 mb-4">
                With over 2 years of experience building web applications, I focus on creating clean, maintainable code that delivers exceptional user experiences. My background in mechanical engineering gives me a unique perspective on problem-solving and technical challenges.
              </p>
              <p className="text-gray-700">
                I'm particularly passionate about integrating AI and machine learning into web applications, as demonstrated by my projects in face recognition, sign language detection, and medical imaging.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Interests & Goals</h3>
              <ul className="space-y-2">
                {resumeData.interests.map((interest, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <span className="text-gray-700">{interest}</span>
                  </li>
                ))}
                <li className="flex items-start mt-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                  <span className="text-gray-700">Building applications that solve real-world problems</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                  <span className="text-gray-700">Continuous learning and exploring new technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;