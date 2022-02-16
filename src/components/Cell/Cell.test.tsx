import React from "react";
import { render, screen } from "@testing-library/react";
import Cell from "./Cell";

describe("Cell", () => {
  const setup = () =>
    render(<Cell color="#000" grid={false} isDrawing={false} />);

  it("should render a cell", () => {
    setup();
    expect(screen.getByTestId("cell")).toBeTruthy();
  });
});
