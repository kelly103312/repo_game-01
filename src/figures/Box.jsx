import React from 'react'
import { useRef,useState  } from 'react'
import { useFrame } from '@react-three/fiber'

export const Box = (props) => {
  const boxRef = useRef()
  const keyMap = props.keyMap
  const [selected, setSelected] = useState(props.selected)

  useFrame((_, delta) => {
    keyMap['KeyA'] && selected && (boxRef.current.position.x -= 1 * delta)
    keyMap['KeyD'] && selected && (boxRef.current.position.x += 1 * delta)
    keyMap['KeyW'] && selected && (boxRef.current.position.z -= 1 * delta)
    keyMap['KeyS'] && selected && (boxRef.current.position.z += 1 * delta)
  })
  return (
   <>
    <mesh ref={boxRef} {...props} onPointerDown={() => setSelected(!selected)}>
        <boxGeometry />
        <meshBasicMaterial color={0x00ff00} wireframe={!selected} />
    </mesh>
   </>
  )
}
