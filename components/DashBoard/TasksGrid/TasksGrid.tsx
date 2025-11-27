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
        } absolute top-5 cursor-pointer bg-transparent right-0`}
      >
        <ChevronDown width={40} height={40} />
      </button>
      <section
        className={`${
          isOpen ? "grid" : "hidden"
        } w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 `}
      >
        {tasks.map((task) => (
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
