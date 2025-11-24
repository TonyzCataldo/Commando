import TaskCard from "../TaskCard/TaskCard";
import { TasksGridProps } from "./TasksGridTypes";

const TasksGrid = ({ tasks }: TasksGridProps) => {
  return (
    <section className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
};

export default TasksGrid;
