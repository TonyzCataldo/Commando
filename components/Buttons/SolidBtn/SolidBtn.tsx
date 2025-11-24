"use client";

import { SolidBtnProps } from "./SolidBtnTypes";

const SolidBtn = ({ children, className, onClick }: SolidBtnProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-200 cursor-pointer hover:bg-gray-300 active:scale-95 transition-all duration-100 ease-in-out shadow-md px-9 py-6 w-fit rounded-2xl text-gray-950 text-2xl font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default SolidBtn;
