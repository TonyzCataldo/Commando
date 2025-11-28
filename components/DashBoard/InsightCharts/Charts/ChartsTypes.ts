import { Task } from "../../Tasks/TasksTypes";

export type ChartProps = {
  tasks: Task[];
};

export type SectionTasksChartProps = {
  tasks: Task[];
  section: string;
};
