"use client";
import useAddTask from "@/app/api/tasks/useAddTask";
import AuthInput from "../AuthInput/AuthInput";
import AuthFormBtn from "@/components/Buttons/AuthFormBtn/AuthFormBtn";

const AddTaskForm = ({
  sectionId,
  closeModal,
}: {
  sectionId: string;
  closeModal?: () => void;
}) => {
  const {
    register,
    serverError,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  } = useAddTask({ sectionId, closeModal });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center justify-center w-full"
    >
      <AuthInput
        placeholder="Task name"
        label="task name"
        error={errors.title?.message}
        {...register("title")}
      />
      <AuthInput
        placeholder="Estimated time in minutes"
        label="Estimate"
        error={errors.estimate?.message}
        {...register("estimate", { valueAsNumber: true })}
      />
      <div className="flex flex-col gap-2 w-full">
        <p className="text-gray-950 text-lg ">Select a task-type</p>
        <div className="flex self-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="PRATICE"
              {...register("type")}
              className="h-4 w-4 text-green-600"
            />
            <span>Pratice</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="DOIT"
              {...register("type")}
              className="h-4 w-4 text-green-600"
            />
            <span>Do it</span>
          </label>
        </div>
        {errors.type && (
          <p className="text-secondary-500 font-semibold">
            {errors.type.message}
          </p>
        )}
      </div>
      <AuthFormBtn className="w-full !py-4 mt-4" isSubmitting={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Create new task"}
      </AuthFormBtn>
      {serverError && (
        <p className="text-secondary-500 font-semibold text-center">
          {serverError}
        </p>
      )}
    </form>
  );
};

export default AddTaskForm;
