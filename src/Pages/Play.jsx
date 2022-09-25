import React, { useReducer } from 'react'
import Filter from '../Components/Filter/Filter'
import Reverse from '../Components/Reverse/Reverse';
import Slice from '../Components/Slice/Slice';
import SliceSyn from '../Components/Slice/SliceSyn';


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
    default:
      break;
  }
}
const Play = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className=''>
      <Context.Provider value={{fState: state, fDispatch: dispatch}}>
        {!state ? <Filter /> : state}
      </Context.Provider>
    </div>
  )
}

export default Play
