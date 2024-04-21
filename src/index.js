import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Experience'
import { Experience } from './Experience';
import { Canvas } from '@react-three/fiber';
import { KeyboardControls, Loader } from '@react-three/drei';
import { Pane } from './layout/Pane';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      {/* <Pane/> */}
      <Canvas
        shadows={true}
        camera={
           { 
             position: [0,1.5,0],
             rotation: [0,0,0]
           }
        }
        
      >
          <Experience/>

      </Canvas>

    {/* </KeyboardControls> */}
    <Loader />
  </>
);

