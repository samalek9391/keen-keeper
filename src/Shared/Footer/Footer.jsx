import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (

    <footer className="bg-[#245c4f] text-white py-16 px-4 text-center">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        KeenKeeper
      </h1>

      {/* Subtitle */}
      <p className="text-sm md:text-base text-gray-200 max-w-xl mx-auto mb-8">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      {/* Social Links */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Social Links</h3>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 opacity-40 my-6"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 max-w-5xl mx-auto">
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Cookies
          </a>
        </div>
      </div>
    </footer>
    );
};

export default Footer;