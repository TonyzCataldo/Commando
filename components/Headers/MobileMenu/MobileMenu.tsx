"use client";

import SolidLinkBtn from "@/components/Buttons/SolidBtn/SolidLinkBtn";
import StartFreeBtn from "@/components/Buttons/StartFreeBtn/StartFreeBtn";
import useMobileMenu from "./hooks/useMobileMenu";
import { Session } from "inspector/promises";

const MobileMenu = ({ session }: { session: any }) => {
  const { isMenuOpen } = useMobileMenu();

  return (
    <>
      <div
        className={`fixed top-[97px] md:hidden flex flex-col z-20 gap-6 w-dvw bg-gray-50 py-6 px-4 ${
          !isMenuOpen ? "-translate-y-[350px]" : ""
        }`}
      >
        <p>asdasdasdad</p>
        <p>asdasdasdad</p>
        <p>asdasdasdad</p>
        <div className="w-full h-px bg-gray-400"></div>
        <div className="flex justify-center gap-2">
          {session === null && (
            <SolidLinkBtn
              text="Login"
              href="/login"
              className="!text-base !py-4 !px-5"
            />
          )}
          <StartFreeBtn
            href={session !== null ? "/dashboard" : "/register"}
            title={session !== null ? "Go to Dashboard" : "Start for free!"}
            className="!text-base !py-4 !px-5"
          />
        </div>
      </div>
      <div
        className={`w-dvw h-dvh fixed md:hidden backdrop-blur-lg bg-black/70 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default MobileMenu;
