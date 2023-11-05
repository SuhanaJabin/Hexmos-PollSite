import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Language", "Speakers (in millions)"],
  ["Yes", 60],
  ["No", 40],
  
];

export const options = {
  legend: "none",
  pieSliceText: "label",
  title: "Total Votes:22",
  pieStartAngle: 100,
};

export function Pie() {
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
