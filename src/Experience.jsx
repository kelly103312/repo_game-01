import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { useRef } from "react";
import { World } from './World/World';

import { Ligths } from './lights/Ligths';
import { EnviromentMap } from './enviroments/EnviromentMap';
import { EnviromentHdrs } from './enviroments/EnviromentHdrs';
import { EnviromentSky } from './enviroments/EnviromentSky';

export const Experience = () => {
  const boxRef = useRef(null);

  return (
    <>
        <Ligths />
        <OrbitControls />
        <EnviromentSky />
        <World />
    </>
  )
}
