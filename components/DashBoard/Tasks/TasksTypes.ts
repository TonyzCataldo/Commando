import { $Enums } from "@prisma/client";

export type TasksProps = {
  date: Date;
  sectionId: string;
};

export type Task = {
  estimate: number;
  title: string;
  id: string;
  type: $Enums.TaskType;
  createdAt: Date;
  updatedAt: Date;
  done: boolean;
  time: number;
  userId: string;
  sectionId: string | null;
  section?: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
  } | null;
};
