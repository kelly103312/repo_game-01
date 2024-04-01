import React from 'react'

export const Sphere = () => {
  return (
    <>
        <mesh>
            <sphereGeometry  args={[1, 3, 3]} />
            <meshStandardMaterial color={"blue"} />
        </mesh>
    </>
  )
}
