"use client";

import { CircleUserRound, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DashHeader = ({ img }: { img: string }) => {
  const [asideIsOpen, setAsideIsOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed z-30 flex bg-gray-50 border-b  items-center border-gray-400 px-4 lg:px-6 py-4 transition-all duration-300 ${
          asideIsOpen ? "w-[calc(100%-288px)] ml-72" : "w-full"
        }`}
      >
        <button
          onClick={() => setAsideIsOpen(true)}
          className={`cursor-pointer ${asideIsOpen ? "hidden" : ""}`}
        >
          <PanelLeftOpen width={36} height={36} />
        </button>

        <Link href={"/dashboard/profile"} className="ml-auto">
          <Image
            src={img}
            alt="User character"
            width={1024}
            height={1024}
            className="w-14 h-14 object-cover rounded-full"
          />
        </Link>
      </header>
      <aside
        className={`fixed flex flex-col z-40 transition-all duration-300 ${
          asideIsOpen ? "w-72" : "w-0 -translate-x-96"
        } min-h-screen h-full bg-[#eff5f3]`}
      >
        <div className="py-[26px] px-2 w-full flex border-b border-gray-400 items-center justify-end">
          <button
            onClick={() => setAsideIsOpen(false)}
            className="cursor-pointer"
          >
            <PanelLeftClose width={36} height={36} />
          </button>
        </div>
        <div className="flex flex-col h-full gap-4 px-2 py-4 w-full">
          <Link
            href={"/dashboard"}
            className="hover:bg-primary-50 p-1.5 text-2xl text-gray-950 rounded-md font-semibold"
          >
            Dashboard
          </Link>
          <Link
            href={"/dashboard/insights"}
            className="hover:bg-primary-50 p-1.5 text-2xl text-gray-950 rounded-md font-semibold"
          >
            Insights
          </Link>
          <Link
            href={"/dashboard/profile"}
            className="hover:bg-primary-50 p-1.5 text-2xl text-gray-950 rounded-md font-semibold"
          >
            Profile
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="hover:bg-secondary-50 mt-auto p-1.5 text-2xl text-secondary-600 rounded-md text-start cursor-pointer font-semibold"
          >
            Logout
          </button>
        </div>
      </aside>
      <div
        className={`transition-all bg-gray-50 duration-300 ${
          asideIsOpen ? "w-72" : "w-0 -translate-x-96"
        } hidden md:flex min-h-screen h-full shrink-0`}
      ></div>
      <div
        className={`w-dvw h-dvh fixed md:hidden backdrop-blur-lg z-32 bg-black/40 ${
          asideIsOpen ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default DashHeader;
