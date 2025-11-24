"use client";
import { GenericChart } from "@/components/DashBoard/GenericChart/GenericChart";
import { ChartProps } from "../ChartsTypes";

const PraticeChart = ({ tasks }: ChartProps) => {
  const completedCount = tasks.filter(
    (t) => t.type === "PRATICE" && t.time >= t.estimate
  ).length;
  const notCompletedCount = tasks.filter(
    (t) => t.type === "PRATICE" && t.time < t.estimate
  ).length;

  const data = [
    { name: "Pratice more than estimate", value: completedCount },
    { name: "Pratice less than estimate", value: notCompletedCount },
  ];

  const colors = ["#4CAF50", "#FF9800"]; // verde, laranja

  return (
    <GenericChart title="Pratice tasks time" data={data} colors={colors} />
  );
};

export default PraticeChart;
