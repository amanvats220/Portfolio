import React from 'react';
import { Code2, Github, TrendingUp, Target } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: 'LeetCode',
      username: 'Amanvats_07',
      link: 'https://leetcode.com/u/Amanvats_07/',
      icon: Code2,
      description: 'Daily problem solver focused on algorithmic thinking and optimization',
      stats: [
        { label: 'Status', value: 'Active Daily', color: 'green' },
        { label: 'Focus', value: 'DSA & Algorithms', color: 'blue' },
      ],
      color: 'orange',
    },
    {
      platform: 'GitHub',
      username: 'amanvats220',
      link: 'https://github.com/amanvats220',
      icon: Github,
      description: 'Open source contributions and project repositories',
      stats: [
        { label: 'Projects', value: '3+ Public', color: 'purple' },
        { label: 'Activity', value: 'Regular Commits', color: 'blue' },
      ],
      color: 'slate',
    },
  ];

  const codingJourney = [
    {
      icon: Target,
      title: 'Consistent Practice',
      description: 'Solving DSA problems daily to build strong fundamentals',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Focusing on learning new algorithms and optimization techniques',
    },
    {
      icon: Code2,
      title: 'Problem-Solving Mindset',
      description: 'Applying logical thinking to tackle complex coding challenges',
    },
  ];

  const getStatColorClasses = (color) => {
    if (color === 'green') return 'bg-green-100 text-green-700';
    if (color === 'blue') return 'bg-blue-100 text-blue-700';
    if (color === 'purple') return 'bg-purple-100 text-purple-700';
    return '';
  };

  const getButtonColorClasses = (color) => {
    if (color === 'orange') return 'bg-orange-600 hover:bg-orange-700';
    if (color === 'slate') return 'bg-slate-800 hover:bg-slate-900';
    return '';
  };

  return (
    <section id="coding-profiles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Coding Profiles</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Active on coding platforms, constantly improving algorithmic skills and contributing to open
            source
          </p>
        </div>

        {/* Profile Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-slate-100 rounded-xl">
                    <Icon className="text-slate-700" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{profile.platform}</h3>
                    <p className="text-slate-600">@{profile.username}</p>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{profile.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {profile.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg ${getStatColorClasses(stat.color)}`}
                    >
                      <div className="text-xs font-semibold uppercase tracking-wide mb-1">
                        {stat.label}
                      </div>
                      <div className="text-sm font-bold">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => window.open(profile.link, '_blank')}
                  className={`w-full text-white group ${getButtonColorClasses(profile.color)}`}
                >
                  Visit Profile
                  <Icon className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Coding Journey */}
        <Card className="p-8 lg:p-12 bg-gradient-to-br from-slate-50 to-blue-50">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">My Coding Journey</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {codingJourney.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CodingProfiles;