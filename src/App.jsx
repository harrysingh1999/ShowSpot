// import './App.css'
import React from "react"
import Home from "./Home/Home"
import { Outlet } from "react-router-dom"
import Header from "./Header/Header"

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
