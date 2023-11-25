import React from 'react'
import { createContext } from 'react'

// const tagsdataurl2 = `http://localhost:8000/polls/list_tags/`;

const TagsContext=React.createContext([])
const TagsProvider = TagsContext.Provider

// const ThingsProvider = (  value ) => {
//     return <ThingsContext.Provider>{value}</ThingsContext.Provider>;
//   };
  

  export { TagsProvider, TagsContext };