import React , { useRef }from 'react'
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

export const BoxofRanges = () => {
    const boxRef = useRef();
    const PATH = useTexture('/assets/textures/floor/coast_sand_01_disp_1k.png');
 
    const amplitude = 2; // Amplitud del movimiento (la distancia máxima desde el centro)
    const period = 2;
  
    useFrame(({clock}, delta)=>{
      const time = clock.getElapsedTime();
      const angularFrequency = (2 * Math.PI) / period;
      const currentAngle = angularFrequency * time;
      // Calculamos la posición en función del ángulo
      const x = amplitude * Math.sin(currentAngle);
      const z = amplitude * 50 * Math.cos(currentAngle);

      // Actualizamos la posición del objeto
      boxRef.current.position.x = x;
      boxRef.current.position.z = z;
    })

    return (
      <mesh ref={boxRef}>
      {/* <group ref={groupRef}>
        {positions.map((position, index) => (
          <Box key={index} position={position} />
        ))}
      </group> */}
           <boxGeometry args={[1,1,1]} />
           <meshStandardMaterial  map={PATH}/>

      </mesh>
    );
}
