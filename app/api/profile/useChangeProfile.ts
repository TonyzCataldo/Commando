"use client";

import { ChangeProfileFormProps } from "@/components/Forms/ChangeProfileForm/ChangeProfileFormTypes";
import { ProfileFormValues, profileSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useChangeProfile = ({ closeModal, image }: ChangeProfileFormProps) => {
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();
  const { update } = useSession();

  const {
    register,
    handleSubmit,

    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: { image: image },
  });

  const onSubmit = async (values: ProfileFormValues) => {
    setServerError(null);

    const res = await fetch("/api/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image: values.image,
        name: values.name,
      }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setServerError(data?.error ?? "Update profile error.");
      return;
    }

    await update();

    reset();
    router.refresh();
    if (closeModal) {
      closeModal();
    }
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

export default useChangeProfile;
