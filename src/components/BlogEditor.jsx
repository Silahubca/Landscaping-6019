import React, { useState, useRef } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiSave, FiEye, FiBold, FiItalic, FiUnderline, FiList, 
  FiImage, FiLink, FiType, FiAlignLeft, FiAlignCenter 
} = FiIcons;

const BlogEditor = ({ item, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: item.title || '',
    slug: item.slug || '',
    excerpt: item.excerpt || '',
    content: item.content || '',
    category: item.category || 'lawn-care',
    status: item.status || 'draft',
    author: item.author || 'Admin',
    image: item.image || '',
    ...item
  });

  const [isPreview, setIsPreview] = useState(false);
  const contentRef = useRef(null);

  const categories = [
    { value: 'lawn-care', label: 'Lawn Care' },
    { value: 'garden-design', label: 'Garden Design' },
    { value: 'tree-care', label: 'Tree Care' },
    { value: 'irrigation', label: 'Irrigation' },
    { value: 'design', label: 'Design' },
    { value: 'maintenance', label: 'Maintenance' }
  ];

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  };

  const handleTitleChange = (title) => {
    setFormData({
      ...formData,
      title,
      slug: formData.slug || generateSlug(title)
    });
  };

  const insertFormatting = (tag) => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    let replacement = '';
    
    switch (tag) {
      case 'h2':
        replacement = `<h2>${selectedText || 'Heading'}</h2>`;
        break;
      case 'h3':
        replacement = `<h3>${selectedText || 'Subheading'}</h3>`;
        break;
      case 'p':
        replacement = `<p>${selectedText || 'Paragraph text'}</p>`;
        break;
      case 'bold':
        replacement = `<strong>${selectedText || 'bold text'}</strong>`;
        break;
      case 'italic':
        replacement = `<em>${selectedText || 'italic text'}</em>`;
        break;
      case 'ul':
        replacement = `<ul>\n  <li>${selectedText || 'List item'}</li>\n</ul>`;
        break;
      case 'ol':
        replacement = `<ol>\n  <li>${selectedText || 'List item'}</li>\n</ol>`;
        break;
      case 'link':
        replacement = `<a href="https://example.com">${selectedText || 'link text'}</a>`;
        break;
      case 'image':
        replacement = `<img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600" alt="${selectedText || 'Image description'}" />`;
        break;
    }

    const newContent = 
      textarea.value.substring(0, start) + 
      replacement + 
      textarea.value.substring(end);

    setFormData({ ...formData, content: newContent });

    // Reset cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + replacement.length, start + replacement.length);
    }, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      type: item.type,
      id: item.id,
      lastModified: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">
          {item.id ? 'Edit' : 'Create'} Blog Post
        </h2>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => setIsPreview(!isPreview)}
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <SafeIcon icon={FiEye} className="w-4 h-4" />
            <span>{isPreview ? 'Edit' : 'Preview'}</span>
          </button>
          <button
            type="submit"
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <SafeIcon icon={FiSave} className="w-4 h-4" />
            <span>Save</span>
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="p-6">
        {!isPreview ? (
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image URL</label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="https://images.unsplash.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Brief description of the blog post..."
              />
            </div>

            {/* Formatting Toolbar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-3 py-2 border-b border-gray-300 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => insertFormatting('h2')}
                    className="px-2 py-1 text-sm bg-white border rounded hover:bg-gray-100"
                    title="Heading 2"
                  >
                    H2
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('h3')}
                    className="px-2 py-1 text-sm bg-white border rounded hover:bg-gray-100"
                    title="Heading 3"
                  >
                    H3
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('p')}
                    className="px-2 py-1 text-sm bg-white border rounded hover:bg-gray-100"
                    title="Paragraph"
                  >
                    <SafeIcon icon={FiType} className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('bold')}
                    className="px-2 py-1 text-sm bg-white border rounded hover:bg-gray-100"
                    title="Bold"
                  >
                    <SafeIcon icon={FiBold} className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('italic')}
                    className="px-2 py-1 text-sm bg-white border rounded hover:bg-gray-100"
                    title="Italic"
                  >
                    <SafeIcon icon={FiItalic} className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('ul')}
                    className="px-2 py-1 text-sm bg-white border rounded hover:bg-gray-100"
                    title="Bullet List"
                  >
                    <SafeIcon icon={FiList} className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('ol')}
                    className="px-2 py-1 text-sm bg-white border rounded hover:bg-gray-100"
                    title="Numbered List"
                  >
                    1.
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('link')}
                    className="px-2 py-1 text-sm bg-white border rounded hover:bg-gray-100"
                    title="Link"
                  >
                    <SafeIcon icon={FiLink} className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('image')}
                    className="px-2 py-1 text-sm bg-white border rounded hover:bg-gray-100"
                    title="Image"
                  >
                    <SafeIcon icon={FiImage} className="w-4 h-4" />
                  </button>
                </div>
                <textarea
                  ref={contentRef}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows="20"
                  className="w-full px-3 py-2 border-0 focus:ring-0 font-mono text-sm resize-none"
                  placeholder="Write your blog post content using HTML tags..."
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Use HTML tags for formatting. Select text and use toolbar buttons for quick formatting.
              </p>
            </div>
          </div>
        ) : (
          // Preview Mode
          <div className="prose max-w-none">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{formData.title}</h1>
              {formData.image && (
                <img 
                  src={formData.image} 
                  alt={formData.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}
              <p className="text-gray-600 text-lg">{formData.excerpt}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mt-4">
                <span>By {formData.author}</span>
                <span>•</span>
                <span className="capitalize">{formData.category.replace('-', ' ')}</span>
                <span>•</span>
                <span className={`px-2 py-1 rounded text-xs ${
                  formData.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {formData.status}
                </span>
              </div>
            </div>
            <div 
              className="prose-lg"
              dangerouslySetInnerHTML={{ __html: formData.content }}
            />
          </div>
        )}
      </div>
    </form>
  );
};

export default BlogEditor;