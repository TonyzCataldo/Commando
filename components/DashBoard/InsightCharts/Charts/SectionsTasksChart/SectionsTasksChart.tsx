"use client";
import { GenericChart } from "@/components/DashBoard/GenericChart/GenericChart";
import { SectionTasksChartProps } from "../ChartsTypes";
import { useMemo } from "react";

const SectionsTasksChart = ({ tasks, section }: SectionTasksChartProps) => {
  const data = useMemo(() => {
    const tasksMap = new Map<string, number>();

    tasks.forEach((t) => {
      if (t.section!.name.toLowerCase() === section) {
        const prev = tasksMap.get(t.title.toLowerCase()) ?? 0;
        const current = t.time;
        tasksMap.set(t.title.toLowerCase(), prev + current);
      } else return;
    });

    return Array.from(tasksMap.entries()).map(([name, value]) => ({
      name,
      value,
    }));
  }, [tasks, section]);

  const colors = [
    "#4CAF50",
    "#FF9800",
    "#2196F3",
    "#9C27B0",
    "#F44336",
    "#00BCD4",
    "#8BC34A",
    "#FFC107",
    "#03A9F4",
    "#E91E63",
    "#673AB7",
    "#CDDC39",
    "#FF5722",
    "#009688",
    "#607D8B",

    "#6A1B9A",
    "#1E88E5",
    "#43A047",
    "#FB8C00",
    "#8E24AA",
    "#D81B60",
    "#3949AB",
    "#039BE5",
    "#FDD835",
    "#7CB342",
    "#00897B",
    "#C62828",
    "#5E35B1",
    "#26C6DA",
    "#EF6C00",
  ];
  return (
    <GenericChart
      title={`${section.charAt(0).toUpperCase()}${section.slice(1)}`}
      data={data}
      colors={colors}
    />
  );
};

export default SectionsTasksChart;
