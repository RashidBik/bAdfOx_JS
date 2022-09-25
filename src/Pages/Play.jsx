import React, { useReducer } from 'react'
import Filter from '../Components/Filter/Filter'
import FilterSyn from '../Components/Filter/FilterSyn';
import Reverse from '../Components/Reverse/Reverse';
import ReverseSyn from '../Components/Reverse/ReverseSyn';
import Slice from '../Components/Slice/Slice';
import SliceSyn from '../Components/Slice/SliceSyn';
import Splice from '../Components/Splice/Splice';


export const Context = React.createContext();

let initialState;
const reducer = (state,action) => {
  switch (action) {
    case 'filter':
      return <Filter/>; 
    case 'filterSyn':
      return <FilterSyn/>; 
    case 'reverse':
      return <Reverse/>;
    case 'reverseSyn':
      return <ReverseSyn/>;    
    case 'slice':
      return <Slice/>;
    case 'sliceSyn':
      return <SliceSyn/>;
    case 'splice':
      return <Splice/>;
    default:
      break;
  }
}
const Play = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='md:px-12 lg:px-40 lg:text-xl lg:py-10'>
      <Context.Provider value={{fState: state, fDispatch: dispatch}}>
        {!state ? <Filter /> : state}
      </Context.Provider>
    </div>
  )
}

export default Play
