import React, { useState } from 'react';

// Project data based on your Java projects
const projectsData = [
  {
    id: 'payroll',
    title: 'Payroll Computation System',
    tagline: 'Coprog1 Finals Project',
    shortDesc: 'Automated salary and payroll processing system calculating deductions, bonuses, and net pay.',
    fullDesc: 'A desktop application built to streamline employee salary calculations. It handles base pay rates, tax deductions, overtime computation, and generates itemized digital pay slips.',
    tech: ['Java', 'Swing', 'OOP'],
    images: ['/projects/payroll.png'] // Place your image in public/projects/payroll.png
  },
  {
    id: 'library',
    title: 'Library Management System',
    tagline: 'DataStruct Finals Project',
    shortDesc: 'Data structure-driven application for book tracking, borrowing, and inventory management.',
    fullDesc: 'Built using core data structures to efficiently search, add, remove, and manage library inventory alongside student borrowing records and due dates.',
    tech: ['Java', 'Data Structures', 'Algorithms'],
    images: ['/projects/library.png'] // Place your image in public/projects/library.png
  },
  {
    id: 'parkpal',
    title: 'ParkPalApp',
    tagline: 'OOP Finals Project',
    shortDesc: 'Smart parking space management and slot reservation system concept.',
    fullDesc: 'An object-oriented solution for monitoring parking slot availability in real-time, calculating duration-based fees, and managing entry/exit logs.',
    tech: ['Java', 'OOP Architecture', 'GUI'],
    images: ['/projects/parkpal.png'] // Place your image in public/projects/parkpal.png
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
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-semibold text-white backdrop-blur-[2px]">
          Click to Zoom 🔍
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
            <span key={item} className="px-2 py-0.5 text-[10px] bg-zinc-200 text-zinc-800 rounded font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


// ==========================================
// BLOCK 2: Zoom Lightbox Modal Component
// ==========================================
function ProjectModal({ project, onClose }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-zinc-100 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 border border-zinc-300"
        onClick={(e) => e.stopPropagation()} // Stop click propagation to backdrop
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-200 hover:bg-zinc-300 text-zinc-700 font-bold flex items-center justify-center transition-colors text-sm"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Title */}
        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
          {project.tagline}
        </span>
        <h3 className="text-2xl font-bold text-zinc-900 mb-4 pr-8">
          {project.title}
        </h3>

        {/* Expanded Image Frame */}
        <div className="w-full h-60 sm:h-72 bg-zinc-900 rounded-xl overflow-hidden mb-4 flex items-center justify-center border border-zinc-300 relative">
          <img
            src={project.images[activeImgIndex]}
            alt={project.title}
            onError={(e) => { e.target.style.display = 'none'; }}
            className="w-full h-full object-contain"
          />
          <span className="text-zinc-500 text-xs absolute pointer-events-none">
            Add image to public/projects/ to view preview
          </span>
        </div>

        {/* Thumbnails */}
        {project.images.length > 1 && (
          <div className="flex gap-2 mb-4">
            {project.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImgIndex(idx)}
                className={`w-16 h-12 rounded-lg border-2 overflow-hidden ${
                  activeImgIndex === idx ? 'border-indigo-600' : 'border-zinc-300'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Project Description */}
        <div className="space-y-4 text-zinc-700 text-sm leading-relaxed">
          <p>{project.fullDesc}</p>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 text-xs bg-zinc-200 text-zinc-800 rounded-md font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Projects() {
  return (
    <section style={{ padding: '20px' }}>
      <h2>Projects</h2>
      <p>Some of my projects</p>
    </section>
  );
}

