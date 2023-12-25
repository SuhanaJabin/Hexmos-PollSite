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
        <>
        

      <div class="flex flex-col mt-20">
  <div class="-m-1.5 overflow-x-auto ">
    <div class="p-1.5 inline-block align-middle">
      <div class="overflow-hidden">
        <table class="w-4 divide-y divide-gray-200 dark:divide-gray-700 whitespace-nowrap">
          <thead>
            <tr className='whitespace-nowrap w-4'>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium  uppercase">Number</th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase">Poll Question</th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase">TotalVotes</th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase">Tags</th>
              
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
          {data.map((item) => (
            <tr className='whitespace-nowrap' key={item["Number"]}>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium  ">{item.Number}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm "><a href={`/poll/${item.Number}`}>{item.Question}</a></td>
              <td class="px-6 py-4 whitespace-nowrap text-sm">{item.TotalVotes}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm ">{item.Tags.join(', ')}</td>
              
              
            </tr>
            ))}
         

           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      


</>



      );
    }
    
    export default Table;