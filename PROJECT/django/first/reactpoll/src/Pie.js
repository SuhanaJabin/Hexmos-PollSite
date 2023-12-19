import React from "react";
import { Chart } from "react-google-charts";





export function Pie({mydata}) {

  console.log("This is data in PIE", mydata)

  // const data = [
  //   ["Language", "Speakers (in millions)"],
  //   mydata[0]["Choices"].map((text, index) => {
  //    [mydata[0]["Choices"][index].choice_text, mydata[0]["Choices"][index].votes]
     
  //   });
  //   // [mydata[0]["Choices"][0].choice_text, mydata[0]["Choices"][0].votes],
  //   // [mydata[0]["Choices"][1].choice_text, mydata[0]["Choices"][1].votes],
   
    
    
  // ];

  const data = [
    ["Language", "Speakers (in millions)"],
    ...mydata[0]["Choices"].map((choice) => [choice.choice_text, choice.votes]),
  ];
  
  
    const options = {
      legend: "none",
      pieSliceText: "label",
      title: "",
      pieStartAngle: 100,
    };

    if (mydata != null) {
      options.title = `Total Votes: ${mydata[0]["TotalVotes"]}`;
      mydata[0]["Choices"].map((text, index) => {
        console.log("This is choice in map fn: ", mydata[0]["Choices"][index].choice_text);
        console.log("This is vote in map fn: ", mydata[0]["Choices"][index].votes);
      });
    }

   
 

  

  //console.log("Totalvotes in PIE: ",votes)
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
  
}
