import React, { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom';
import Filter from '../Components/Filter/Filter'
// import CopyM from '../Components/CopyWithIn/CopyM';
import Reverse from '../Components/Reverse/Reverse';
import Slice from '../Components/Slice/Slice';

const Play = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className=''>
      <Routes>
        <Route path="filter" element={<Filter />} />
        <Route path="reverse" element={<Reverse/>} />
        <Route path="slice" element={<Slice />} />
      </Routes>
    </div>
  )
}

export default Play
