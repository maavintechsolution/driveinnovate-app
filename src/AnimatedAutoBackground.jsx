import React from 'react';
import './AnimatedAutoBackground.css';

const AnimatedAutoBackground = () => (
  <div className="auto-bg-svg">
    <svg width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
      <rect width="1440" height="400" fill="#f5f5f9" />
      {/* Road */}
      <rect y="320" width="1440" height="40" fill="#d1d5db" />
      {/* Moving car group */}
      <g>
        <animateTransform attributeName="transform" type="translate" from="-200 0" to="1440 0" dur="8s" repeatCount="indefinite" />
        {/* Car body */}
        <rect x="0" y="300" width="120" height="40" rx="10" fill="#696cff" />
        {/* Car windows */}
        <rect x="20" y="310" width="30" height="20" rx="4" fill="#fff" />
        <rect x="60" y="310" width="30" height="20" rx="4" fill="#fff" />
        {/* Wheels */}
        <circle cx="30" cy="340" r="10" fill="#222" />
        <circle cx="90" cy="340" r="10" fill="#222" />
        <animateTransform attributeName="transform" type="rotate" from="0 30 340" to="360 30 340" dur="1s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="rotate" from="0 90 340" to="360 90 340" dur="1s" repeatCount="indefinite" />
      </g>
      {/* Add more cars if desired */}
    </svg>
  </div>
);

export default AnimatedAutoBackground;
