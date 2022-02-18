import React from "react";
import { render, screen } from "@testing-library/react";
import ColorSwatch from "./ColorSwatch";

describe("ColorSwatch", () => {
  const setup = () =>
    render(<ColorSwatch setColor={jest.fn} colorState="black" />);

  it("should render the component", () => {
    setup();
    expect(screen.getByTestId("color-swatches")).toBeTruthy();
  });
});
