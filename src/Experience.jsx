import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { useRef } from "react";
import { World } from './World/World';
import { Color } from 'three';

export const Experience = () => {
  const boxRef = useRef(null);

  return (
    <>
        <ambientLight intensity={2} />
        <directionalLight 
            castShadow={true}
            color={new Color("#8F00FF")}
            position={[10,10,5]} 
            intensity={2}/>
        <OrbitControls />
        <World />
    </>
  )
}
