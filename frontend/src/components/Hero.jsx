import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Code2 } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-600 font-semibold text-lg tracking-wide">Hi there! I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Aman Vats
              </h1>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium text-sm">
                  B.Tech Undergraduate
                </span>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium text-sm">
                  C++ Enthusiast
                </span>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium text-sm">
                  DSA Problem Solver
                </span>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed">
                Full-stack developer specializing in backend development. Passionate about solving complex problems through clean code and efficient algorithms. Daily LeetCode solver focused on building impactful solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('#projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-lg group"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection('#resume')}
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-6 text-lg group"
              >
                <Download className="mr-2 group-hover:translate-y-1 transition-transform" size={20} />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/amanvats220"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-slate-700 hover:text-blue-600"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/aman-vats-869907335"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-slate-700 hover:text-blue-600"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://leetcode.com/u/Amanvats_07/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-slate-700 hover:text-blue-600"
              >
                <Code2 size={24} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-6"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_a735e169-8a6c-4f70-b9d2-e9dc882f3581/artifacts/mwq1qo55_IMG-20250907-WA0006.jpg"
                alt="Aman Vats"
                className="relative rounded-2xl shadow-2xl w-full max-w-md h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;