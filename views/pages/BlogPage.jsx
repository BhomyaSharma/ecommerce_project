// src/pages/BlogPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPage = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Top Summer Fashion Trends 2025',
      date: 'April 05, 2025',
      excerpt: 'Discover the latest summer fashion trends for 2025, featuring vibrant colors and lightweight fabrics.',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 2,
    title: 'How to Style Your Vacation Vibe Top',
      date: 'April 03, 2025',
      excerpt: 'Learn how to pair our Tropical Bloom top with accessories for the perfect vacation look.',
      image: 'https://images.unsplash.com/photo-1503342217505-b0f9f5e9d0d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 3,
      title: 'Sustainable Fashion Tips',
      date: 'April 01, 2025',
      excerpt: 'Explore eco-friendly fashion choices with our latest sustainable clothing line.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', fontFamily: "'Lora', serif" }}>
      <Header />
      <div style={{ width: '100%', padding: '20px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '40px', color: '#333' }}>
          Our Blog
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {blogPosts.map((post) => (
            <div
              key={post.id}
              style={{
                border: '1px solid #eee',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s',
                backgroundColor: '#fff',
              }}
              onMouseEnter={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)')}
              onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
            >
              <img
                src={post.image}
                alt={post.title}
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px', color: '#8B4513' }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                  {post.date}
                </p>
                <p style={{ fontSize: '16px', color: '#333', marginBottom: '15px' }}>
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  style={{
                    display: 'inline-block',
                    padding: '8px 15px',
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#45a049')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#4CAF50')}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;