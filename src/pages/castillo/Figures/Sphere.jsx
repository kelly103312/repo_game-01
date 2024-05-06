import { RigidBody } from '@react-three/rapier'
import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber"

export const Sphere = (props) => {
  const sphereBody = useRef()
  useFrame((state,delta)=>{
    const elapsedTime = state.clock.getElapsedTime();
    //sphereBody.current.position.x = props.position[0] + Math.cos(elapsedTime);
    //sphereBody.current.position.z = props.position[2] + Math.cos(elapsedTime);
  },[sphereBody.current])
  return (
    <RigidBody position={props.position} colliders="ball">  
            <mesh  ref={sphereBody}
              >
                <sphereGeometry args={[0.4, 6, 6]} />
                <meshStandardMaterial color={"grey"} />
            </mesh>
    </RigidBody>
  )
}
