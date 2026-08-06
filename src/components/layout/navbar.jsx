import React, { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');

  const links = ['Home', 'Projects', 'Contacts'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900/90 backdrop-blur-md text-zinc-100 border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand / Name */}
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight text-white hover:text-zinc-300 transition-colors"
        >
          Mikhail Dustin Elpedes
        </a>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-sm font-medium">
          {links.map((link) => {
            const href = `#${link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase()}`;
            const isActive = activeLink === link;

            return (
              <a
                key={link}
                href={href}
                onClick={() => setActiveLink(link)}
                className={`relative py-1 transition-colors hover:text-white ${
                  isActive ? 'text-white font-semibold' : 'text-zinc-400'
                }`}
              >
                {link}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-white transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
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