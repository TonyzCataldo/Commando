"use client"

import useAddSection from "@/app/api/sections/useAddSection";
import AuthInput from "../AuthInput/AuthInput";
import AuthFormBtn from "@/components/Buttons/AuthFormBtn/AuthFormBtn";

const AddSectionForm = ({closeModal}:{closeModal?: () => void;}) => {
  const {
    register,
    serverError,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  } = useAddSection({closeModal});

  console.log("sectionform", closeModal);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center justify-center w-full"
    >
      <AuthInput
        placeholder="Section name"
        label="section name"
        error={errors.name?.message}
        {...register("name")}
      />
      <AuthFormBtn className="w-full !py-4 mt-4" isSubmitting={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Create new section"}
      </AuthFormBtn>
      {serverError && (
        <p className="text-secondary-500 font-semibold text-center">
          {serverError}
        </p>
      )}
    </form>
  );
};

export default AddSectionForm;
