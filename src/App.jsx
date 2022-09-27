import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import Learn from './Pages/Learn'
import Play from './Pages/Play'


function App() {

  return (
    <div className="">
      <Routes>
        <Route index="/" exact element={<Home />} />
        <Route path="/play" exact element={<Play />} />
        <Route path="/learn" exact element={<Learn />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </div>
  )
}

export default App
