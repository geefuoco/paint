import React from "react";
import { render, screen } from "@testing-library/react";
import Canvas from "./Canvas";

describe("Canvas", () => {
  const setup = () => render(<Canvas length={16} width={16} />);

  it("should render a section element", () => {
    setup();
    expect(screen.getByRole("canvas-element")).toBeTruthy();
  });
});
