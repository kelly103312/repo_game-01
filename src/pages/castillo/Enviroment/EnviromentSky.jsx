import { Sparkles } from '@react-three/drei'
import React from 'react'

export const EnviromentSky = () => {
  return (
    <>
        <Sparkles 
            position={[0,1.5,-96]}
            color= "yellow"
            count={200}
            size={5}
            fade={false}
            speed={0.5}
            scale={10}
        />
    </>
  )
}
