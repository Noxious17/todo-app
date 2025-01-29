import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar(props) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.Title}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
              
            </ul>
            <div className="d-flex align-items-center">
              <div className="text-light me-3">
                <strong>
                  {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
                </strong>
              </div>
              <button 
                className="btn btn-outline-light btn-sm" 
                onClick={toggleAbout}
              >
                {showAbout ? "Hide About Us" : "Show About Us"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showAbout && (
        <div className="about-us-section bg-light text-dark p-4">
          <div className="container">
            <h2>About Us</h2>
            <p>
              Welcome to My To-Do List! Our goal is to help you organize your tasks
              and stay productive. Whether it's work, personal projects, or daily chores, 
              our tool is here to simplify your life.
              Make By Ansh Jyotishi.
              Hope you like this its a basic or my First React-js project
            </p>
          </div>
        </div>
      )}
    </>
  );
}
