import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  const setup = () => render(<App />);

  it("should render the application", () => {
    setup();
    expect(screen.getByTestId("app")).toBeTruthy();
  });

  it("should change the background color when clicked", () => {
    setup();
    const click = screen.getByTestId("toggle-switch");
    const app = screen.getByTestId("app");
    click.click();
    expect(app).toHaveStyle("background-color: rbg(238, 238 ,238)");
    click.click();
    expect(app).toHaveStyle("background-color: rgb(29, 29 ,29");
  });
});
