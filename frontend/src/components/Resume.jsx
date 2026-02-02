import React from 'react';
import { Download, FileText, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Resume = () => {
  const resumeHighlights = [
    'Academic Excellence: 9+ SGPA',
    'Strong Foundation in C++ & DSA',
    'Full-Stack Development Experience',
    'National Level Hackathon Achievement',
    'Active Problem Solver on LeetCode',
    'Social Impact Project Portfolio',
  ];

  const handleDownload = () => {
    // In a real implementation, this would download the actual resume PDF
    alert('Resume download will be available once you upload your PDF file.');
  };

  return (
    <section id="resume" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Resume</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Download my complete resume for detailed information about my skills, projects, and
            achievements
          </p>
        </div>

        <Card className="p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Resume Preview */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-blue-100 rounded-xl">
                  <FileText className="text-blue-600" size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Aman Vats</h3>
                  <p className="text-slate-600">Software Developer Resume</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Resume Highlights:</h4>
                {resumeHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <p className="text-slate-600">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> My resume is ATS-friendly and optimized for technical recruiter
                  screening systems.
                </p>
              </div>
            </div>

            {/* Right Side - Download CTA */}
            <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <div className="text-center mb-8">
                <div className="inline-flex p-6 bg-white rounded-full shadow-lg mb-6">
                  <Download className="text-blue-600" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Download Resume</h3>
                <p className="text-slate-600">
                  Get the complete PDF version with detailed information about my education, skills,
                  projects, and achievements.
                </p>
              </div>

              <Button
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group w-full"
              >
                <Download className="mr-2 group-hover:translate-y-1 transition-transform" size={20} />
                Download PDF Resume
              </Button>

              <p className="text-sm text-slate-500 mt-4 text-center">
                Last Updated: January 2025 • PDF Format • 1 Page
              </p>
            </div>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="p-6 bg-slate-100 border-slate-200">
            <p className="text-slate-700">
              <strong>Looking for opportunities?</strong> I'm actively seeking software development
              internship positions. Feel free to reach out through the contact section below.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;