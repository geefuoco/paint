import React, {
  useRef,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import "./ColorPicker.scss";

export interface Props {
  setColor: Dispatch<SetStateAction<string>>;
  colorState: string;
}

const ColorPicker: React.FC<Props> = ({ setColor, colorState }) => {
  const colorRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    window.requestIdleCallback(() => setColor(e.target.value));
  };

  useEffect(() => {
    const { current } = colorRef;
    if (!current) return;
    current.value = colorState;
  }, [colorState]);

  return (
    <div className="color-picker" data-testid="color-picker">
      <label htmlFor="color-picker">Color</label>
      <input
        ref={colorRef}
        type="color"
        id="color-picker"
        onChange={handleChange}
      />
    </div>
  );
};

export default ColorPicker;
