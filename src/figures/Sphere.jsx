import React, { useEffect } from 'react'
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { CapsuleCollider, RigidBody} from "@react-three/rapier"

export const Sphere = (props) => {
    const sphereBodyRef = useRef()

    const onHandleSphere = ()=>{
       sphereBodyRef.current.applyImpulse({x:0, y:2, z:-10},true);
    }

    useEffect(()=>{

    }, [sphereBodyRef.current])

    const onCollisionerEnter = ({manifold,target,other}) =>{
      if(other.rigidBodyObject.name==="girldBody"){ 
            console.log("ENDD ENTER")
      }    
    }

    const onCollisionerExit = ({manifold,target,other}) =>{
      if(other.rigidBodyObject.name==="girldBody"){ 
        console.log("ENDD")
      }  
    }

  return (
    <RigidBody 
      name="sphereBody"
      onCollisionEnter={(e)=>{onCollisionerEnter(e)}}
      onCollisionExit={(e)=>onCollisionerExit(e)}
      ref={sphereBodyRef} 
      position={props.position} 
      colliders="hull">
        <mesh onClick={onHandleSphere}>
            <sphereGeometry  args={[1, 3, 3]} />
            <meshStandardMaterial color={"blue"} />
        </mesh>
    </RigidBody>
  )
}
