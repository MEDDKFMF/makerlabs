import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check for saved dark mode preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link focus:top-6">
        Skip to main content
      </a>

      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg dark:bg-emerald-950/95" 
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 hover-scale focus-ring"
              onClick={closeMenu}
              aria-label="Maker Labs Home"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200 animate-pulse">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-200 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors duration-200">
                Maker Labs
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover-scale ${
                  isActive("/")
                    ? "text-emerald-700 bg-emerald-100 dark:text-emerald-200 dark:bg-emerald-800"
                    : "text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-200"
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover-scale ${
                  isActive("/about")
                    ? "text-emerald-700 bg-emerald-100 dark:text-emerald-200 dark:bg-emerald-800"
                    : "text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-200"
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/programs"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover-scale ${
                  isActive("/programs")
                    ? "text-emerald-700 bg-emerald-100 dark:text-emerald-200 dark:bg-emerald-800"
                    : "text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-200"
                }`}
                onClick={closeMenu}
              >
                Programs
              </Link>
              <Link
                to="/partners"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover-scale ${
                  isActive("/partners")
                    ? "text-emerald-700 bg-emerald-100 dark:text-emerald-200 dark:bg-emerald-800"
                    : "text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-200"
                }`}
                onClick={closeMenu}
              >
                Partners
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover-scale ${
                  isActive("/contact")
                    ? "text-emerald-700 bg-emerald-100 dark:text-emerald-200 dark:bg-emerald-800"
                    : "text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-200"
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-200 hover-scale focus-ring transition-all duration-200"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Dark Mode Toggle for Mobile */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-200 hover-scale focus-ring transition-all duration-200"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-200 hover-scale focus-ring transition-all duration-200"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <svg 
                  className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen 
                ? "max-h-96 opacity-100" 
                : "max-h-0 opacity-0"
            } overflow-hidden`}
            role="region"
            aria-label="Mobile navigation menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg dark:bg-emerald-950/95">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover-scale ${
                  isActive("/")
                    ? "text-emerald-700 bg-emerald-100 dark:text-emerald-200 dark:bg-emerald-800"
                    : "text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-200"
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover-scale ${
                  isActive("/about")
                    ? "text-emerald-700 bg-emerald-100 dark:text-emerald-200 dark:bg-emerald-800"
                    : "text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-200"
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/programs"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover-scale ${
                  isActive("/programs")
                    ? "text-emerald-700 bg-emerald-100 dark:text-emerald-200 dark:bg-emerald-800"
                    : "text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-200"
                }`}
                onClick={closeMenu}
              >
                Programs
              </Link>
              <Link
                to="/partners"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover-scale ${
                  isActive("/partners")
                    ? "text-emerald-700 bg-emerald-100 dark:text-emerald-200 dark:bg-emerald-800"
                    : "text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-200"
                }`}
                onClick={closeMenu}
              >
                Partners
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover-scale ${
                  isActive("/contact")
                    ? "text-emerald-700 bg-emerald-100 dark:text-emerald-200 dark:bg-emerald-800"
                    : "text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-200"
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}

export default Navbar; 