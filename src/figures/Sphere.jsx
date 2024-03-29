import React from 'react'
import { useTexture } from '@react-three/drei'
import { useRef } from "react";
import { useFrame } from '@react-three/fiber';

export const Sphere = () => {
    const PATH = useTexture('/assets/textures/floor/coast_sand_01_disp_1k.png');
    const boxRef = useRef(null);

    useFrame(({clock}, delta)=>{
      boxRef.current.rotation.x += (Math.PI/2) * delta;
      boxRef.current.rotation.y += Math.PI * delta;

      boxRef.current.position.x = -4 * Math.cos(clock.getElapsedTime())*-1;
      boxRef.current.position.y = 0.7;
      //boxRef.current.position.x = Math.cos(clock.getElapsedTime())/4;
      boxRef.current.position.z = Math.sin(clock.getElapsedTime())*-4;
    })
  
  return (
    <>
        <mesh ref={boxRef} scale={[0.5,0.5,0.5]}>
            <sphereGeometry args={[1, 16, 16]} />   
            <meshStandardMaterial map={PATH} />
        </mesh>
    </>
  )
}
