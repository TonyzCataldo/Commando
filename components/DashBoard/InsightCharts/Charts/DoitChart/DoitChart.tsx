"use client";
import { GenericChart } from "@/components/DashBoard/GenericChart/GenericChart";
import { ChartProps } from "../ChartsTypes";

const DoitChart = ({ tasks }: ChartProps) => {
  const completedCount = tasks.filter(
    (t) => t.type === "DOIT" && t.time <= t.estimate && t.done
  ).length;
  const notCompletedCount = tasks.filter(
    (t) => t.type === "DOIT" && t.done && t.time > t.estimate
  ).length;

  const data = [
    { name: "Completed on time", value: completedCount },
    { name: "Not completed on time", value: notCompletedCount },
  ];

  const colors = ["#4CAF50", "#FF9800"]; // verde, laranja

  return (
    <GenericChart
      title="Do it tasks time (only completed)"
      data={data}
      colors={colors}
    />
  );
};

export default DoitChart;
