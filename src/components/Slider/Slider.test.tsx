import React from "react";
import { render, screen } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider", () => {
  const setup = () => render(<Slider setSize={jest.fn} />);

  it("should render the slider", () => {
    setup();
    expect(screen.getByTestId("slider")).toBeTruthy();
  });
});
