import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React from 'react'
import { useRef } from "react";

export const Experience = () => {
  const boxRef = useRef(null);
  
  useFrame((state, delta)=>{
    boxRef.current.rotation.x += 1 * delta;
  })

  return (
    <>
        <ambientLight intensity={2} />
        <directionalLight position={[10,10,5]} intensity={2}/>
        <mesh ref={boxRef}>
            <boxGeometry args={[2,2,2]}/> 
            <meshStandardMaterial color={"purple"}/>
        </mesh>
        <OrbitControls />
    </>
  )
}
