"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useTaskTimer = ({
  taskId,
  taskTime,
  estimate,
  taskType,
}: {
  taskId: string;
  taskTime: number;
  estimate: number;
  taskType: "PRATICE" | "DOIT";
}) => {
  const taskTimeMinutes = taskTime * 60;
  const [time, setTime] = useState(taskTimeMinutes);
  const [running, setRunning] = useState(false);
  const [actualizeTaskError, setActualizeTaskError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  async function pause() {
    setRunning(false);
    const timeMinutes = time / 60;
    const res = await fetch(`/api/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time: timeMinutes,
      }),
    });

    if (!res.ok) {
      setActualizeTaskError(true);
      return;
    }

    if (taskType === "PRATICE" && timeMinutes >= estimate) {
      done();
    }
  }

  async function done() {
    setRunning(false);
    const res = await fetch(`/api/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        done: true,
      }),
    });

    if (!res.ok) {
      setActualizeTaskError(true);
      return;
    }
    router.refresh();
  }

  return { time, setRunning, pause, actualizeTaskError, done };
};

export default useTaskTimer;
