import { HomeSectionPropsType } from "./HomeSectionTypes";

const HomeSection = ({ children }: HomeSectionPropsType) => {
  return (
    <section className="w-full gap-14 lg:gap-16 flex flex-col">
      {children}
    </section>
  );
};

export default HomeSection;
