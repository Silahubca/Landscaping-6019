import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import BlogEditor from '../components/BlogEditor';

const { FiEdit, FiPlus, FiTrash2, FiSave, FiEye, FiSettings, FiArrowLeft, FiLock } = FiIcons;

const CMS = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('blog');
  const [editingItem, setEditingItem] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const navigate = useNavigate();

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = 'greenscape2024';

  useEffect(() => {
    const savedAuth = sessionStorage.getItem('cms-authenticated');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('cms-authenticated', 'true');
    } else {
      alert('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('cms-authenticated');
    navigate('/');
  };

  // Mock data - in a real app, this would come from a database
  const [pages, setPages] = useState([
    { id: 1, title: 'Home Page', slug: 'home', status: 'published', lastModified: '2024-03-15', content: 'Home page content...' },
    { id: 2, title: 'About Us', slug: 'about', status: 'published', lastModified: '2024-03-10', content: 'About page content...' }
  ]);

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'Spring Lawn Care Checklist',
      slug: 'spring-lawn-care-checklist',
      status: 'published',
      author: 'Michael Rodriguez',
      date: '2024-03-15',
      category: 'lawn-care',
      excerpt: 'Get your lawn ready for spring with our comprehensive checklist covering fertilization, aeration, and weed control.',
      content: `<h2>Spring Lawn Care Essentials</h2><p>Spring is the perfect time to give your lawn the attention it needs to thrive throughout the growing season. After months of winter dormancy, your grass is ready to wake up and grow vigorously with the right care and preparation.</p><h3>1. Clean Up and Assessment</h3><p>Start by removing any debris, fallen leaves, and branches that accumulated over winter. This allows you to assess your lawn's current condition and identify areas that need special attention.</p>`,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600'
    },
    {
      id: 2,
      title: 'Drought-Resistant Plants for California Gardens',
      slug: 'drought-resistant-plants-california',
      status: 'draft',
      author: 'Sarah Chen',
      date: '2024-03-10', 
      category: 'garden-design',
      excerpt: 'Discover beautiful, water-wise plants that thrive in California\'s climate while reducing your water usage.',
      content: '<p>Water-wise plants for California gardens...</p>',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600'
    }
  ]);

  const [services, setServices] = useState([
    { id: 1, title: 'Lawn Care & Maintenance', slug: 'lawn-care', status: 'published', pricing: '$75-200', description: 'Professional lawn care services...' },
    { id: 2, title: 'Garden Design', slug: 'garden-design', status: 'published', pricing: '$500-5000', description: 'Custom garden design services...' }
  ]);

  const tabs = [
    { id: 'blog', label: 'Blog Posts', icon: FiEdit },
    { id: 'pages', label: 'Pages', icon: FiEdit },
    { id: 'services', label: 'Services', icon: FiSettings }
  ];

  const handleEdit = (item, type) => {
    setEditingItem({ ...item, type });
    setIsCreating(false);
  };

  const handleCreate = (type) => {
    const newItem = {
      id: Date.now(),
      title: '',
      slug: '',
      status: 'draft',
      type
    };

    if (type === 'blog') {
      newItem.author = 'Admin';
      newItem.date = new Date().toISOString().split('T')[0];
      newItem.category = 'lawn-care';
      newItem.excerpt = '';
      newItem.content = '';
      newItem.image = '';
    }

    setEditingItem(newItem);
    setIsCreating(true);
  };

  const handleSave = (savedItem) => {
    if (!savedItem) return;

    const { type, ...item } = savedItem;

    if (isCreating) {
      switch (type) {
        case 'page':
          setPages([...pages, item]);
          break;
        case 'blog':
          setBlogPosts([...blogPosts, item]);
          break;
        case 'service':
          setServices([...services, item]);
          break;
      }
    } else {
      switch (type) {
        case 'page':
          setPages(pages.map(p => p.id === item.id ? item : p));
          break;
        case 'blog':
          setBlogPosts(blogPosts.map(p => p.id === item.id ? item : p));
          break;
        case 'service':
          setServices(services.map(s => s.id === item.id ? item : s));
          break;
      }
    }

    setEditingItem(null);
    setIsCreating(false);
  };

  const handleDelete = (id, type) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    switch (type) {
      case 'page':
        setPages(pages.filter(p => p.id !== id));
        break;
      case 'blog':
        setBlogPosts(blogPosts.filter(p => p.id !== id));
        break;
      case 'service':
        setServices(services.filter(s => s.id !== id));
        break;
    }
  };

  const renderTable = (data, type) => (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Modified
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-500">/{item.slug}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  item.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.lastModified || item.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                <button
                  onClick={() => handleEdit(item, type)}
                  className="text-primary-600 hover:text-primary-900"
                  title="Edit"
                >
                  <SafeIcon icon={FiEdit} className="w-4 h-4" />
                </button>
                {type === 'blog' && (
                  <Link
                    to={`/blog/${item.slug}`}
                    className="text-gray-600 hover:text-gray-900"
                    title="View"
                  >
                    <SafeIcon icon={FiEye} className="w-4 h-4" />
                  </Link>
                )}
                <button
                  onClick={() => handleDelete(item.id, type)}
                  className="text-red-600 hover:text-red-900"
                  title="Delete"
                >
                  <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Login screen
  if (!isAuthenticated) {
    return (
      <>
        <Helmet>
          <title>Admin Login | GreenScape Pro</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <SafeIcon icon={FiLock} className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900">Admin Access</h1>
              <p className="text-gray-600">Enter password to access CMS</p>
            </div>
            
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Login
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900"
              >
                ← Back to Website
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (editingItem) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    setEditingItem(null);
                    setIsCreating(false);
                  }}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
                  <span>Back to CMS</span>
                </button>
                <h1 className="text-3xl font-bold text-gray-900">
                  {isCreating ? 'Create' : 'Edit'} {editingItem.type === 'blog' ? 'Blog Post' : editingItem.type}
                </h1>
              </div>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BlogEditor
            item={editingItem}
            onSave={handleSave}
            onCancel={() => {
              setEditingItem(null);
              setIsCreating(false);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Content Management System | GreenScape Pro</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gray-100">
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Content Management System</h1>
                <p className="text-gray-600">Manage your website content, blog posts, and services</p>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
                  <span>Back to Site</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <SafeIcon icon={tab.icon} className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Add New Button */}
          <div className="mb-6">
            <button
              onClick={() => handleCreate(activeTab)}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 flex items-center space-x-2"
            >
              <SafeIcon icon={FiPlus} className="w-4 h-4" />
              <span>Add New {activeTab === 'blog' ? 'Post' : activeTab.slice(0, -1)}</span>
            </button>
          </div>

          {/* Content Tables */}
          {activeTab === 'pages' && renderTable(pages, 'page')}
          {activeTab === 'blog' && renderTable(blogPosts, 'blog')}
          {activeTab === 'services' && renderTable(services, 'service')}
        </div>
      </div>
    </>
  );
};

export default CMS;