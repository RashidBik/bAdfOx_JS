import React, { useContext } from 'react'
import { Context } from '../../Pages/Play'

const ReverseSyn = () => {
  const context = useContext(Context);
  return (
    <div className='container'>
        <h1 className='head'>Array.prototype.reverse()</h1>
      <div className='bg-gray-100 p-2'>
        <h1 className='text-center'>Syntax</h1>
        <div className='syntax'>
            <code className='font-black'>
                arr.reverse()
            </code>
        </div>

        <div className='usage'>
         <h1>Definition and Usage</h1>
         <code>
         The reverse() method reverses 
         an array in place and returns the
         reference to the same array, the 
         first array element now becoming 
         the last, and the last array e
         lement becoming the first. In 
         other words, elements order in 
         the array will be turned towards 
         the direction opposite to that previously stated.
         </code>
        </div>
      </div>
      <div className='got'>
        <button className='btn text-xl px-3 bg-yellow-500'
        onClick={() => context.fDispatch('reverse')}>Got it</button>
      </div>
    </div>
  )
}

export default ReverseSyn
