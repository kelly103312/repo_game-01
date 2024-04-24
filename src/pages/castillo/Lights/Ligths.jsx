import React from 'react'
import { Color } from 'three'

export const Ligths = () => {
  return (
    <>
        <ambientLight 
          intensity={0.5} 
        />
        <directionalLight 
            castShadow={true}
            color={new Color("#47CEEF")}
            position={[2,10,0]} 
            intensity={6}
            shadow-mapSize={[2048,2048]}
            shadow-camera-far={10}
            shadow-camera-left={-16}
            shadow-camera-right={16}
            shadow-camera-top={16}
            shadow-camera-bottom={-16}
        /> 
        <hemisphereLight 
            position={[2,8,-2]}
            intensity={0.8}
            skyColor={new Color("#F01414")}
            groundColor={new Color("#FFFFFF")}
         />
    </>
  )
}
