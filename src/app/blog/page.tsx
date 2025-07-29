'use client';
import { useState } from "react";
import { FaSearch, FaTag, FaUser, FaCalendar, FaClock, FaArrowRight } from "react-icons/fa";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubscriptionStatus('loading');
    setSubscriptionMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscriptionStatus('success');
        setSubscriptionMessage(data.message);
        setEmail('');
      } else {
        setSubscriptionStatus('error');
        setSubscriptionMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubscriptionStatus('error');
      setSubscriptionMessage('Something went wrong. Please try again.');
    }
  };

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'ai-trends', name: 'AI Trends', count: 4 },
    { id: 'automation', name: 'Automation', count: 3 },
    { id: 'business-intelligence', name: 'Business Intelligence', count: 2 },
    { id: 'case-studies', name: 'Case Studies', count: 2 },
    { id: 'industry-guides', name: 'Industry Guides', count: 1 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI Automation in Small Business: 2024 Trends",
      excerpt: "Discover how AI automation is transforming small businesses in 2024. From chatbots to predictive analytics, learn what's driving the adoption of intelligent automation solutions.",
      category: "ai-trends",
      author: "Md Maruf Uzzaman",
      date: "March 15, 2024",
      readTime: "8 min read",
      featured: true,
      image: "/dashboard.jpg"
    },
    {
      id: 2,
      title: "How Nova Scotia Restaurants Are Using AI to Boost Revenue",
      excerpt: "Real-world case study: How local restaurants in Nova Scotia increased bookings by 40% and reduced admin time by 60% using AI automation.",
      category: "case-studies",
      author: "Fardeenul Islam",
      date: "March 12, 2024",
      readTime: "6 min read",
      featured: false,
      image: "/dashboard.jpg"
    },
    {
      id: 3,
      title: "5 Workflow Automation Strategies That Actually Work",
      excerpt: "Practical guide to implementing workflow automation in your business. Learn the strategies that deliver real ROI and measurable results.",
      category: "automation",
      author: "Md Maruf Uzzaman",
      date: "March 10, 2024",
      readTime: "10 min read",
      featured: false,
      image: "/dashboard.jpg"
    },
    {
      id: 4,
      title: "AI for Law Firms: Automating Client Intake and Case Management",
      excerpt: "Comprehensive guide for law firms looking to implement AI solutions. From client intake automation to case management optimization.",
      category: "industry-guides",
      author: "Fardeenul Islam",
      date: "March 8, 2024",
      readTime: "12 min read",
      featured: false,
      image: "/dashboard.jpg"
    },
    {
      id: 5,
      title: "Building Business Intelligence Dashboards That Drive Decisions",
      excerpt: "Learn how to create actionable business intelligence dashboards that provide real insights and drive strategic decision-making.",
      category: "business-intelligence",
      author: "Md Maruf Uzzaman",
      date: "March 5, 2024",
      readTime: "9 min read",
      featured: false,
      image: "/dashboard.jpg"
    },
    {
      id: 6,
      title: "The ROI of AI Chatbots: Measuring Success Beyond Cost Savings",
      excerpt: "Beyond cost savings: How to measure the true ROI of AI chatbots including customer satisfaction, lead generation, and operational efficiency.",
      category: "automation",
      author: "Fardeenul Islam",
      date: "March 3, 2024",
      readTime: "7 min read",
      featured: false,
      image: "/dashboard.jpg"
    },
    {
      id: 7,
      title: "AI Automation for Healthcare: Improving Patient Care and Efficiency",
      excerpt: "How healthcare providers are using AI automation to improve patient care, reduce administrative burden, and enhance operational efficiency.",
      category: "industry-guides",
      author: "Md Maruf Uzzaman",
      date: "March 1, 2024",
      readTime: "11 min read",
      featured: false,
      image: "/dashboard.jpg"
    },
    {
      id: 8,
      title: "Predictive Analytics: The Next Frontier in Business Intelligence",
      excerpt: "Explore how predictive analytics is revolutionizing business intelligence and enabling proactive decision-making across industries.",
      category: "business-intelligence",
      author: "Fardeenul Islam",
      date: "February 28, 2024",
      readTime: "8 min read",
      featured: false,
      image: "/dashboard.jpg"
    },
    {
      id: 9,
      title: "From Manual to Automated: A Salon's Digital Transformation Journey",
      excerpt: "Case study: How a local salon chain transformed their operations using AI automation, resulting in 25% revenue increase and 70% time savings.",
      category: "case-studies",
      author: "Md Maruf Uzzaman",
      date: "February 25, 2024",
      readTime: "6 min read",
      featured: false,
      image: "/dashboard.jpg"
    },
    {
      id: 10,
      title: "The Ethics of AI in Business: Building Trust and Transparency",
      excerpt: "Understanding the ethical considerations of AI implementation in business and how to build trust with customers and stakeholders.",
      category: "ai-trends",
      author: "Fardeenul Islam",
      date: "February 22, 2024",
      readTime: "9 min read",
      featured: false,
      image: "/dashboard.jpg"
    },
    {
      id: 11,
      title: "Automation vs. Human Touch: Finding the Right Balance",
      excerpt: "How to strike the perfect balance between automation and human interaction to deliver exceptional customer experiences.",
      category: "automation",
      author: "Md Maruf Uzzaman",
      date: "February 20, 2024",
      readTime: "7 min read",
      featured: false,
      image: "/dashboard.jpg"
    },
    {
      id: 12,
      title: "The Evolution of AI: From Hype to Practical Business Solutions",
      excerpt: "How AI has evolved from hype to practical business solutions, and what this means for small and medium enterprises.",
      category: "ai-trends",
      author: "Fardeenul Islam",
      date: "February 18, 2024",
      readTime: "10 min read",
      featured: false,
      image: "/dashboard.jpg"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-[#0a2a3a] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            AI Insights & Industry Trends
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights on AI automation, business intelligence, 
            and digital transformation strategies for modern businesses.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-3 pl-12 bg-[#1a1a1a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 border-b border-[#333]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-black'
                    : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#333]'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500 text-black text-sm font-semibold rounded-full">
                      Featured
                    </span>
                    <span className="text-gray-400 text-sm">{featuredPost.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <FaUser />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <a href={`/blog/${featuredPost.id}`} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold">
                    Read Full Article
                    <FaArrowRight />
                  </a>
                </div>
                <div 
                  className="relative h-full min-h-[300px] flex items-center justify-center overflow-hidden"
                  style={{
                    backgroundImage: 'url(/future-trend-bg.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20" style={{ zIndex: 1 }}></div>
                  <div className="relative z-10 text-center text-white" style={{ zIndex: 2 }}>
                    <div className="text-lg font-semibold mb-2">AI Technology</div>
                    <div className="text-sm opacity-80">Future of Automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <div className="text-center text-white">
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaTag className="text-cyan-400 text-sm" />
                    <span className="text-cyan-400 text-sm font-semibold capitalize">
                      {post.category.replace('-', ' ')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <FaUser />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendar />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <a href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                    Read More
                    <FaArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with AI Insights</h2>
          <p className="text-lg text-gray-300 mb-8">
            Get the latest AI automation trends, industry insights, and practical tips delivered to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              disabled={subscriptionStatus === 'loading'}
            />
            <button 
              type="submit"
              disabled={subscriptionStatus === 'loading' || !email.trim()}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-bold rounded-lg transition-all duration-200"
            >
              {subscriptionStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {subscriptionMessage && (
            <div className={`mt-4 text-sm ${subscriptionStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {subscriptionMessage}
            </div>
          )}
          <p className="text-sm text-gray-400 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Popular Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.slice(1).map((category) => (
              <div key={category.id} className="bg-[#1a1a1a] rounded-xl p-6 text-center hover:bg-[#333] transition-all duration-200 cursor-pointer">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{category.count}</div>
                <div className="text-white font-semibold">{category.name}</div>
                <div className="text-gray-400 text-sm">articles</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}