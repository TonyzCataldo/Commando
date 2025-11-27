import AddSectionForm from "@/components/Forms/AddSectionForm/AddSectionForm";
import AddModal from "../AddModal/AddModal";

const AddSection = () => {
  return (
    <AddModal btnClassName="!px-6 !py-6" title="Create a new section">
      <AddSectionForm />
    </AddModal>
  );
};
export default AddSection;
