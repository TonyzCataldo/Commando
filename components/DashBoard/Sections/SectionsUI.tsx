import { SectionsProps } from "./SectionsTypes";
import SectionUI from "./SectionUI";

const SectionsUI = ({ date, sections }: SectionsProps) => {
  return (
    <main className="flex flex-col w-full gap-10">
      {sections.map((section) => (
        <SectionUI date={date} section={section} key={section.id} />
      ))}
    </main>
  );
};
export default SectionsUI;
