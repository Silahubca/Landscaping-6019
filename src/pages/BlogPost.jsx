import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadForm from '../components/LeadForm';

const { FiCalendar, FiUser, FiArrowLeft, FiShare2 } = FiIcons;

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from a CMS or API
  const blogPost = {
    title: 'Spring Lawn Care Checklist: Preparing Your Grass for the Growing Season',
    slug: 'spring-lawn-care-checklist',
    content: `
      <p>Spring is the perfect time to give your lawn the attention it needs to thrive throughout the growing season. After months of winter dormancy, your grass is ready to wake up and grow vigorously with the right care and preparation.</p>

      <h2>1. Clean Up and Assessment</h2>
      <p>Start by removing any debris, fallen leaves, and branches that accumulated over winter. This allows you to assess your lawn's current condition and identify areas that need special attention.</p>

      <h3>What to Look For:</h3>
      <ul>
        <li>Bare or thin spots</li>
        <li>Signs of disease or pest damage</li>
        <li>Compacted soil areas</li>
        <li>Thatch buildup</li>
      </ul>

      <h2>2. Soil Testing and Amendment</h2>
      <p>Test your soil's pH level and nutrient content. Most grasses prefer a slightly acidic to neutral pH (6.0-7.0). Based on your test results, you may need to add lime to raise pH or sulfur to lower it.</p>

      <h2>3. Aeration</h2>
      <p>If your soil is compacted, core aeration will help improve water and nutrient penetration. This is especially important for high-traffic areas and clay soils.</p>

      <h2>4. Overseeding</h2>
      <p>Fill in bare spots and thicken your lawn by overseeding with appropriate grass seed for your region and growing conditions.</p>

      <h2>5. Fertilization</h2>
      <p>Apply a balanced fertilizer to provide essential nutrients for spring growth. Choose a slow-release formula for consistent feeding throughout the season.</p>

      <h2>6. Weed Prevention</h2>
      <p>Apply pre-emergent herbicide before soil temperatures reach 55°F to prevent crabgrass and other annual weeds from germinating.</p>

      <h2>Professional Help</h2>
      <p>While many homeowners can handle basic lawn care tasks, professional landscapers have the expertise and equipment to ensure optimal results. We can create a customized lawn care program based on your specific grass type, soil conditions, and local climate.</p>
    `,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
    author: 'Michael Rodriguez',
    date: new Date('2024-03-15'),
    category: 'lawn-care',
    tags: ['spring', 'lawn care', 'fertilization', 'maintenance'],
    readTime: '5 min read'
  };

  const relatedPosts = [
    {
      title: 'Drought-Resistant Plants for California Gardens',
      slug: 'drought-resistant-plants-california',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300'
    },
    {
      title: 'When to Prune Different Types of Trees',
      slug: 'when-to-prune-trees',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300'
    },
    {
      title: 'Smart Irrigation: Saving Water and Money',
      slug: 'smart-irrigation-systems',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{blogPost.title} | GreenScape Pro Blog</title>
        <meta name="description" content="Get your lawn ready for spring with our comprehensive checklist covering fertilization, aeration, and weed control." />
        <meta name="keywords" content="spring lawn care, lawn fertilization, aeration, overseeding, weed prevention" />
        <link rel="canonical" href={`https://greenscape-pro.com/blog/${slug}`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content="Get your lawn ready for spring with our comprehensive checklist covering fertilization, aeration, and weed control." />
        <meta property="og:image" content={blogPost.image} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogPost.title} />
        <meta name="twitter:description" content="Get your lawn ready for spring with our comprehensive checklist covering fertilization, aeration, and weed control." />
        <meta name="twitter:image" content={blogPost.image} />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back to Blog Link */}
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8"
        >
          <SafeIcon icon={FiArrowLeft} className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
              {blogPost.category.replace('-', ' ')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {blogPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiUser} className="w-5 h-5" />
              <span>{blogPost.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              <span>{format(blogPost.date, 'MMMM dd, yyyy')}</span>
            </div>
            <span>{blogPost.readTime}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {blogPost.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Share Buttons */}
        <div className="flex items-center space-x-4 mb-12 p-6 bg-gray-50 rounded-lg">
          <SafeIcon icon={FiShare2} className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600 font-medium">Share this article:</span>
          <div className="flex space-x-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
              Facebook
            </button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded text-sm hover:bg-blue-500">
              Twitter
            </button>
            <button className="bg-blue-800 text-white px-4 py-2 rounded text-sm hover:bg-blue-900">
              LinkedIn
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 p-8 rounded-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Professional Lawn Care?
              </h3>
              <p className="text-gray-600 mb-6">
                Let our experts handle your spring lawn care needs. We provide comprehensive 
                lawn maintenance services to keep your grass healthy and beautiful all season long.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Professional soil testing and analysis</li>
                <li>✓ Custom fertilization programs</li>
                <li>✓ Expert aeration and overseeding</li>
                <li>✓ Integrated weed and pest management</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <LeadForm title="Get Your Lawn Care Quote" />
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
};

export default BlogPost;