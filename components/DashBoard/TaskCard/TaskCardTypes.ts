export type TaskCardProps = {
  estimate: number;
  title: string;
  taskId: string;
  taskTime: number;
  taskDone: boolean;
  taskType: "PRATICE" | "DOIT";
};
