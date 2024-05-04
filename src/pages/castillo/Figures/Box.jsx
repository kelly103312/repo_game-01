import { RigidBody } from '@react-three/rapier'
import React from 'react'

export const Box = (props) => {
  return (
    <RigidBody position={props.position}>
        <mesh {...props}>
            <boxGeometry />
            <meshBasicMaterial color={"hotpink"} wireframe/>
        </mesh>
    </RigidBody>
  )
}
