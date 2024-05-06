import { BakeShadows, KeyboardControls, Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { World } from './World/World'
import { Physics } from '@react-three/rapier'
import { Ligths } from './Lights/Ligths'
import { EnviromentSky } from './Enviroment/EnviromentSky'
import { WelcomeText } from './World/WelcomeText'
import { Sphere } from './Figures/Sphere'
import { AvatarPrincipal } from './Charaters/AvatarPrincipal'
import { Controls } from './Controls/Controls'
import useMovements from '../../Utils/key-movements'
import Ecctrl,{ EcctrlAnimation } from 'ecctrl'
import { Box } from './Figures/Box'
import { Bear } from './Charaters/Bear'
import { Rampla } from './Figures/Rampla'
import { Pane } from '../castillo/layout/Pane'

export const Castillo = () => {
  const map = useMovements();

  return (
    <KeyboardControls map={map}>
      <Pane />
      <Canvas
        shadows={true}
        camera={{
          position: [0, 1.5, -0.5],
          rotation: [0, 0, 0],
        }}
      >
        
        <Suspense fallback={null}>
          <Ligths />
          <EnviromentSky />
          <BakeShadows />
          <Physics debug={true}>
            <World />            
            <Ecctrl 
              name="AVATAR" 
              autoBalance = {true}
              camInitDis = {-10}
              camMaxDis = {-10}
              position={[0,0.5,-3]}
              maxVelLimit={5}
            >
              <AvatarPrincipal />
            </Ecctrl>
            <Sphere position={[0,1,-15]} />
            <Box position={[0,2,-5]} />
            <Bear position={[-1, 0, -80]} />
            <Rampla position={[-1, 0, -40]} />
          </Physics>
          <WelcomeText position={[0, 4, -96]} />
        </Suspense>
        <Controls />
      </Canvas>
      <Loader />
    </KeyboardControls>
  )
}
