import { useState } from 'react'
import {Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Learn from './Pages/Learn'
import Play from './Pages/Play'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route index="/" element={<Play />} />
        <Route index="learn" element={<Learn />} />
        <Route index="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
