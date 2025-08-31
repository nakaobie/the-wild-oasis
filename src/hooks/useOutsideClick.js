import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}

// ref.current is the modal window, we trying to make it that once we click outside the modal window, it will close. e.target is where the click happened. so !ref.current.contains(e.target) means clicked outside the modal window.

// document.addEventListener("click", handleClick, true); We added true to our eventlistener to stop it from closing before it even opens. The modal is placed as a child of the body thanks to React Portal, so setting it to true will cause the event to be handled in the capturing phase, as the event moves down the tree. The modal window gets openfor a milisecond but then it immediately detects the click outside of it and it immediately closes again. So we do not listen for the event at the bubbling phase but on the capturing phase. Basically as the event moves down the DOM tree and not up the DOM tree.
