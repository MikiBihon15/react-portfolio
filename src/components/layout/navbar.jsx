import React, { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');

  const links = ['Home', 'Projects', 'Contacts'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md text-white border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side: Brand / Name */}
        <a href="#hero" className="text-xl font-bold tracking-tight hover:text-sky-400 transition-colors">
          Mikhail Dustin Elpedes
        </a>

        {/* Right Side: Links with Hover Underline Effect */}
        <div className="flex space-x-8 text-sm font-medium">
          {links.map((link) => {
            const href = `#${link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase()}`;
            return (
              <a
                key={link}
                href={href}
                onClick={() => setActiveLink(link)}
                className={`relative py-1 transition-colors hover:text-sky-400 ${
                  activeLink === link ? 'text-sky-400' : 'text-slate-300'
                }`}
              >
                {link}
                {/* Animated Hover / Active Underline */}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transition-all duration-300 ${
                    activeLink === link ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}