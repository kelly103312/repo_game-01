import { Sky, Sparkles, Stars } from '@react-three/drei'
import React from 'react'

export const EnviromentSky = () => {
  return (
    <>
        <Sky 
            distance={450000}
            sunPosition={[1,-1, 1]} 
            inclination={0.2} 
            elevation={5}
            azimuth={360}/>
        <Stars 
            radius={100} 
            depth={50} 
            count={50000} 
            factor={4}
            saturation={0} 
            fade speed={0.5}/>
        <Sparkles 
            position={[0,0,0]}
            color= "yellow"
            count={100}
            size={5}
            fade={false}
            speed={0.5}
            scale={10}
        />
    </>
  )
}
