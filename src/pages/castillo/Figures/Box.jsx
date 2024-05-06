import { RigidBody } from '@react-three/rapier'
import React from 'react'
import { useLifes } from '../util/ManagementLifes';

export const Box = (props) => {
  const { lifes, restarLifes } = useLifes();

  const onCollisionExit = (e) =>{
    console.log(typeof e.other.rigidBodyObject.name )
    console.log(e.other.rigidBodyObject.name )

    if(e.other.rigidBodyObject.name === "AVATAR"){
      console.log("d")
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
