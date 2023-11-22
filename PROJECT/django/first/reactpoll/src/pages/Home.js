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
import ThingsContext from '../ThingsContext';
import { ThingsProvider } from '../ThingsContext';



const Home = props =>{
  const[tags,setTags]=useState([]);
  const[SelTags,setSelTags]=useState([]);


 
  return (
    <>
    {/* <h2>Home</h2> */}
    <Mainheading name="Home" />
    <div className='main'>
  
    
      <Heading />
      <ThingsProvider value={SelTags}>
    
     
      <div style={{display:"flex"}}>

      <SlideBar  setSelTags={setSelTags} />
       <Maincomp />   
        </div>

      </ThingsProvider>
  
     
    </div>
    </>
  )
}

export default Home