import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export const Coins = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/assets/castillo/world/coin.glb')
    const { actions } = useAnimations(animations, group)


  return (
    <group ref={group} {...props} dispose={null} visible={false}>
        <group name="Scene">
            <group name="coin" userData={{ name: 'coin' }}>
                <mesh
                  name="CoinObj_Coin_0"
                  geometry={nodes.CoinObj_Coin_0.geometry}
                  material={materials.Coin}
                  userData={{ name: 'CoinObj_Coin_0' }}
                  />
            </group>
        </group>
    </group>
  )
}
useGLTF.preload('/assets/castillo/world/coin.glb')


