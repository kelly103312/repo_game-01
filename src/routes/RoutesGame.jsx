import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LevelNocturno } from '../pages/level_nocturno/LevelNocturno'
import { Castillo } from '../pages/castillo/Castillo'

export const RoutesGame = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/level" element={<LevelNocturno/>} />
          <Route path="/castillo" element={<Castillo/>} />
        </Routes>
    </BrowserRouter>
  )
}
