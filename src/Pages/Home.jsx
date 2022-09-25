import React from 'react'

const Home = () => {

  return (
    <div className='bg-yellow-600 h-[100vh]'>
      <div className='flex justify-between p-2 items-center bg-yellow-900'>
      <img className='w-16' src='src/assets/logo.svg' />
       <p className='text-2xl font-black text-white font-pacifico pr-4'>Array Methods</p> 
      </div>
      <div className='flex flex-col items-center justify-center pt-40 text-4xl font-black font-spice'>
      <a className='p-2 hover:border-b-4 w-40 border-yellow-700' href='/play'>PLAY</a>
      <a className='p-2 hover:border-b-4 w-40 border-yellow-700' href='/learn'>LEARN</a>
      <a className='p-2 hover:border-b-4 w-40 border-yellow-700' href='/about'>ABOUT</a>
      </div>
      <div className='relative p-0 p-4'>
        <div className='absolute hover:skew-x-2 w-20 top-[0] left-[190px] '>
          <img src='src/assets/kurma.svg' />
        </div>
        <div className='absolute hover:skew-x-2 w-[100vw] top-[65px]'>
          <img src='src/assets/horizon.svg' />
        </div>
        <div className='absolute hover:skew-x-2 w-20 top-[19px] left-[90px] '>
          <img src='src/assets/house.svg' />
        </div>
      </div>
    </div>
  )
}

export default Home
