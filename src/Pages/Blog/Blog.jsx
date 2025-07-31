import React from 'react';
import ScrollProgressBar from './Scroll';

const blogs = [
  {
    title: "Top 5 Bridal Makeup Looks in 2025",
    image: "https://i.ibb.co/0VYHGpn7/images.jpg",
    excerpt: "Explore trending bridal makeup styles with glowing skin, soft glam eyes, and nude lips...",
    author: "Tithi Glam School",
    date: "July 25, 2025"
  },
  {
    title: "How to Choose the Perfect Foundation Shade",
    image: "https://i.ibb.co/Kx8H82Qj/download.jpg ",
    excerpt: "Struggling to match your foundation? Here’s how to find your perfect tone like a pro...",
    author: "Makeup by Suraiya",
    date: "July 20, 2025"
  },
  {
    title: "Everyday Natural Look in 10 Minutes",
    image: "https://i.ibb.co/sptnb7TG/images.jpg",
    excerpt: "Learn this quick and natural everyday makeup routine for school, work, or a coffee date...",
    author: "Beauty School Daily",
    date: "July 15, 2025"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-rose-50 py-10 px-4 relative">
        <ScrollProgressBar></ScrollProgressBar>
      <h1 className="text-4xl font-bold text-center text-purple-300 mb-10">💄 Beauty Blog & Tips</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transition transform hover:scale-105"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-rose-700 mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
              <div className="text-xs text-gray-400">
                ✍️ {blog.author} • 📅 {blog.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
