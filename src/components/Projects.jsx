import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "RENTPAL",
      description: "A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/Agen7Z",
      live: "https://project-one.com",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "NEON STRIDE",
      description: "A 2D platformer game developed with Unity. Includes custom physics, particle effects, and level design.",
      technologies: ["Unity", "C#", "Blender"],
      github: "https://github.com/Agen7Z",
      live: "https://1amazrael.itch.io/neon-stride",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS. Features smooth animations and responsive design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Agen7Z",
      live: "www.sangambakhunchhe.com.np",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <Code2 className="w-6 h-6 text-[#7fdbca] mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#7fdbca] to-[#c792ea] text-transparent bg-clip-text">
              Projects
            </h2>
          </div>
          <motion.p 
            className="text-[#d6deeb] text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some of my recent projects. Each project is a unique challenge that helped me grow as a developer.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-[#1d3b53] rounded-lg overflow-hidden flex flex-col"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d3b53] to-transparent opacity-60"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-[#7fdbca] mb-3">{project.title}</h3>
                <p className="text-[#d6deeb] mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-[#011627] text-[#7fdbca] rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#7fdbca] hover:text-[#d6deeb] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#7fdbca] hover:text-[#d6deeb] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/Agen7Z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#7fdbca] text-[#011627] rounded-lg font-semibold hover:bg-[#d6deeb] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 mr-2" />
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects; 