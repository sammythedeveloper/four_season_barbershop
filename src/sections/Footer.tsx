import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className=" text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        
        {/* Branding and Socials */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-bold text-black">BarberX</h3>
          <p className="text-black max-w-xs">Cutting-edge styles. Old-school service.</p>
          <div className="flex space-x-4 text-xl text-black">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-yellow-400"><FaTwitter /></a>
            <a href="#" aria-label="TikTok" className="hover:text-yellow-400"><FaTiktok /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-black">Quick Links</h4>
          <ul className="space-y-2 text-black">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#" className="hover:text-yellow-400">Book Now</a></li>
            <li><a href="#" className="hover:text-yellow-400">Gallery</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-black">Contact Us</h4>
          <ul className="space-y-2 text-black">
            <li>📍 123 Fade Street, Cutville</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>✉️ support@barberx.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-black pt-4 text-center text-sm text-black">
        &copy; 2025 BarberX. All rights reserved.
      </div>
    </footer>
  );
}
