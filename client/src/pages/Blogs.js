import React, { useState } from 'react';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoverIndex, setHoverIndex] = useState(null);

  const blogs = [
    { title: 'The Science of Stretching: Benefits and Techniques for Optimal Performance', link: '/blog1', content: 'Stretching an overlooked therapy' },
    { title: 'Building a Balanced Diet: A Comprehensive Guide to Macronutrients and Micronutrients', link: '/blog2', content: 'Every meal is an oppurtunity to nurture your body!' },
    { title: 'Top 10 Cardio Workouts for a Healthy Heart, Youthfulness & Improved Performance', link: '/blog3', content: 'Your heart is never gets a break! One unbelievable muscle!' },
    { title: 'The Art of Meal Prepping: How to Plan, Cook, and Store Meals for a Healthier Lifestyle', link: '/blog4', content: 'If you already have a healthy meal ready you wont eat junk!!' },
    { title: 'The Power of Protein: Best Sources, Benefits, and How Much You Need', link: '/blog5', content: 'Should you be concerned about your personal protein intake?' },
    { title: 'The Importance of Healing: 6 Key Components to Achieve Optimal Wellness', link: '/blog6', content: 'Rest is just as important as being active!' },
    { title: 'Secrets to a Successful Weight Loss Program: Tips and Tricks for Reaching Your Imagined Physique', link: '/blog7', content: 'Never Worry about your weight again!' },
    { title: 'The Mental and Physical Benefits of Outdoor Activities', link: '/blog8', content: 'Want another reason to never skip a workout?!' },
    { title: 'The Road to Recovery: Handling Injuries Physically and Mentally', link: '/blog9', content: 'Injuries are blessings in disguise' },
    { title: 'The Power of Commitment: Turning Small Victories into Great Success', link: '/blog10', content: 'Commitment a promise to yourself and you passions' },
    { title: 'The Power of Words in Achieving a Balanced Lifestyle', link: '/blog11', content: 'Words are real Magic' },

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
        <a
          key={index}
          href={blog.link}
          style={{
            textDecoration: 'none', // remove default link styling
            color: 'inherit', // inherit color from parent
            ...styles.blogContainer,
            ...(hoverIndex === index && styles.hoverBlogContainer),
          }}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <div>
            <h3 style={{
              ...styles.blogTitle,
              ...(hoverIndex === index && styles.hoverBlogTitle)
            }}>
              {blog.title}
            </h3>
            <p>{blog.content}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Blogs;