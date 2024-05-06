import { RigidBody } from '@react-three/rapier'
import React from 'react'
import { useLifes } from '../util/ManagementLifes';

export const Box = (props) => {
  const { lifes, restarLifes } = useLifes();

  const onCollisionExit = (e) =>{
    console.log("collision")
    if(e.other.rigidBodyObject.name === "AVATAR"){
      restarLifes();
    }
  }
  return (
    <RigidBody name="BOX" position={props.position} onCollisionExit={(e)=>{onCollisionExit(e)}}>
        <mesh {...props}>
            <boxGeometry />
            <meshBasicMaterial color={"hotpink"} wireframe/>
        </mesh>
    </RigidBody>
  )
}
