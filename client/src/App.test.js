import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("It renders without crashing", () => {
  render(<App />);
});

test("It displays the Dark/Light Mode button", () => {
  const container = render(<App />);
  container.getByTestId("dark-mode-button");
});

test("It displays the PlayerMap div", () => {
  const container = render(<App />);
  container.getByTestId("player-map");
});
