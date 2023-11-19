import React,{useState,useEffect} from 'react'
import Heading from "../Heading";
import Maincomp from "../Maincomp";
import SlideBar from "../SlideBar";
import Mainheading from '../Mainheading';
import Table from "../Table"
import { Firstdata } from '../Data';
import SecondData from '../SecondData';
import FetchData from '../FetchData';
import Table2 from '../Table2';
const TagsContext =React.createContext({})//creating the context
export const TagsProvider = TagsContext.Provider//creating a way to provide the context

function Home() {

  
  
 
  return (
    <>
    {/* <h2>Home</h2> */}
    <Mainheading name="Home" />
    <div className='main'>
  
    
      <Heading />
      <div style={{display:"flex"}}>
   
       <Maincomp />
       {/* <FetchData /> */}
       <SlideBar />
   
    
       
       
    
 
       
      
       
       </div>
     
    </div>
    </>
  )
}

export default Home