"use client";
import Paper from "@/components/Wrappers/Paper/Paper";
import useTaskTimer from "./useTaskTimer";
import { formatTime } from "@/utils/formatTime";
import SolidBtn from "@/components/Buttons/SolidBtn/SolidBtn";
import { TaskCardProps } from "./TaskCardTypes";
import Target from "@/components/icons/Target";

const TaskCard = ({
  estimate,
  title,
  taskId,
  taskTime,
  taskDone,
  taskType,
}: TaskCardProps) => {
  const { time, pause, setRunning, actualizeTaskError, done } = useTaskTimer({
    taskId,
    taskTime,
    estimate,
    taskType,
  });
  const estimateSeconds = estimate * 60;
  return (
    <Paper className=" md:px-6 w-full md:py-6">
      <div className="flex flex-col items-center gap-4 justify-center">
        <p className="text-gray-950 text-3xl">{title}</p>
        <div className="flex items-center text-gray-950 text-3xl justify-center">
          <p>{formatTime(time)}</p>/<p>{formatTime(estimateSeconds)}</p>
        </div>

        {taskDone && taskType === "DOIT" ? (
          <div className="mt-4">
            <Target />
          </div>
        ) : (
          <>
            <div className={`flex gap-3 `}>
              <SolidBtn
                className="!py-4 bg-primary-100 hover:bg-primary-200 text-white !px-4 text-base"
                onClick={() => setRunning(true)}
              >
                Start
              </SolidBtn>
              <SolidBtn className="!py-4 !px-4 text-base" onClick={pause}>
                Pause/Save
              </SolidBtn>
            </div>
            {taskType === "DOIT" && (
              <SolidBtn
                className="!py-4 !px-4 text-white bg-secondary-500 hover:bg-secondary-600 text-base"
                onClick={done}
              >
                Mark as done
              </SolidBtn>
            )}
            {taskType === "PRATICE" && taskDone && (
              <div className="mt-4">
                <Target />
              </div>
            )}
            {actualizeTaskError && <span>Try save again!</span>}
          </>
        )}
      </div>
    </Paper>
  );
};

export default TaskCard;
