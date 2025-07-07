import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadForm from '../components/LeadForm';

const { FiCheck, FiDollarSign, FiClock, FiShield } = FiIcons;

const ServiceDetail = () => {
  const { slug } = useParams();

  // Mock service data - in a real app, this would come from a CMS or API
  const services = {
    'lawn-care': {
      title: 'Professional Lawn Care & Maintenance',
      description: 'Keep your lawn healthy, green, and beautiful year-round with our comprehensive lawn care services.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
      features: [
        'Weekly or bi-weekly mowing',
        'Edging and trimming',
        'Fertilization programs',
        'Weed control and prevention',
        'Aeration and overseeding',
        'Seasonal cleanup',
        'Pest and disease management',
        'Soil testing and amendments'
      ],
      process: [
        {
          step: 1,
          title: 'Initial Assessment',
          description: 'We evaluate your lawn\'s current condition, soil type, and specific needs.'
        },
        {
          step: 2,
          title: 'Custom Plan',
          description: 'Create a tailored maintenance schedule based on your grass type and local climate.'
        },
        {
          step: 3,
          title: 'Regular Service',
          description: 'Consistent, professional care to keep your lawn healthy and beautiful.'
        },
        {
          step: 4,
          title: 'Ongoing Monitoring',
          description: 'Regular assessments and adjustments to ensure optimal lawn health.'
        }
      ],
      pricing: {
        basic: {
          name: 'Basic Care',
          price: '$75',
          period: 'per visit',
          features: ['Mowing & edging', 'Basic cleanup', 'Monthly service']
        },
        standard: {
          name: 'Complete Care',
          price: '$125',
          period: 'per visit',
          features: ['All basic services', 'Fertilization', 'Weed control', 'Bi-weekly service']
        },
        premium: {
          name: 'Premium Care',
          price: '$200',
          period: 'per visit',
          features: ['All standard services', 'Aeration', 'Overseeding', 'Pest management', 'Weekly service']
        }
      },
      faq: [
        {
          question: 'How often should I have my lawn mowed?',
          answer: 'Most lawns benefit from weekly mowing during peak growing season and bi-weekly during slower growth periods.'
        },
        {
          question: 'When is the best time to fertilize?',
          answer: 'Spring and fall are optimal times for fertilization, with specific timing depending on your grass type.'
        }
      ]
    },
    'garden-design': {
      title: 'Custom Garden Design & Installation',
      description: 'Transform your outdoor space with beautiful, sustainable garden designs tailored to your style and needs.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
      features: [
        'Custom design consultation',
        'Plant selection and sourcing',
        'Soil preparation and amendment',
        'Professional installation',
        'Irrigation system integration',
        'Seasonal color planning',
        'Sustainable plant choices',
        'Maintenance guidance'
      ],
      process: [
        {
          step: 1,
          title: 'Design Consultation',
          description: 'We discuss your vision, assess your space, and understand your preferences.'
        },
        {
          step: 2,
          title: 'Detailed Plan',
          description: 'Create comprehensive design plans with plant selections and layout.'
        },
        {
          step: 3,
          title: 'Installation',
          description: 'Professional installation with attention to proper spacing and care.'
        },
        {
          step: 4,
          title: 'Establishment Care',
          description: 'Follow-up care to ensure your new garden thrives.'
        }
      ],
      pricing: {
        basic: {
          name: 'Design Only',
          price: '$500',
          period: 'one-time',
          features: ['Site assessment', 'Basic design plan', 'Plant list']
        },
        standard: {
          name: 'Design + Install',
          price: '$2,500',
          period: 'project',
          features: ['Complete design', 'Plant installation', 'Soil preparation', 'Basic irrigation']
        },
        premium: {
          name: 'Full Service',
          price: '$5,000',
          period: 'project',
          features: ['Comprehensive design', 'Premium plants', 'Advanced irrigation', 'Hardscape elements', '1-year maintenance']
        }
      },
      faq: [
        {
          question: 'How long does the design process take?',
          answer: 'Initial designs typically take 1-2 weeks, with revisions completed within another week.'
        },
        {
          question: 'Do you provide plant warranties?',
          answer: 'Yes, we offer a 90-day warranty on all plants with proper care instructions followed.'
        }
      ]
    }
  };

  const service = services[slug] || services['lawn-care'];

  return (
    <>
      <Helmet>
        <title>{service.title} | Professional Landscaping Services | GreenScape Pro</title>
        <meta name="description" content={service.description} />
        <meta name="keywords" content={`${slug.replace('-', ' ')}, professional landscaping, ${service.title.toLowerCase()}`} />
        <link rel="canonical" href={`https://greenscape-pro.com/services/${slug}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl max-w-3xl mx-auto">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <LeadForm title={`Get Your ${service.title} Quote`} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Packages</h2>
            <p className="text-xl text-gray-600">
              Choose the package that best fits your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(service.pricing).map(([key, plan], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white p-8 rounded-2xl shadow-lg ${
                  key === 'standard' ? 'ring-2 ring-primary-600 transform scale-105' : ''
                }`}
              >
                {key === 'standard' && (
                  <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold text-center mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  key === 'standard'
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about our {service.title.toLowerCase()}
            </p>
          </div>

          <div className="space-y-6">
            {service.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed estimate for your {service.title.toLowerCase()}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-400 transition-colors">
              Get Free Estimate
            </button>
            <a
              href="tel:555-LANDSCAPE"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              Call (555) LANDSCAPE
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;