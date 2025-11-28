"use client";
import { ChevronDown } from "lucide-react";
import TaskCard from "../TaskCard/TaskCard";
import { TasksGridProps } from "./TasksGridTypes";
import AddTask from "../AddTask/AddTask";
import { useState } from "react";

const TasksGrid = ({ tasks, sectionId }: TasksGridProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "rotate-180" : ""
        } absolute top-5 w-9/12 cursor-pointer bg-transparent right-0`}
      >
        <ChevronDown width={40} height={40} className={`${isOpen ? "mr-auto" : "ml-auto"}`} />
      </button>
      <section
        className={`${
          isOpen ? "grid" : "hidden"
        } w-full grid-cols-1 gap-8 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]`}
      >
        {[...tasks].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()).map((task) => (
          <TaskCard
            key={task.id}
            taskType={task.type}
            taskTime={task.time}
            taskId={task.id}
            estimate={task.estimate}
            title={task.title}
            taskDone={task.done}
          />
        ))}
        <div className="ml-auto mr-auto mt-auto mb-auto">
          <AddTask sectionId={sectionId} />
        </div>
      </section>
    </>
  );
};

export default TasksGrid;
