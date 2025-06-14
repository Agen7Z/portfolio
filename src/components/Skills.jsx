import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Gamepad2, 
  Globe, 
  Server, 
  Terminal,
  FileCode,
  FileJson,
  FileType,
  FileQuestion,
  Package,
  FileText,
  FileCode2
} from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    technologies: [
      { name: "HTML5", icon: <FileType className="w-5 h-5" /> },
      { name: "CSS3", icon: <FileType className="w-5 h-5" /> },
      { name: "JavaScript", icon: <FileCode className="w-5 h-5" /> },
      { name: "React", icon: <Code2 className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <FileType className="w-5 h-5" /> },
    ]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    technologies: [
      { name: "Node.js", icon: <Terminal className="w-5 h-5" /> },
      { name: "Express.js", icon: <FileCode className="w-5 h-5" /> },
      { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
      { name: "Python", icon: <FileCode2 className="w-5 h-5" /> },
      { name: "REST APIs", icon: <FileJson className="w-5 h-5" /> },
    ]
  },
  {
    category: "Game Development",
    icon: <Gamepad2 className="w-6 h-6" />,
    technologies: [
      { name: "Unity", icon: <FileCode className="w-5 h-5" /> },
      { name: "C#", icon: <FileCode2 className="w-5 h-5" /> },
      { name: "Game Design", icon: <FileQuestion className="w-5 h-5" /> },
      { name: "3D Modeling", icon: <FileCode className="w-5 h-5" /> },
      { name: "Game Physics", icon: <FileCode className="w-5 h-5" /> },
    ]
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#7fdbca] to-[#82aaff] bg-clip-text text-transparent">
          Skills & Technologies
        </h1>
        <p className="text-[#8892b0] mb-8">
          Here are the technologies and tools I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#01111b] rounded-lg p-6 border border-[#1e3a8a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#7fdbca]">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold text-[#d6deeb]">
                  {category.category}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 p-2 rounded bg-[#011627] border border-[#1e3a8a]"
                  >
                    <div className="text-[#7fdbca]">
                      {tech.icon}
                    </div>
                    <span className="text-sm text-[#d6deeb]">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-[#8892b0] mb-4">
            Always learning and exploring new technologies
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#7fdbca] text-[#011627] rounded-md font-medium hover:bg-[#82aaff] transition-colors"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills; 