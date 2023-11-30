import React, { useContext,useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Table from "./Table";
import FetchData from "./FetchData";
import Home from "./pages/Home";
import { TagsProvider ,TagsContext} from "./TagsContext";
import Maincomp from "./Maincomp";

const FilterBtn= () => {

  const{tagsurl,setTagsurl,mytagsurl,setChange}=useContext(TagsContext);

  console.log("State Updated FILTER CMP:",tagsurl);
  console.log("This is MYTAGSURL : ",mytagsurl);



  console.log("This is the data in FILTER",)
  
  const [TagsArray, setTagsArray] = useState([]);
  const [SelTags, setSelTags] = useState([]); 
  const [value, setValue] = useState(1);
  const [pollsdata, setPollsData] = useState(null);
  const [isChecked, setIsChecked] = useState([false, false, false, false, false, false]);
  const Tags = ["day", "mother", "writer", "ocean", "bone", "small","bird","country","skeleton","continents","largest","desert","sahara"];
  const [tag, setTag] = useState(null);
  const [shouldRunEffect, setShouldRunEffect] = useState(false);
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [number, setNumber] = useState("");
  const [votes, setVotes] = useState("");
  const [data2, setData2] = useState([]);
  const prevNonEmptyTagsRef = useRef([]);
  let pid;

 





  // let things=useContext(ThingsContext);
  // console.log("This is things" ,things)

  console.log("This is the data in tagsurl in FILTERBTN ",tagsurl);


  // let nonEmptyTags = SelTags.filter(tag => tag && tag.trim() !== "");

  // console.log("This is Seltags in FilterBtn",SelTags)
  // console.log("This is nonEmptytags in FilterBtn",nonEmptyTags)
  // let mystring = nonEmptyTags.join(",");
  // console.log("This is mystring in FilterBtn",mystring)
  // console.log("Value is ", value);

  // // const TagContext=createContext();





  // useEffect(() => {
  //   const prevNonEmptyTags = prevNonEmptyTagsRef.current;

  //   if (value === 2 && shouldRunEffect && prevNonEmptyTags !== nonEmptyTags && nonEmptyTags.length > 0) {
  //     const url = `http://127.0.0.1:8000/polls/pollstag/?tags=${encodeURIComponent(mystring)}`;

  //     const myData = async () => {
  //       try {
  //         const response = await fetch(url);
  //         if (response.ok) {
  //           const json = await response.json();
  //           setTag(json);
  //           console.log("Value inside filtered tags is ", value);
  //           pid = 2;
  //         } else {
  //           console.error("Request failed");
  //         }
  //       } catch (error) {
  //         console.error("Error", error);
  //       }
  //     };

  //     myData();
  //     prevNonEmptyTagsRef.current = nonEmptyTags;
  //     setShouldRunEffect(false); // Reset the flag after running the effect
  //     if(!nonEmptyTags)
  //     {
  //       setValue(1);
  //     }
  //   }
  // }, [shouldRunEffect, nonEmptyTags]);

  const print = () => {
    setValue(2);
    setChange(1);
    console.log("Tags for filtering:-");
    if(SelTags.length===0)
    {
      setValue(1);
    }
    SelTags.forEach((tag, index) => {
      console.log("Seelected Tags",tag);
    });

    // Set the flag to true to trigger the useEffect on the next render
    setShouldRunEffect(true);
    setTagsurl(SelTags);
  };

  const handleOnChange = (index) => {
    
    const newCheckedState = [...isChecked];
    newCheckedState[index] = !newCheckedState[index];
    setIsChecked(newCheckedState);



    if (newCheckedState[index]) {
      setTagsArray((prevTagsArray) => [...prevTagsArray, Tags[index]]);
      setSelTags((prevSelTags) => [...prevSelTags, Tags[index]]);

   
    } else {
      
      setTagsArray((prevTagsArray) => prevTagsArray.filter((tag) => tag !== Tags[index]));
      setSelTags((prevSelTags) => prevSelTags.filter((tag) => tag !== Tags[index]));
      setShouldRunEffect(false)
      

   
    }

  };
  console.log("This is the selected tags ",SelTags)



  // things=SelTags;
  // console.log("This is the thing selected tags",things)

  // Fetching tags data
  // useEffect(() => {
  //   const tagsdataurl2 = `http://localhost:8000/polls/list_tags/`;

  //   const TagData = async () => {
  //     try {
  //       const response = await fetch(tagsdataurl2);
  //       if (response.ok) {
  //         const json2 = await response.json();
  //         console.log("This is tags", json2);
  //         setData2(json2);
          
  //       } else {
  //         console.error('Request failed with status:', response.status);
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   TagData();
  // }, []);

 


  return (
    <>
    <div style={{display:"flex"}}>
    <div style={{marginRight:"3rem"}}>
    <div style={{  backgroundColor: "rgb(212, 208, 208)",paddingBottom:"5rem" ,boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)", height: "200px"}}>
        <div style={{ padding: "1rem" }}>
          {Array.isArray(mytagsurl["Tags"]) && mytagsurl["Tags"].map((tag, index) => (
            <div key={index}>
              <input type='checkbox' checked={isChecked[index]} onChange={() => handleOnChange(index)} name={tag}></input>
              <label htmlFor={`checkbox${index}`}>{tag}</label>

              <br />
            </div>
          ))}
        </div>
        <div style={{ padding: "1rem" }}>
      

        
       
         <button onClick={() => print()}>Filter by tags</button>
   
      
         
        </div>
   
      </div>
    </div>
      
      <div><Table data={tag} /></div>
     
    </div>
      
    </>
  );
}

export default FilterBtn;
