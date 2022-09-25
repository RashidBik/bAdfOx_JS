import React from 'react'
import Canvas from './Canvas'

const Home = () => {

  return (
    <div>
      <a href='/play'>Play</a>
      <a href='/learn'>Learn</a>
      <a href='/about'>About</a>
      <section>
        <Canvas/>
      </section>
    </div>
  )
}

export default Home
