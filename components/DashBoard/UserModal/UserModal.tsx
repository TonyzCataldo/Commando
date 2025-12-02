"use client";
import Paper from "@/components/Wrappers/Paper/Paper";
import useModal from "@/hooks/useModal";
import { CircleX, Pencil } from "lucide-react";
import Image from "next/image";
import { UserModalProps } from "./UserModalTypes";
import ChangeProfileForm from "@/components/Forms/ChangeProfileForm/ChangeProfileForm";

const UserModal = ({ image }: UserModalProps) => {
  const { modalIsVisible, setModalIsVisible } = useModal();
  function closeModal() {
    setModalIsVisible(false);
  }

  return (
    <>
      <button
        onClick={() => setModalIsVisible(true)}
        className="relative cursor-pointer w-fit"
      >
        <Image
          src={image ?? "/white-soldier.png"}
          alt={"User avatar"}
          width={1024}
          height={1024}
          className="rounded-full w-32 h-32"
        />
        <div className="absolute -bottom-1 right-0 bg-secondary-50 rounded-full p-2">
          <Pencil />
        </div>
      </button>
      <Paper
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:p-8 w-[calc(100%-32px)] lg:w-[calc(100%-48px)] z-45 max-w-[525px] ${
          modalIsVisible ? "" : "hidden"
        }`}
      >
        <CircleX
          className="absolute right-1.5 top-1.5 cursor-pointer"
          onClick={() => setModalIsVisible(false)}
        />
        <ChangeProfileForm closeModal={closeModal} image={image} />
      </Paper>
      <div
        className={`min-w-dvw min-h-dvh h-full w-full fixed top-0 left-0 z-40 backdrop-blur-lg bg-black/70 ${
          modalIsVisible ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default UserModal;
