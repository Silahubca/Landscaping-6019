import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadForm from '../components/LeadForm';

const { FiPhone, FiMail, FiMapPin, FiClock } = FiIcons;

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact GreenScape Pro | Free Landscaping Estimates | (555) LANDSCAPE</title>
        <meta name="description" content="Contact GreenScape Pro for professional landscaping services. Get your free estimate today! Call (555) LANDSCAPE or fill out our contact form." />
        <meta name="keywords" content="contact landscaper, free landscaping estimate, landscaping quote, professional landscaper contact" />
        <link rel="canonical" href="https://greenscape-pro.com/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Contact Us Today
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Ready to transform your outdoor space? Get in touch for a free consultation 
              and estimate from our professional landscaping team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiPhone} className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">(555) LANDSCAPE</p>
                    <p className="text-sm text-gray-500">Call for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiMail} className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">info@greenscape-pro.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiMapPin} className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600 mb-2">
                      123 Garden Lane<br />
                      Green Valley, CA 90210
                    </p>
                    <p className="text-sm text-gray-500">Licensed & Insured</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiClock} className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency Services Only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Services</h3>
                <p className="text-gray-600 mb-3">
                  Storm damage? Tree emergency? We provide 24/7 emergency landscaping services.
                </p>
                <a
                  href="tel:555-LANDSCAPE"
                  className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700"
                >
                  <SafeIcon icon={FiPhone} className="w-4 h-4" />
                  <span>Call Emergency Line</span>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <LeadForm title="Request Your Free Estimate" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600">
              We proudly serve residential and commercial clients throughout these areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Beverly Hills', 'Santa Monica', 'Pasadena', 'Burbank',
              'Glendale', 'West Hollywood', 'Manhattan Beach', 'Redondo Beach',
              'Torrance', 'El Segundo', 'Culver City', 'Venice',
              'Marina del Rey', 'Hermosa Beach', 'Inglewood', 'Hawthorne'
            ].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-gray-900">{city}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your area listed? <a href="tel:555-LANDSCAPE" className="text-primary-600 font-semibold">Call us</a> - we may still be able to help!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about our landscaping services
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can you provide an estimate?</h3>
              <p className="text-gray-600">
                We typically provide estimates within 24-48 hours of your initial contact. For urgent projects, 
                same-day estimates may be available.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are your estimates really free?</h3>
              <p className="text-gray-600">
                Yes! We provide completely free, no-obligation estimates for all our services. 
                There are no hidden fees or charges for consultations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer maintenance contracts?</h3>
              <p className="text-gray-600">
                Absolutely! We offer flexible maintenance contracts for both residential and commercial properties. 
                Regular maintenance helps keep your landscape healthy and beautiful year-round.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What makes you different from other landscapers?</h3>
              <p className="text-gray-600">
                We combine 15+ years of experience with modern techniques and eco-friendly practices. 
                We're fully licensed, insured, and committed to 100% customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;