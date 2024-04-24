import { BakeShadows, Loader, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { World } from './World/World'
import { Physics } from '@react-three/rapier'
import { Ligths } from './Lights/Ligths'
import { EnviromentSky } from './Enviroment/EnviromentSky'
import { WelcomeText } from './World/WelcomeText'
import { Sphere } from './Figures/Sphere'
import { AvatarPrincipal } from './Charaters/AvatarPrincipal'

export const Castillo = () => {
  return (
    <>
      <Canvas
        shadows={true}
        camera={{
          position: [0, 1.5, -80],
          rotation: [0, 0, 0],
        }}
      >
        <OrbitControls target={[0, 1.5, -82]} />
        <Suspense fallback={null}>
          <Ligths />
          <BakeShadows />
          <EnviromentSky />
          <Physics>
            <World />
            <Sphere position={[-2,2,-49]} /> 
            
            <AvatarPrincipal />
          </Physics>
          <WelcomeText position={[0, 4, -96]} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}
