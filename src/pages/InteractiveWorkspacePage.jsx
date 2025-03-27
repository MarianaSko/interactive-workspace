import React, { useCallback, useEffect, useRef, useState } from "react";
import Block from "../components/interactiveWorkspace/Block";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { DndContext } from "@dnd-kit/core";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Container from "../components/Container";

const defaultBlocks = [
  { id: "1", x: 0, y: 0, zIndex: 1, width: 300, height: 100 },
  { id: "2", x: 310, y: 0, zIndex: 2, width: 300, height: 100 },
  { id: "3", x: 620, y: 0, zIndex: 3, width: 300, height: 100 },
  { id: "4", x: 0, y: 110, zIndex: 4, width: 300, height: 100 },
  { id: "5", x: 310, y: 110, zIndex: 5, width: 300, height: 100 },
];

const InteractiveWorkspacePage = () => {
  const [blocks, setBlocks] = useState(() => {
    try {
      const savedBlocks = localStorage.getItem("workspaceBlocks");
      return savedBlocks ? JSON.parse(savedBlocks) : defaultBlocks;
    } catch {
      return defaultBlocks;
    }
  });

  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      setContainerSize({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("workspaceBlocks", JSON.stringify(blocks));
  }, [blocks]);

  const handleDragStart = useCallback(
    (event) => {
      const { active } = event;
      setBlocks(
        blocks.map((block) =>
          block.id === active.id
            ? { ...block, zIndex: Math.max(...blocks.map((b) => b.zIndex)) + 1 }
            : block
        )
      );
    },
    [blocks]
  );

  const handleDragEnd = useCallback(
    (event) => {
      const { active, delta } = event;
      setBlocks(
        blocks.map((block) =>
          block.id === active.id
            ? { ...block, x: block.x + delta.x, y: block.y + delta.y }
            : block
        )
      );
    },
    [blocks]
  );

  const handleResize = useCallback(
    (id, newWidth, newHeight) => {
      setBlocks(
        blocks.map((block) =>
          block.id === id
            ? {
                ...block,
                width: Math.min(newWidth, containerSize.width - block.x),
                height: Math.min(newHeight, containerSize.height - block.y),
                zIndex: Math.max(...blocks.map((b) => b.zIndex)) + 1,
              }
            : block
        )
      );
    },
    [blocks, containerSize]
  );

  const handleDelete = useCallback(
    (id) => {
      setBlocks(blocks.filter((block) => block.id !== id));
    },
    [blocks]
  );

  const handleReset = () => setBlocks(defaultBlocks);

  return (
    <Container>
      <Heading>Interactive Workspace</Heading>
      <Button onClick={handleReset}>Reset</Button>
      <div
        ref={containerRef}
        className="relative w-full h-[80%] overflow-hidden"
      >
        <DndContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToParentElement]}
        >
          {blocks.map((block) => (
            <Block
              key={block.id}
              {...block}
              onDelete={handleDelete}
              onResize={handleResize}
            />
          ))}
        </DndContext>
      </div>
    </Container>
  );
};

export default InteractiveWorkspacePage;
