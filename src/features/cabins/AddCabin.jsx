import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="carbin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="carbin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

/* 
function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}
 */

export default AddCabin;

// we converted the Modal to a Compound Component

// We have no state needed in AddCabin component and now we will keep that state right inside the modal.

// an advanced design pattern that enables a group of components to work together cohesively while maintaining flexibility and separation of concerns.

// This pattern allows for the creation of reusable UI components by leveraging an explicit parent-child relationship to share state and logic implicitly, often using the Context API to avoid prop drilling.

// Instead of passing numerous props down through multiple layers of components, the parent component manages the shared state and behavior, making it accessible to its direct children via context.

// This pattern promotes encapsulation and separation of concerns, where each subcomponent is responsible for its own behavior, leading to cleaner and more maintainable code.
