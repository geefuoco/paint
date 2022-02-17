import React from "react";
import { render, screen } from "@testing-library/react";
import Canvas from "./Canvas";

describe("Canvas", () => {
  const setup = () => render(<Canvas />);

  it("should render a section element", () => {
    setup();
    expect(screen.getByRole("canvas-element")).toBeTruthy();
  });
});
