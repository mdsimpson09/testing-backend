import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Add your styles in a separate CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Homepage</Link>
      <Link to="/login">Login</Link>
      <Link to="/meet">Meet</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/community-guidelines">Community Guidelines</Link>
    </div>
  );
};

const Homepage = () => {
  return (
    <div>
      <Navbar />

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