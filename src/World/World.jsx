import { useGLTF } from '@react-three/drei'
import React from 'react'

export const World = (props) => {
    const { nodes, materials } = useGLTF('/assets/models/world/wordSquidGameswithfences.glb')

    return (
      <group {...props} dispose={null}>
      <group>
        <mesh geometry={nodes.Floor.geometry} material={nodes.Floor.material} />
        <mesh geometry={nodes.Walls.geometry} material={nodes.Walls.material} />
        <mesh geometry={nodes.WoodenFence.geometry} material={materials.woodMaterial} />
        <group position={[0, 0, -96]}
          
        >
          <mesh
            onClick={(e)=>e.stopPropagation()}
            geometry={nodes.sub02.geometry}
            material={materials['Tree.Birch.Leaf.Summer.Mat']}
          />
          <mesh onClick={(e)=>e.stopPropagation()}
          geometry={nodes.sub02_1.geometry} material={materials['Tree.Birch.Bark.Mat']} />
        </group>
      </group>
    </group>
    )
}
useGLTF.preload('/assets/models/world/wordSquidGameswithfences.glb')