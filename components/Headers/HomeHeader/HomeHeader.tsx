import MobileMenu from "@/components/Headers/MobileMenu/MobileMenu";
import Image from "next/image";
import MenuIcon from "../MenuIcon/MenuIcon";
import StartFreeBtn from "@/components/Buttons/StartFreeBtn/StartFreeBtn";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <>
      <header className="fixed z-50 w-full flex justify-center bg-gray-50 border-b border-gray-950 pl-1 pr-4 lg:pr-6 lg:pl-2">
        <div className="relative z-20 w-full flex items-center justify-between">
          <Link href={"/"} className="w-24">
            <Image
              width={1024}
              height={1024}
              alt="CommanDo Logo"
              src={"/commando-logo2.png"}
            />
          </Link>
          <MenuIcon />
          <div className="md:flex hidden items-center gap-4">
            <p className="hidden md:block">asdasdasdasd</p>
            <StartFreeBtn className="!text-base !py-4 !px-5" />
          </div>
        </div>
      </header>
      <MobileMenu />
    </>
  );
};

export default HomeHeader;
