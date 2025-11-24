"use client";
import useGetTasks from "@/app/api/tasks/useGetTasks";
import InsightForm from "@/components/Forms/InsightForm/InsightForm";
import InsightCharts from "../InsightCharts/InsightCharts";

const CreateInsight = () => {
  const { register, handleSubmit, isSubmitting, tasks, days } = useGetTasks();
  return (
    <>
      <InsightForm
        register={register}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        days={days}
      />
      <InsightCharts tasks={tasks} />
    </>
  );
};

export default CreateInsight;
