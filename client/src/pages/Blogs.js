import React, { useState } from 'react';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // An array of blog objects. Each blog has a title, link and content
  const blogs = [
    { title: 'The Science of Stretching: Benefits and Techniques for Optimal Performance', link: '/blog1', content: 'Stretching an overlooked therapy' },
    { title: 'Blog Title 2', link: '/blog2', content: 'Content of blog 2' },
    // Add more blogs here...
  ];

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Our Blogs</h2>
      
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={event => setSearchTerm(event.target.value)} 
      />

      {filteredBlogs.map((blog, index) => (
        <div key={index}>
          <h3><a href={blog.link}>{blog.title}</a></h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
