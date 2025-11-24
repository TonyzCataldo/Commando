"use client";

import { Task } from "@/components/DashBoard/Tasks/TasksTypes";
import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";

export type GetTasksFormValues = {
  initial: string;
  end: string;
};

const useGetTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  function last7Days() {
    const days: string[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days.push(d.toISOString().slice(0, 10)); // YYYY-MM-DD
    }
    return days;
  }

  const days = useMemo(() => last7Days(), []);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<GetTasksFormValues>({
    defaultValues: {
      // opcional: por ex, último dia e hoje
      initial: days[0],
      end: days[0],
    },
  });

  const onSubmit = async (values: GetTasksFormValues) => {
    const { initial, end } = values;
    console.log(initial);
    console.log(end);

    const res = await fetch(`/api/tasks?initial=${initial}&end=${end}`);
    const data = await res.json();

    setTasks(data);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting,
    tasks,
    days,
  };
};

export default useGetTasks;
