import { useState } from 'react'
import {Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import Learn from './Pages/Learn'
import Play from './Pages/Play'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-red-900">
      <Routes>
        <Route index="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
