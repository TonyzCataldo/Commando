import StartFreeBtn from "@/components/Buttons/StartFreeBtn/StartFreeBtn";
import HomeHeader from "@/components/Headers/HomeHeader/HomeHeader";
import HomeSection from "@/components/HomeSection/HomeSection";
import HomeBody from "@/components/Wrappers/HomeBody/HomeBody";
import { getAuthSession } from "@/lib/auth";
import Image from "next/image";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <div className="">
      <HomeHeader />
      <div className="pt-[67px] lg:pt-[81px]"></div>
      <div className="flex items-center justify-center">
        <HomeBody>
          <HomeSection>
            <div className="flex-[0.8] text-center justify-center items-center  flex flex-col gap-6">
              <h1 className="text-4xl lg:text-5xl text-gray-950 font-semibold">
                Take the Command now!
              </h1>
              <p className="text-2xl text-gray-600">
                Use our simple tools to organize and take control of your tasks
                and productivity.
              </p>
              <StartFreeBtn
                href={session ? "/dashboard" : "/register"}
                title={session ? "Go to Dashboard" : "Start for free!"}
              />
            </div>
            <div className="w-full rounded-2xl border-[1.5px] border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
              <Image
                src={"/commando3.PNG"}
                width={1024}
                height={1024}
                className="aspect-video w-full rounded-2xl"
                alt="Task list draw"
              />
            </div>
          </HomeSection>
        </HomeBody>
      </div>
    </div>
  );
}
