import React, { useState, useEffect } from 'react';
import { 
  FolderOpen, 
  Folder, 
  FileText,
  FileCode,
  FileJson,
  FileType,
  File,
  Search, 
  GitBranch, 
  Bug, 
  Settings,
  X,
  ChevronRight,
  ChevronDown,
  Package,
  Code2,
  FileQuestion,
  ArrowUp
} from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const files = [
  {
    name: 'PORTFOLIO',
    type: 'folder',
    icon: <FolderOpen className="w-4 h-4 text-[#e9b872]" />,
    section: '',
    children: [
      {
        name: 'node_modules',
        type: 'folder',
        icon: <Package className="w-4 h-4 text-[#e9b872]" />,
        section: ''
      },
      {
        name: 'src',
        type: 'folder',
        icon: <FolderOpen className="w-4 h-4 text-[#e9b872]" />,
        section: '',
        children: [
          {
            name: 'components',
            type: 'folder',
            icon: <FolderOpen className="w-4 h-4 text-[#e9b872]" />,
            section: '',
            children: [
              {
                name: 'Hero.jsx',
                type: 'file',
                icon: <Code2 className="w-4 h-4 text-[#7fdbca]" />,
                section: 'hero'
              },
              {
                name: 'About.jsx',
                type: 'file',
                icon: <Code2 className="w-4 h-4 text-[#7fdbca]" />,
                section: 'about'
              },
              {
                name: 'Projects.jsx',
                type: 'file',
                icon: <Code2 className="w-4 h-4 text-[#7fdbca]" />,
                section: 'projects'
              },
              {
                name: 'Skills.jsx',
                type: 'file',
                icon: <Code2 className="w-4 h-4 text-[#7fdbca]" />,
                section: 'skills'
              },
              {
                name: 'Contact.jsx',
                type: 'file',
                icon: <Code2 className="w-4 h-4 text-[#7fdbca]" />,
                section: 'contact'
              }
            ]
          },
          {
            name: 'App.jsx',
            type: 'file',
            icon: <Code2 className="w-4 h-4 text-[#7fdbca]" />,
            section: 'hero'
          },
          {
            name: 'index.css',
            type: 'file',
            icon: <FileType className="w-4 h-4 text-[#c792ea]" />,
            section: ''
          },
          {
            name: 'main.jsx',
            type: 'file',
            icon: <Code2 className="w-4 h-4 text-[#7fdbca]" />,
            section: ''
          }
        ]
      },
      {
        name: '.gitignore',
        type: 'file',
        icon: <FileQuestion className="w-4 h-4 text-[#5f7e97]" />,
        section: ''
      },
      {
        name: 'eslint.config.js',
        type: 'file',
        icon: <FileCode className="w-4 h-4 text-[#ffcb8b]" />,
        section: ''
      },
      {
        name: 'index.html',
        type: 'file',
        icon: <FileCode className="w-4 h-4 text-[#ff6363]" />,
        section: ''
      },
      {
        name: 'package-lock.json',
        type: 'file',
        icon: <FileJson className="w-4 h-4 text-[#addb67]" />,
        section: ''
      },
      {
        name: 'package.json',
        type: 'file',
        icon: <FileJson className="w-4 h-4 text-[#addb67]" />,
        section: ''
      },
      {
        name: 'README.md',
        type: 'file',
        icon: <FileText className="w-4 h-4 text-[#82aaff]" />,
        section: ''
      },
      {
        name: 'vite.config.js',
        type: 'file',
        icon: <FileCode className="w-4 h-4 text-[#ffcb8b]" />,
        section: ''
      }
    ]
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [openTabs, setOpenTabs] = useState(['hero']);
  const [expandedFolders, setExpandedFolders] = useState(['PORTFOLIO', 'src', 'components']);
  const [showGoToTop, setShowGoToTop] = useState(false);

  // Handle scroll for Go to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev => 
      prev.includes(folderName) 
        ? prev.filter(name => name !== folderName)
        : [...prev, folderName]
    );
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
      if (!openTabs.includes(section)) {
        setOpenTabs([...openTabs, section]);
      }
    }
  };

  const closeTab = (section) => {
    const newTabs = openTabs.filter(tab => tab !== section);
    setOpenTabs(newTabs);
    if (activeSection === section && newTabs.length > 0) {
      setActiveSection(newTabs[newTabs.length - 1]);
      scrollToSection(newTabs[newTabs.length - 1]);
    }
  };

  const renderFileTree = (items, depth = 0) => {
    return items.map((item, index) => (
      <div key={index}>
        <div
          className={`flex items-center py-1 px-2 text-sm cursor-pointer hover:bg-[#1d3b53] ${
            item.type === 'file' && item.section === activeSection ? 'bg-[#1d3b53]' : ''
          }`}
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
          onClick={() => {
            if (item.type === 'folder') {
              toggleFolder(item.name);
            } else if (item.section) {
              scrollToSection(item.section);
            }
          }}
        >
          {item.type === 'folder' && (
            <span className="mr-1">
              {expandedFolders.includes(item.name) ? (
                <ChevronDown className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )}
            </span>
          )}
          <span className="mr-2">{item.icon}</span>
          <span className="text-[#d6deeb]">{item.name}</span>
        </div>
        {item.children && expandedFolders.includes(item.name) && (
          <div>{renderFileTree(item.children, depth + 1)}</div>
        )}
      </div>
    ));
  };

  const getTabFileName = (section) => {
    switch (section) {
      case 'hero': return 'App.jsx';
      case 'about': return 'About.jsx';
      case 'projects': return 'Projects.jsx';
      case 'skills': return 'Skills.jsx';
      case 'contact': return 'Contact.jsx';
      default: return 'App.jsx';
    }
  };

  return (
    <div className="h-screen bg-[#011627] text-[#d6deeb] font-mono flex flex-col overflow-hidden">
      {/* Menu Bar */}
      <div className="h-8 bg-[#01111b] flex items-center px-2 text-sm border-b border-[#1e3a8a]">
        <div className="flex space-x-4">
          <span className="px-2 py-1 hover:bg-[#1d3b53] cursor-pointer">File</span>
          <span className="px-2 py-1 hover:bg-[#1d3b53] cursor-pointer">Edit</span>
          <span className="px-2 py-1 hover:bg-[#1d3b53] cursor-pointer">Selection</span>
          <span className="px-2 py-1 hover:bg-[#1d3b53] cursor-pointer">View</span>
          <span className="px-2 py-1 hover:bg-[#1d3b53] cursor-pointer">Go</span>
          <span className="px-2 py-1 hover:bg-[#1d3b53] cursor-pointer">Run</span>
          <span className="px-2 py-1 hover:bg-[#1d3b53] cursor-pointer">Terminal</span>
          <span className="px-2 py-1 hover:bg-[#1d3b53] cursor-pointer">Help</span>
        </div>
      </div>

      {/* Go to Top Button */}
      {showGoToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-[#7fdbca] text-[#011627] rounded-full shadow-lg hover:bg-[#82aaff] transition-colors z-40"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-[#01111b] flex flex-col items-center py-4 border-r border-[#1e3a8a]">
          <div className="w-6 h-6 mb-4 text-[#7fdbca] cursor-pointer">
            <FileText />
          </div>
          <div className="w-6 h-6 mb-4 text-[#5f7e97] hover:text-[#d6deeb] cursor-pointer">
            <Search />
          </div>
          <div className="w-6 h-6 mb-4 text-[#5f7e97] hover:text-[#d6deeb] cursor-pointer">
            <GitBranch />
          </div>
          <div className="w-6 h-6 mb-4 text-[#5f7e97] hover:text-[#d6deeb] cursor-pointer">
            <Bug />
          </div>
          <div className="w-6 h-6 mb-4 text-[#5f7e97] hover:text-[#d6deeb] cursor-pointer">
            <Settings />
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-60 bg-[#01111b] border-r border-[#1e3a8a] flex flex-col">
          <div className="h-8 bg-[#01111b] flex items-center px-4 border-b border-[#1e3a8a]">
            <span className="text-xs text-[#8892b0] uppercase tracking-wide">Explorer</span>
          </div>
          <div className="flex-1 overflow-y-auto">
            {renderFileTree(files)}
          </div>
          <div className="border-t border-[#1e3a8a] p-4">
            <div className="text-xs text-[#8892b0] uppercase tracking-wide mb-2">Outline</div>
            <div className="text-xs text-[#8892b0] uppercase tracking-wide mb-2">Timeline</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="h-10 bg-[#01111b] flex items-center border-b border-[#1e3a8a]">
            {openTabs.map(tab => (
              <div
                key={tab}
                className={`flex items-center px-4 h-full border-r border-[#1e3a8a] cursor-pointer ${
                  activeSection === tab ? 'bg-[#011627]' : 'bg-[#01111b] hover:bg-[#0c1f2e]'
                }`}
                onClick={() => scrollToSection(tab)}
              >
                <FileText className="w-4 h-4 mr-2 text-[#7fdbca]" />
                <span className="text-sm">{getTabFileName(tab)}</span>
                <button
                  className="ml-2 w-4 h-4 flex items-center justify-center hover:bg-[#1d3b53] rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTab(tab);
                  }}
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          {/* Editor Content */}
          <div className="flex-1 bg-[#011627] overflow-y-auto">
            <div id="hero" className="min-h-screen">
              <Hero />
            </div>
            <div id="about" className="min-h-screen">
              <About />
            </div>
            <div id="projects" className="min-h-screen">
              <Projects />
            </div>
            <div id="skills" className="min-h-screen">
              <Skills />
            </div>
            <div id="contact" className="min-h-screen">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;