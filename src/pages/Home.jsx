import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadForm from '../components/LeadForm';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const { FiCheck, FiStar, FiPhone, FiClock, FiShield, FiUsers } = FiIcons;

const Home = () => {
  const services = [
    {
      title: 'Lawn Care & Maintenance',
      description: 'Keep your lawn healthy and beautiful year-round with our professional maintenance services.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
      slug: 'lawn-care'
    },
    {
      title: 'Garden Design & Installation',
      description: 'Transform your outdoor space with custom garden designs tailored to your style and needs.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
      slug: 'garden-design'
    },
    {
      title: 'Tree Services',
      description: 'Professional tree trimming, removal, and health care services from certified arborists.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
      slug: 'tree-service'
    },
    {
      title: 'Irrigation Systems',
      description: 'Efficient water management with custom irrigation system design and installation.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
      slug: 'irrigation'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Beverly Hills, CA',
      rating: 5,
      text: 'GreenScape Pro transformed our backyard into a beautiful oasis. Their attention to detail and professionalism exceeded our expectations.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100'
    },
    {
      name: 'Mike Chen',
      location: 'Santa Monica, CA',
      rating: 5,
      text: 'Outstanding lawn care service! Our grass has never looked better. The team is reliable and always does excellent work.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
    },
    {
      name: 'Jennifer Davis',
      location: 'Pasadena, CA',
      rating: 5,
      text: 'Professional, punctual, and affordable. They designed and installed our entire landscape. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Landscaping Services | GreenScape Pro - Lawn Care & Garden Design</title>
        <meta name="description" content="Transform your outdoor space with GreenScape Pro's professional landscaping services. Expert lawn care, garden design, tree services, and irrigation systems. Free estimates available." />
        <meta name="keywords" content="landscaping services, lawn care, garden design, tree service, irrigation, hardscaping, residential landscaping, commercial landscaping, landscape maintenance" />
        <link rel="canonical" href="https://greenscape-pro.com/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Outdoor Space Into Paradise
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional landscaping services for residential and commercial properties. 
                Licensed, insured, and trusted by thousands of satisfied customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="bg-secondary-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-400 transition-colors text-center"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:555-LANDSCAPE"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-secondary-500" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-secondary-500" />
                  <span>Free Estimates</span>
                </div>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-secondary-500" />
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-2xl"
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <SafeIcon icon={FiUsers} className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <SafeIcon icon={FiClock} className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <SafeIcon icon={FiShield} className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">100%</h3>
              <p className="text-gray-600">Licensed & Insured</p>
            </div>
            <div className="flex flex-col items-center">
              <SafeIcon icon={FiStar} className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">4.9/5</h3>
              <p className="text-gray-600">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Professional Landscaping Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From lawn maintenance to complete landscape design, we offer comprehensive 
              services to keep your property looking its absolute best year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose GreenScape Pro?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed landscaping contractors with comprehensive insurance coverage for your peace of mind.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Certified arborists and experienced landscapers with over 15 years of combined expertise.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
                    <p className="text-gray-600">100% satisfaction guarantee on all our work. We stand behind our craftsmanship.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly Practices</h3>
                    <p className="text-gray-600">Sustainable landscaping solutions that protect the environment and save you money.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600"
                alt="Professional landscaping team at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for your landscaping project. 
            Our experts are ready to bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-secondary-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-400 transition-colors"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:555-LANDSCAPE"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5" />
              <span>Call (555) LANDSCAPE</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;