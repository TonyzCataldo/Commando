import SolidBtn from "@/components/Buttons/SolidBtn/SolidBtn";
import { CirclePlus } from "lucide-react";
import { AddModalBtnProps } from "./AddTaskBtnTypes";

const AddModalBtn = ({ onClick, className }: AddModalBtnProps) => {
  return (
    <SolidBtn
      className={`bg-primary-300 hover:bg-primary-400 rounded-full !py-6 !px-6 flex items-center ${className}`}
      onClick={onClick}
    >
      <CirclePlus color="white" />
    </SolidBtn>
  );
};

export default AddModalBtn;
