import React from 'react';
import { Trophy, Star, Award, Rocket } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'National Space Hackathon',
      organization: 'IIT Delhi',
      description: 'Selected among top 50 students nationwide interested in space technology',
      year: '2024',
      color: 'yellow',
      highlight: true,
    },
    {
      icon: Star,
      title: 'Academic Excellence',
      organization: 'IMSEC Ghaziabad',
      description: 'Consistently maintaining 9+ SGPA across all semesters',
      year: '2023 - Present',
      color: 'blue',
      highlight: true,
    },
    {
      icon: Award,
      title: 'Daily LeetCode Solver',
      organization: 'LeetCode',
      description: 'Committed to daily problem-solving to strengthen algorithmic skills',
      year: 'Ongoing',
      color: 'orange',
      highlight: false,
    },
    {
      icon: Rocket,
      title: 'Open Source Contributor',
      organization: 'GitHub',
      description: 'Active contributor to various open-source projects and repositories',
      year: '2024',
      color: 'purple',
      highlight: false,
    },
  ];

  const stats = [
    { label: 'SGPA', value: '9+', icon: Star },
    { label: 'Projects', value: '3+', icon: Rocket },
    { label: 'Hackathons', value: 'Top 50', icon: Trophy },
    { label: 'Daily DSA', value: 'Active', icon: Award },
  ];

  const getColorClasses = (color) => {
    if (color === 'yellow') return 'bg-yellow-100 text-yellow-600 border-yellow-300';
    if (color === 'blue') return 'bg-blue-100 text-blue-600 border-blue-300';
    if (color === 'orange') return 'bg-orange-100 text-orange-600 border-orange-300';
    if (color === 'purple') return 'bg-purple-100 text-purple-600 border-purple-300';
    return '';
  };

  const getGradientClasses = (color) => {
    if (color === 'yellow') return 'from-yellow-500 to-orange-500';
    if (color === 'blue') return 'from-blue-500 to-cyan-500';
    if (color === 'orange') return 'from-orange-500 to-red-500';
    if (color === 'purple') return 'from-purple-500 to-pink-500';
    return '';
  };

  return (
    <section id="achievements" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Milestones that reflect dedication, perseverance, and passion for technology
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className={`p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden ${
                  achievement.highlight ? 'border-2 border-blue-600' : ''
                }`}
              >
                {achievement.highlight && (
                  <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                    Highlight
                  </Badge>
                )}
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-xl ${getColorClasses(achievement.color)}`}>
                    <Icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{achievement.title}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{achievement.organization}</p>
                    <p className="text-slate-600 mb-4 leading-relaxed">{achievement.description}</p>
                    <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                      {achievement.year}
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Recognition Section */}
        <div className="mt-16">
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <Trophy className="mx-auto text-blue-600 mb-6" size={48} />
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Passionate About Continuous Learning
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every achievement is a stepping stone in my journey as a software engineer. I believe in
              constant growth, pushing boundaries, and contributing to meaningful projects that create
              positive impact in society.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;