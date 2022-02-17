import React from "react";
import { render, screen } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider", () => {
  const setup = () => render(<Slider setSize={jest.fn} />);
});
