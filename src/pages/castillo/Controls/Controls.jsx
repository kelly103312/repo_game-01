import { OrbitControls, useKeyboardControls } from '@react-three/drei'
import React, { useEffect } from 'react'
import { useAvatar } from '../Context/AvatarContext';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Quaternion, Vector3 } from 'three';
import { cameraProjectionMatrix } from 'three/examples/jsm/nodes/Nodes.js';

export const Controls = () => {
    const {avatar, setAvatar} = useAvatar();
    const [sub,get]= useKeyboardControls();
    const controlsRef = useRef()

    let walkDirection = new Vector3();
    let rotateAngle = new Vector3(0,1,0);
    let rotateQuartenion = new Quaternion();
    const velocity = 3;
    let cameraTarget = new Vector3();
    const desiredDistance = 5;

    console.log("pred")
    /*useEffect(()=>{
        return sub(
            (state)=> state.forward,
            (pressed)=>{
                console.log('forward',pressed)
            }
        )
    },[])*/

    const getDirectionOffset = (forward, backward, leftward, rightward) =>{
        if(forward && leftward) return Math.PI /4;
        if(forward && rightward) return -Math.PI /4;
        if(backward && leftward) return 3*Math.PI /4;
        if(backward && rightward) return -3*Math.PI /4;
        if(forward) return 0;
        if(backward) return Math.PI;
        if(rightward) return Math.PI/2;
        if(leftward) return Math.PI/4;
        return 0;
    }
    useFrame((state,delta)=>{
        const {forward, backward, leftward, rightward} = get()
        if(forward||backward||leftward||rightward){
            
            if(avatar.body && avatar.ref){
                const directionOffset = getDirectionOffset(forward, backward, leftward, rightward)

                const currentTranslation = avatar.body.translation();

                const angleYCameraDirection = Math.atan2(
                    state.camera.position.x = currentTranslation.x,
                    state.camera.position.z = currentTranslation.z

                )

                rotateQuartenion.setFromAxisAngle(rotateAngle,angleYCameraDirection + Math.PI+directionOffset);
                avatar.ref.quaternion.rotateTowards(rotateQuartenion,0.2);

                state.camera.getWorldDirection(walkDirection);
                walkDirection.y = 0;
                walkDirection.normalize();
                walkDirection.applyAxisAngle(rotateAngle,directionOffset);

                const moveX = walkDirection.x * velocity * delta;
                const moveZ = walkDirection.z * velocity * delta;
                const newPosition = new Vector3(
                    currentTranslation.x +moveX,
                    currentTranslation.y,
                    currentTranslation.z+moveZ
                )

                avatar.body.SetTranslation({
                    x: newPosition.x,
                    y: newPosition.y,
                    z: newPosition.z
                },true)

                avatar.body.setRotation(new Quaternion(0,avatar.body.rotation().y,0,1).normalize());

                state.camera.position.add(new Vector3(moveX,0,moveZ));
                cameraTarget.set(newPosition.x, newPosition.y+1,newPosition.z);
                controlsRef.current.target = cameraTarget;

                const avatarPosition = new Vector3(newPosition.x,newPosition.y+1,newPosition.z);
                const cameraPosition = new Vector3().copy(state.camera.position);
                const direction = cameraPosition.add(direction.multiplyScalar(desiredDistance));
                const newCameraPosition = avatarPosition.add(direction.multiplyScalar(desiredDistance));
                state.camera.position.copy(newCameraPosition);
            //     avatar.body.applyImpulse({
            //         x:0,y:0,z: -0.1 * delta
            //     },true)
            //     console.log(avatar.body.translation())
            //     state.camera.position.z = avatar.body.translation().z + 3;
            //     controlsRef.current.target.z = avatar.body.translation().z;
            }
        }else{
                avatar.body?.sleep()
        }
        const pressed = get().back
    })
  return (
    <>
        <OrbitControls ref={controlsRef} target={[0, 1.5, -3]} />
    </>
  )
}
