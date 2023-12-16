import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Language", "Speakers (in millions)"],
  ["Yes", 60],
  ["No", 40],
  
];



export function Pie({votes}) {
  const options = {
    legend: "none",
    pieSliceText: "label",
    title: `Total Votes:${votes}`,
    pieStartAngle: 100,
  };
  console.log("Totalvotes in PIE: ",votes)
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
