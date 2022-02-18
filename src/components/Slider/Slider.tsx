import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Size } from "../Canvas/Canvas";
import "./Slider.scss";

interface Props {
  setSize: Dispatch<SetStateAction<Size>>;
}

const Slider: React.FC<Props> = ({ setSize }) => {
  const [multiple, setMultiple] = useState<string>("2");

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setMultiple(ev.target.value);
    setSize({
      length: Number(ev.target.value) * 8,
      width: Number(ev.target.value) * 8,
    });
  };

  return (
    <div className="slider">
      <label htmlFor="size-slider">
        Canvas Size: {Number(multiple) * 8} X {Number(multiple) * 8}
      </label>
      <br />
      <input
        data-testid="slider"
        type="range"
        id="size-slider"
        min="1"
        max="5"
        step="1"
        value={multiple}
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
