import Link from "next/link";
// ou onde estiver
import { StartFreeBtnPropsType } from "./StartFreeBtnTypes";

export default function StartFreeBtn({
  className,
  title,
  href,
}: StartFreeBtnPropsType) {
  return (
    <Link
      href={href}
      className={`bg-primary-500 hover:bg-primary-700 active:scale-95 transition-all duration-100 ease-in-out shadow-md px-8 py-4 w-fit rounded-full text-white text-2xl font-semibold ${className}`}
    >
      {title}
    </Link>
  );
}
