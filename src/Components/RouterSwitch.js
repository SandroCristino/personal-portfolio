import React from 'react'
import Homepage from './Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function RouteSwitch() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} exact element={<Homepage />} />
        </Routes>
    </BrowserRouter>
  )
}

