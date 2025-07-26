import React from "react";
import { render, screen } from "@testing-library/react";
import MyComponent2 from "../MyComponent2";

test("renders hello message", () => {
  render(<MyComponent2 />);

  expect(screen.getByText(/hello from react/i)).toBeInTheDocument();
});
