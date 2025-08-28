import { useEffect } from "react";
import { useHoverTitle } from "../zustand/ModalStore";

export default function HoverWatcher() {
  const setTitle = useHoverTitle((state) => state.setTitle);
  const clearTitle = useHoverTitle((state) => state.clearTitle);

useEffect(() => {
  const handleHover = (x, y) => {
    const target = document.elementFromPoint(x, y);
    if (target?.dataset?.title) {
      setTitle(target.dataset.title);
    } else {
      clearTitle();
    }
  };

  const handleMouseMove = (e) => {
    handleHover(e.clientX, e.clientY);
  };

  const handleClick = (e) => {
    const target = e.target;
    if (target?.dataset?.title) {
      setTitle(target.dataset.title);
    } else {
      clearTitle();
    }
  };

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("click", handleClick);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("click", handleClick);
  };
}, [setTitle, clearTitle]);


  return null;
}
