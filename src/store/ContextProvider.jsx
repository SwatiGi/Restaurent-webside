import React, { useState } from 'react'
import CardContext from './CardContext'

const ContextProvider = ({ children }) => {
    let [count, setCount] = useState({});
   
    
  return (
      <CardContext.Provider value={{count,setCount}} >
      {children}
      
      </CardContext.Provider>
  )
}

export default ContextProvider