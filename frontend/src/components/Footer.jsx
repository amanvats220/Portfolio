import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Aman Vats</h3>
            <p className="text-slate-400 leading-relaxed">
              B.Tech Undergraduate passionate about building impactful solutions through clean code and
              innovative technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:vatsaman295@gmail.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  vatsaman295@gmail.com
                </a>
              </li>
              <li className="text-slate-400">IMSEC Ghaziabad</li>
              <li className="text-slate-400">Available for Internships</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm flex items-center gap-2">
              © {currentYear} Aman Vats. Made with{' '}
              <Heart className="text-red-500" size={16} fill="currentColor" /> and{' '}
              <Code className="text-blue-400" size={16} />
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/amanvats220"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/aman-vats-869907335"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/Amanvats_07/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
