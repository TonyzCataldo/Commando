"use client";
import AuthFormBtn from "@/components/Buttons/AuthFormBtn/AuthFormBtn";
import AuthInput from "../AuthInput/AuthInput";
import { useLogin } from "@/app/api/auth/[...nextauth]/hooks/useLogin";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    serverError,
  } = useLogin();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      <AuthInput
        placeholder="E-mail"
        label="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <AuthInput
        type="password"
        placeholder="Password"
        label="password"
        error={errors.password?.message}
        {...register("password")}
      />

      <AuthFormBtn isSubmitting={isSubmitting} className="w-full !py-4 mt-4">
        {isSubmitting ? "Submitting..." : "Log-in"}
      </AuthFormBtn>
      {serverError && (
        <p className="text-secondary-500 font-semibold text-center">
          {serverError}
        </p>
      )}
    </form>
  );
};

export default LoginForm;
