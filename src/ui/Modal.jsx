import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

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

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

// React Portals are a feature introduced in React 16 that allow developers to render a component's children into a DOM node that exists outside the component's parent hierarchy.

// React Portals are used to render a component's output into a DOM node that exists outside the component's parent hierarchy in the React tree, providing a way to break out of the standard DOM nesting structure while maintaining the logical component relationships.

// This is particularly useful for UI elements that need to be visually positioned independently of their parent components, such as modals, tooltips, dropdowns, and loaders.

// For example, a modal dialog rendered inside a deeply nested component might be clipped by parent elements with overflow: hidden or have its positioning affected by parent styles; portals allow the modal to be rendered directly into the body element, ensuring it appears on top of other content and is not constrained by its parent's layout rules.

// We selected the body to be the parent, we could also use document.querySelector()

// Modal is still a child element of <AddCabin /> even if in the DOM it no longer is. Check browser Elements and then Components to see the difference.

// Portals solve the problem of managing complex state and event propagation for components that need to be displayed in a different part of the DOM.

// Context API allows for the sharing of state and data across a component tree without the need to pass props manually through every level of nesting.

// It is designed to solve the problem of "prop drilling," where data must be passed down through multiple intermediate components, even if those components do not use the data themselves.

// React CloneElement allows a parent component to create a new React element based on an existing one, enabling modifications to its props and children while preserving its key and ref.

// It is particularly useful for adding or modifying the props of a parent component's children, thereby promoting code reuse and reducing duplication.

// cloneElement(children, { onCloseModal: close }), we cloned the children so we could pass the onCloseModal

// The onCloseModal is from CreateCabinForm, we passed the prop into AddCabin but now we are using a compound component we will pass it through the Modal. We changed the onCloseModal to close. Which also changed the styling.

// ref.current is the modal window, we trying to make it that once we click outside the modal window, it will close. e.target is where the click happened. so !ref.current.contains(e.target) means clicked outside the modal window.

// document.addEventListener("click", handleClick, true); We added true to our eventlistener to stop it from closing before it even opens. The modal is placed as a child of the body thanks to React Portal, so setting it to true will cause the event to be handled in the capturing phase, as the event moves down the tree. The modal window gets openfor a milisecond but then it immediately detects the click outside of it and it immediately closes again. So we do not listen for the event at the bubbling phase but on the capturing phase. Basically as the event moves down the DOM tree and not up the DOM tree.
