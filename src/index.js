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
    <KeyboardControls
              map={[
                { name: "forward", keys: ["ArrowUp", "w", "W"] },
                { name: "backward", keys: ["ArrowDown", "s", "S"] },
                { name: "left", keys: ["ArrowLeft", "a", "A"] },
                { name: "right", keys: ["ArrowRight", "d", "D"] },
                { name: "jump", keys: ["Space"] },
              ]}>
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

    </KeyboardControls>
    <Loader />
  </>
);

