import { useGLTF, useTexture } from '@react-three/drei'
import React from 'react'
import { RepeatWrapping } from 'three';

export const World = (props) => {
    const { nodes, materials } = useGLTF('/assets/models/world/wordSquidGameswithfences.glb')

    const PATH = '/assets/textures/floor/';
    const PATHWALLS = '/assets/textures/walls/';
    console.log(nodes)
    const propsTexture = useTexture({
        map: PATH + 'coast_sand_01_diff_1k.jpg',
        normalMap: PATH + 'coast_sand_01_nor_gl_1k.jpg',
        roughnessMap: PATH + 'coast_sand_01_nor_gl_1k.jpg',
        //aoMap: PATH + '',
        //metalnessMap: PATH+'',
        displacementMap: PATH+'coast_sand_01_disp_1k.png'
    });
    const propsTextureWalls = useTexture({
        map: PATHWALLS + 'rock_wall_10_diff_1k.jpg',
        normalMap: PATHWALLS + 'rock_wall_10_nor_gl_1k.jpg',
        roughnessMap: PATHWALLS + 'rock_wall_10_rough_1k.jpg',
        //aoMap: PATH + '',
        //metalnessMap: PATH+'',
        displacementMap: PATHWALLS+'rock_wall_10_disp_1k.png'
    });
    propsTexture.map.repeat.set(4,64);
    propsTexture.map.wrapS = propsTexture.map.wrapT = RepeatWrapping;
    
    propsTexture.normalMap.repeat.set(4,64);
    propsTexture.normalMap.wrapS = propsTexture.normalMap.wrapT = RepeatWrapping;
   
    propsTexture.roughnessMap.repeat.set(4,64);
    propsTexture.roughnessMap.wrapS = propsTexture.roughnessMap.wrapT = RepeatWrapping;
   
    propsTexture.displacementMap.repeat.set(4,64);
    propsTexture.displacementMap.wrapS = propsTexture.displacementMap.wrapT = RepeatWrapping;
    
    propsTextureWalls.map.repeat.set(4,64);
    propsTextureWalls.map.wrapS = propsTextureWalls.map.wrapT = RepeatWrapping;
    
    propsTextureWalls.normalMap.repeat.set(4,64);
    propsTextureWalls.normalMap.wrapS = propsTextureWalls.normalMap.wrapT = RepeatWrapping;
   
    propsTextureWalls.roughnessMap.repeat.set(4,64);
    propsTextureWalls.roughnessMap.wrapS = propsTextureWalls.roughnessMap.wrapT = RepeatWrapping;
   
    propsTextureWalls.displacementMap.repeat.set(4,64);
    propsTextureWalls.displacementMap.wrapS = propsTextureWalls.displacementMap.wrapT = RepeatWrapping;

    return (
      <group {...props} dispose={null}>
        <group>
          {/* <mesh geometry={nodes.Walls.geometry} >
            <meshStandardMaterial  
                  {...propsTextureWalls}
              />
          </mesh> */}
          <mesh receiveShadow={true} geometry={nodes.Floor.geometry}>
            <meshStandardMaterial  
                {...propsTexture}
            />
          </mesh>
          <mesh
            castShadow={true}
            geometry={nodes.WoodenFence.geometry}
          >
            <meshStandardMaterial 
              color={"#6F473A"}
              metalness={0}
              roughness={0.5}
            />
          </mesh>
          <group>
            <mesh
              castShadow={true}
              geometry={nodes.tree_1.geometry}
              material={materials['Tree.Birch.Leaf.Summer.Mat']}
            />
            <mesh castShadow={true} geometry={nodes.tree_2.geometry} material={materials['Tree.Birch.Bark.Mat']} />
          </group>
        </group>
      </group>
    )
}
useGLTF.preload('/assets/models/world/wordSquidGameswithfences.glb')