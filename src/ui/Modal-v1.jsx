import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

function Modal({ children, onClose }) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;

// React Portals are a feature introduced in React 16 that allow developers to render a component's children into a DOM node that exists outside the component's parent hierarchy.

// React Portals are used to render a component's output into a DOM node that exists outside the component's parent hierarchy in the React tree, providing a way to break out of the standard DOM nesting structure while maintaining the logical component relationships.

// This is particularly useful for UI elements that need to be visually positioned independently of their parent components, such as modals, tooltips, dropdowns, and loaders.

// For example, a modal dialog rendered inside a deeply nested component might be clipped by parent elements with overflow: hidden or have its positioning affected by parent styles; portals allow the modal to be rendered directly into the body element, ensuring it appears on top of other content and is not constrained by its parent's layout rules.

// We selected the body to be the parent, we could also use document.querySelector()

// Modal is still a child element of <AddCabin /> even if in the DOM it no longer is. Check browser Elements and then Components to see the difference.

// Portals solve the problem of managing complex state and event propagation for components that need to be displayed in a different part of the DOM.
