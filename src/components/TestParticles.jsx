import React from 'react';
import Particles from "react-tsparticles";

export default function TestParticles() {
  return (
    <div style={{ position: 'relative', height: '400px', width: '100%', backgroundColor: '#0f2027' }}>
      <Particles
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            color: { value: "#00bfff" },
            links: { enable: true, color: "#00bfff", distance: 120 },
          },
        }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    </div>
  );
}
