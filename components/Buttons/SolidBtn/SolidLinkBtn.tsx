import Link from "next/link";
import { SolidLinkBtnProps } from "./SolidBtnTypes";

const SolidLinkBtn = ({ href, className, text }: SolidLinkBtnProps) => {
  return (
    <Link
      href={href}
      className={`bg-gray-200 hover:bg-gray-300 active:scale-95 transition-all duration-100 ease-in-out shadow-md px-9 py-6 w-fit rounded-2xl text-gray-950 text-2xl font-semibold ${className}`}
    >
      {text}
    </Link>
  );
};

export default SolidLinkBtn;
