import React from 'react';
import { FaInstagram, FaEnvelope, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
          <a
            href="mailto:mail@bvdesigns.com"
            className="text-white mx-4 hover:text-yellow-400 transition duration-300"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.instagram.com/bhuvaneswarivenkatesan_/?igsh=MTJ4YW05cDdpcnB5NA%3D%3D#"
            className="text-white mx-4 hover:text-yellow-400 transition duration-300"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          {/* <a
            href="https://www.twitter.com/bvdesigns"
            className="text-white mx-4 hover:text-yellow-400 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a> */}
          <a
            href="https://www.linkedin.com/company/bvdesigns"
            className="text-white mx-4 hover:text-yellow-400 transition duration-300"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/bvdesigns"
            className="text-white mx-4 hover:text-yellow-400 transition duration-300"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
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
