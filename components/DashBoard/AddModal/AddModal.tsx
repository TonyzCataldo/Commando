"use client";

import Paper from "@/components/Wrappers/Paper/Paper";

import { CircleX } from "lucide-react";
import useModal from "@/hooks/useModal";
import AddModalBtn from "./AddModalBtn/AddModalBtn";
import { AddModalProps } from "./AddModalTypes";

const AddModal = ({ title, children, btnClassName }: AddModalProps) => {
  const { modalIsVisible, setModalIsVisible } = useModal();
  return (
    <>
      <AddModalBtn
        onClick={() => setModalIsVisible(true)}
        className={btnClassName}
      />
      <Paper
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:p-8 w-[calc(100%-32px)] lg:w-[calc(100%-48px)] z-45 max-w-[525px] ${
          modalIsVisible ? "" : "hidden"
        }`}
      >
        <CircleX
          className="absolute right-1.5 top-1.5 cursor-pointer"
          onClick={() => setModalIsVisible(false)}
        />
        <h2 className="text-3xl font-semibold text-gray-950">{title}</h2>
        {children}
      </Paper>
      <div
        className={`min-w-dvw min-h-dvh h-full w-full fixed top-0 left-0 z-40 backdrop-blur-lg bg-black/70 ${
          modalIsVisible ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default AddModal;
