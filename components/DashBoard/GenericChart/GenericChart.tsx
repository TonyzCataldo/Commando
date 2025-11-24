"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

type PieDatum = {
  name: string;
  value: number;
};

type GenericPieProps = {
  title: string;
  data: PieDatum[];
  colors: string[];
};

export function GenericChart({ title, data, colors }: GenericPieProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  if (total === 0) {
    return (
      <div className="w-full h-80 rounded-2xl p-4 flex items-center justify-center">
        <span className="text-sm text-gray-400">No data for this period.</span>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center h-96 rounded-2xl p-4">
      <h2 className="text-2xl font-semibold mb-2 text-center text-gray-950">
        {title}
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={40}
            outerRadius={80}
            paddingAngle={0}
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
