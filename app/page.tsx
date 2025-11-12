import StartFreeBtn from "@/components/Buttons/StartFreeBtn/StartFreeBtn";
import HomeHeader from "@/components/Headers/HomeHeader/HomeHeader";
import HomeSection from "@/components/HomeSection/HomeSection";
import HomeBody from "@/components/Wrappers/HomeBody/HomeBody";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HomeHeader />
      <div className="pt-[120px]"></div>
      <div className="flex items-center justify-center">
      <HomeBody>
        <HomeSection>
          <div className="flex-[0.8] text-center justify-center items-center md:items-start md:text-start flex flex-col gap-6">
            <h1 className="text-4xl lg:text-5xl text-gray-950 font-semibold">Take the Command now!</h1>
            <p className="text-2xl text-gray-600">Use our simple tools to organize and take control of your tasks and productivity.</p>
            <StartFreeBtn />
          </div>
          <div className="flex-1">
            <Image
            src={"/hero-home2.png"}
            width={1024}
            height={1024}
            className="h-full"
            alt="Task list draw"
            />
          </div>
        </HomeSection>
      </HomeBody>
      </div>
    </div>
  );
}
