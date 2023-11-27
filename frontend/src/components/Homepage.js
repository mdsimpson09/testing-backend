import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>

      <div className="homepage-content">
        <section className="about-section">
          <h2>About Gamer Date</h2>
          <p>
            Welcome to Gamer Date, where gamers can connect, play, and build
            meaningful relationships.
          </p>
        </section>

        <section className="how-it-works-section">
          <h2>How It Works</h2>
          <p>
            Discover the world of Gamer Date by following these simple steps.
          </p>
          {/* Add more content and visuals here */}
        </section>
      </div>
    </div>
  );
};

export default Homepage;