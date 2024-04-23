
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function  Girl(props) {
  const { nodes, materials } = useGLTF('/assets/models/girl/girl.glb')
  const dressGirlRef = useRef()

  const onHandleClick =(e)=>{
    dressGirlRef.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 50%)`)
  }
  return (
    <RigidBody colliders="cuboid" name="girldBody">
      <group dispose={null}>
        <group onClick={(e)=>onHandleClick(e)}>
          <group>
            <mesh geometry={nodes.HeadGirl_1.geometry} material={materials.skinMaterial} />
            <mesh geometry={nodes.HeadGirl_2.geometry} material={materials.whiteEyeMaterial} />
            <mesh geometry={nodes.HeadGirl_3.geometry} material={materials.eyesMaterial} />
            <mesh geometry={nodes.HeadGirl_4.geometry} material={materials.hairMaterial} />
            <mesh geometry={nodes.HeadGirl_5.geometry} material={materials.ribbonMaterial} />
          </group>
          <group>
            <mesh geometry={nodes.BodyGirl_1.geometry} material={materials.shoesMaterial} />
            <mesh geometry={nodes.BodyGirl_2.geometry} material={materials.sockMaterial} />
            <mesh geometry={nodes.BodyGirl_3.geometry} material={materials.skinMaterial} />
            <mesh ref={dressGirlRef} geometry={nodes.BodyGirl_4.geometry} material={materials.dressMaterial} />
            <mesh geometry={nodes.BodyGirl_5.geometry} material={materials.shirtMaterial} />
          </group>
        </group>
        {props.children}
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/girl/girl.glb')