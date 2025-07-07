import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiLinkedin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <h3 className="text-xl font-bold">GreenScape Pro</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Professional landscaping services for residential and commercial properties. 
              Creating beautiful outdoor spaces since 2010.
            </p>
            <div className="flex space-x-4">
              <SafeIcon icon={FiFacebook} className="w-5 h-5 text-gray-400 hover:text-primary-500 cursor-pointer" />
              <SafeIcon icon={FiInstagram} className="w-5 h-5 text-gray-400 hover:text-primary-500 cursor-pointer" />
              <SafeIcon icon={FiTwitter} className="w-5 h-5 text-gray-400 hover:text-primary-500 cursor-pointer" />
              <SafeIcon icon={FiLinkedin} className="w-5 h-5 text-gray-400 hover:text-primary-500 cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services/lawn-care" className="hover:text-primary-500">Lawn Care</Link></li>
              <li><Link to="/services/garden-design" className="hover:text-primary-500">Garden Design</Link></li>
              <li><Link to="/services/tree-service" className="hover:text-primary-500">Tree Service</Link></li>
              <li><Link to="/services/irrigation" className="hover:text-primary-500">Irrigation Systems</Link></li>
              <li><Link to="/services/hardscaping" className="hover:text-primary-500">Hardscaping</Link></li>
              <li><Link to="/services/commercial" className="hover:text-primary-500">Commercial Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-primary-500">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-primary-500">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary-500">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary-500">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>(555) LANDSCAPE</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="w-5 h-5" />
                <span>info@greenscape-pro.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 mt-1" />
                <span>123 Garden Lane<br />Green Valley, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 GreenScape Pro. All rights reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;