import React from 'react';
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
