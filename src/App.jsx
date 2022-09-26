import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import Learn from './Pages/Learn'
import Play from './Pages/Play'


function App() {

  return (
    <Router>
      <Routes>
        <Route index="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
