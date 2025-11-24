import { GetTasksFormValues } from "@/app/api/tasks/useGetTasks";
import { FormEventHandler } from "react";
import { UseFormRegister } from "react-hook-form";

export type InsightFormProps = {
  register: UseFormRegister<GetTasksFormValues>;
  isSubmitting: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  days: string[];
};
