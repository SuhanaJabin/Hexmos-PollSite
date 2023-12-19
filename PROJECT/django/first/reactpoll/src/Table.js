import React from 'react'

function Table({data}) {
    if (!data || data.length === 0) {
        return <div> {data} </div>;
      }
    console.log("This is table data in TABLE" ,{data})
 

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
        <div className='overflow-x-auto'>

        <table className='table-auto w-full text-center '>
          <thead>
            <tr className='w-16 md:wd-32 lg:w-48 xl:w-64 '>
              <th>Number</th>
              <th>Poll Question</th>
              <th>TotalVotes</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
          {/* <a href="{% url 'polls:detail' question.id %}">Vote again?</a> */}
          {data.map((item) => (
              <tr  key={item["Number"]}>
                <td  >{item.Number}</td>
    
                {/* <td><a href={`http://localhost:8000/polls/get-polls-data/${item.Number}`}> {item.Question} </a></td> */}
                <td ><a href={`/poll/${item.Number}`}>{item.Question}</a></td>
             
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