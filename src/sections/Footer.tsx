import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className=" text-white py-10 bg-black mt-24 ">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        
        {/* Branding and Socials */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-bold text-white">BarberX</h3>
          <p className="text-white font-extralight text-xs  max-w-xs">Cutting-edge styles. Old-school service.</p>
          <div className="flex space-x-4 text-xl text-white">
            <a href="#" aria-label="Facebook" className="hover:text-purple-500"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="hover:text-purple-500"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-purple-500"><FaTwitter /></a>
            <a href="#" aria-label="TikTok" className="hover:text-purple-500"><FaTiktok /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-bold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-white text-xs  ">
            <li><a href="#" className="font-extralight hover:text-purple-500">Home</a></li>
            <li><a href="#" className="font-extralight hover:text-purple-500">Services</a></li>
            <li><a href="#" className="font-extralight hover:text-purple-500">Book Now</a></li>
            <li><a href="#" className="font-extralight hover:text-purple-500">Gallery</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-3 text-white">Contact Us</h4>
          <ul className="space-y-2 text-white text-xs  ">
            <li className="font-extralight">📍 123 Fade Street, Cutville</li>
            <li className="font-extralight">📞 +1 (555) 123-4567</li>
            <li className="font-extralight">✉️ support@barberx.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-black pt-4 text-center text-xs font-extralight text-white">
        &copy; 2025 FourSeasonBarber. All rights reserved.
      </div>
    </footer>
  );
}
