import React from 'react'
import { createContext } from 'react'
const ThingsContext=React.createContext({})
const ThingsProvider = ({ children, value }) => {
    return <ThingsContext.Provider value={value}>{children}</ThingsContext.Provider>;
  };
  

  export { ThingsProvider, ThingsContext };