import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import {HomeScreen} from '../views/home'
import {AboutScreen} from '../views/about'

export const Routing = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="test" element={<AboutScreen />} />
      </Routes>
    </BrowserRouter>
  )
}