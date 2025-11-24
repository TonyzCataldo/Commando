"use client";
import { GenericChart } from "@/components/DashBoard/GenericChart/GenericChart";
import { ChartProps } from "../ChartsTypes";
import { useMemo } from "react";

const SectionsChart = ({ tasks }: ChartProps) => {
  const data = useMemo(() => {
    const sectionMap = new Map<string, number>();

    tasks.forEach((t) => {
      const name = t.section!.name;
      sectionMap.set(name, (sectionMap.get(name) ?? 0) + 1);
    });

    return Array.from(sectionMap).map(([name, value]) => ({
      name,
      value,
    }));
  }, [tasks]);

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
  return <GenericChart title="Tasks per section" data={data} colors={colors} />;
};

export default SectionsChart;
