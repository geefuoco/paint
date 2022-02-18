import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import "./ColorPicker.scss";

interface Props {
  setColor: Dispatch<SetStateAction<string>>;
}

const ColorPicker: React.FC<Props> = ({ setColor }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    window.requestIdleCallback(() => setColor(e.target.value));
  };

  return (
    <div className="color-picker">
      <label htmlFor="color-picker">Color</label>
      <input type="color" id="color-picker" onChange={handleChange} />
    </div>
  );
};

export default ColorPicker;
