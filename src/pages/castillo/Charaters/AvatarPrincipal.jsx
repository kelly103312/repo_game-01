import React from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

export const AvatarPrincipal = () => {
    const group = useLoader(OBJLoader, '../../../../public/assets/castillo/avatars/mapache.obj')
  return (
    <group position={[0,1.5,-1]}>
        <primitive object={group} />
    </group>
  )
}
