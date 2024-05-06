import React from 'react'
import {RoutesGame}  from './routes/RoutesGame'
import { AvatarProvider } from './pages/castillo/Context/AvatarContext'
import { LifesProvider } from './pages/castillo/util/ManagementLifes'


export const Experience = () => {
  

  return (
    <LifesProvider>
      <AvatarProvider>
        <RoutesGame />
      </AvatarProvider>
    </LifesProvider>
  )
}
