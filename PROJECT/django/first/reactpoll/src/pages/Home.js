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
import { TagsProvider,TagsContext } from '../TagsContext';
import { createContext } from 'react';





const BasicContext=createContext("hi")
const BasicProvider=BasicContext.Provider


const Home = props =>{

  const[stateValue,setStateValue]=useState([]);
  console.log("Text in Home CMP:",stateValue)
  const[tags,setTags]=useState([]);

  const[tagsurl,setTagsurl]=useState([]);
  const[mytagsurl,setMytagsurl]=useState([]);

  const[change,setChange]=useState(0);


  const[SelTags,setSelTags]=useState([]);
  const[text,setText]=useState("")


  useEffect(() => {
    const tagsurl = `http://localhost:8000/polls/list_tags/`;
    const mytagsurl=`http://localhost:8000/polls/list_tags/`;

    const TagData = async () => {
      try {
        const response = await fetch(tagsurl);
        if (response.ok) {
          const json2 = await response.json();
          console.log("This is tags in HOME", json2);
          setTagsurl(json2);
          setMytagsurl(json2);
          // setStateValue(json2);
          
        } else {
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    TagData();
  }, []);
  

 
  return (
    <>
    {/* <h2>Home</h2> */}
    <Mainheading name="Home" />
    <div className='main'>
   
  
    
      <Heading />
      <TagsProvider value={{tagsurl,setTagsurl,mytagsurl,change,setChange}}>
      <div className='md:flex '>
      <div > <SlideBar  /></div>
      <div><Maincomp /> </div>

     
         
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