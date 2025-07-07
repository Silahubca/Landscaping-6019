import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiUser, FiArrowRight, FiSearch } = FiIcons;

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Spring Lawn Care Checklist: Preparing Your Grass for the Growing Season',
      slug: 'spring-lawn-care-checklist',
      excerpt: 'Get your lawn ready for spring with our comprehensive checklist covering fertilization, aeration, and weed control.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600',
      author: 'Michael Rodriguez',
      date: new Date('2024-03-15'),
      category: 'lawn-care',
      tags: ['spring', 'lawn care', 'fertilization', 'maintenance']
    },
    {
      id: 2,
      title: 'Drought-Resistant Plants for California Gardens',
      slug: 'drought-resistant-plants-california',
      excerpt: 'Discover beautiful, water-wise plants that thrive in California\'s climate while reducing your water usage.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600',
      author: 'Sarah Chen',
      date: new Date('2024-03-10'),
      category: 'garden-design',
      tags: ['drought-resistant', 'california', 'water-wise', 'plants']
    },
    {
      id: 3,
      title: 'When to Prune Different Types of Trees',
      slug: 'when-to-prune-trees',
      excerpt: 'Learn the optimal timing for pruning various tree species to promote healthy growth and prevent disease.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600',
      author: 'David Thompson',
      date: new Date('2024-03-05'),
      category: 'tree-care',
      tags: ['pruning', 'trees', 'timing', 'tree health']
    },
    {
      id: 4,
      title: 'Smart Irrigation: Saving Water and Money',
      slug: 'smart-irrigation-systems',
      excerpt: 'Modern irrigation technology can reduce water usage by up to 30% while keeping your landscape healthy.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600',
      author: 'Michael Rodriguez',
      date: new Date('2024-02-28'),
      category: 'irrigation',
      tags: ['irrigation', 'water conservation', 'smart technology', 'efficiency']
    },
    {
      id: 5,
      title: 'Creating Curb Appeal: Front Yard Landscaping Ideas',
      slug: 'front-yard-landscaping-ideas',
      excerpt: 'Transform your front yard with these professional landscaping ideas that increase property value.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600',
      author: 'Sarah Chen',
      date: new Date('2024-02-20'),
      category: 'design',
      tags: ['curb appeal', 'front yard', 'property value', 'design']
    },
    {
      id: 6,
      title: 'Seasonal Maintenance Calendar for Your Landscape',
      slug: 'seasonal-maintenance-calendar',
      excerpt: 'Stay on top of landscape maintenance with our month-by-month guide to keeping your property beautiful.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600',
      author: 'Michael Rodriguez',
      date: new Date('2024-02-15'),
      category: 'maintenance',
      tags: ['maintenance', 'seasonal', 'calendar', 'planning']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'lawn-care', label: 'Lawn Care' },
    { value: 'garden-design', label: 'Garden Design' },
    { value: 'tree-care', label: 'Tree Care' },
    { value: 'irrigation', label: 'Irrigation' },
    { value: 'design', label: 'Design' },
    { value: 'maintenance', label: 'Maintenance' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Landscaping Blog | Expert Tips & Advice | GreenScape Pro</title>
        <meta name="description" content="Expert landscaping tips, seasonal guides, and professional advice from GreenScape Pro. Learn about lawn care, garden design, tree services, and more." />
        <meta name="keywords" content="landscaping blog, lawn care tips, garden design advice, tree care guide, irrigation tips, landscape maintenance" />
        <link rel="canonical" href="https://greenscape-pro.com/blog" />
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
              Landscaping Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Expert tips, seasonal guides, and professional advice to help you 
              maintain and enhance your outdoor spaces.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-4 text-primary-600 font-semibold hover:text-primary-700"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                        {post.category.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                        <span>{format(post.date, 'MMM dd, yyyy')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiUser} className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    >
                      <span>Read More</span>
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8">
            Get the latest landscaping tips and seasonal advice delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-secondary-500 focus:outline-none"
            />
            <button className="bg-secondary-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-secondary-400 transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-200 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
};

export default Blog;