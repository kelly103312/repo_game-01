import { OrbitControls, useKeyboardControls } from '@react-three/drei'
import React, { useEffect } from 'react'
import { useAvatar } from '../Context/AvatarContext';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export const Controls = () => {
    const {avatar, setAvatar} = useAvatar();
    const [sub,get]= useKeyboardControls();
    const controlsRef = useRef()
    console.log("pred")
    /*useEffect(()=>{
        return sub(
            (state)=> state.forward,
            (pressed)=>{
                console.log('forward',pressed)
            }
        )
    },[])*/

    useFrame((state,delta)=>{
        const {forward, backward, leftward, rightward} = get()
        if(forward||backward||leftward||rightward){
            
            if(avatar.body && avatar.ref){
                avatar.body.applyImpulse({
                    x:0,y:0,z: -0.1 * delta
                },true)
                console.log(avatar.body.translation())
                state.camera.position.z = avatar.body.translation().z + 3;
                controlsRef.current.target.z = avatar.body.translation().z;
            }
        }
        const pressed = get().back
    })
  return (
    <>
        <OrbitControls ref={controlsRef} target={[0, 1.5, -3]} />
    </>
  )
}
