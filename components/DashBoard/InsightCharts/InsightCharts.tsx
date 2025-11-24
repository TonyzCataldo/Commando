import DoitChart from "./Charts/DoitChart/DoitChart";
import DoneChart from "./Charts/DoneChart/DoneChart";
import PraticeChart from "./Charts/PraticeChart/PraticeChart";
import SectionsChart from "./Charts/SectionsChart/SectionsChart";
import SectionsEstimateChart from "./Charts/SectionsEstimateChart/SectionsEstimateChart";
import SectionsTimeChart from "./Charts/SectionsTimeChart/SectionsTimeChart";
import { InsightChartsProps } from "./InsightChartsTypes";

const InsightCharts = ({ tasks }: InsightChartsProps) => {
  return (
    // <div className="flex flex-col gap-40">
    //   {tasks.map((task) => (
    //     <div key={task.id} className="bg-red-500">
    //       <p>{task.createdAt.toString()}</p>
    //       <p>{task.done.toString()}</p>
    //       <p>{task.estimate}</p>
    //       <p>{task.sectionId?.toString()}</p>
    //       <p>{task.time}</p>
    //       <p>{task.title}</p>
    //       <p>{task.type}</p>
    //       <p>{task.userId}</p>
    //     </div>
    //   ))}
    // </div>
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <DoneChart tasks={tasks} />
      <DoitChart tasks={tasks} />
      <PraticeChart tasks={tasks} />
      <SectionsChart tasks={tasks} />
      <SectionsTimeChart tasks={tasks} />
      <SectionsEstimateChart tasks={tasks} />
    </div>
  );
};
export default InsightCharts;
