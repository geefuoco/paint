import React from "react";
import { render, screen } from "@testing-library/react";
import ToggleSwitch from "./ToggleSwitch";

describe("ToggleSwitch", () => {
  const setup = () => render(<ToggleSwitch />);

  it("should render the switch", () => {
    setup();
    expect(screen.getByTestId("toggle-switch")).toBeTruthy();
  });
});
