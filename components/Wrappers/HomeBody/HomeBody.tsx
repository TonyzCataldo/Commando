import { HomeBodyPropsType } from "./HomeBodyTypes";

const HomeBody = ({ children }: HomeBodyPropsType) => {
  return (
    <main className="max-w-[1520px] w-full flex flex-col gap-24 py-16 lg:py-28 px-4 lg:px-10">
      {children}
    </main>
  );
};

export default HomeBody;
