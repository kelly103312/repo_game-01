import React from 'react'
import { useTexture } from '@react-three/drei'

export const Box = ({position}) => {
    const PATH = useTexture('/assets/textures/floor/coast_sand_01_disp_1k.png');
  return (
    <>
        <mesh
            position={position} 
        >
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial  map={PATH}/>
        </mesh>
    </>
  )
}
