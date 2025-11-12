import Link from "next/link";
import { StartFreeBtnPropsType } from "./StartFreeBtnTypes";

const StartFreeBtn = ({className}: StartFreeBtnPropsType) => {

    return (
        <Link href={"/register"} className={`bg-primary-500 hover:bg-primary-600 active:scale-95 transition-all duration-100 ease-in-out shadow-md px-9 py-6 w-fit rounded-2xl text-white text-2xl font-semibold ${className}`}>
            Start for free!
        </Link>
    )
}

export default StartFreeBtn;