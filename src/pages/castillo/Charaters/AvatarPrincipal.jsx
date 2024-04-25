import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useAvatar } from '../Context/AvatarContext'

export const AvatarPrincipal = (props) => {
  const avatarBodyRef = useRef()
  const avatarRef = useRef()
  const {avatar,setAvatar} = useAvatar();

  useEffect(()=>{
    setAvatar({
      ref: avatarRef.current,
      body: avatarBodyRef.current
    })
  },[avatarBodyRef.current, avatarRef.current])
  
  return (
    <RigidBody  ref={avatarBodyRef} position={[0,1.5,-3]} colliders={"ball"}>
      <mesh ref={avatarRef}>
          <sphereGeometry args={[0.2,32,32]}></sphereGeometry>
          <meshStandardMaterial color={"red"} />
      </mesh>
    </RigidBody>
  )
}
