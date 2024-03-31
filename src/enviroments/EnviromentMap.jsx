import { Environment } from '@react-three/drei'
import React from 'react'

export const EnviromentMap = () => {
    const path = '/assets/enviroment/';
  return (
    <>
        <Environment 
            blur={0}
            files={[path+'px.png', path+'nx.png', path+'py.png', path+'ny.png', path+'pz.png', path+'nz.png']} background={true} />
    </>
  )
}
