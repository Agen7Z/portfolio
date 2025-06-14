import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap } from 'lucide-react';

function About() {
  const experiences = [
    {
      title: "Full Stack Developer",
      
      description: "Working on modern web applications using React, Node.js, and various other technologies. Mostly freelance work. Been working on projects for 2 years now."
    },
    {
      title: "Game Developer",
     
      description: "Developing games using Unity and exploring game development concepts. Working on personal projects and learning new technologies."
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Computer Application",
      school: "Samriddhi College",
      
      description: "Focused on software development and computer science fundamentals."
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#7fdbca] to-[#c792ea] text-transparent bg-clip-text">
            About Me
          </h2>
          <motion.p 
            className="text-[#d6deeb] text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a passionate Full Stack Developer with a keen interest in game development. 
            I love creating elegant solutions to complex problems and am constantly learning 
            new technologies to enhance my skills. When I'm not coding, you can find me 
            exploring new game development concepts or contributing to open-source projects.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-[#7fdbca] mr-3" />
              <h3 className="text-2xl font-semibold text-[#d6deeb]">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-[#1d3b53] p-6 rounded-lg"
                >
                  <h4 className="text-[#7fdbca] font-semibold">{exp.title}</h4>
                  
                  <p className="text-[#d6deeb]">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-[#7fdbca] mr-3" />
              <h3 className="text-2xl font-semibold text-[#d6deeb]">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-[#1d3b53] p-6 rounded-lg"
                >
                  <h4 className="text-[#7fdbca] font-semibold">{edu.degree}</h4>
                  <p className="text-[#d6deeb]">{edu.school}</p>
                  
                  <p className="text-[#d6deeb]">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          
        </motion.div>
      </div>
    </div>
  );
}

export default About; 