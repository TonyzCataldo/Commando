"use client";
import { RegisterInput, registerSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useRegister = () => {
  const router = useRouter();

  const [serverError, setServerError] = useState<string | null>(null);

  const [captchaToken, setCaptchaToken] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (values: RegisterInput) => {
    setServerError(null);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
        confirm: values.confirm,
        __captchaToken: captchaToken,
      }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setServerError(data?.error ?? "Registration error.");
      return;
    }
    reset();
    router.push("/login");
  };
  return {
    register,
    serverError,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    captchaToken,
    setCaptchaToken,
  };
};

export default useRegister;
