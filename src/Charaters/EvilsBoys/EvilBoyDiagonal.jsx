import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

export const EvilBoyDiagonal = (props) => {
    const groupBoy = useRef()
    const { nodes, materials } = useGLTF('/assets/models/avatars/hellboydiagonal.glb')
    const radius = 2

    useFrame((state,delta)=>{
        const elapsedTime = state.clock.getElapsedTime()
        //groupBoy.current.position.set(props.position[0] + x, props.position[1] , props.position[2] + z)
        groupBoy.current.position.x = props.position[0] + Math.cos(elapsedTime) * radius;
        groupBoy.current.position.z = props.position[2] + Math.cos(elapsedTime) * radius;
        groupBoy.current.rotation.y = Math.cos(elapsedTime);
    })

  return (
    <group ref={groupBoy} {...props} dispose={null}>
        <group name="EvilBoyDiagonal">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                <group name="root">
                <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="AvatarRoot_78">
                    <group name="GLTF_created_0">
                        <primitive object={nodes.GLTF_created_0_rootJoint} />
                        <skinnedMesh
                        name="Object_7"
                        geometry={nodes.Object_7.geometry}
                        material={materials.Hellboy}
                        skeleton={nodes.Object_7.skeleton}
                        morphTargetDictionary={nodes.Object_7.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_7.morphTargetInfluences}
                        />
                        <skinnedMesh
                        name="Object_9"
                        geometry={nodes.Object_9.geometry}
                        material={materials.Material}
                        skeleton={nodes.Object_9.skeleton}
                        morphTargetDictionary={nodes.Object_9.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_9.morphTargetInfluences}
                        />
                        <skinnedMesh
                        name="Object_11"
                        geometry={nodes.Object_11.geometry}
                        material={materials.Material}
                        skeleton={nodes.Object_11.skeleton}
                        morphTargetDictionary={nodes.Object_11.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_11.morphTargetInfluences}
                        />
                        <skinnedMesh
                        name="Object_13"
                        geometry={nodes.Object_13.geometry}
                        material={materials.Material}
                        skeleton={nodes.Object_13.skeleton}
                        morphTargetDictionary={nodes.Object_13.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_13.morphTargetInfluences}
                        />
                        <skinnedMesh
                        name="Object_15"
                        geometry={nodes.Object_15.geometry}
                        material={materials.Material}
                        skeleton={nodes.Object_15.skeleton}
                        morphTargetDictionary={nodes.Object_15.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_15.morphTargetInfluences}
                        />
                        <skinnedMesh
                        name="Object_17"
                        geometry={nodes.Object_17.geometry}
                        material={materials.Material}
                        skeleton={nodes.Object_17.skeleton}
                        morphTargetDictionary={nodes.Object_17.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_17.morphTargetInfluences}
                        />
                        <skinnedMesh
                        name="Object_19"
                        geometry={nodes.Object_19.geometry}
                        material={materials.Hellboy}
                        skeleton={nodes.Object_19.skeleton}
                        />
                        <skinnedMesh
                        name="Object_21"
                        geometry={nodes.Object_21.geometry}
                        material={materials.Material}
                        skeleton={nodes.Object_21.skeleton}
                        />
                        <skinnedMesh
                        name="Object_23"
                        geometry={nodes.Object_23.geometry}
                        material={materials.Flame}
                        skeleton={nodes.Object_23.skeleton}
                        />
                        <skinnedMesh
                        name="Object_25"
                        geometry={nodes.Object_25.geometry}
                        material={materials.Flame}
                        skeleton={nodes.Object_25.skeleton}
                        />
                        <skinnedMesh
                        name="Object_27"
                        geometry={nodes.Object_27.geometry}
                        material={materials.Flame}
                        skeleton={nodes.Object_27.skeleton}
                        />
                        <skinnedMesh
                        name="Object_29"
                        geometry={nodes.Object_29.geometry}
                        material={materials.Flame}
                        skeleton={nodes.Object_29.skeleton}
                        />
                        <group name="Body_66" />
                        <group name="Body001_67" />
                        <group name="Body002_68" />
                        <group name="Body003_69" />
                        <group name="Body004_70" />
                        <group name="Body005_71" />
                        <group name="Cigar_72" />
                        <group name="Cigar001_73" />
                        <group name="CigarFlame_74" />
                        <group name="TopFlame_75" />
                        <group name="TopFlame001_76" />
                        <group name="TopFlame002_77" />
                    </group>
                    </group>
                </group>
                </group>
            </group>
        </group>
    </group>
  )
}
useGLTF.preload('/assets/models/avatars/hellboydiagonal.glb')