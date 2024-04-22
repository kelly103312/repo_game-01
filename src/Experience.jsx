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
import { Girl } from './Charaters/Avatars/Girl';
import { WelcomeText } from './World/WelcomeText';
import { EvilBoyCircle } from './Charaters/EvilsBoys/EvilBoyCircle';
import { EvilBoyDiagonal } from './Charaters/EvilsBoys/EvilBoyDiagonal';

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
          <EvilBoyCircle position={[0, 0.5, -6]} ></EvilBoyCircle>
          <EvilBoyDiagonal position={[0, 0.5, -15]} ></EvilBoyDiagonal>

          {/* 
          <Box position={[0, 0.5, 0]} keyMap={keyMap}/>
          <Box position={[1, 1, 1]} keyMap={keyMap}/>
          <Sphere /> */}
          <Girl>
            <WelcomeText position={[0, 1.6, -92]} />

          </Girl>
          

        </Suspense>
    </>
  )
}
