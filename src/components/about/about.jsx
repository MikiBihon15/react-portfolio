import React from 'react';

export default function About() {
  return (
    <div id="hero" className="flex flex-col items-center justify-center text-center py-12 sm:py-16">
      {/* Badge / Subheading */}
      <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-zinc-300 text-zinc-800 rounded-full mb-6">
        React Web Developer
      </span>

      {/* Main Hero Headline */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight max-w-3xl leading-tight mb-6">
        Hello! I'm <span className="text-indigo-600">Mikhail Dustin Caasi Elpedes</span>
      </h1>

      {/* Intro Description */}
      <p className="text-base sm:text-lg text-zinc-700 max-w-2xl leading-relaxed mb-8">
        Welcome to another of my personal projects! This was made possible with React, TailwindCSS, and Vite. Here, take a look at my portfolio, showcasing some of my projects, and feel free to reach out if you want to collaborate or just say hi!
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors shadow-sm text-center"
        >
          View My Projects
        </a>
        <a
          href="#contacts"
          className="px-6 py-3 rounded-lg bg-zinc-100 text-zinc-900 border border-zinc-300 font-medium hover:bg-zinc-300 transition-colors text-center"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}