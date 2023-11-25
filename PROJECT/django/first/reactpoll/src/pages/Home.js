import React,{useState,useEffect,useContext} from 'react'
import Heading from "../Heading";
import Maincomp from "../Maincomp";
import SlideBar from "../SlideBar";
import Mainheading from '../Mainheading';
import Table from "../Table"
import { Firstdata } from '../Data';
import SecondData from '../SecondData';
import FetchData from '../FetchData';
import Table2 from '../Table2';

import { TagsProvider,TagsContext } from '../ThingsContext';
import { createContext } from 'react';





const BasicContext=createContext("hi")
const BasicProvider=BasicContext.Provider




const Home = props =>{
  const[tags,setTags]=useState([]);
  const[SelTags,setSelTags]=useState(["sports","games"]);
  const[text,setText]=useState("")


 
  return (
    <>
    {/* <h2>Home</h2> */}
    <Mainheading name="Home" />
    <div className='main'>
  
    
      <Heading />
      <TagsProvider value={SelTags}>
    
     
      <div style={{display:"flex"}}>

      <SlideBar  setSelTags={setSelTags} />
       <Maincomp />   
        </div>

      </TagsProvider>
      {/* <button onClick={() => {
        setText(text === 'dark' ? 'light' : 'dark');
      }}>
        Toggle theme
      </button>

      <BasicProvider value={text}>

      <p>{text}</p>
    
      </BasicProvider> */}
  
     
    </div>
    </>
  )
}

export default Home