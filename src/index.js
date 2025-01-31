import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Experience'
import { Experience } from './Experience';
import { Canvas } from '@react-three/fiber';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Canvas
    camera={
      { 
        position: [2,0,6]
      }
    }
  >

      <Experience/>

  </Canvas>
);

