import React from 'react';
import { FaInstagram, FaEnvelope, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
          <a
            href="mailto:info@bvdesigns.com"
            className="text-white mx-4 hover:text-yellow-400 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.instagram.com/bvdesigns"
            className="text-white mx-4 hover:text-yellow-400 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.twitter.com/bvdesigns"
            className="text-white mx-4 hover:text-yellow-400 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/bvdesigns"
            className="text-white mx-4 hover:text-yellow-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/bvdesigns"
            className="text-white mx-4 hover:text-yellow-400 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
        </div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} BV Designs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
