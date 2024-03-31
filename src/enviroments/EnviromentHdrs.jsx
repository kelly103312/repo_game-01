import { Environment } from '@react-three/drei'
import React from 'react'

export const EnviromentHdrs = () => {
  return (
    <>
        <Environment 
            files={"/assets/enviroment/hdris/citylake.hdr"}
            preset={null}
            background={true} 
            ground={{height:20, scale:512, radious: 400}} />
    </>
  )
}
