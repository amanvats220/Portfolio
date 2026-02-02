import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Swashakti',
      tagline: 'Women Empowerment Platform',
      description:
        'A comprehensive e-commerce platform empowering women to sell their homemade products and artisan crafts. The platform provides tools for women entrepreneurs to showcase their skills, become financially independent, and build sustainable businesses.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Payment Integration'],
      features: [
        'User-friendly product listing and management',
        'Secure payment gateway integration',
        'Seller dashboard with analytics',
        'Customer review and rating system',
      ],
      github: 'https://github.com/amanvats220',
      live: null,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      color: 'blue',
    },
    {
      title: 'Women Alpha Security',
      tagline: 'Violence Reporting & Awareness Platform',
      description:
        'A critical safety platform enabling women to report violence, seek help, and access resources. Built to prevent tragedies like Abhaya and Nirbhaya cases by providing immediate reporting mechanisms and community support networks.',
      technologies: ['React', 'Firebase', 'Geolocation API', 'SMS Integration'],
      features: [
        'Emergency SOS with real-time location sharing',
        'Anonymous incident reporting',
        'Resource directory for legal and medical help',
        'Community awareness and support forum',
      ],
      github: 'https://github.com/amanvats220',
      live: null,
      image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&q=80',
      color: 'purple',
    },
    {
      title: 'Student Management System',
      tagline: 'Academic Record Management',
      description:
        'A robust C++ application for managing student records, grades, and academic information. Implements core OOP principles with file handling for persistent data storage and efficient data retrieval mechanisms.',
      technologies: ['C++', 'OOP', 'File Handling', 'Data Structures'],
      features: [
        'CRUD operations for student records',
        'Grade calculation and GPA tracking',
        'Search and filter functionality',
        'File-based persistent storage',
      ],
      github: 'https://github.com/amanvats220',
      live: null,
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80',
      color: 'green',
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
    };
    return colorMap[color];
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building impactful solutions that address real-world problems and empower communities
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden h-80 lg:h-auto">
                  <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(project.color)} opacity-20 z-10`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-200">
                      Project {String(index + 1).padStart(2, '0')}
                    </Badge>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">{project.tagline}</p>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600">
                          <span className="text-blue-600 mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button
                      onClick={() => window.open(project.github, '_blank')}
                      variant="outline"
                      className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 group/btn"
                    >
                      <Github className="mr-2 group-hover/btn:scale-110 transition-transform" size={18} />
                      View Code
                    </Button>
                    {project.live && (
                      <Button
                        onClick={() => window.open(project.live, '_blank')}
                        className="bg-blue-600 hover:bg-blue-700 text-white group/btn"
                      >
                        <Globe className="mr-2 group-hover/btn:rotate-12 transition-transform" size={18} />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;