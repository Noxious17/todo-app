import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-image text-light text-center py-3 mt-auto">
      <div className>
        <p className="mb-0 py-1">
          &copy; {new Date().getFullYear()} My To-Do List. All Rights Reserved.
        </p>
        <p className="small">
          <a href="/privacy" className="text-decoration-none text-dark">Privacy Policy</a> |
          <a href="/terms" className="text-decoration-none text-dark ms-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

