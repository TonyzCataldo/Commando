"use client";

import { TaskFormValues, taskSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useAddTask = ({sectionId}: {sectionId: string}) => {
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormValues>({ resolver: zodResolver(taskSchema) });

  const onSubmit = async (values: TaskFormValues) => {
    setServerError(null);

    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: values.title,
        type: values.type,
        estimate: values.estimate,
        sectionId: sectionId,
      }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setServerError(data?.error ?? "Create task error.");
      return;
    }
    router.refresh();
  };
  return {
    register,
    serverError,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
};

export default useAddTask;
