import { BakeShadows, Loader, OrbitControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import { useRef } from "react";
import { World } from './World/World';

import { Ligths } from './lights/Ligths';
import { EnviromentMap } from './enviroments/EnviromentMap';
import { EnviromentHdrs } from './enviroments/EnviromentHdrs';
import { EnviromentSky } from './enviroments/EnviromentSky';
import { Perf } from 'r3f-perf';

export const Experience = () => {
  const boxRef = useRef(null);

  return (
    <>
        <Perf position="top-left"/>
        <OrbitControls />
        <Suspense fallback={null}>
          <Ligths />
          <BakeShadows />
          <EnviromentSky />
          <World />
        </Suspense>
    </>
  )
}
