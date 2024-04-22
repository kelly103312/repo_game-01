import React from 'react'
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import * as THREE from "three"
import { useRapier } from "@react-three/rapier"
import * as RAPIER from "@dimforge/rapier3d-compat"

export const Sphere = () => {
    const ref = useRef()
    const [, get] = useKeyboardControls()
    // const SPEED = 5
    // const direction = new THREE.Vector3()
    // const frontVector = new THREE.Vector3()
    // const sideVector = new THREE.Vector3()
    // const rotation = new THREE.Vector3()
    // const rapier = useRapier()

    useFrame((state) => {
        const { forward, backward, left, right, jump } = get()

        // const velocity = ref.current.linvel()
        // // movement
        // frontVector.set(0, 0, backward - forward)
        // sideVector.set(left - right, 0, 0)
        // direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation)
        // ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })
        // // jumping
        // const world = rapier.world.raw()
        // const ray = world.castRay(new RAPIER.Ray(ref.current.translation(), { x: 0, y: -1, z: 0 }))
        // const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75
        // if (jump && grounded) ref.current.setLinvel({ x: 0, y: 7.5, z: 0 })
    })
  return (
    <>
        <mesh ref={ref}>
            <sphereGeometry  args={[1, 1, 3]} />
            <meshStandardMaterial color={"blue"} />
        </mesh>
    </>
  )
}
