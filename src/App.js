import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeView from './views/HomeView'
import "./assets/scss/setting/style.scss";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView/>}/>
      </Routes>
    </BrowserRouter>
  )
}
