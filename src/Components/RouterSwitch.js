import React from 'react'
import Homepage from './Homepage'
import ResumePage from './ResumePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function RouteSwitch() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/personal-portfolio'} exact element={<Homepage />} />
            <Route path={'/resume'} element={<ResumePage />} />
        </Routes>
    </BrowserRouter>
  )
}

