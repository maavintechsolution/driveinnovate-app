import React from 'react';

const icons = [
  // Car
  <svg width="40" height="40" viewBox="0 0 24 24" key="car"><rect x="2" y="10" width="20" height="6" rx="3" fill="#696cff"/><circle cx="6" cy="18" r="4" fill="#444"/><circle cx="18" cy="18" r="4" fill="#444"/></svg>,
  // Truck
  <svg width="40" height="40" viewBox="0 0 24 24" key="truck"><rect x="2" y="12" width="12" height="6" rx="2" fill="#71dd37"/><rect x="14" y="14" width="8" height="4" rx="1" fill="#ffab00"/><circle cx="6" cy="20" r="3" fill="#444"/><circle cx="18" cy="20" r="3" fill="#444"/></svg>,
  // GPS Signal
  <svg width="40" height="40" viewBox="0 0 24 24" key="gps"><circle cx="12" cy="12" r="4" fill="#03c3ec"/><circle cx="12" cy="12" r="8" fill="none" stroke="#03c3ec" strokeWidth="2"/><circle cx="12" cy="12" r="12" fill="none" stroke="#03c3ec" strokeWidth="1"/></svg>,
  // Fuel
  <svg width="40" height="40" viewBox="0 0 24 24" key="fuel"><rect x="8" y="4" width="8" height="16" rx="4" fill="#ffab00"/><rect x="10" y="8" width="4" height="8" fill="#fff"/></svg>,
  // Road
  <svg width="40" height="40" viewBox="0 0 24 24" key="road"><rect x="2" y="16" width="20" height="4" fill="#222"/><rect x="10" y="6" width="4" height="10" fill="#fff"/></svg>,
  // Dashcam
  <svg width="40" height="40" viewBox="0 0 24 24" key="dashcam"><circle cx="12" cy="12" r="10" fill="#ff3e1d"/><rect x="8" y="8" width="8" height="8" fill="#fff"/></svg>,
  // Sports Car
  <svg width="40" height="40" viewBox="0 0 24 24" key="sportscar"><rect x="3" y="12" width="18" height="5" rx="2" fill="#e83e8c"/><circle cx="7" cy="19" r="3" fill="#444"/><circle cx="17" cy="19" r="3" fill="#444"/></svg>,
  // Delivery Van
  <svg width="40" height="40" viewBox="0 0 24 24" key="van"><rect x="2" y="13" width="14" height="6" rx="2" fill="#8592a3"/><rect x="16" y="15" width="6" height="4" rx="1" fill="#03c3ec"/><circle cx="6" cy="21" r="3" fill="#444"/><circle cx="18" cy="21" r="3" fill="#444"/></svg>,
  // Cell Tower
  <svg width="40" height="40" viewBox="0 0 24 24" key="tower"><rect x="11" y="8" width="2" height="8" fill="#8592a3"/><polygon points="12,2 14,8 10,8" fill="#03c3ec"/><circle cx="12" cy="18" r="2" fill="#71dd37"/><path d="M6,22 Q12,16 18,22" stroke="#696cff" strokeWidth="2" fill="none"/></svg>,
  // GPS Satellite
  <svg width="40" height="40" viewBox="0 0 24 24" key="satellite"><rect x="10" y="10" width="4" height="4" fill="#ffab00"/><rect x="6" y="6" width="2" height="2" fill="#03c3ec"/><rect x="16" y="16" width="2" height="2" fill="#03c3ec"/><rect x="6" y="16" width="2" height="2" fill="#71dd37"/><rect x="16" y="6" width="2" height="2" fill="#71dd37"/></svg>
];

const iconCount = 50;
const randomPositions = Array.from({ length: iconCount }).map(() => ({
  top: Math.random() * 80 + 5, // vh
  left: Math.random() * 90 + 2 // vw
}));

const PatternBackground = () => (
  <div className="pattern-bg">
    {Array.from({ length: iconCount }).map((_, i) => {
      const icon = icons[i % icons.length];
      const pos = randomPositions[i];
      return (
        <div
          key={i}
          className="icon-dot"
          style={{
            position: 'absolute',
            top: `${pos.top}vh`,
            left: `${pos.left}vw`,
            animation: 'iconDrift 10s ease-in-out infinite',
            animationDelay: `${(i % 10) * 0.3}s`,
            width: 40,
            height: 40,
            opacity: 0.6,
            filter: 'none',
          }}
        >
          {icon}
        </div>
      );
    })}
  </div>
);

export default PatternBackground;
