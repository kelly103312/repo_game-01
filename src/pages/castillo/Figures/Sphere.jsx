import { RigidBody } from '@react-three/rapier'
import React, { useEffect, useRef } from 'react'
import { useFrame } from "@react-three/fiber"
import { Vector3 } from 'three'

export const Sphere = (props) => {
  const sphereBody = useRef()
  const sphere = useRef()

  useFrame((state,delta)=>{
    const elapsedTime = state.clock.getElapsedTime();

    if(sphere.current){
      sphere.current.setTranslation({
          x: props.position[0] + Math.cos(elapsedTime) * 4,
          y: props.position[1],
          z: props.position[2],
        },true);
    }
  },)
  
  useEffect(()=>{
    console.log(sphere)
  },[])

  return (
    <RigidBody ref={sphere} position={props.position} type="fixed" colliders="ball">  
      <mesh  ref={sphereBody}>
          <sphereGeometry args={[0.4, 6, 6]} />
          <meshStandardMaterial color={"grey"} />
      </mesh>
    </RigidBody>
  )
}
