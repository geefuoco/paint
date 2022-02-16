import React, { useState } from "react";
import Cell from "../Cell/Cell";
import "./Canvas.scss";

interface Props {
  length: number;
  width: number;
}

interface Size {
  length: number;
  width: number;
}

const Canvas: React.FC<Props> = ({ length, width }) => {
  const [canvasSize, setCanvasSize] = useState<Size>({ length, width });
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [grid, setGrid] = useState<boolean>(false);
  const [color, setColor] = useState<string>("#000");

  const createRow = (size: number, key: number): JSX.Element => {
    const row: Array<JSX.Element> = [];
    for (let i = 0; i < size; i++) {
      row.push(
        <Cell
          color={color}
          key={`row ${i}`}
          grid={grid}
          isDrawing={isDrawing}
        />
      );
    }
    return (
      <div className="canvas-row" key={`canvas-row ${key}`}>
        {row}
      </div>
    );
  };

  const createCanvas = ({ length, width }: Size): Array<JSX.Element> => {
    const canvas: Array<JSX.Element> = [];
    for (let i = 0; i < length; i++) {
      canvas.push(createRow(width, i));
    }
    return canvas;
  };

  const toggleGrid = (
    <button className="btn" onClick={() => setGrid(!grid)}>
      Grid
    </button>
  );

  return (
    <section
      className="canvas-element"
      data-testid="canvas-element"
      onMouseDown={() => setIsDrawing(true)}
      onMouseUp={() => setIsDrawing(false)}
    >
      {toggleGrid}
      {createCanvas(canvasSize)}
    </section>
  );
};

export default Canvas;
