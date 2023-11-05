import React from 'react';


const First = () => {
    const data = [
      {
        Number: "1",
        PollQuestion: "Will India win ICC World Cup next time?",
        Totalvotes: "22",
        Tags: "Sports,Games",
      },
      {
        Number: "2",
        PollQuestion: "What will be the total corona casualties by the next year globally?",
        Totalvotes: "10",
        Tags: "Health,Politics",
      },
    ];
  
    return (
      <div>
        {data.map((item) => (
          <div key={item.Number}>
            <p>Number: {item.Number}</p>
            <p>Poll Question: {item.PollQuestion}</p>
            <p>Total Votes: {item.Totalvotes}</p>
            <p>Tags: {item.Tags}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default First;