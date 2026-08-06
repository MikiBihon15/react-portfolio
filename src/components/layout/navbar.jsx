import React, { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = ['Home', 'Projects', 'Contacts'];

  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false); // Close mobile dropdown when a link is clicked
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-100/90 backdrop-blur-md text-zinc-900 border-b border-zinc-300 z-50">
      <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Name */}
        <a
          href="#hero"
          onClick={() => handleNavClick('Home')}
          className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors"
        >
          Mikhail Dustin Elpedes
        </a>

        {/* Desktop Navigation Links (Visible on md screens and larger) */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {links.map((link) => {
            const href = `#${link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase()}`;
            const isActive = activeLink === link;

            return (
              <a
                key={link}
                href={href}
                onClick={() => handleNavClick(link)}
                className={`relative py-1 transition-colors hover:text-zinc-900 ${
                  isActive ? 'text-zinc-900 font-semibold' : 'text-zinc-600'
                }`}
              >
                {link}
                {/* Active Underline */}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-zinc-900 transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Button (Visible on screens smaller than md) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="md:hidden p-2 rounded-md text-zinc-700 hover:text-zinc-900 hover:bg-zinc-200/60 focus:outline-none transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            /* Close "X" Icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-100 border-b border-zinc-300 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          {links.map((link) => {
            const href = `#${link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase()}`;
            const isActive = activeLink === link;

            return (
              <a
                key={link}
                href={href}
                onClick={() => handleNavClick(link)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-zinc-200 text-zinc-900 font-semibold'
                    : 'text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-900'
                }`}
              >
                {link}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}