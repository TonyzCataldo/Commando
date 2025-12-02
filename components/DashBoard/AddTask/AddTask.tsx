import AddTaskForm from "@/components/Forms/AddTaskForm/AddTaskForm";
import AddModal from "../AddModal/AddModal";

const AddTask = ({ sectionId }: { sectionId: string }) => {
  return (
    <AddModal title="Create a new task">
      <AddTaskForm sectionId={sectionId} />
    </AddModal>
  );
};

export default AddTask;
