import MobileMenu from "@/components/Headers/MobileMenu/MobileMenu";
import Image from "next/image";
import MenuIcon from "../MenuIcon/MenuIcon";
import StartFreeBtn from "@/components/Buttons/StartFreeBtn/StartFreeBtn";
import Link from "next/link";
import SolidLinkBtn from "@/components/Buttons/SolidBtn/SolidLinkBtn";
import { getAuthSession } from "@/lib/auth";

const HomeHeader = async () => {
  const session = await getAuthSession();
  return (
    <>
      <header className="fixed z-50 w-full flex justify-center bg-gray-50 border-b border-gray-400 px-4 py-4 lg:px-6 ">
        <div className="relative z-20 w-full flex items-center max-w-[1440px] justify-between">
          <Link href={"/"} className="flex items-center">
            <p className="text-2xl font-semibold text-gray-950">COMMAND</p>
            <div className="w-[34px] -ml-[3px]">
              <Image
                width={1024}
                height={1024}
                alt="CommanDo Logo"
                src={"/commando-logo2.png"}
              />
            </div>
          </Link>
          <MenuIcon />
          <div className="md:flex hidden items-center gap-4">
            {!session && (
              <SolidLinkBtn
                href="/login"
                text="Login"
                className="!text-base !py-3 !px-5 !bg-gray-50 hover:!bg-gray-200 !shadow-none"
              />
            )}
            <StartFreeBtn
              href={session ? "/dashboard" : "/register"}
              className="!text-base !py-3 !px-5"
              title={session ? "Go to Dashboard" : "Start for free!"}
            />
          </div>
        </div>
      </header>
      <MobileMenu session={session} />
    </>
  );
};

export default HomeHeader;
