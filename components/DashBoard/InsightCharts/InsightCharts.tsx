import DoitChart from "./Charts/DoitChart/DoitChart";
import DoneChart from "./Charts/DoneChart/DoneChart";
import PraticeChart from "./Charts/PraticeChart/PraticeChart";
import SectionsChart from "./Charts/SectionsChart/SectionsChart";
import SectionsEstimateChart from "./Charts/SectionsEstimateChart/SectionsEstimateChart";
import SectionsTasksChart from "./Charts/SectionsTasksChart/SectionsTasksChart";
import SectionsTimeChart from "./Charts/SectionsTimeChart/SectionsTimeChart";
import { InsightChartsProps } from "./InsightChartsTypes";

const InsightCharts = ({ tasks }: InsightChartsProps) => {
  const sections = [
    ...new Set(
      tasks.map((t) => t.section!.name?.toLowerCase()).filter(Boolean)
    ),
  ];
  return (
    <>
      <h1 className="text-6xl mt-32 text-center mb-8 font-medium">
        General Charts
      </h1>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <DoneChart tasks={tasks} />
        <DoitChart tasks={tasks} />
        <PraticeChart tasks={tasks} />
        <SectionsChart tasks={tasks} />
        <SectionsTimeChart tasks={tasks} />
        <SectionsEstimateChart tasks={tasks} />
      </div>
      <h2 className="text-6xl mt-32 text-center mb-8 font-medium">
        Tasks Time Per Section
      </h2>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <SectionsTasksChart tasks={tasks} section={section} key={section} />
        ))}
      </div>
    </>
  );
};
export default InsightCharts;
