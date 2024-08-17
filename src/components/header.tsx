import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <header
      className='fixed top-0 left-0 w-full p-4 z-50 transition-all bg-black bg-opacity-50 ho'
    >
      <div className='flex items-center justify-between'>
        {/* Logo Section */}
        <div className='flex items-center hover:cursor-pointer' onClick={navigateToHome}>
          <img
            src='/assets/logo-1.png'
            alt='BV Designs Logo'
            className='h-10 mr-3'
          />
          <div className='text-white text-3xl '>BV Designs</div>
        </div>

        {/* Navigation Links */}
        <nav className='flex space-x-6'>
          <NavLink
            to='/'
            className={`text-white font-medium text-lg relative ${
              location.pathname === '/' ? 'text-yellow-400' : ''
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to='/projects'
            className={`text-white font-medium text-lg relative ${
              location.pathname === '/projects' ? 'text-yellow-400' : ''
            }`}
          >
            Projects
          </NavLink>
          <NavLink
            to='/testimonials'
            className={`text-white font-medium text-lg relative ${
              location.pathname === '/testimonials' ? 'text-yellow-400' : ''
            }`}
          >
            Testimonials
          </NavLink>
          <NavLink
            to='/contact-us'
            className={`text-white font-medium text-lg relative ${
              location.pathname === '/contact-us' ? 'text-yellow-400' : ''
            }`}
          >
            Contact us
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
