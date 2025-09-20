import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag, TrendingUp } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  published_at: string;
  author_id: string;
  published: boolean;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for demonstration
  const mockPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI Solopreneurship: 5 Trends Corporate Professionals Must Know',
      slug: 'future-ai-solopreneurship-trends',
      excerpt: 'Discover the emerging AI trends that are reshaping how corporate professionals can build successful solo businesses. From automation to personalization, learn what\'s coming next.',
      featured_image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      published_at: '2024-01-15',
      author_id: 'coach',
      published: true
    },
    {
      id: '2',
      title: 'From Corporate Executive to AI-Powered Solopreneur: A Complete Transformation Guide',
      slug: 'corporate-to-ai-solopreneur-guide',
      excerpt: 'Step-by-step roadmap for leveraging your corporate experience to build a thriving AI-enhanced solo business. Real strategies, practical tools, and proven methodologies.',
      featured_image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      published_at: '2024-01-10',
      author_id: 'coach',
      published: true
    },
    {
      id: '3',
      title: '10 AI Tools Every Aspiring Solopreneur Should Master in 2024',
      slug: 'essential-ai-tools-solopreneurs-2024',
      excerpt: 'Comprehensive review of the most powerful AI tools that can accelerate your solopreneurial journey. From content creation to customer service automation.',
      featured_image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
      published_at: '2024-01-05',
      author_id: 'coach',
      published: true
    },
    {
      id: '4',
      title: 'Building Your Personal Brand as an AI Solopreneur: Strategies That Work',
      slug: 'personal-brand-ai-solopreneur-strategies',
      excerpt: 'Learn how to position yourself as an authority in your niche while leveraging AI to amplify your personal brand and attract ideal clients.',
      featured_image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      published_at: '2023-12-28',
      author_id: 'coach',
      published: true
    },
    {
      id: '5',
      title: 'The Psychology of Corporate-to-Solopreneur Transition: Overcoming Mental Barriers',
      slug: 'psychology-corporate-solopreneur-transition',
      excerpt: 'Address the mental and emotional challenges of leaving corporate security for solopreneurial freedom. Practical strategies for mindset transformation.',
      featured_image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      published_at: '2023-12-20',
      author_id: 'coach',
      published: true
    },
    {
      id: '6',
      title: 'AI-Driven Customer Acquisition: How Solopreneurs Can Compete with Big Corporations',
      slug: 'ai-customer-acquisition-solopreneurs',
      excerpt: 'Discover how AI levels the playing field, allowing solo entrepreneurs to implement sophisticated customer acquisition strategies previously available only to large companies.',
      featured_image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
      published_at: '2023-12-15',
      author_id: 'coach',
      published: true
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  const categories = [
    { id: 'all', name: 'All Posts', count: mockPosts.length },
    { id: 'ai-tools', name: 'AI Tools', count: 2 },
    { id: 'transformation', name: 'Transformation', count: 3 },
    { id: 'strategy', name: 'Strategy', count: 2 },
    { id: 'mindset', name: 'Mindset', count: 1 }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-purple-700 mb-6">
              AI Solopreneurship Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Strategic insights, AI trends, and transformation guidance to help corporate professionals 
              build their dream solopreneur businesses with cutting-edge artificial intelligence.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories and Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="font-raleway font-semibold text-lg text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-purple-100 text-purple-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Featured Topics */}
                <div className="mt-8">
                  <h3 className="font-raleway font-semibold text-lg text-gray-900 mb-4">
                    Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['AI Tools', 'Corporate Transition', 'Solopreneurship', 'Business Strategy', 'Mindset'].map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-100 rounded-lg h-96 animate-pulse"></div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-raleway font-semibold text-xl text-gray-900">
                      {filteredPosts.length} Articles Found
                    </h2>
                    <div className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      Latest First
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post) => (
                      <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(post.published_at)}
                            <span className="mx-2">•</span>
                            <User className="h-4 w-4 mr-1" />
                            AI Solopreneur
                          </div>
                          <h3 className="font-raleway font-semibold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-700 transition-colors duration-200">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <Link
                            to={`/blog/${post.slug}`}
                            className="inline-flex items-center text-purple-700 hover:text-purple-800 font-semibold text-sm transition-colors duration-200"
                          >
                            Read Full Article
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>

                  {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-raleway font-semibold text-lg text-gray-900 mb-2">
                        No articles found
                      </h3>
                      <p className="text-gray-600">
                        Try adjusting your search terms or browse all categories.
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-700 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-raleway font-bold text-2xl md:text-3xl text-white mb-4">
            Stay Updated on AI Solopreneurship
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Get the latest insights, strategies, and AI tools delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400"
            />
            <button className="btn-secondary whitespace-nowrap px-6 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;