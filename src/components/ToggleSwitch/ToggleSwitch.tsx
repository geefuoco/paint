import React from "react";
import "./ToggleSwitch.scss";

interface Props {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  handleClick?: () => void;
}

const ToggleSwitch: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  handleClick,
}) => {
  return (
    <div
      className="toggle"
      style={{
        top,
        right,
        left,
        bottom,
      }}
    >
      <input
        type="checkbox"
        id="toggle"
        className="check"
        data-testid="toggle-switch"
      />
      <label
        htmlFor="toggle"
        className="toggle-label"
        onClick={handleClick}
      ></label>
    </div>
  );
};

export default ToggleSwitch;
