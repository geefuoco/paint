import React from "react";
import { render, screen } from "@testing-library/react";
import ColorPicker from "./ColorPicker";

describe("ColorPicker", () => {
  const setup = () =>
    render(<ColorPicker setColor={jest.fn} colorState="black" />);

  it("should render a color picker", () => {
    setup();
    expect(screen.getByTestId("color-picker")).toBeTruthy();
  });
});
