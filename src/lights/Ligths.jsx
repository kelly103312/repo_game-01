import React, { useMemo, useRef } from 'react'
import { Color, SpotLightHelper } from 'three';
import { useControls } from 'leva'
import { useHelper } from '@react-three/drei';

export const Ligths = () => {
  const spotLightRef = useRef(null);

  const optionsSpotLight = useMemo(()=>{
    return {
      intensitySL : {value: 1, min: 0, max: 1000, step:1},
      colorSL: { value:"white"}
    }
  }, []);

  const spotLightControl = useControls('SpotLight', optionsSpotLight);

  useHelper(spotLightRef, SpotLightHelper);

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
        {/* <pointLight
            position={[0,2,0]}
            color={new Color("#8F00FF")}
            intensity={10}
         /> */}

         <spotLight 
            ref={spotLightRef}
            position={[0,2,0]}
            intensity={spotLightControl.intensitySL}
            color={spotLightControl.colorSL}
            angle={Math.PI / 3}
            distance={10}
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
