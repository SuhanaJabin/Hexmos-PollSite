import React from 'react'
import { useParams } from 'react-router-dom';

function Table2( {data,id}) {
  
  if (data == null) {
    return <div>Loading data...</div>} 
  


  console.log("This is data in Table 2 component ",{data})
 

  // console.log("this is id ",id)
  
  
  // console.log("Checking data[" + i + "]:", data[i]);
  // console.log("Comparing data[" + i + "].Number to id:", data[i].Number, id);

 


  
  // let question ;
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i] && data[i].Number === Number(id)) {
  //     question = data[i].Question;
  //     break; // Stop searching when the item is found
  //   }}
  //   console.log("This is question",{question})

  // if (!question) {
  //   return <div>Question not found</div>;
  // }
  // const choicesData = question.Choices;
  // console.log("This is ChoiceData", choicesData);

let choicesData = [];

if (data && Array.isArray(data)) {
  choicesData = data.map((item) => item.Choices).flat();
  console.log(choicesData);
}

let TagsData = [];

if (data && Array.isArray(data)) {
  TagsData = data.map((item) => item.Tags).flat();
  console.log("This is my tags ",TagsData);
}
let ques;

if (data && Array.isArray(data)) {
  ques = data.map((item) => item.Question);
  console.log("This is my question",ques);
}

//   console.log("Choices",data[id]["Choices"] )
//  let choicesData=[];
// console.log("This is first data" ,data[0]["Choices"])
//  console.log(Array.isArray(data))

//  let object=data[id]["Choices"];
//  console.log("This is choice ",object )
  // if( data){

  //  choicesData = data[0]["Choices"] ;
  //  }
  //  console.log("This is ChoiceData ",choicesData)

  // const question = data.find(item => item.Number == id);

  // if (!question) {
  //   return <div>Question not found</div>;
  // }

  // const choicesData = question.Choices;
  // console.log("This is ChoiceData", choicesData);


   



 

 
  // if (data === null ) {
  //   return <div>Loading data...</div>;
  // }



 
 
 // You can display a loading message or handle the null case accordingly.
    //   }
      // const question=data[id].Question;
      //  console.log(question)
  
  
    // const TagsData = data.map((item) => item.Choices).flat();
    // const AllData = data.map((item) => item.data).flat();
    // console.log(TagsData);


    
  

    // const columns=Object.keys(data[0]);
    // const TableHeader = () => {
    //     return (
    //       <tr>
    //         {columns.map((column) => (
    //           <th key={column}>{column}</th>
    //         ))}
    //       </tr>
    //     );
    //   };
         {/* <td key={column}>{rowData[column]}</td> */}
    //get table row data
    // const TableBody = ({data}) => {
        // return data.map((rowData, rowIndex) => (
        //   // <tr key={rowIndex}>
        //   //   {columns.map((column) => (
           
        //   //     <td key={column}>{rowData.Choices.choice_text}</td>
        //   //   ))}
        //   // </tr>
        //   <tr key={rowIndex}>{data.Choices.choice_text}</tr>
      //   // ));
      //   return(
      //     if (data.Choices && data.Choices.length > 0) {
      //       return (
      //         <tr>
      //           {data.Choices.map((choice, index) => (
      //             <td key={index}>{choice.choice_text}</td>
      //           ))}
      //         </tr>
      //       );
      //     } else {
      //       return <tr>No choices available</tr>;
      //     }
      //   )
      // };

      

// const TableBody = ({ data }) => {
//   // Check if data.Choices is defined and not empty
//   if (data && data.Choices && data.Choices.length > 0) {
//     return (
     
//       <tr>
//         {data.Choices.map((choice, index) => (
//           <td key={index}>{choice.choice_text}</td>
//         ))}
//       </tr>
//     );
//   } else {
//     return <tr>No choices available</tr>;
//   }
// };
    
      return (
      
        <div className='overflow-x-auto flex flex-col  '>
          <h3 className='m-2'>{ques}</h3>
        
      
    
        <table className=' w-96 md:w-[500px] '>
          <thead className=' '>
            
            <tr  className=''>
            
              <th className=''>Option</th>
              <th className=''>Votes</th>
        
            </tr>
          </thead>
          <tbody>
            {choicesData.map((item) => (
              <tr className='  ' key={item.number}>
          
                
                <td >{item.choice_text}</td>
                <td>{item.votes}</td>
            
              </tr>
            ))}
          </tbody>
        </table>
   
       <p>{TagsData.map((item,index)=>(<p key={index}></p>))}</p>
       <p className='m-2'>Tags: {TagsData.join(', ')}</p>

  
      

        

      </div>
//         <div>
//  <h2>Table</h2>
        



//           <table>
//             <thead>
//               <TableHeader />
//             </thead>
//             <tbody>
//               <TableBody />
//             </tbody>
//           </table> 
//           {/* <p>{data}</p> */}
//         </div>

      );
    }
    
    export default Table2;