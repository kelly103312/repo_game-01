import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React from 'react'
import { useRef } from "react";
import { World } from './World/World';

export const Experience = () => {
  const boxRef = useRef(null);

  return (
    <>
        <ambientLight intensity={1} />
        <directionalLight position={[10,10,5]} intensity={2}/>
        <OrbitControls />
        <World />
    </>
  )
}
