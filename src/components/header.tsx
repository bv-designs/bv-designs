import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToHome = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full p-4 z-50 transition-all bg-black bg-opacity-50 backdrop-blur-sm">
      <div className=" px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div 
            className="flex items-center hover:cursor-pointer" 
            onClick={navigateToHome}
          >
            <img
              src="/assets/logo-1.png"
              alt="BV Designs Logo"
              className="h-8 md:h-10 mr-3"
            />
            <div className="text-white text-xl md:text-3xl">BV Designs</div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={`text-white font-medium text-lg relative ${
                location.pathname === '/' ? 'text-yellow-400' : ''
              }`}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={`text-white font-medium text-lg relative ${
                location.pathname === '/projects' ? 'text-yellow-400' : ''
              }`}
            >
              Projects
            </NavLink>
            <NavLink
              to="/testimonials"
              className={`text-white font-medium text-lg relative ${
                location.pathname === '/testimonials' ? 'text-yellow-400' : ''
              }`}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/contact-us"
              className={`text-white font-medium text-lg relative ${
                location.pathname === '/contact-us' ? 'text-yellow-400' : ''
              }`}
            >
              Contact us
            </NavLink>
            {/* <NavLink
              to="/demo"
              className={`text-white font-medium text-lg relative ${
                location.pathname === '/demo' ? 'text-yellow-400' : ''
              }`}
            >
              Demo
            </NavLink> */}

          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            <NavLink
              to="/"
              className={`text-white font-medium text-lg relative ${
                location.pathname === '/' ? 'text-yellow-400' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={`text-white font-medium text-lg relative ${
                location.pathname === '/projects' ? 'text-yellow-400' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/testimonials"
              className={`text-white font-medium text-lg relative ${
                location.pathname === '/testimonials' ? 'text-yellow-400' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/contact-us"
              className={`text-white font-medium text-lg relative ${
                location.pathname === '/contact-us' ? 'text-yellow-400' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </NavLink>
            {/* <NavLink
              to="/demo"
              className={`text-white font-medium text-lg relative ${
                location.pathname === '/demo' ? 'text-yellow-400' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </NavLink> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
