import { BakeShadows,  OrbitControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import { useRef } from "react";
import { World } from './World/World';

import { Ligths } from './lights/Ligths';
import { EnviromentMap } from './enviroments/EnviromentMap';
import { EnviromentHdrs } from './enviroments/EnviromentHdrs';
import { EnviromentSky } from './enviroments/EnviromentSky';
import { Perf } from 'r3f-perf';
import { Box } from './figures/Box';
import {useKeyboard} from './Controls/useKeyboard'
import { Sphere } from './figures/Sphere';
import { Girl } from './Avatars/Girl';
import { WelcomeText } from './World/WelcomeText';

export const Experience = () => {
  const boxRef = useRef(null);
  const keyMap = useKeyboard()

  return (
    <>
        {/* <Perf position="top-left"/>
        
         */}
         
        <OrbitControls target={[0,1.5,0]}/>
        <Suspense fallback={null}>
          <Ligths />
          <BakeShadows />
          <EnviromentSky />
          <World />
          <Girl>
            <WelcomeText position={[0, 1.6, -92]} />

          </Girl>
          {/* <Box position={[0, 0.5, 0]} keyMap={keyMap}/>
          <Box position={[1, 1, 1]} keyMap={keyMap}/> */}
          

        </Suspense>
    </>
  )
}
