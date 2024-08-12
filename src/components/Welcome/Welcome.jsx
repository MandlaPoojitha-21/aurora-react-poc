import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to the Aurora Community!</h1>
      <p>
        We're thrilled to have you here. Explore, connect, and enjoy your time
        with us!
      </p>
      <a href="#explore" className="explore-button">
        Explore Now
      </a>
    </div>
  );
};

export default Welcome;
