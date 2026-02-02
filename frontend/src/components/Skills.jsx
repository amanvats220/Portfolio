import React from 'react';
import { Code, Database, Globe, GitBranch, Layers, Terminal } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['C++', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
      color: 'blue',
    },
    {
      icon: Database,
      title: 'Core Computer Science',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Probability & Statistics'],
      color: 'green',
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: ['React', 'Node.js', 'REST APIs', 'Responsive Design', 'MongoDB'],
      color: 'purple',
    },
    {
      icon: GitBranch,
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Postman'],
      color: 'orange',
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-300',
      green: 'bg-green-100 text-green-700 hover:bg-green-200 border-green-300',
      purple: 'bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-300',
      orange: 'bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-300',
    };
    return colorMap[color];
  };

  const getIconBgColor = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
    };
    return colorMap[color];
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Strong foundation in computer science fundamentals with hands-on experience in modern development technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-lg ${getIconBgColor(category.color)}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className={`px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default ${getColorClasses(
                        category.color
                      )}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Terminal className="text-blue-600" size={32} />
              <h3 className="text-2xl font-bold text-slate-900">Areas of Focus</h3>
            </div>
            <p className="text-lg text-slate-600 mb-6">
              Specialized in backend development, system design, and algorithmic problem solving
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Backend Development
              </Badge>
              <Badge className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Algorithm Design
              </Badge>
              <Badge className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Full-Stack Development
              </Badge>
              <Badge className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Problem Solving
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;