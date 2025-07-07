import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadForm from '../components/LeadForm';

const { FiAward, FiUsers, FiShield, FiHeart } = FiIcons;

const About = () => {
  const team = [
    {
      name: 'Michael Rodriguez',
      title: 'Founder & Lead Landscaper',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      bio: 'With over 15 years of experience, Michael founded GreenScape Pro with a vision to transform outdoor spaces while maintaining environmental sustainability.'
    },
    {
      name: 'Sarah Chen',
      title: 'Garden Design Specialist',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
      bio: 'Sarah brings artistic vision and horticultural expertise to every project, creating gardens that are both beautiful and ecologically sound.'
    },
    {
      name: 'David Thompson',
      title: 'Certified Arborist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      bio: 'ISA Certified Arborist with 12 years of experience in tree care, health assessment, and urban forestry management.'
    }
  ];

  const values = [
    {
      icon: FiHeart,
      title: 'Passion for Excellence',
      description: 'We pour our heart into every project, treating each property as if it were our own.'
    },
    {
      icon: FiShield,
      title: 'Reliability & Trust',
      description: 'Licensed, insured, and committed to delivering on our promises with integrity.'
    },
    {
      icon: FiUsers,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We listen, adapt, and exceed expectations.'
    },
    {
      icon: FiAward,
      title: 'Quality Craftsmanship',
      description: 'Professional-grade equipment and techniques ensure lasting, beautiful results.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About GreenScape Pro | Professional Landscaping Team | Licensed & Insured</title>
        <meta name="description" content="Learn about GreenScape Pro's experienced landscaping team. Licensed, insured professionals with 15+ years of experience serving residential and commercial clients." />
        <meta name="keywords" content="about greenscape pro, landscaping team, licensed landscapers, professional landscaping company, experienced landscapers" />
        <link rel="canonical" href="https://greenscape-pro.com/about" />
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
              About GreenScape Pro
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Transforming outdoor spaces with passion, expertise, and environmental responsibility since 2010.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  GreenScape Pro was born from a simple belief: every property deserves to be beautiful, 
                  functional, and environmentally sustainable. Founded in 2010 by Michael Rodriguez, 
                  we started as a small team with big dreams and an unwavering commitment to quality.
                </p>
                <p>
                  Over the years, we've grown from a local startup to a trusted name in professional 
                  landscaping, serving hundreds of satisfied residential and commercial clients 
                  throughout the greater Los Angeles area.
                </p>
                <p>
                  What sets us apart is our holistic approach to landscaping. We don't just maintain 
                  lawns or plant gardens – we create outdoor environments that enhance your lifestyle, 
                  increase property value, and contribute positively to our local ecosystem.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600"
                alt="GreenScape Pro team at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and ensure we deliver 
              exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <SafeIcon icon={value.icon} className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals bring passion, expertise, and dedication 
              to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Credentials</h2>
            <p className="text-xl text-gray-600">
              We maintain the highest professional standards through continuous education and certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-bold text-gray-900 mb-2">Licensed Contractor</h3>
              <p className="text-sm text-gray-600">CA License #123456</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-bold text-gray-900 mb-2">ISA Certified Arborist</h3>
              <p className="text-sm text-gray-600">International Society of Arboriculture</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-bold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-sm text-gray-600">$2M General Liability</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-bold text-gray-900 mb-2">EPA Certified</h3>
              <p className="text-sm text-gray-600">Pesticide Application</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Work with Our Expert Team?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the GreenScape Pro difference. Contact us today to discuss 
                your landscaping needs and get a free, detailed estimate.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">15+ years of experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">500+ satisfied customers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Licensed & insured professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">100% satisfaction guarantee</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <LeadForm title="Get Your Free Consultation" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;