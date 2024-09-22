/*import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';  // Import the CSS for styling

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="background-animation"></div>
      <div className="content">
        <h1>Welcome to Our ADHD VR Therapy Platform</h1>
        <p>
          Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized by symptoms of inattention, hyperactivity, and impulsivity. 
          Our project aims to develop and evaluate a virtual reality (VR) therapeutic tool designed to improve attention and reduce hyperactivity in children aged 6-11 with ADHD.
        </p>
        <p>
          The primary goal is to create an engaging and interactive VR experience that effectively addresses the core symptoms of ADHD.
        </p>
        <p>
          Our objectives include:
          <ul>
            <li>Designing and developing a VR environment tailored to the cognitive and developmental needs of children with ADHD.</li>
            <li>Incorporating a variety of therapeutic activities, such as games, puzzles, and cognitive exercises, to target ADHD symptoms.</li>
            <li>Implementing a robust progress tracking system to monitor treatment efficacy.</li>
            <li>Disseminating research findings to contribute to the field of ADHD treatment.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Homepage;
*/

import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
         
          <h1>
            The Virtual Reality therapy platform for{' '}
            <span className="highlight">healthcare</span>
          </h1>
          <p>
            With the power of virtual reality, XRHealth provides innovative
            solutions for healthcare professionals and patients, revolutionizing
            the way therapy is delivered and experienced.
          </p>
          <div className="hero-buttons">
            <Link to="/provider" className="button provider-btn">
              I'm a provider
            </Link>
            <Link to="/patient" className="button patient-btn">
              I'm a patient
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src=".\public\images\homepic.png" alt="homeImg" />
        </div>
      </div>

      {/* Paragraph about the platform */}
      <section className="intro-section">
        <p>
          Welcome to our Virtual Health Care Center, where we leverage cutting-edge virtual reality
          technology to deliver unparalleled therapeutic experiences. Our
          platform offers tailored solutions for a range of health needs—mental
          health, cognitive training, and physical rehabilitation. Whether you
          are a healthcare provider or a patient, we provide a seamless and
          immersive approach to therapy that ensures optimal outcomes.
        </p>
      </section>

      <section className="offer-section">
        <h2>What we offer</h2>
        <div className="offer-cards">
          <div className="offer-card">
            
            <h3>eXperience Space</h3>
            <p>Patient-led relaxation and mindfulness experiences.</p>
            <Link to="/experience" className="learn-more">
              Learn more
            </Link>
          </div>
          <div className="offer-card">
            
            <h3>Mental Health Space</h3>
            <p>Our VR platform for mental health professionals.</p>
            <Link to="/mental-health" className="learn-more">
              Learn more
            </Link>
          </div>
          <div className="offer-card">
            
            /
            <h3>Physical & Cognitive Space</h3>
            <p>Our VR platform for physical and occupational therapists.</p>
            <Link to="/physical-cognitive" className="learn-more">
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
