import { DashTitleProps } from "./DashTitleTypes";

const DashTitle = ({ children }: DashTitleProps) => {
  return (
    <section className="flex flex-col max-w-[500px] gap-5 px-3 items-center justify-center text-center">
      <h1 className="text-4xl lg:text-5xl font-semibold text-gray-950">
        Take the Command!
      </h1>
      {children}
    </section>
  );
};

export default DashTitle;
