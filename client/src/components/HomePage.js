import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Bodybuilding Blog!</h1>
      <p>
        This is a place where I share my thoughts, experiences, and advice about bodybuilding and living a healthy lifestyle.
      </p>
      <Link to="/blog">Check out my latest posts!</Link>
    </div>
  );
}

export default HomePage;
