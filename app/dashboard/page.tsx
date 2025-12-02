import AddSection from "@/components/DashBoard/AddSection/AddSection";
import Section from "@/components/DashBoard/Sections/Sections";
import DashTitle from "@/components/DashBoard/Titles/Title";

export default function Dashboard() {
  const now = new Date();
  return (
    <div className="flex items-center py-12 px-4 lg:px-6 flex-col gap-12 w-full mt-[67px] min-h-screen">
      <p className="text-gray-950 text-2xl">
        {new Intl.DateTimeFormat("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }).format(now)}
      </p>
      <DashTitle>
        <div className="flex flex-col gap-4 text-gray-950">
          <p>
            Listen up, soldier. Your mission here is simple: declare every
            objective you need to accomplish throughout your day. You can assign
            two types of tasks:
          </p>
          <p>
            • Practice Tasks — operations where you set a minimum time to train.
            The more time you put in beyond the minimum, the stronger you
            become.
          </p>
          <p>
            • Do it Tasks — missions where you set a maximum time to finish the
            job. Complete it faster than expected, and you prove your efficiency
            on the battlefield.
          </p>
        </div>
      </DashTitle>
      <AddSection />

      <Section date={now} />
    </div>
  );
}
