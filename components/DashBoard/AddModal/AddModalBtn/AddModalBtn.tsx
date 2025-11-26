import SolidBtn from "@/components/Buttons/SolidBtn/SolidBtn";
import { CirclePlus } from "lucide-react";
import { AddModalBtnProps } from "./AddTaskBtnTypes";

const AddModalBtn = ({ onClick }: AddModalBtnProps) => {
  return (
    <SolidBtn
      className="bg-primary-300 hover:bg-primary-400 rounded-full !px-6"
      onClick={onClick}
    >
      <CirclePlus color="white" />
    </SolidBtn>
  );
};

export default AddModalBtn;
