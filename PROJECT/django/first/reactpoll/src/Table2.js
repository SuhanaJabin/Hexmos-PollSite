import React from 'react'
import { useParams } from 'react-router-dom';

function Table2({data}) {
 

 
  if (data === null ) {
    return <div>Loading data...</div>;
  }



 
 
    // if (data === null) {
    //     return <div>Loading data...</div>; // You can display a loading message or handle the null case accordingly.
    //   }
      // const question=data[id].Question;
      //  console.log(question)
  
    const choicesData = data.map((item) => item.Choices).flat();
    const AllData = data.map((item) => item.data).flat();
  

    const columns=Object.keys(data[0]);
    const TableHeader = () => {
        return (
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        );
      };
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

      

const TableBody = ({ data }) => {
  // Check if data.Choices is defined and not empty
  if (data && data.Choices && data.Choices.length > 0) {
    return (
     
      <tr>
        {data.Choices.map((choice, index) => (
          <td key={index}>{choice.choice_text}</td>
        ))}
      </tr>
    );
  } else {
    return <tr>No choices available</tr>;
  }
};
    
      return (
        <div>
      
        <h2>Table 2</h2>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Option</th>
              <th>Votes</th>
        
            </tr>
          </thead>
          <tbody>
            {choicesData.map((item) => (
              <tr key={item.number}>
                {/* <td>{item.number}</td>
                <td>{item.choice_text}</td>
                <td>{item.votes}</td> */}
                <td>{item.number}</td>
                <td>{item.choice_text}</td>
                <td>{item.votes}</td>

                {/* <td>{item.Choices.map((choice) => (
                      <p key={choice.number}>
                        {choice.number}
                      </p> ))}
                      </td>
               <td>
             
                    {item.Choices.map((choice) => (
                      <p key={choice.number}>
                        {choice.choice_text} 
                      </p>))}
              
                
               </td>
               <td>
             
                    {item.Choices.map((choice) => (
                      <p key={choice.number}>
                         {choice.votes}
                      </p>))}
              
                </td> 
                */}
                {/* {item.Choices.map((choice) => (
                <>
                  <td>{choice.number}</td>
                  <td>{choice.choice_text}</td>
                  <td>{choice.votes}</td>
                </>
              ))}
                 */}
                
              </tr>
            ))}
          </tbody>
        </table>
       

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