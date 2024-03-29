import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Experience'
import { Experience } from './Experience';
import { Canvas } from '@react-three/fiber';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Canvas
    shadows={true}
    camera={
      { 
        position: [1,1,5]
      }
    }
    
  >
      <Experience/>

  </Canvas>
);

