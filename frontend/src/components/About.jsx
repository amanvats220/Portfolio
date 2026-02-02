import React from 'react';
import { GraduationCap, Code, Trophy, Target } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'Maintaining 9+ SGPA consistently across all semesters at IMSEC Ghaziabad',
    },
    {
      icon: Code,
      title: 'Daily Problem Solver',
      description: 'Active on LeetCode, solving DSA problems daily to strengthen algorithmic thinking',
    },
    {
      icon: Trophy,
      title: 'Achievement Driven',
      description: 'Selected among top 50 students at National Space Hackathon, IIT Delhi',
    },
    {
      icon: Target,
      title: 'Career Focus',
      description: 'Aspiring Software Engineer specializing in backend development and system design',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">Building Solutions, One Line at a Time</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a 3rd-semester B.Tech student at IMSEC Ghaziabad, graduating in 2028. My journey in computer science is driven by a passion for solving complex problems through efficient algorithms and clean code architecture.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With a strong foundation in C++ and Data Structures & Algorithms, I focus on building scalable backend systems and full-stack applications. My academic excellence (9+ SGPA) reflects my commitment to continuous learning and technical growth.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Beyond academics, I believe in creating technology that makes a real difference. My projects focus on social impact, empowering communities, and addressing critical issues through innovative digital solutions.
            </p>
            <div className="pt-4">
              <p className="text-xl font-semibold text-blue-600">
                Currently seeking software development internship opportunities to apply my skills in real-world projects.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-blue-600"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;