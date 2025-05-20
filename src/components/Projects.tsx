import React, { useState } from 'react';
import resumeData from '../data/resumeData';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projectFilters = [
    { id: 'all', name: 'All Projects' },
    { id: 'django', name: 'Django' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'frontend', name: 'Frontend' }
  ];

  const filteredProjects = resumeData.projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'django' && project.technologies.some(tech => tech.includes('Django'))) return true;
    if (activeFilter === 'ai' && project.technologies.some(tech => 
      ['OpenCV', 'TensorFlow', 'face recognition', 'MediaPipe', 'Transformers'].includes(tech)
    )) return true;
    if (activeFilter === 'frontend' && project.technologies.some(tech => 
      ['React', 'HTML', 'CSS', 'JavaScript'].includes(tech)
    )) return true;
    return false;
  });

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical projects, demonstrating skills in Django, AI/ML, and web development.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {projectFilters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] animate-fade-in"
              style={{ animationDelay: `${(index % 3) * 150}ms` }}
            >
              <div className="h-48 bg-gradient-to-r from-primary-500 to-secondary-500 p-6 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white text-center">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                {project.highlights && (
                  <ul className="mb-4 space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                        <span className="text-gray-600 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Code2 size={16} className="text-primary-600 mr-2" />
                    <span className="text-primary-600 text-sm font-medium">View Code</span>
                  </div>
                  {project.year && (
                    <span className="text-sm text-gray-500">{project.year}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href={resumeData.personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline inline-flex items-center"
          >
            View All Projects on GitHub
            <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;