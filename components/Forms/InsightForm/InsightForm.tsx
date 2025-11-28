"use client";

import AuthFormBtn from "@/components/Buttons/AuthFormBtn/AuthFormBtn";
import { InsightFormProps } from "./InsightFormTypes";

const InsightForm = ({
  register,
  isSubmitting,
  handleSubmit,
  days,
}: InsightFormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col min-[700px]:flex-row gap-2"
    >
      <select
        {...register("initial")}
        className="border bg-white px-2 py-1 rounded"
        
      >
        <option value="" disabled hidden  >Initial date</option>
        {days.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <select
        {...register("end")}
        className="border bg-white px-2 py-1 rounded"
        
      >
        <option value="" disabled hidden >End date</option>
        {days.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <AuthFormBtn className="!py-3 !px-4" isSubmitting={isSubmitting}>Create Insights</AuthFormBtn>
    </form>
  );
};

export default InsightForm;
