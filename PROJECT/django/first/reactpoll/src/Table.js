import React from 'react'

function Table({data}) {
    if (!data || data.length === 0) {
        return <div> {data} </div>;
      }
    console.log({data})
 

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
        <h2>Table</h2>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Poll Question</th>
              <th>TotalVotes</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
          {/* <a href="{% url 'polls:detail' question.id %}">Vote again?</a> */}
            {data.map((item) => (
              <tr key={item.Number}>
                <td>{item.Number}</td>
    
                {/* <td><a href={`http://localhost:8000/polls/get-polls-data/${item.Number}`}> {item.Question} </a></td> */}
                <td><a href={`/poll/${item.Number}`}>{item.Question}</a></td>
                {/* <td>
                  <ul>
                    {item.Choices.map((choice) => (
                      <li key={choice.number}>
                        {choice.choice_text} ({choice.votes} votes)
                      </li>
                    ))}
                  </ul>
                </td> */}
                <td>{item.TotalVotes}</td>
                <td>{item.Tags.join(', ')}</td>
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
    
    export default Table;