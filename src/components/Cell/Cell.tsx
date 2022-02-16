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
  const paint = () => changeColor(color);
  const erase = () => changeColor(canvasColor);
  const mouseDown = (ev: MouseEvent) => {
    if (ev.buttons !== 2) {
      paint();
    } else if (ev.buttons === 2) {
      erase();
    }
  };

  const mouseOver = (ev: MouseEvent) => {
    if (isDrawing) {
      if (ev.buttons !== 2) {
        paint();
      } else if (ev.buttons === 2) {
        erase();
      }
    }
  };

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
  }, [cell, isDrawing]);

  const style = {
    border: "dashed 1px grey",
  };

  return <div ref={cell} className="cell" style={grid ? style : {}}></div>;
};

export default Cell;