import { Section } from "./SectionsTypes";
import AddTask from "../AddTask/AddTask";
import TasksPage from "../Tasks/Tasks";
import { ChevronDown } from "lucide-react";

const SectionUI = ({ section, date }: { section: Section; date: Date }) => {
  return (
    <div key={section.id} className="flex relative gap-10 flex-col">
      <div className="flex justify-between items-end py-1.5 px-2 pr-10 border-b">
        <div className="flex items-center">
          <h2 className="text-gray-950 text-3xl font-bold">{section.name}</h2>
        </div>
        <AddTask sectionId={section.id} />
      </div>
      <div>
        <TasksPage date={date} sectionId={section.id} />
      </div>
    </div>
  );
};

export default SectionUI;
