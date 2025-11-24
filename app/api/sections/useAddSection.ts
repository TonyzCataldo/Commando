"use client";

import { SectionFormValues, sectionSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useAddSection = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SectionFormValues>({ resolver: zodResolver(sectionSchema) });

  const onSubmit = async (values: SectionFormValues) => {
    setServerError(null);

    const res = await fetch("/api/sections", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
      }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setServerError(data?.error ?? "Create section error.");
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

export default useAddSection;
