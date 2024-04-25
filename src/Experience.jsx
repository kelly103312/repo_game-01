import React from 'react'
import {RoutesGame}  from './routes/RoutesGame'
import { AvatarProvider } from './pages/castillo/Context/AvatarContext'


export const Experience = () => {
  

  return (
    <AvatarProvider>
      <RoutesGame />
    </AvatarProvider>
  )
}
