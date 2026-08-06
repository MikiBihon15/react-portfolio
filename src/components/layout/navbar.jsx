import React, { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');
  const links = ['Home', 'Projects', 'Contacts'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-100/90 backdrop-blur-md text-zinc-900 border-b border-zinc-300 z-50">
      <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        
        {/* Brand Name - Adjusts font size on smaller screens */}
        <a
          href="#hero"
          className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors"
        >
          Mikhail Dustin Elpedes
        </a>

        {/* Navigation Links - Spaced out for mobile finger taps */}
        <div className="flex space-x-6 sm:space-x-8 text-xs sm:text-sm font-medium">
          {links.map((link) => {
            const href = `#${link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase()}`;
            const isActive = activeLink === link;

            return (
              <a
                key={link}
                href={href}
                onClick={() => setActiveLink(link)}
                className={`relative py-1 transition-colors hover:text-zinc-900 ${
                  isActive ? 'text-zinc-900 font-semibold' : 'text-zinc-600'
                }`}
              >
                {link}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-zinc-900 transition-transform duration-300 ${
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