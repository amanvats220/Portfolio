import React, { useState } from 'react';
import { Mail, Linkedin, Github, Code2, Send, MapPin, Phone } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vatsaman295@gmail.com',
      link: 'mailto:vatsaman295@gmail.com',
      color: 'blue',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ghaziabad, India',
      link: null,
      color: 'green',
    },
    {
      icon: Phone,
      label: 'Availability',
      value: 'Open for Opportunities',
      link: null,
      color: 'purple',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: '@amanvats220',
      link: 'https://github.com/amanvats220',
      color: 'slate',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'Aman Vats',
      link: 'https://www.linkedin.com/in/aman-vats-869907335',
      color: 'blue',
    },
    {
      icon: Code2,
      label: 'LeetCode',
      username: '@Amanvats_07',
      link: 'https://leetcode.com/u/Amanvats_07/',
      color: 'orange',
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    const mailtoLink = `mailto:vatsaman295@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const getIconColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      slate: 'bg-slate-100 text-slate-600',
      orange: 'bg-orange-100 text-orange-600',
    };
    return colorMap[color];
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm currently seeking software development internship opportunities. Let's connect and
            discuss how I can contribute to your team!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${getIconColorClasses(info.color)}`}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 font-medium">{info.label}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-lg font-semibold text-slate-900">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                      onClick={() => window.open(social.link, '_blank')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg ${getIconColorClasses(social.color)}`}>
                            <Icon size={24} />
                          </div>
                          <div>
                            <p className="text-lg font-semibold text-slate-900">{social.label}</p>
                            <p className="text-sm text-slate-600">{social.username}</p>
                          </div>
                        </div>
                        <Send
                          className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                          size={20}
                        />
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship Opportunity"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity..."
                    required
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg group"
                >
                  <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;