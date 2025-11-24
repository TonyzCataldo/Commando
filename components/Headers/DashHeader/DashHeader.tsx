"use client";

import { CircleUserRound, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const DashHeader = () => {
  const [asideIsOpen, setAsideIsOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed z-30 flex bg-primary-50 border-b  items-center border-secondary-500 px-4 lg:px-6 py-4 transition-all duration-300 ${
          asideIsOpen ? "w-[calc(100%-288px)] ml-72" : "w-full"
        }`}
      >
        <button
          onClick={() => setAsideIsOpen(true)}
          className={`cursor-pointer ${asideIsOpen ? "hidden" : ""}`}
        >
          <PanelLeftOpen width={34} height={34} />
        </button>

        <div className="ml-auto">
          <CircleUserRound width={34} height={34} />
        </div>
      </header>
      <aside
        className={`fixed flex flex-col z-40 transition-all duration-300 ${
          asideIsOpen ? "w-72" : "w-0 -translate-x-96"
        } min-h-screen h-full bg-primary-50`}
      >
        <div className="py-4 px-2 w-full flex border-b border-secondary-500 items-center justify-end ">
          <button
            onClick={() => setAsideIsOpen(false)}
            className="cursor-pointer"
          >
            <PanelLeftClose width={34} height={34} />
          </button>
        </div>
        <div className="flex flex-col gap-4 px-2 py-4 w-full">
          <Link
            href={"/dashboard"}
            className="hover:bg-primary-100 p-1.5 text-2xl text-gray-950 rounded-md font-semibold"
          >
            Dashboard
          </Link>
          <Link
            href={"/dashboard/insights"}
            className="hover:bg-primary-100 p-1.5 text-2xl text-gray-950 rounded-md font-semibold"
          >
            Insights
          </Link>
        </div>
      </aside>
      <div
        className={`transition-all bg-primary-50 duration-300 ${
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
