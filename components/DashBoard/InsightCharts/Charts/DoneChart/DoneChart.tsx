"use client";
import { GenericChart } from "@/components/DashBoard/GenericChart/GenericChart";
import { ChartProps } from "../ChartsTypes";

const DoneChart = ({ tasks }: ChartProps) => {
  const doneCount = tasks.filter((t) => t.done).length;
  const notDoneCount = tasks.length - doneCount;

  const data = [
    { name: "Done", value: doneCount },
    { name: "Not done", value: notDoneCount },
  ];

  const colors = ["#4CAF50", "#FF9800"]; // verde, laranja

  return (
    <GenericChart title="Tasks by done status" data={data} colors={colors} />
  );
};

export default DoneChart;
