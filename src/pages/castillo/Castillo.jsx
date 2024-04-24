import { BakeShadows, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { World } from './World/World'
import { Physics } from '@react-three/rapier'
import { Ligths } from './Lights/Ligths'
import { EnviromentSky } from './Enviroment/EnviromentSky'
import { WelcomeText } from './World/WelcomeText'

export const Castillo = () => {
  return (
    <>
      <Canvas
        shadows={true}
        camera={{
          position: [0, 1.5, -92],
          rotation: [0, 0, 0],
        }}
      >
        <OrbitControls target={[0, 1.5, -90]} />
        <Suspense fallback={null}>
          <Ligths />
          <BakeShadows />
          <EnviromentSky />
          <Physics>
            <World />

          </Physics>
          <WelcomeText position={[0, 1.6, -5]} />
        </Suspense>
      </Canvas>
    </>
  )
}
