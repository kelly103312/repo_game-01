import React from 'react'
import { Color } from 'three';

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
            intensity={10}
        /> 
        {/* <pointLight
            position={[0,2,0]}
            color={new Color("#8F00FF")}
            intensity={10}
         /> */}

         {/* <spotLight 
            position={[0,2,0]}
            intensity={10}
            color="orange"
            angle={Math.PI / 3}
         /> */}
         <hemisphereLight 
            position={[2,8,-2]}
            intensity={0.8}
            skyColor={new Color("#F01414")}
            groundColor={new Color("#FFFFFF")}
         />
    </>
  )
}
