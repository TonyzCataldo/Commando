import { PaperPropsType } from "./PaperTypes";

const Paper = ({ children, className }: PaperPropsType) => {
  return (
    <div
      className={`p-4 shadow-2xl border gap-6 border-gray-200 rounded-2xl bg-white flex flex-col items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Paper;
