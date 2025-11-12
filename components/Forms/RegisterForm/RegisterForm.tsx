"use client";
import useRegister from "@/app/api/register/hooks/useRegister";
import AuthFormBtn from "@/components/Buttons/AuthFormBtn/AuthFormBtn";
import AuthInput from "../AuthInput/AuthInput";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    serverError,
  } = useRegister();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      <AuthInput
        placeholder="Name"
        label="name"
        error={errors.name?.message}
        {...register("name")}
      />
      <AuthInput
        placeholder="E-mail"
        label="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <AuthInput
        placeholder="Password"
        label="password"
        error={errors.password?.message}
        {...register("password")}
      />
      <AuthInput
        placeholder="Confirm password"
        label="confirm"
        error={errors.confirm?.message}
        {...register("confirm")}
      />
      <AuthFormBtn isSubmitting={isSubmitting} className="w-full !py-4 mt-4">
        {isSubmitting ? "Submitting..." : "Create account"}
      </AuthFormBtn>
      {serverError && (
        <p className="text-secondary-500 font-semibold text-center">
          {serverError}
        </p>
      )}
    </form>
  );
};

export default RegisterForm;
