'use client';
import { useState } from "react";
import { FaTag, FaUser, FaCalendar, FaClock, FaArrowRight } from "react-icons/fa";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 4 },
    { id: 'case-studies', name: 'Case Studies', count: 1 },
    { id: 'workflow', name: 'Workflow Automation', count: 1 },
    { id: 'chatbots', name: 'AI Chatbots', count: 1 },
    { id: 'voice', name: 'Voice Agents', count: 1 }
  ];

  const blogPosts = [
    {
      id: 2,
      title: "How Nova Scotia Home Services Businesses Are Using AI to Boost Revenue",
      excerpt: "Real-world case study: How local HVAC, Plumbing & Electrical businesses in Nova Scotia increased booked jobs by 40% and reduced admin time by 60% using AI voice agents and workflow automation.",
      category: "case-studies",
      author: "Auralix Team",
      date: "March 2024",
      readTime: "6 min read",
      featured: true,
      image: "/dashboard.jpg"
    },
    {
      id: 3,
      title: "Workflow Automation: Free Up Your Team from Repetitive Tasks",
      excerpt: "Learn how to automate review requests, follow-ups, order updates, and payment reminders. Save 10-15 hours per week and focus on what matters.",
      category: "workflow",
      author: "Auralix Team",
      date: "March 2024",
      readTime: "8 min read",
      featured: false,
      image: "/dashboard.jpg"
    },
    {
      id: 7,
      title: "AI Chatbots: Capture Leads 24/7 Across All Platforms",
      excerpt: "Discover how AI chatbots work across your website, Instagram, Facebook, and WhatsApp to capture leads, answer questions, and book appointments automatically.",
      category: "chatbots",
      author: "Auralix Team",
      date: "March 2024",
      readTime: "7 min read",
      featured: false,
      image: "/dashboard.jpg"
    },
    {
      id: 10,
      title: "Voice AI Agents: Answer Calls Like a Human Receptionist",
      excerpt: "How voice AI assistants are transforming customer service. From taking orders to providing wait times, voice agents work 24/7 without staff.",
      category: "voice",
      author: "Auralix Team",
      date: "March 2024",
      readTime: "9 min read",
      featured: false,
      image: "/dashboard.jpg"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white pb-20">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center py-12 sm:py-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Resources & Insights</h1>
        <p className="text-lg sm:text-xl text-cyan-100 mb-8">Learn how AI automation can transform your business</p>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto mb-12 px-4">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                selectedCategory === cat.id 
                  ? 'bg-cyan-500 text-black' 
                  : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#333]'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === 'all' && featuredPost && (
        <section className="max-w-6xl mx-auto mb-16 px-4">
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0a2a3a] rounded-2xl overflow-hidden border border-cyan-500 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 sm:p-12">
              <div className="flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-cyan-500 text-black text-xs font-bold rounded-full mb-4 w-fit">
                  Featured
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                <p className="text-gray-300 mb-6 text-base sm:text-lg">{featuredPost.excerpt}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
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

                <a 
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-lg transition-all duration-200 w-fit"
                >
                  Read More
                  <FaArrowRight />
                </a>
              </div>
              
              <div className="bg-[#0a0a0a] rounded-xl flex items-center justify-center p-8">
                <div className="text-6xl sm:text-8xl">📊</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.filter(post => !post.featured || selectedCategory !== 'all').map(post => (
            <div key={post.id} className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#333] hover:border-cyan-500 transition-all duration-200 group">
              <div className="bg-[#0a2a3a] h-48 flex items-center justify-center">
                <div className="text-5xl">
                  {post.category === 'case-studies' && '🏆'}
                  {post.category === 'workflow' && '⚙️'}
                  {post.category === 'chatbots' && '💬'}
                  {post.category === 'voice' && '📞'}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaTag className="text-cyan-400 text-sm" />
                  <span className="text-cyan-400 text-xs font-semibold uppercase">{categories.find(c => c.id === post.category)?.name}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <FaUser />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <a 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
                >
                  Read More
                  <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center px-4 mt-20">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 sm:p-12 border border-cyan-500">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 text-base sm:text-lg">Book a free consultation to learn how our AI solutions can help your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/trial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200"
            >
              Book Free Consultation
            </a>
            <a href="/solutions" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200">
              View Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
