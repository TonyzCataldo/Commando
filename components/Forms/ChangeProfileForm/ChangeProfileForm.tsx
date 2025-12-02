"use client";

import useChangeProfile from "@/app/api/profile/useChangeProfile";
import Image from "next/image";
import AuthInput from "../AuthInput/AuthInput";
import AuthFormBtn from "@/components/Buttons/AuthFormBtn/AuthFormBtn";
import { ChangeProfileFormProps } from "./ChangeProfileFormTypes";
import { avatarOptions } from "@/lib/validation";
import { useState } from "react";

const ChangeProfileForm = ({ closeModal, image }: ChangeProfileFormProps) => {
  const {
    register,
    serverError,
    handleSubmit,
    errors,

    isSubmitting,
    onSubmit,
  } = useChangeProfile({ closeModal, image });

  const [selected, setSelected] = useState(image);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center justify-center w-full"
    >
      <div className="flex flex-col gap-8 w-full">
        <p className="self-center text-2xl text-center">Change your avatar</p>
        <div className="grid grid-cols-3 self-center gap-4">
          {avatarOptions.map((src) => (
            <label
              key={src}
              className="cursor-pointer"
              onClick={() => setSelected(src)}
            >
              <input
                type="radio"
                value={src}
                className="hidden"
                {...register("image")}
              />

              <Image
                width={1024}
                height={1024}
                src={src}
                alt="Avatar option"
                className={`min-[400px]:w-24 min-[400px]:h-24 w-[74px] h-[74px] rounded-full object-cover transition 
              ${
                selected === src
                  ? "ring-4 ring-secondary-500 scale-105"
                  : "ring-2 ring-transparent hover:ring-secondary-400"
              }`}
              />
            </label>
          ))}
        </div>
        <AuthInput
          placeholder="Name"
          label="change name"
          error={errors.name?.message}
          {...register("name")}
        />
        <AuthFormBtn className="w-full !py-4 mt-4" isSubmitting={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Change profile"}
        </AuthFormBtn>
        {serverError && (
          <p className="text-secondary-500 font-semibold text-center">
            {serverError}
          </p>
        )}
        {errors.image && <p>{errors.image.message}</p>}
      </div>
    </form>
  );
};

export default ChangeProfileForm;
