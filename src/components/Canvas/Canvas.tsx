import React, { useRef, useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Cell from "../Cell/Cell";
import Slider from "../Slider/Slider";
import ReactTooltip from "react-tooltip";
import { exportComponentAsPNG } from "react-component-export-image";

import "./Canvas.scss";
import ColorPicker from "../ColorPicker/ColorPicker";

export interface Size {
  length: number;
  width: number;
}

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState<Size>({ length: 16, width: 16 });
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

  const createCanvas = ({ length, width }: Size): JSX.Element => {
    const canvas: Array<JSX.Element> = [];
    for (let i = 0; i < length; i++) {
      canvas.push(createRow(width, i));
    }
    return (
      <div className="canvas-image" ref={canvasRef}>
        {canvas}
      </div>
    );
  };

  const toggleGrid = (
    <button className="btn" onClick={() => setGrid(!grid)}>
      Grid
    </button>
  );

  const toolTip = `
  Left click to color<br>
  Right click to erase`;

  const questionMark = (
    <span className="question-mark" data-tip={toolTip}>
      <BsFillQuestionCircleFill
        style={{
          color: "black",
        }}
      />
    </span>
  );

  return (
    <div className="canvas-container">
      <aside className="tools">
        <Slider setSize={setCanvasSize} />
        <ColorPicker setColor={setColor} />
      </aside>
      <div className="canvas-holder">
        <section
          className="canvas-element"
          data-testid="canvas-element"
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => setIsDrawing(false)}
          onMouseLeave={() => setIsDrawing(false)}
        >
          <div className="button-pane">
            <div className="buttons">
              {toggleGrid}

              <button
                className="btn"
                onClick={() =>
                  exportComponentAsPNG(canvasRef, { fileName: "paint" })
                }
              >
                Export
              </button>
            </div>
            {questionMark}
          </div>
          {createCanvas(canvasSize)}
          <ReactTooltip place="right" multiline={true} />
        </section>
      </div>
    </div>
  );
};

export default Canvas;
