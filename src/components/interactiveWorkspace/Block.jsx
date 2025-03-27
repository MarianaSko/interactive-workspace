import { useDraggable } from "@dnd-kit/core";
import ResizingIcon from "../ResizingIcon";

const blockStyle = (x, y, zIndex, width, height) => ({
  width: `${width}px`,
  height: `${height}px`,
  left: `${x}px`,
  top: `${y}px`,
  zIndex: zIndex,
});

const Block = ({ id, x, y, zIndex, width, height, onDelete, onResize }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : {};

  const handledeleteClick = (e) => {
    e.stopPropagation();
    onDelete(id);
  };

  const handleResize = (e) => {
    e.stopPropagation();

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = width;
    const startHeight = height;

    const onMouseMove = (moveEvent) => {
      const newWidth = Math.max(100, startWidth + (moveEvent.clientX - startX));
      const newHeight = Math.max(
        100,
        startHeight + (moveEvent.clientY - startY)
      );
      onResize(id, newWidth, newHeight);
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="bg-emerald-900 border-2 rounded-lg border-emerald-200 shadow-lg flex items-center justify-center text-emerald-200 text-xl cursor-pointer absolute"
      style={{ ...blockStyle(x, y, zIndex, width, height), ...style }}
    >
      Block {id}
      <button
        onPointerDown={(e) => e.stopPropagation()}
        onClick={handledeleteClick}
        className="absolute top-1 right-1 rounded-full w-4 h-4 transition  hover:bg-emerald-700  text-emerald-200 text-[8px] text-center border border-emerald-200 hover:border-emerald-500 "
      >
        X
      </button>
      <div onPointerDown={handleResize}>
        <ResizingIcon
          className={"w-4 h-4 absolute right-1 bottom-1 cursor-se-resize"}
        ></ResizingIcon>
      </div>
    </div>
  );
};

export default Block;
