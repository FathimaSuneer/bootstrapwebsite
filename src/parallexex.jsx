import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css'; // Assuming you have a separate CSS file for styling
import Headernav from './headernav';
import Productitems from './productitems';  

const ParallaxComponent = () => {
  return (
    <Parallax pages={3} style={{ top: '0', left: '0' }}>
      {/* First Layer */}
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{ backgroundImage: 'url(https://example.com/first-image.jpg)', backgroundSize: 'cover' }}
      >
        <Headernav/>
        <div className="layer-content">
          <h1>Welcome to Parallax</h1>
         
        </div>
      </ParallaxLayer>

      {/* Second Layer */}
      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{ backgroundImage: 'url(https://example.com/second-image.jpg)', backgroundSize: 'cover' }}
      >
        <div className="layer-content">
          <h2>Scroll to Discover More</h2>
         
        </div>
      </ParallaxLayer>

      {/* Third Layer */}
      <ParallaxLayer
        offset={2}
        speed={0.5}
        style={{ backgroundImage: 'url(https://example.com/third-image.jpg)', backgroundSize: 'cover' }}
      >
        <div className="layer-content">
          <h2>Enjoy the Experience</h2>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxComponent;