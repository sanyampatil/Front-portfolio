import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Header/Navbar'

function App () {
  return (
    <>
      <Navbar />
    </>
  )
}

export default App
