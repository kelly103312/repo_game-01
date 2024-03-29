import { useGLTF, useTexture } from '@react-three/drei'
import React from 'react'
import { RepeatWrapping } from 'three';
import { Box } from '../figures/Box';
import { Sphere } from '../figures/Sphere';
import { BoxofRanges } from '../figures/BoxofRanges';

export const World = (props) => {
    const { nodes, materials } = useGLTF('/assets/models/world/worldSquidGames1.glb')

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
          <Box position ={[-4,-0.5,0]} />
          <Box position ={[-4,-0.5,2]} />
          <Box position ={[-4,-0.5,4]} />
          <Box position ={[-4,-0.5,-2]} />
          <Box position ={[-4,-0.5,-4]} />
          <Box position ={[4,-0.5,2]} />
          <Box position ={[4,-0.5,4]} />
          <Box position ={[4,-0.5,0]} />
          <Box position ={[4,-0.5,-2]} />
          <Box position ={[4,-0.5,-4]} />
          <Sphere />

          <BoxofRanges />
          <mesh geometry={nodes.Walls.geometry} >
            <meshStandardMaterial  
                  {...propsTextureWalls}
              />
          </mesh>
          <mesh geometry={nodes.Floor.geometry}>
            <meshStandardMaterial  
                {...propsTexture}
            />
          </mesh>
        </group>
      </group>
    )
}
useGLTF.preload('/assets/models/world/worldSquidGames1.glb')