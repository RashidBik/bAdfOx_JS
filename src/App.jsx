import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import Learn from './Pages/Learn'
import Play from './Pages/Play'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/play",
      element: <Play />,
    },
    {
      path: "/learn",
      element: <Learn />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
