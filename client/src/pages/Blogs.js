import React, { useState } from 'react';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoverIndex, setHoverIndex] = useState(null);

  const blogs = [
    { title: 'The Science of Stretching: Benefits and Techniques for Optimal Performance', link: '/blog1', content: 'Stretching an overlooked therapy' },
    { title: 'The Mental and Physical Benefits of Outdoor Activities', link: '/blog2', content: 'A breath of fresh air can really keep you going!' },
    { title: 'Top 10 Cardio Workouts for a Healthy Heart, Youthfulness & Improved Performance', link: '/blog3', content: 'Your heart is never gets a break! One unbelievable muscle!' },
    { title: 'The Art of Meal Prepping: How to Plan, Cook, and Store Meals for a Healthier Lifestyle', link: '/blog4', content: 'If you already have a healthy meal ready you wont eat junk!!' },
    // Add more blogs here...
  ];

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styles = {
    page: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#333',
      padding: '20px',
    },
    blogContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '60%',
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // slightly transparent white
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    hoverBlogContainer: {
      borderColor: '#007bff', 
      borderWidth: '2px',
    },
    blogTitle: {
      textDecoration: 'none',
      color: '#333',
    },
    hoverBlogTitle: {
      color: '#007bff', // darker blue when hovered
    },
    searchBox: {
      marginBottom: '20px',
      padding: '10px',
      fontSize: '16px',
      width: '60%',
    },
  };

  return (
    <div style={styles.page}>
      <h2>Our Blogs</h2>

      <input
        style={styles.searchBox}
        type="text"
        placeholder="Search..."
        onChange={event => setSearchTerm(event.target.value)}
      />

      {filteredBlogs.map((blog, index) => (
        <div
          key={index}
          style={{
            ...styles.blogContainer,
            ...(hoverIndex === index && styles.hoverBlogContainer)
          }}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <h3>
            <a
              href={blog.link}
              style={{
                ...styles.blogTitle,
                ...(hoverIndex === index && styles.hoverBlogTitle)
              }}
            >
              {blog.title}
            </a>
          </h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
