import React from 'react'
import Heading from "../Heading";
import Maincomp from "../Maincomp";
import SlideBar from "../SlideBar";
import Mainheading from '../Mainheading';
import Table from "../Table"
import { Firstdata } from '../Data';
import SecondData from '../SecondData';
import FetchData from '../FetchData';
import Table2 from '../Table2';
function Home() {
  return (
    <>
    {/* <h2>Home</h2> */}
    <Mainheading name="Home" />
    <div className='main'>
    
        <Heading />
       <div style={{display:"flex"}}>
       <SlideBar />
       <Maincomp />
       
       <FetchData />
    
 
       
      
       
       </div>
     
    </div>
    </>
  )
}

export default Home