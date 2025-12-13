import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders todo list", () => {
  render(<App />);
  const todoElement = screen.getByText("Todo List");
  expect(todoElement).toBeInTheDocument();
});
