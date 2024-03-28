import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React from 'react'
import { useRef } from "react";

export const Experience = () => {
  const boxRef = useRef(null);

  useFrame(({clock}, delta)=>{
    //boxRef.current.rotation.x += 1 * delta;
    boxRef.current.rotation.x += (Math.PI/2) * delta;
    boxRef.current.rotation.y += Math.PI * delta;
    boxRef.current.position.y = Math.cos(clock.getElapsedTime());
    boxRef.current.position.x += 0.5 * delta;
  })

  return (
    <>
        <ambientLight intensity={2} />
        <directionalLight position={[10,10,5]} intensity={2}/>
        <mesh ref={boxRef}>
            <boxGeometry args={[1,1,1]}/> 
            <meshStandardMaterial color={"purple"}/>
        </mesh>
        <OrbitControls />
    </>
  )
}
