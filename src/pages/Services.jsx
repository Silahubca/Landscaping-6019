import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import LeadForm from '../components/LeadForm';

const Services = () => {
  const services = [
    {
      title: 'Lawn Care & Maintenance',
      description: 'Complete lawn care services including mowing, fertilizing, weed control, and seasonal maintenance to keep your grass healthy and beautiful year-round.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
      slug: 'lawn-care',
      features: ['Weekly/Bi-weekly Mowing', 'Fertilization Programs', 'Weed & Pest Control', 'Aeration & Overseeding']
    },
    {
      title: 'Garden Design & Installation',
      description: 'Custom garden designs that reflect your style and complement your property. From concept to completion, we create stunning outdoor spaces.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
      slug: 'garden-design',
      features: ['Custom Design Plans', 'Plant Selection', 'Soil Preparation', 'Installation & Setup']
    },
    {
      title: 'Tree Services',
      description: 'Professional tree care from certified arborists including pruning, removal, health assessments, and emergency storm damage cleanup.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
      slug: 'tree-service',
      features: ['Tree Pruning & Trimming', 'Tree Removal', 'Stump Grinding', 'Emergency Services']
    },
    {
      title: 'Irrigation Systems',
      description: 'Efficient water management solutions with custom irrigation system design, installation, and maintenance for optimal plant health.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
      slug: 'irrigation',
      features: ['System Design', 'Installation', 'Maintenance & Repairs', 'Smart Controllers']
    },
    {
      title: 'Hardscaping',
      description: 'Transform your outdoor space with beautiful hardscape features including patios, walkways, retaining walls, and outdoor living areas.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
      slug: 'hardscaping',
      features: ['Patios & Decks', 'Walkways & Driveways', 'Retaining Walls', 'Outdoor Kitchens']
    },
    {
      title: 'Commercial Landscaping',
      description: 'Professional landscaping services for businesses, office buildings, retail centers, and commercial properties of all sizes.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
      slug: 'commercial',
      features: ['Property Maintenance', 'Seasonal Displays', 'Snow Removal', 'Grounds Management']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Landscaping Services | Lawn Care, Garden Design & More | GreenScape Pro</title>
        <meta name="description" content="Comprehensive landscaping services including lawn care, garden design, tree services, irrigation, hardscaping, and commercial maintenance. Licensed professionals serving residential and commercial clients." />
        <meta name="keywords" content="landscaping services, lawn care, garden design, tree service, irrigation systems, hardscaping, commercial landscaping, landscape maintenance, professional landscapers" />
        <link rel="canonical" href="https://greenscape-pro.com/services" />
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
              Our Professional Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              From routine maintenance to complete landscape transformations, 
              we offer comprehensive services to meet all your outdoor needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600">
              We proudly serve residential and commercial clients throughout the greater Los Angeles area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              'Beverly Hills', 'Santa Monica', 'Pasadena', 'Burbank', 'Glendale', 'West Hollywood',
              'Manhattan Beach', 'Redondo Beach', 'Torrance', 'El Segundo', 'Culver City', 'Venice'
            ].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-gray-900">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today for a free consultation and estimate. 
                Our team of experts is ready to transform your outdoor space.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Free on-site consultations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Detailed written estimates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Licensed and insured professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">100% satisfaction guarantee</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <LeadForm title="Get Your Free Estimate" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;