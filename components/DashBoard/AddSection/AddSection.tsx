import AddSectionForm from "@/components/Forms/AddSectionForm/AddSectionForm";
import AddModal from "../AddModal/AddModal";

const AddSection = () => {
    return (
        <AddModal title="Create a new section">
            <AddSectionForm />
        </AddModal>
    )
}
export default AddSection;