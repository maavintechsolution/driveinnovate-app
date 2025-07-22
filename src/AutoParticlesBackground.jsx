import React from 'react';
import Particles from 'react-tsparticles';

const AutoParticlesBackground = () => (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', background: '#f5f5f9' }}>
    <Particles
      id="autoParticles"
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 40 },
          color: { value: '#696cff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 10 },
          move: { enable: true, speed: 2, direction: 'right', outModes: { default: 'out' } },
        },
        detectRetina: true,
      }}
      style={{ width: '100vw', height: '100vh' }}
    />
  </div>
);

export default AutoParticlesBackground;
