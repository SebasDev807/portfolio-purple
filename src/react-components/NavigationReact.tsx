import { useState, useEffect } from 'react';

export const NavigationReact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname); // Detecta la ruta actual
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 px-2 py-3">
      
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <img src='/logo.webp' className='w-65' />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  currentPath === item.href ? "text-violet-400 font-semibold" : "text-gray-100"
                } hover:text-primary-400 transition-colors font-normal`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-gray-400 hover:text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {!isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col items-center space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${
                    currentPath === item.href ? "text-primary-400 font-semibold" : "text-gray-300"
                  } hover:text-primary-400 transition-colors font-medium py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/contact"
                className="btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
   
    </nav>
  );
};
