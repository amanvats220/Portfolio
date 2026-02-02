import React from 'react';
import { Code, Database, Globe, GitBranch, Terminal } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

const Skills = () => {
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
          {/* Programming Languages */}
          <Card className="p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-lg bg-blue-100 text-blue-600">
                <Code size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-300">
                C++
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-300">
                JavaScript
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-300">
                HTML5
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-300">
                CSS3
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-300">
                SQL
              </Badge>
            </div>
          </Card>

          {/* Core CS */}
          <Card className="p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-lg bg-green-100 text-green-600">
                <Database size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Core Computer Science</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-green-100 text-green-700 hover:bg-green-200 border-green-300">
                Data Structures
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-green-100 text-green-700 hover:bg-green-200 border-green-300">
                Algorithms
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-green-100 text-green-700 hover:bg-green-200 border-green-300">
                OOP
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-green-100 text-green-700 hover:bg-green-200 border-green-300">
                DBMS
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-green-100 text-green-700 hover:bg-green-200 border-green-300">
                Probability & Statistics
              </Badge>
            </div>
          </Card>

          {/* Web Development */}
          <Card className="p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-lg bg-purple-100 text-purple-600">
                <Globe size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Web Development</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-300">
                React
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-300">
                Node.js
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-300">
                REST APIs
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-300">
                Responsive Design
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-300">
                MongoDB
              </Badge>
            </div>
          </Card>

          {/* Tools */}
          <Card className="p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-lg bg-orange-100 text-orange-600">
                <GitBranch size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Tools & Platforms</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-300">
                Git
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-300">
                GitHub
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-300">
                VS Code
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-300">
                Linux
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-300">
                Postman
              </Badge>
            </div>
          </Card>
        </div>

        {/* Focus Areas */}
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
