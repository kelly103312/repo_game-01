import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React from 'react'
import { useRef } from "react";

export const Experience = () => {
  const boxRef = useRef(null);

  useFrame(({clock},delta)=>{
        boxRef.current.rotation.y += delta *0.1;     
  })
  
  return (
    <>
        <ambientLight intensity={2} />
        <directionalLight position={[10,10,5]} intensity={2}/>
        <mesh ref={boxRef} 
              position={[0,0,0]} 
              rotation={[0, Math.PI/2 , 0]}
              scale={[10,1,10]}>

            <boxGeometry args={[1,1,1]}/> 
            <meshStandardMaterial color={"purple"}/>
        </mesh>
        <OrbitControls />
    </>
  )
}
