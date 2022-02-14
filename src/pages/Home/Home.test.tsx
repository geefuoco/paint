import React from "react";
import { screen, render } from "@testing-library/react";
import Home from "./Home";

describe("Home Page", () => {
  const setup = () => render(<Home />);

  it("should render the home page", () => {
    setup();
    expect(screen.getByText("Paint")).toBeTruthy();
  });
});
