import React, { useEffect, useRef } from "react";
import "./Cell.scss";

interface Props {
  color: string;
  grid: boolean;
  isDrawing: boolean;
}

const Cell: React.FC<Props> = ({ color, grid, isDrawing }) => {
  const canvasColor = "#fff";
  const cell = useRef<HTMLDivElement>(null);

  const changeColor = (color: string) => {
    const { current } = cell;
    if (!current) return;
    current.style.backgroundColor = color;
  };

  const preventEvent = (ev: Event) => ev.preventDefault();
  const mouseDown = (ev: MouseEvent) => {
    if (ev.button === 0) {
      paint();
    } else if (ev.button === 2) {
      erase();
    }
  };

  const mouseOver = (ev: MouseEvent) => {
    if (isDrawing) {
      if (ev.buttons === 4) return;
      if (ev.button === 0) {
        paint();
      }
      if (ev.buttons === 2) {
        erase();
      }
    }
  };

  const paint = () => changeColor(color);
  const erase = () => changeColor(canvasColor);

  useEffect(() => {
    const { current } = cell;
    if (current) {
      current.addEventListener("mousedown", mouseDown);
      current.addEventListener("dragstart", preventEvent);
      current.addEventListener("auxclick", erase);
      current.addEventListener("mouseenter", mouseOver);
      return () => {
        current.removeEventListener("mousedown", mouseDown);
        current.removeEventListener("dragstart", preventEvent);
        current.removeEventListener("auxclick", erase);
        current.removeEventListener("mouseenter", mouseOver);
      };
    }
  }, [cell, isDrawing, color]);

  const style = {
    boxShadow: "inset 0 0 4px grey",
    // border: "dashed 1px grey",
  };

  return (
    <div
      ref={cell}
      data-testid="cell"
      className="cell"
      style={grid ? style : {}}
    ></div>
  );
};

export default Cell;
