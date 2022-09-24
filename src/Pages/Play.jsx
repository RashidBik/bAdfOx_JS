import React, { useReducer } from 'react'
import Filter from '../Components/Filter/Filter'
import Reverse from '../Components/Reverse/Reverse';
import Slice from '../Components/Slice/Slice';

export const Context = React.createContext();

let initialState;
const reducer = (state,action) => {
  switch (action) {
    case 'filter':
      return <Filter/>; 
    case 'reverse':
      return <Reverse/>;  
    case 'slice':
      return <Slice/>;
    default:
      break;
  }
}
const Play = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className=''>
      <Context.Provider value={dispatch}>
        {state}
      </Context.Provider>
    </div>
  )
}

export default Play
