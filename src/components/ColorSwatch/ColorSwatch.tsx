import React, { useState } from "react";
import "./ColorSwatch.scss";
import { Props } from "../ColorPicker/ColorPicker";

interface ColorSwatchProps extends Props {
  colorState: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ setColor, colorState }) => {
  const [colorSwatches, setColorSwatches] = useState<string[]>([colorState]);

  const addNewColorSwatch = (color: string): void => {
    const temp = new Set(colorSwatches);
    if (!temp.has(color)) {
      setColorSwatches([...colorSwatches, color]);
    }
  };

  const addColor = (
    <button className="add-color" onClick={() => addNewColorSwatch(colorState)}>
      Add Color
    </button>
  );

  const previousColors = colorSwatches.map((color) => {
    return (
      <div
        className="swatch"
        key={color}
        style={{ backgroundColor: color }}
        onClick={() => setColor(color)}
      ></div>
    );
  });

  return (
    <>
      <label className="swatches-title" htmlFor="color-swatches">
        Saved Colors
      </label>
      {addColor}
      <div className="color-swatches" data-testid="color-swatches">
        {previousColors}
      </div>
    </>
  );
};

export default ColorSwatch;
