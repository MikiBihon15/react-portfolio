import React, { useState } from 'react';

// ==========================================
// DATA ARRAY
// ==========================================
const projectsData = [
  {
    id: 'library',
    title: 'Library Management System',
    tagline: 'DataStruct Finals Solo Project',
    shortDesc: 'Coded with Java, this simple program provides book tracking, borrowing, and inventory management.',
    fullDesc: 'With what I learned from our Data Structures course, as part of our finals, I was able to develop a program that helps manage books and student logs.',
    tech: ['Java', 'GitHub'],
    images: ['/images/Libr_web.png']
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    tagline: 'WebDev Project',
    shortDesc: 'Simple portfolio website showcasing projects through the use of html, css, and javascript.',
    fullDesc: 'This website acts as a portfolio to some of my previous projects during college. Using HTML, CSS, and JavaScript, I built a lightweight personal showcase.',
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub'],
    images: ['/images/main_web.png']
  },
  {
    id: 'parkpal',
    title: 'ParkPalApp',
    tagline: 'OOP Finals Group Project',
    shortDesc: 'Smart parking slot management application.',
    fullDesc: 'The idea first came from our Human-Computer Interaction course, me and my groupmate used this idea and applied it to our OOP final requirements.',
    tech: ['Java', 'GitHub'],
    images: ['/images/Park_web.png']
  }
];

// ==========================================
// BLOCK 1: Individual Project Card Component
// ==========================================
function ProjectCard({ project, onSelect }) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="bg-zinc-100 rounded-xl overflow-hidden border border-zinc-300 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col group hover:-translate-y-1"
    >
      {/* Image Preview Box */}
      <div className="h-44 bg-zinc-300 relative overflow-hidden flex items-center justify-center">
        <img
          src={project.images[0]}
          alt={project.title}
          onError={(e) => { e.target.style.display = 'none'; }}
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-semibold text-white backdrop-blur-[2px]">
          Click to View 🔍
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider mb-1">
          {project.tagline}
        </span>
        <h3 className="text-base font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-zinc-600 mt-2 flex-grow leading-relaxed">
          {project.shortDesc}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-zinc-200">
          {project.tech.map((item) => (
            <span key={item} className="px-2 py-0.5 text-[10px] bg-zinc-200 text-zinc-800 rounded font-medium border border-zinc-300">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// BLOCK 2: Cursor-Pan Zoom Lightbox Modal
// ==========================================
function ProjectModal({ project, onClose }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  
  // State for tracking cursor position
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  if (!project) return null;

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="bg-zinc-100 rounded-2xl max-w-4xl lg:max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 border border-zinc-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-zinc-200 hover:bg-zinc-300 text-zinc-700 font-bold flex items-center justify-center transition-colors text-base shadow-sm"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT SIDE: Cursor-Pan Zoom Box */}
          <div className="md:col-span-7 flex flex-col gap-3">
            <div 
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full h-72 sm:h-96 bg-zinc-200 rounded-xl overflow-hidden border border-zinc-300 shadow-inner flex items-center justify-center relative cursor-zoom-in"
            >
              <img
                src={project.images[activeImgIndex]}
                alt={project.title}
                onError={(e) => { e.target.style.display = 'none'; }}
                style={{
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: isHovered ? 'scale(3)' : 'scale(1)'
                }}
                className="w-full h-full object-contain p-2 transition-transform duration-150 ease-out pointer-events-none"
              />

              {!isHovered && (
                <span className="absolute bottom-3 right-3 text-[10px] bg-black/60 text-white px-2 py-1 rounded pointer-events-none">
                  Hover to inspect
                </span>
              )}
            </div>

            {/* Thumbnails (if multiple images exist) */}
            {project.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`w-20 h-14 rounded-lg border-2 overflow-hidden flex-shrink-0 transition-all ${
                      activeImgIndex === idx ? 'border-indigo-600 scale-105' : 'border-zinc-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE: Info Description */}
          <div className="md:col-span-5 flex flex-col justify-between h-full pt-1">
            <div>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider block mb-1">
                {project.tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
                {project.title}
              </h3>
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-6">
                {project.fullDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                Used in the project:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span 
                    key={t} 
                    className="px-3 py-1 text-xs bg-zinc-200 text-zinc-800 font-medium rounded-md border border-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ==========================================
// BLOCK 3: Main Projects Component
// ==========================================
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects" className="py-6 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-zinc-900">Projects</h2>
        <p className="text-zinc-600 mt-2 text-sm sm:text-base">
          Click on any project card to expand screenshot previews and details.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onSelect={setSelectedProject} 
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}