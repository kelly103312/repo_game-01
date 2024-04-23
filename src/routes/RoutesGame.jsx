import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LevelNocturno } from '../pages/level_nocturno/LevelNocturno'

export const RoutesGame = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/level" element={<LevelNocturno/>} />
        </Routes>
    </BrowserRouter>
  )
}
