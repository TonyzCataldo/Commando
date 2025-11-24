import AddTask from "../AddTask/AddTask";
import TasksPage from "../Tasks/Tasks";
import { SectionsProps } from "./SectionsTypes"


const SectionsUI = ({date, sections}: SectionsProps) => {


    return(
        <main className="flex flex-col w-full gap-10">
           {sections.map((section) => (
            <div key={section.id} className="flex gap-3 flex-col">
                <div className="flex justify-between items-end py-1.5 px-2 border-b">
                <h2 className="text-gray-950 text-4xl font-bold">{section.name}</h2>
                <AddTask sectionId={section.id} />
                </div>
                <TasksPage date={date} sectionId={section.id} />
            </div>
           )
           )} 
        </main>
    )
}
export default SectionsUI;